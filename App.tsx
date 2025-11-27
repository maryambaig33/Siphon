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
      setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen bg-coffee-950 flex flex-col text-stone-200">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-coffee-950/95 backdrop-blur-md border-coffee-800 py-4 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => navigate(Page.HOME)}
            className="text-2xl font-serif font-bold tracking-tighter text-white hover:text-amber-600 transition-colors z-50"
          >
            SIPHON
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
                { label: 'Home', page: Page.HOME },
                { label: 'Menu', page: Page.MENU },
                { label: 'Story & Location', page: Page.ABOUT }
            ].map(item => (
                <button 
                  key={item.label}
                  onClick={() => navigate(item.page)} 
                  className={`text-xs font-medium uppercase tracking-[0.2em] hover:text-amber-500 transition-colors relative group ${currentPage === item.page ? 'text-amber-500' : 'text-stone-300'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-amber-600 transform scale-x-0 transition-transform duration-300 ${currentPage === item.page ? 'scale-x-100' : 'group-hover:scale-x-50'}`}></span>
                </button>
            ))}
            
            <button className="px-6 py-2 border border-amber-700 text-amber-500 text-xs font-bold uppercase tracking-widest hover:bg-amber-700 hover:text-white transition-all duration-300">
              Order Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-coffee-950 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             <button onClick={() => navigate(Page.HOME)} className="text-3xl font-serif text-white hover:text-amber-500 transition-colors">Home</button>
             <button onClick={() => navigate(Page.MENU)} className="text-3xl font-serif text-white hover:text-amber-500 transition-colors">Menu</button>
             <button onClick={() => navigate(Page.ABOUT)} className="text-3xl font-serif text-white hover:text-amber-500 transition-colors">About</button>
             <button className="px-8 py-4 bg-amber-700 text-white text-lg uppercase tracking-widest mt-8">Order Online</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === Page.HOME && <Home onNavigate={navigate} />}
        {currentPage === Page.MENU && <Menu />}
        {currentPage === Page.ABOUT && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-coffee-950 border-t border-coffee-800 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-serif font-bold text-white mb-2 tracking-tighter">SIPHON</h4>
            <p className="text-stone-600 text-xs tracking-widest uppercase">Precision Brewing • Houston, TX</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-stone-500 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Instagram size={20} /></a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Facebook size={20} /></a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Twitter size={20} /></a>
          </div>

          <div className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Siphon Coffee.
          </div>
        </div>
      </footer>

      {/* Gemini Integration */}
      <VirtualBarista />
    </div>
  );
};

export default App;