import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { VirtualBarista } from './components/VirtualBarista';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || currentPage !== Page.HOME 
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => navigate(Page.HOME)}
            className="text-2xl font-serif font-bold tracking-tighter text-white hover:text-amber-500 transition-colors"
          >
            SIPHON
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate(Page.HOME)} 
              className={`text-sm uppercase tracking-widest hover:text-amber-500 transition-colors ${currentPage === Page.HOME ? 'text-amber-500' : 'text-stone-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigate(Page.MENU)} 
              className={`text-sm uppercase tracking-widest hover:text-amber-500 transition-colors ${currentPage === Page.MENU ? 'text-amber-500' : 'text-stone-300'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => navigate(Page.ABOUT)} 
              className={`text-sm uppercase tracking-widest hover:text-amber-500 transition-colors ${currentPage === Page.ABOUT ? 'text-amber-500' : 'text-stone-300'}`}
            >
              About & Location
            </button>
            <button className="px-5 py-2 border border-amber-600 text-amber-500 text-sm uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-all">
              Order Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-stone-900 border-b border-stone-800 md:hidden flex flex-col p-6 space-y-4 shadow-2xl animate-fade-in-down">
             <button onClick={() => navigate(Page.HOME)} className="text-left text-stone-200 py-2 border-b border-stone-800">Home</button>
             <button onClick={() => navigate(Page.MENU)} className="text-left text-stone-200 py-2 border-b border-stone-800">Menu</button>
             <button onClick={() => navigate(Page.ABOUT)} className="text-left text-stone-200 py-2 border-b border-stone-800">About & Location</button>
             <button className="text-center bg-amber-600 text-white py-3 mt-4 rounded-sm">Order Online</button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === Page.HOME && <Home onNavigate={navigate} />}
        {currentPage === Page.MENU && <Menu />}
        {currentPage === Page.ABOUT && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-serif font-bold text-white mb-2">SIPHON COFFEE</h4>
            <p className="text-stone-500 text-sm">Brewing science, crafting art.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
          </div>

          <div className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Siphon Coffee. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Gemini Integration */}
      <VirtualBarista />
    </div>
  );
};

export default App;
