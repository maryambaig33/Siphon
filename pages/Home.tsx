import React from 'react';
import { ArrowRight, Clock, MapPin, Wifi, Droplets, Flame } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Siphon/Vacuum Brew Image */}
          <img 
            src="https://images.unsplash.com/photo-1521302200778-3336864c6cac?q=80&w=2670&auto=format&fit=crop" 
            alt="Siphon Brewing Method" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" 
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 animate-fade-in pt-20">
          <div className="inline-block border-b-2 border-amber-600 pb-2 mb-4">
             <span className="text-amber-500 tracking-[0.3em] text-sm uppercase font-medium">Est. 2014 • Houston, TX</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
            SIPHON<span className="text-amber-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Where science meets art. Experience the halogen-heated vacuum brew that redefined coffee in Houston.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
            <button 
              onClick={() => onNavigate(Page.MENU)}
              className="px-10 py-4 bg-amber-700 hover:bg-amber-600 text-white text-lg font-medium tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-amber-900/40"
            >
              Our Menu <ArrowRight size={18} />
            </button>
            <button 
               onClick={() => onNavigate(Page.ABOUT)}
               className="px-10 py-4 border border-stone-500 text-stone-300 hover:border-white hover:text-white text-lg font-medium tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
            >
              The Method
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* The Siphon Difference */}
      <section className="py-32 px-6 bg-coffee-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-900/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                    Not just coffee.<br/>
                    <span className="text-amber-600 italic">An experience.</span>
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed">
                    The siphon method relies on vapor pressure and vacuum force to immerse the grounds completely. This creates a clean, vibrant cup that highlights the delicate floral and fruit notes often lost in traditional brewing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="flex gap-4">
                        <Flame className="text-amber-500 shrink-0" size={32} />
                        <div>
                            <h4 className="text-white font-serif text-xl mb-2">Halogen Heat</h4>
                            <p className="text-sm text-stone-500">Precise temperature control via radiant light beams.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Droplets className="text-amber-500 shrink-0" size={32} />
                        <div>
                            <h4 className="text-white font-serif text-xl mb-2">Vacuum Seal</h4>
                            <p className="text-sm text-stone-500">Full immersion extraction for tea-like clarity.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 border border-amber-900/30 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                <img 
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" 
                    alt="Barista at work" 
                    className="relative rounded-lg shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-coffee-950 border-t border-coffee-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-coffee-800 border border-coffee-800">
          <div className="bg-coffee-950 p-12 hover:bg-coffee-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <Clock className="w-10 h-10 text-stone-600 group-hover:text-amber-500 transition-colors mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">Slow Bar</h3>
            <p className="text-stone-500 leading-relaxed">
              Patience is a key ingredient. Our signature siphon brew takes time, but the result is incomparable.
            </p>
          </div>
          <div className="bg-coffee-950 p-12 hover:bg-coffee-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <Wifi className="w-10 h-10 text-stone-600 group-hover:text-amber-500 transition-colors mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">Workspace</h3>
            <p className="text-stone-500 leading-relaxed">
              Designed for focus. Fast fiber internet, ample power, and a vibe that fuels creativity.
            </p>
          </div>
          <div className="bg-coffee-950 p-12 hover:bg-coffee-900 transition-colors duration-500 flex flex-col items-center text-center group">
            <MapPin className="w-10 h-10 text-stone-600 group-hover:text-amber-500 transition-colors mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">Montrose</h3>
            <p className="text-stone-500 leading-relaxed">
              Located in the heart of Houston's most eclectic neighborhood. A true community gathering place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};