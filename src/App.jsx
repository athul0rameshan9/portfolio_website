import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';
import UsingApi from './pages/UsingApi';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/game" element={<Game />} />
            <Route path="/usingapi" element={<UsingApi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}