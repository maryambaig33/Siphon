import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-coffee-950 px-6 pb-20">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8 order-2 lg:order-1">
                <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-bold">The Craft</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    Precision.<br/>Theatrics.<br/>Flavor.
                </h2>
                <div className="text-stone-400 text-lg leading-relaxed font-light space-y-6">
                    <p>
                        Siphon Coffee isn't just a name; it's our philosophy. We specialize in the <strong>Halogen Siphon</strong> method, a technique that dates back to the 1830s but has been perfected for the modern palate.
                    </p>
                    <p>
                        Using halogen beam heaters, we control heat with pinpoint accuracy. As the water rises into the top chamber, it immerses the coffee grounds completely. When the heat is removed, a vacuum is created, pulling the brewed coffee down through a cloth filter.
                    </p>
                    <p>
                        The result? A cup that is remarkably clean, vibrantly aromatic, and free of the sediment found in a French Press, yet fuller in body than a pour-over.
                    </p>
                </div>
             </div>
             <div className="order-1 lg:order-2 h-[500px] relative">
                 <div className="absolute inset-0 bg-amber-600/20 translate-x-4 translate-y-4 rounded-sm"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop" 
                    alt="Siphon Brewing Close-up" 
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 rounded-sm relative z-10 shadow-2xl"
                  />
             </div>
        </div>

        {/* Location & Info */}
        <div className="border-t border-coffee-800 pt-24">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="space-y-6">
                 <div className="w-12 h-12 bg-coffee-900 rounded-full flex items-center justify-center text-amber-600">
                    <MapPin size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white">Visit Us</h3>
                 <p className="text-stone-400 leading-relaxed">
                   701 W Alabama St<br/>
                   Houston, TX 77006<br/>
                   <span className="text-sm text-stone-600">Montrose District</span>
                 </p>
              </div>

              <div className="space-y-6">
                 <div className="w-12 h-12 bg-coffee-900 rounded-full flex items-center justify-center text-amber-600">
                    <Clock size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white">Hours</h3>
                 <ul className="text-stone-400 space-y-2">
                    <li className="flex justify-between border-b border-coffee-800 pb-2"><span>Mon - Fri</span> <span className="text-stone-200">7am - 10pm</span></li>
                    <li className="flex justify-between border-b border-coffee-800 pb-2"><span>Sat - Sun</span> <span className="text-stone-200">8am - 10pm</span></li>
                 </ul>
              </div>

              <div className="space-y-6">
                 <div className="w-12 h-12 bg-coffee-900 rounded-full flex items-center justify-center text-amber-600">
                    <Phone size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white">Contact</h3>
                 <p className="text-stone-400">
                   (281) 555-0123<br/>
                   <a href="mailto:hello@siphoncoffee.com" className="text-amber-600 hover:text-amber-500 transition-colors">hello@siphoncoffee.com</a>
                 </p>
              </div>

           </div>
        </div>

        <div className="w-full h-96 bg-coffee-900 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
            {/* Map Placeholder - In a real app, use Google Maps API */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Map Location" />
            <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com/?q=Siphon+Coffee+Houston" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-coffee-950 font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-xl"
                >
                    Get Directions
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};