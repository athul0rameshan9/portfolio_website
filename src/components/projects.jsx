import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                🕹️ Check Out My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🎮</span>
                        <h3 className="text-xl font-bold text-yellow-400">Tic-Tac-Toe</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        A classic game with a modern React twist. Try to beat me!
                    </p>
                    <Link to="/game">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            Play Now →
                        </button>
                    </Link>
                </div>
                
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🌦️</span>
                        <h3 className="text-xl font-bold text-yellow-400">Weather App</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Check the weather anywhere, anytime. Click and explore!
                    </p>
                    <Link to="/usingapi">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            Check Weather →
                        </button>
                    </Link>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🔬</span>
                        <h3 className="text-xl font-bold text-yellow-400">Hyperspectral Food Safety ML</h3>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded ml-2">2024-Present</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        ML model predicting piperine content & moisture in black pepper using hyperspectral imaging. 
                        Research collaboration with IISR Kozhikode & NIT Calicut.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">CNN</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Hugging Face</span>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded">Vercel</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/hyperspectral-food-safety" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View Research →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🏠</span>
                        <h3 className="text-xl font-bold text-yellow-400">Smart Home IoT Dashboard</h3>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded ml-2">2024</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        Real-time IoT dashboard controlling smart home devices with Firebase backend. 
                        Features include temperature monitoring, lighting control, and security alerts.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">React</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Firebase</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Arduino</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">WebSockets</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/smart-home-dashboard" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View Project →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">📊</span>
                        <h3 className="text-xl font-bold text-yellow-400">E-commerce Analytics Platform</h3>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded ml-2">2023</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        Full-stack analytics platform for e-commerce businesses with real-time sales tracking, 
                        customer behavior analysis, and automated reporting with PDF generation.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Node.js</span>
                        <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">React</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">PostgreSQL</span>
                        <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Chart.js</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/ecommerce-analytics" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View Platform →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🤖</span>
                        <h3 className="text-xl font-bold text-yellow-400">AI Chatbot for Customer Support</h3>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded ml-2">2023</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        Intelligent chatbot using NLP for automated customer support with 85% query resolution rate. 
                        Integrated with CRM systems and supports multiple languages.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">TensorFlow</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Flask</span>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">OpenAI API</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/ai-customer-chatbot" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View Chatbot →
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;