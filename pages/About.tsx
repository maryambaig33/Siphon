import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-950 px-4 md:px-8 pb-20">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Story Section */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif text-white">The Siphon Difference</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-stone-300 text-lg leading-relaxed font-light">
              <p>
                At Siphon Coffee, we believe brewing is a science and an art. Our namesake, the <strong>Siphon (or Vacuum Pot)</strong>, is a method dating back to the 1830s. It uses vapor pressure and vacuum to produce a clean, crisp, and incredibly aromatic cup of coffee.
              </p>
              <p>
                Unlike standard drip coffee, the Siphon method ensures total immersion of the grounds at a precise temperature. We use <strong>halogen burners</strong> not just for their consistent heat, but for the mesmerizing theater they provide. It's coffee you watch as much as you drink.
              </p>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
               <img 
                src="https://picsum.photos/seed/siphonbrew/800/800" 
                alt="Halogen Siphon Brewer" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="border-t border-stone-800 pt-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <h3 className="text-3xl font-serif text-white">Visit Us</h3>
                 <p className="text-stone-400">
                   701 W Alabama St<br/>
                   Houston, TX 77006
                 </p>
                 <div className="space-y-2">
                    <h4 className="text-white font-medium">Hours</h4>
                    <ul className="text-stone-400 space-y-1">
                       <li className="flex justify-between max-w-xs"><span>Mon - Fri</span> <span>7:00 AM - 10:00 PM</span></li>
                       <li className="flex justify-between max-w-xs"><span>Sat - Sun</span> <span>8:00 AM - 10:00 PM</span></li>
                    </ul>
                 </div>
                 <div className="pt-4">
                    <a href="tel:+12815550123" className="text-amber-500 hover:text-amber-400 transition-colors">
                       (281) 555-0123
                    </a>
                 </div>
              </div>
              <div className="h-80 bg-stone-900 rounded-lg overflow-hidden relative">
                 {/* Placeholder for Map */}
                 <img src="https://picsum.photos/seed/map/800/600" alt="Map Location" className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-stone-950/80 px-6 py-3 rounded text-white border border-stone-700">Map View</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
