import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* About Me Section */}
                <section>
                    <h1 className="text-5xl font-bold text-gray-800 mb-16 text-center">
                        About Me
                    </h1>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-5 gap-0">

                            {/* Left Panel: Profile + Details */}
                            <div className="md:col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex flex-col items-center text-white space-y-6">
                                {/* Avatar */}
                                <div className="w-56 h-56 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                                    <div 
                                        className="w-48 h-48 rounded-full bg-white bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('/2716cc30-4a0e-4ffc-ac2c-604676caebe7.jpeg')"
                                        }}
                                    >
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold">Athul Rameshan</h3>
                                    <p className="text-sm">Web Developer | ML Enthusiast</p>
                                </div>

                                {/* Contact Details */}
                                <div className="flex flex-col items-center text-sm space-y-2">
                                    <div className="flex items-center gap-2">
                                        <MdLocationOn className="text-lg" />
                                        <span>Kerala, India</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdEmail className="text-lg" />
                                        <span>athulramesh98@gmail.com</span>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className="flex gap-6 text-white text-2xl mt-4">
                                    <a
                                        href="https://github.com/athul0rameshan9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-200"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/athul-ramesh-b36733324/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-200"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>

                            {/* Right Panel: About Content */}
                            <div className="md:col-span-3 p-12 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                                    Hello, I'm Athul
                                </h2>

                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        I'm a recent graduate in 
                                        <span className="font-semibold text-gray-800"> Electrical and Electronics Engineering</span> from 
                                        <span className="font-semibold text-gray-800"> NIT Calicut</span>, with a strong passion for 
                                        <span className="font-semibold text-indigo-600"> machine learning</span> and 
                                        <span className="font-semibold text-purple-600"> web development</span>.
                                    </p>

                                    <p>
                                        I enjoy building tools and applications that combine 
                                        <span className="font-semibold text-gray-800"> intelligence</span> with great 
                                        <span className="font-semibold text-gray-800"> user experience</span>. 
                                        My core skills include 
                                        <span className="font-semibold text-gray-800"> Python</span>, 
                                        <span className="font-semibold text-gray-800"> JavaScript</span>, 
                                        <span className="font-semibold text-gray-800"> React</span>, and 
                                        <span className="font-semibold text-gray-800"> machine learning</span>.
                                    </p>

                                    <p>
                                        Key projects I've worked on:
                                        <ul className="list-disc ml-6 mt-2 space-y-2">
                                            <li>
                                                <strong>Hyperspectral Imaging for Food Safety:</strong> Built a model to predict piperine and moisture content in black pepper using CNN and spectral analysis.
                                            </li>
                                            <li>
                                                <strong>YouTube Sentiment Analysis:</strong> Analyzed video comments using the YouTube Data API and TextBlob to visualize viewer sentiment.
                                            </li>
                                            <li>
                                                <strong>Python Job Scraper:</strong> Automated job searches using BeautifulSoup and Requests for keyword-based job listings.
                                            </li>
                                        </ul>
                                    </p>

                                    <p>
                                        I'm always eager to explore new technologies, contribute to innovative projects, and grow as a developer who values creativity, privacy, and impactful design.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
