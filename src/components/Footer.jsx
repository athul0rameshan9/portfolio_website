export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-300 text-sm">
              A React playground for learning and experimenting with modern web development concepts.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/game" className="text-gray-300 hover:text-yellow-400 transition">
                  Tic-Tac-Toe Game
                </a>
              </li>
              <li>
                <a href="/usingapi" className="text-gray-300 hover:text-yellow-400 transition">
                  Wether APP
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Built with React & Tailwind CSS</p>
              <p>© 2025 Dev Playground</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/athul0rameshan9/portfolio_website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  GitHub
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Made with ❤️ for learning React concepts
          </p>
        </div>
      </div>
    </footer>
  );
}
