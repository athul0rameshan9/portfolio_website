import React, { useState, useEffect, useRef } from 'react';

const SkillsCarousel = () => {
    // Updated with your actual SVG file names
    const skillLogos = [
        'c-1.svg',
        'c.svg',
        'docker.svg',
        'git-svgrepo-com.svg',
        'html-1.svg',
        'huggingface-2.svg',
        'javascript-logo-svgrepo-com.svg',
        'linux-svgrepo-com.svg',
        'matplotlib-1.svg',
        'nodejs-2.svg',
        'npm.svg',
        'numpy-1.svg',
        'opencv-svgrepo-com.svg',
        'openai-2.svg',
        'pandas.svg',
        'python-svgrepo-com.svg',
        'react-2.svg',
        'tensorflow-svgrepo-com.svg'
    ];

    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);
    const itemWidth = 100; // Width of each item including margins
    const speed = 1; // Pixels per frame

    // Get clean skill name from filename
    const getSkillName = (filename) => {
        return filename
            .replace('.svg', '')
            .replace('-svgrepo-com', '')
            .replace('-logo', '')
            .replace(/-\d+$/, '') // Remove trailing numbers like -1, -2
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    };

    // Create multiple copies for seamless loop
    const extendedLogos = [...skillLogos, ...skillLogos, ...skillLogos];
    const totalWidth = skillLogos.length * itemWidth;

    // Continuous animation
    useEffect(() => {
        const animateCarousel = () => {
            setTranslateX(prevX => {
                const newX = prevX - speed;
                // Reset position when we've moved one full set
                if (Math.abs(newX) >= totalWidth) {
                    return 0;
                }
                return newX;
            });
        };

        const interval = setInterval(animateCarousel, 16); // ~60fps
        return () => clearInterval(interval);
    }, [totalWidth, speed]);

    return (
        <div className="w-full overflow-hidden">
            {/* Carousel Container */}
            <div className="relative">
                <div 
                    ref={containerRef}
                    className="flex"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        width: 'max-content'
                    }}
                >
                    {extendedLogos.map((logo, index) => (
                        <div 
                            key={`${logo}-${index}`}
                            className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 p-2 mx-4"
                        >
                            <img 
                                src={`/svg_files_athul/${logo}`}
                                alt={getSkillName(logo)}
                                className="w-16 h-16 object-contain"
                                onError={(e) => {
                                    console.log(`Failed to load: /svg_files_athul/${logo}`);
                                    // Fallback if SVG doesn't load
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                           
                        </div>
                    ))}
                </div>

                
            </div>           
        </div>
    );
};

export default SkillsCarousel;