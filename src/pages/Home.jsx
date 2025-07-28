import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-8">
            <div className="max-w-4xl mx-auto">
                
                {/* 1. Intro Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Hey 👋, I'm <span className="text-indigo-600">Athul</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        I like building apps that make life easier — or just fun.
                    </p>
                    <p className="text-lg text-gray-500 mb-4">
                        I started this project just to study React, but after implementing some cool features, 
                        I decided to turn it into my portfolio website! 
                    </p>
                    <p className="text-lg text-gray-500">
                        So this little site is both my learning playground and my portfolio. Dive in! 🚀
                    </p>
                </section>

                {/* 2. Skills Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        🛠️ Tools I Love Working With
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['React', 'JavaScript', 'Python', 'ML', 'AI', 'Firebase', 'Tailwind CSS', 'Node.js'].map((skill) => (
                            <span 
                                key={skill}
                                className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 3. Projects Preview Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        🕹️ Check Out My Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-3">🎮</span>
                                <h3 className="text-xl font-bold text-gray-800">Tic-Tac-Toe</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                A classic game with a modern React twist. Try to beat me!
                            </p>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                                Play Now →
                            </button>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-3">🌦️</span>
                                <h3 className="text-xl font-bold text-gray-800">Weather App</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Check the weather anywhere, anytime. Click and explore!
                            </p>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                                Check Weather →
                            </button>
                        </div>
                    </div>
                </section>

                {/* 4. Fun Facts Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        🎨 About Me / Fun Facts
                    </h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-3">🔍</span>
                                    <p className="text-gray-700">Currently exploring: LLMs and GenAI</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl mr-3">🎵</span>
                                    <p className="text-gray-700">Music helps me think</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-3">📷</span>
                                    <p className="text-gray-700">Side hobby: photography & gaming</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl mr-3">🐍</span>
                                    <p className="text-gray-700">Python is my spirit animal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Connect Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        📬 Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Want to work with me? Let's talk.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
                            <span className="mr-2">💼</span>
                            LinkedIn
                        </button>
                        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 flex items-center">
                            <span className="mr-2">🐙</span>
                            GitHub
                        </button>
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center">
                            <span className="mr-2">✉️</span>
                            Email
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;