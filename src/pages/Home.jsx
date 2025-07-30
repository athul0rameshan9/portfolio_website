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

// LeetCode SVG Icon Component
const LeetCodeIcon = ({ size = 20, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 95 111" 
        fill="none" 
        className={className}
    >
        <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"/>
    </svg>
);

// Kaggle Image Icon Component (using official logo)
const KaggleIcon = ({ size = 20, className = "" }) => (
    <img 
        src="https://www.kaggle.com/static/images/site-logo.svg"
        alt="Kaggle"
        width={size}
        height={size * (32/82)} // Maintain aspect ratio (original is 82x32)
        className={className}
    />
);

// Hugging Face Image Icon Component (using local SVG file)
const HuggingFaceIcon = ({ size = 20, className = "" }) => (
    <img 
        src="/svg_files_athul/huggingface-2.svg"
        alt="Hugging Face"
        width={size}
        height={size}
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
                        I'm passionate about <span className="font-semibold text-indigo-600">AI/ML</span> and currently diving deep into 
                        <span className="font-semibold text-purple-600"> Generative AI</span> 🤖 — exploring how we can build intelligent systems that create, solve, and innovate.
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
                        {['React', 'Python', 'ML', 'AI', 'Node.js', 'REST API', 'Git'].map((skill) => (
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

                {/* 4. Coding Profiles Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        💻 My Coding Journey
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Check out my coding challenges, competitions, and ML experiments
                    </p>
                    <div className="flex justify-center items-center gap-8 max-w-3xl mx-auto">
                        <a href="https://leetcode.com/u/athulramesh98/" target="_blank" rel="noopener noreferrer" className="group">
                            <LeetCodeIcon size={40} className="group-hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="https://www.kaggle.com/athulrameshan" target="_blank" rel="noopener noreferrer" className="group">
                            <KaggleIcon size={60} className="hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="https://huggingface.co/athu98" target="_blank" rel="noopener noreferrer" className="group">
                            <HuggingFaceIcon size={40} className="hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="https://github.com/athul0rameshan9" target="_blank" rel="noopener noreferrer" className="group">
                            <GitHubIcon size={40} className="text-gray-800 hover:text-gray-900 group-hover:scale-110 transition-all duration-200" />
                        </a>
                    </div>
                </section>

                {/* 5. Connect Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        📬 Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Want to collaborate or just say hi? Reach out through any of these platforms!
                    </p>
                    <div className="flex justify-center items-center gap-8 max-w-3xl mx-auto">
                        <a href="https://www.linkedin.com/in/athul-ramesh-b36733324/" target="_blank" rel="noopener noreferrer" className="group">
                            <LinkedInIcon size={40} className="text-blue-600 hover:text-blue-700 group-hover:scale-110 transition-all duration-200" />
                        </a>
                        
                        <a href="mailto:athulramesh98@gmail.com" className="group">
                            <EmailIcon size={90} className="hover:opacity-80 group-hover:scale-110 transition-all duration-200" />
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;