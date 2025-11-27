import React, { useState } from 'react';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  { id: '1', name: 'Siphon Signature', description: 'Halogen vacuum brewed. Tea-like body, vibrant, clean finish.', price: '8', category: 'coffee', popular: true },
  { id: '2', name: 'Kyoto Cold Brew', description: '24-hour slow drip. Heavy body, chocolate notes, zero acidity.', price: '6.5', category: 'coffee' },
  { id: '3', name: 'Honey Lavender Latte', description: 'House-made floral syrup, double shot espresso, steamed milk.', price: '6', category: 'coffee', popular: true },
  { id: '4', name: 'Espresso', description: 'Double shot. Rotating single origin beans.', price: '3.5', category: 'coffee' },
  { id: '4b', name: 'Cortado', description: 'Equal parts espresso and textured milk.', price: '4.5', category: 'coffee' },
  
  // FOOD
  { id: '5', name: 'The Siphon Toast', description: 'Sourdough, smashed avocado, poached egg, pickled onion, chili flake.', price: '12', category: 'food', popular: true },
  { id: '6', name: 'Chorizo Tacos', description: 'Two flour tortillas, scrambled eggs, spicy chorizo, cheese, salsa verde.', price: '9', category: 'food' },
  { id: '7', name: 'Potato & Egg Tacos', description: 'Two flour tortillas, crispy potato, scrambled eggs, cheese, salsa roja.', price: '8', category: 'food' },
  { id: '7b', name: 'Daily Quiche', description: 'Chef\'s selection. Flaky crust, seasonal ingredients.', price: '9', category: 'food' },
  
  // PASTRY
  { id: '8', name: 'Almond Croissant', description: 'Twice baked, almond cream filling, toasted almonds.', price: '5', category: 'pastry' },
  { id: '9', name: 'Morning Bun', description: 'Croissant dough, cinnamon, orange zest, sugar.', price: '4.5', category: 'pastry' },
  { id: '9b', name: 'Scone', description: 'Blueberry lemon or Cheddar chive.', price: '4', category: 'pastry' },

  // ALCOHOL
  { id: '10', name: 'Local Draught', description: 'Saint Arnold Art Car IPA.', price: '7', category: 'alcohol' },
  { id: '11', name: 'House Red', description: 'Cabernet Sauvignon.', price: '11', category: 'alcohol' },
  { id: '12', name: 'Mimosa', description: 'Fresh squeezed orange juice, sparkling wine.', price: '9', category: 'alcohol' }
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'food' | 'pastry' | 'alcohol'>('coffee');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen bg-coffee-950 px-4 md:px-8 pb-20 relative">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-600 text-sm tracking-[0.4em] uppercase font-bold">Offerings</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {['coffee', 'food', 'pastry', 'alcohol'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`pb-2 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                activeCategory === cat
                  ? 'text-amber-500'
                  : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 transition-transform duration-300 origin-left ${
                activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}></span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-12 animate-fade-in">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex justify-between items-baseline gap-4 hover:opacity-100 opacity-90 transition-opacity">
              <div className="flex-grow">
                <div className="flex items-baseline mb-1">
                  <h3 className="text-2xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex-grow mx-4 border-b border-stone-800 border-dotted relative top-[-6px]"></div>
                  <span className="text-xl font-serif text-amber-600">${item.price}</span>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                        {item.description}
                    </p>
                    {item.popular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500/80 border border-amber-900/50 px-1.5 py-0.5 rounded">
                        Star
                        </span>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-coffee-800 pt-12">
            <p className="text-stone-600 text-xs tracking-widest uppercase">
                Kitchen closes daily at 3pm
            </p>
        </div>
      </div>
    </div>
  );
};