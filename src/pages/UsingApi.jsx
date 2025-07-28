import React from 'react';
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; 
// India center coordinates (approximately New Delhi)
const LAT = 20.5937;
const LON = 78.9629;


async function get_weatherData(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        console.log("Weather Data:", data);
        return data;
    } catch (error) {
        console.error("API call failed:", error);
        return null;
    }
}

// Component to handle map clicks
function MapClickHandler({ onLocationSelect }) {
    useMapEvents({
        click: (e) => {
            const { lat, lng } = e.latlng;
            console.log(`Clicked at: ${lat}, ${lng}`);
            onLocationSelect(lat, lng);
        },
    });
    return null;
}

const UsingApi = () => {
    // State to store the selected location and weather data
    const [selectedLocation, setSelectedLocation] = useState({ lat: LAT, lng: LON });
    const [weatherData, setWeatherData] = useState(null);

    // Function to handle location selection from map click
    const handleLocationSelect = async (lat, lng) => {
        setSelectedLocation({ lat, lng });
        
        // Fetch weather data for the clicked location
        const weather = await get_weatherData(lat, lng);
        setWeatherData(weather);
    };

    // Fetch initial weather data on component mount
    useEffect(() => {
        get_weatherData(LAT, LON).then(setWeatherData);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-4 px-4 lg:py-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 bg-gray-100 rounded-lg shadow-lg p-4 lg:p-8 mb-4 lg:mb-6 max-w-6xl w-full">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 lg:mb-6 text-center">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 lg:mb-4">Weather Map Explorer</h1>
                        <p className="text-base lg:text-lg text-gray-600 mb-2 px-2">Click anywhere on the map to get weather data for that location!</p>
                        <div className="flex justify-center items-center px-3 lg:px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow mb-3 lg:mb-4 text-sm lg:text-base">
                            Current location: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                        </div>
                        {weatherData && (
                            <div className="p-3 lg:p-4 bg-gray-800 text-white rounded-lg shadow-md">
                                <div className="flex flex-wrap justify-center gap-2 lg:gap-4 text-xs lg:text-sm">
                                    <span><strong>Weather:</strong> {weatherData.weather?.[0]?.description}</span>
                                    <span><strong>Temperature:</strong> {weatherData.main?.temp}°C</span>
                                    <span><strong>City:</strong> {weatherData.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 w-full max-w-[600px]">
                        <MapContainer 
                            center={[LAT, LON]} 
                            zoom={4} 
                            scrollWheelZoom={false} 
                            style={{ 
                                height: window.innerWidth < 1024 ? '400px' : '500px', 
                                width: '100%', 
                                cursor: 'crosshair' 
                            }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            
                            {/* Add the click handler component */}
                            <MapClickHandler onLocationSelect={handleLocationSelect} />
                            
                            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                                <Popup>
                                    Weather location: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)} 
                                    <br /> 
                                    {weatherData ? `${weatherData.weather?.[0]?.description}, ${weatherData.main?.temp}°C` : 'Loading...'}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                
                <div className="flex flex-col items-center lg:items-start bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md min-w-[280px] w-full lg:w-auto">
                    <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">Weather API Explorer</h3>
                    <div className="p-3 lg:p-4 bg-yellow-100 text-gray-800 rounded shadow text-center w-full text-xs lg:text-sm mb-3 lg:mb-4">
                        <strong>How to Use:</strong>
                        <br />
                        Click anywhere on the map to fetch real-time weather data.
                        <br />
                        The marker will move to show your selected location.
                        <br />
                        Weather information updates automatically!
                    </div>
                    
                    {weatherData && (
                        <div className="w-full space-y-2 lg:space-y-3">
                            <div className="p-2 lg:p-3 bg-gray-700 text-white rounded shadow">
                                <strong className="text-yellow-400">Location:</strong>
                                <br />
                                <span className="text-sm lg:text-base">{weatherData.name}, {weatherData.sys?.country}</span>
                                <br />
                                <small className="text-xs lg:text-sm">({selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)})</small>
                            </div>
                            
                            <div className="p-2 lg:p-3 bg-gray-700 text-white rounded shadow">
                                <strong className="text-yellow-400">Weather:</strong>
                                <br />
                                <span className="text-sm lg:text-base">{weatherData.weather?.[0]?.main} - {weatherData.weather?.[0]?.description}</span>
                            </div>
                            
                            <div className="p-2 lg:p-3 bg-gray-700 text-white rounded shadow">
                                <strong className="text-yellow-400">Temperature:</strong>
                                <br />
                                <span className="text-sm lg:text-base">{weatherData.main?.temp}°C (feels like {weatherData.main?.feels_like}°C)</span>
                            </div>
                            
                            <div className="p-2 lg:p-3 bg-gray-700 text-white rounded shadow">
                                <strong className="text-yellow-400">Details:</strong>
                                <br />
                                <span className="text-sm lg:text-base">
                                    Humidity: {weatherData.main?.humidity}%
                                    <br />
                                    Pressure: {weatherData.main?.pressure} hPa
                                    {weatherData.wind && (
                                        <>
                                            <br />
                                            Wind: {weatherData.wind.speed} m/s
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="max-w-md p-3 lg:p-4 bg-blue-100 text-gray-800 rounded-lg shadow-md text-center mx-4">
                <strong className="text-sm lg:text-base">React useState & API Integration:</strong>
                <br />
                <span className="text-xs lg:text-sm">
                    This app demonstrates <code className="bg-gray-200 px-1 rounded">useState</code> and <code className="bg-gray-200 px-1 rounded">useEffect</code> hooks:
                    <br />
                    • Managing location state from map clicks
                    <br />
                    • Fetching and storing API weather data
                    <br />
                    • Real-time UI updates with external APIs!
                </span>
            </div>
        </div>
    );
};



export default UsingApi;