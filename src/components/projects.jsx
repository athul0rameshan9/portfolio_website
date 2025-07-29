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
                        <span className="text-3xl mr-3">📝</span>
                        <h3 className="text-xl font-bold text-yellow-400">Todo App</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Task management with local storage and drag-n-drop functionality.
                    </p>
                    <a href="https://github.com/yourusername/todo-app" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View on GitHub →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">💰</span>
                        <h3 className="text-xl font-bold text-yellow-400">Expense Tracker</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Track expenses with charts and budget management features.
                    </p>
                    <a href="https://github.com/yourusername/expense-tracker" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View on GitHub →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🛒</span>
                        <h3 className="text-xl font-bold text-yellow-400">E-commerce Store</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Full-stack shopping cart with payment integration and admin panel.
                    </p>
                    <a href="https://github.com/yourusername/ecommerce-store" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View on GitHub →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">📊</span>
                        <h3 className="text-xl font-bold text-yellow-400">Data Dashboard</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Interactive charts and analytics with real-time data visualization.
                    </p>
                    <a href="https://github.com/yourusername/data-dashboard" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View on GitHub →
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;