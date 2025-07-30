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
                        <span className="text-3xl mr-3">🔬</span>
                        <h3 className="text-xl font-bold text-yellow-400">Hyperspectral Food Safety ML</h3>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded ml-2">2025</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-base leading-relaxed">
                        Advanced machine learning model for predicting piperine content and moisture levels in black pepper using hyperspectral imaging technology. 
                        This research project, conducted in collaboration with Indian Institute of Spices Research (IISR) Kozhikode and NIT Calicut, 
                        aims to revolutionize food quality assessment and safety standards in the spice industry.
                    </p>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                        • Developed CNN-based regression models achieving 0.8 r2 score in piperine prediction<br/>
                        • Processed 40+ hyperspectral samples with wavelength range 400-1000nm<br/>
                        • Deployed on Hugging Face Spaces for real-time quality assessment<br/>
                        • Published findings contribute to non-destructive food testing methodologies
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">CNN</span>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">TensorFlow</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Hugging Face</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Spectral Analysis</span>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded">Vercel</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/pepper_prediction_hugging_face/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View in GitHub →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">📧</span>
                        <h3 className="text-xl font-bold text-yellow-400">Email Classification API</h3>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded ml-2">2024</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-base leading-relaxed">
                        A machine learning API project that classifies emails into different categories (promotions, updates, spam, personal) 
                        using a fine-tuned BERT transformer model. Built with FastAPI to explore natural language processing 
                        and API development concepts in a practical application.
                    </p>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                        • Implemented DistilBERT model for text classification tasks<br/>
                        • Built RESTful API endpoints with FastAPI framework<br/>
                        • Integrated Hugging Face transformers for model deployment<br/>
                        • Added email preprocessing and text cleaning pipelines<br/>
                        • Created sample datasets for training and testing purposes
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">FastAPI</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Hugging Face</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">BERT</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">NLP</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/email-classification-api" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View in GitHub →
                        </button>
                    </a>
                </div>


                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🎥</span>
                        <h3 className="text-xl font-bold text-yellow-400">YouTube Comment Sentiment Analysis</h3>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded ml-2">2024</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-base leading-relaxed">
                        A sentiment analysis tool that analyzes YouTube comments using the YouTube Data API and TextBlob. 
                        This project demonstrates natural language processing capabilities by categorizing viewer sentiments 
                        and providing visual insights into audience engagement patterns.
                    </p>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                        • Retrieved and analyzed comments from YouTube videos using Data API<br/>
                        • Categorized sentiments as positive, negative, or neutral using TextBlob<br/>
                        • Stored analysis results in CSV format for further processing<br/>
                        • Created pie chart visualizations for sentiment distribution analysis<br/>
                        • Implemented data preprocessing and cleaning pipelines
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">YouTube API</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">TextBlob</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Matplotlib</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Pandas</span>
                        <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">NLP</span>
                    </div>
                    <a href="https://github.com/athul0rameshan9/youtube-comment-sentiment-analysis" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            View in GitHub →
                        </button>
                    </a>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🔍</span>
                        <h3 className="text-xl font-bold text-yellow-400">Python Web Scraper for Targeted Job Search</h3>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded ml-2">2024</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-base leading-relaxed">
                        Developed an automated job search tool using Python, Beautiful Soup, and Requests. 
                        This web scraper intelligently filters job listings from various websites based on specific skills and keywords, 
                        helping streamline the job hunting process by providing targeted, relevant opportunities.
                    </p>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                        • Automated job listing extraction from multiple job portals and websites<br/>
                        • Implemented keyword-based filtering for skill-specific job matching<br/>
                        • Structured data storage for easy access and analysis of job postings<br/>
                        • Built efficient web scraping pipelines with error handling and rate limiting<br/>
                        • Created organized output formats for streamlined job application workflow
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">BeautifulSoup</span>
                        <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Requests</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Pandas</span>
                        <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">Web Scraping</span>
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Data Mining</span>
                    </div>
                   
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🎮</span>
                        <h3 className="text-xl font-bold text-yellow-400">Tic-Tac-Toe</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        A classic game with a modern React twist. Try to beat me!
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">React</span>
                    </div>
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
                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">React</span>
                    </div>
                    <Link to="/usingapi">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow">
                            Check Weather →
                        </button>
                    </Link>
                </div>


            </div>
        </section>
    );
};

export default Projects;