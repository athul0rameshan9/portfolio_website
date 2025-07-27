import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-white font-bold text-xl">
                        <NavLink
                            to="/"
                            className="text-white font-bold text-xl hover:text-yellow-400 transition"
                        >
                            Dev Playground
                        </NavLink>
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                                        isActive
                                            ? "bg-gray-800 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                                        isActive
                                            ? "bg-gray-800 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/game"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                                        isActive
                                            ? "bg-gray-800 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Game
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/usingapi"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                                        isActive
                                            ? "bg-gray-800 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Using API
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition ${
                                        isActive
                                            ? "bg-gray-700 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition ${
                                        isActive
                                            ? "bg-gray-700 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/game"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition ${
                                        isActive
                                            ? "bg-gray-700 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Game
                            </NavLink>
                            <NavLink
                                to="/usingapi"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition ${
                                        isActive
                                            ? "bg-gray-700 text-yellow-400"
                                            : "text-white hover:bg-gray-700"
                                    }`
                                }
                            >
                                Using API
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
