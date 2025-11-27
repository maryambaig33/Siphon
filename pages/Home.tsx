import React from 'react';
import { ArrowRight, Clock, MapPin, Wifi } from 'lucide-react';
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
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Coffee Shop Ambience" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-4">
            The Art of <span className="text-amber-500">Siphon</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Experience coffee in its purest form. Halogen-heated, vacuum-brewed, and meticulously crafted for the curious palate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => onNavigate(Page.MENU)}
              className="px-8 py-4 bg-amber-600 text-white text-lg font-medium rounded-sm hover:bg-amber-700 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
            >
              View Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => onNavigate(Page.ABOUT)}
               className="px-8 py-4 border border-stone-500 text-stone-300 text-lg font-medium rounded-sm hover:border-white hover:text-white transition-all duration-300 tracking-wide"
            >
              Our Story
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500">
          <span className="text-sm tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group p-8 border border-stone-800 hover:border-amber-900/50 bg-stone-950/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900 transition-colors">
              <Clock className="text-amber-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Slow Bar</h3>
            <p className="text-stone-400 leading-relaxed">
              We take our time so you can enjoy yours. Our siphon brew method highlights delicate notes often lost in traditional brewing.
            </p>
          </div>
          <div className="group p-8 border border-stone-800 hover:border-amber-900/50 bg-stone-950/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900 transition-colors">
              <Wifi className="text-amber-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Workspace Ready</h3>
            <p className="text-stone-400 leading-relaxed">
              Blazing fast WiFi, ample outlets, and comfortable seating make Siphon the perfect spot to get work done.
            </p>
          </div>
          <div className="group p-8 border border-stone-800 hover:border-amber-900/50 bg-stone-950/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900 transition-colors">
              <MapPin className="text-amber-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Community Hub</h3>
            <p className="text-stone-400 leading-relaxed">
              Located in the heart of the district, we are a gathering place for creatives, professionals, and coffee lovers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[60vh] relative flex items-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://picsum.photos/seed/coffeebean/1920/1080)' }}>
        <div className="absolute inset-0 bg-stone-950/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">"Coffee is a language in itself."</h2>
           <p className="text-xl text-amber-500 font-serif italic">- Jackie Chan</p>
        </div>
      </section>
    </div>
  );
};
