import React from 'react';
import SkillsCarousel from '../components/SkillsCarousel';
import Projects from '../components/projects';


// GitHub SVG Icon Component
const GitHubIcon = ({ size = 20, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/>
    </svg>
);

// LinkedIn SVG Icon Component
const LinkedInIcon = ({ size = 20, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
    </svg>
);

// Email/Gmail Image Icon Component
const EmailIcon = ({ size = 20, className = "" }) => (
    <img 
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        alt="Gmail"
        width={size}
        height={size * (40/109)} // Maintain aspect ratio (original is 109x40)
        className={className}
    />
);

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
                    
                    {/* New Skills Carousel */}
                    <div className="mb-8">
                        <SkillsCarousel />
                    </div>
                    
                    {/* Original skill tags (you can keep or remove these) */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {['React', 'JavaScript', 'Python', 'ML', 'AI', 'Firebase', 'Tailwind CSS', 'Node.js'].map((skill) => (
                            <span 
                                key={skill}
                                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-400 hover:text-gray-900 transition font-medium shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 3. Projects Section - Now using the imported component */}
                <Projects />

                

                {/* 5. Connect Section */}
                <section className="text-center">
                    <h2 className="text-xl text-gray-600 mb-6">
                        📬 Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Want to work with me? Let's talk.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://www.linkedin.com/in/athul-ramesh-b36733324/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
                            <LinkedInIcon size={20} className="mr-2" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/athul0rameshan9" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 flex items-center">
                            <GitHubIcon size={20} className="mr-2" />
                            GitHub
                        </a>
                        <a href="mailto:athulramesh98@gmail.com" className="bg-yellow-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-colors duration-200 flex items-center">
                            <EmailIcon size={100} className="" />
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;