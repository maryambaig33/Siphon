import React, { useState } from 'react';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Siphon Signature', description: 'Our house blend brewed via halogen siphon. Clean, tea-like body with vibrant floral notes.', price: '$8.00', category: 'coffee', popular: true },
  { id: '2', name: 'Kyoto Cold Brew', description: '24-hour slow drip cold brew over ice. Smooth, chocolatey, low acidity.', price: '$6.50', category: 'coffee' },
  { id: '3', name: 'Honey Lavender Latte', description: 'Double shot espresso, house-made honey lavender syrup, steamed oat milk.', price: '$6.00', category: 'coffee', popular: true },
  { id: '4', name: 'Cortado', description: 'Equal parts espresso and steamed milk. The perfect balance.', price: '$4.50', category: 'coffee' },
  
  { id: '5', name: 'Siphon Toast', description: 'Thick cut sourdough, smashed avocado, poached egg, pickled onions, chili flakes.', price: '$12.00', category: 'food', popular: true },
  { id: '6', name: 'Breakfast Tacos', description: 'Flour tortilla, scrambled eggs, cheese, choice of chorizo or potato. Served with salsa verde.', price: '$4.50', category: 'food' },
  { id: '7', name: 'Seasonal Quiche', description: 'Rotates daily. Ask your barista for details.', price: '$9.00', category: 'food' },
  
  { id: '8', name: 'Almond Croissant', description: 'Flaky pastry filled with almond cream and topped with sliced almonds.', price: '$5.00', category: 'pastry' },
  { id: '9', name: 'Morning Bun', description: 'Croissant dough rolled with cinnamon and orange zest.', price: '$4.50', category: 'pastry' },
  
  { id: '10', name: 'Local IPA', description: 'Rotates monthly. Currently featuring Saint Arnold Art Car.', price: '$7.00', category: 'alcohol' },
  { id: '11', name: 'House Red', description: 'Cabernet Sauvignon from Napa Valley.', price: '$11.00', category: 'alcohol' }
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'food' | 'pastry' | 'alcohol'>('coffee');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-stone-950 px-4 md:px-8 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Our Menu</h2>
          <p className="text-stone-400 max-w-lg mx-auto">Carefully curated selections to start your morning or end your day.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['coffee', 'food', 'pastry', 'alcohol'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-amber-600 border-amber-600 text-white'
                  : 'bg-transparent border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative flex flex-col gap-1 pb-6 border-b border-stone-800 hover:border-stone-700 transition-colors">
              <div className="flex justify-between items-baseline w-full">
                <h3 className="text-xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors">
                  {item.name}
                </h3>
                <span className="text-lg font-medium text-amber-500">{item.price}</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed max-w-[90%]">
                {item.description}
              </p>
              {item.popular && (
                <span className="absolute -top-3 -right-2 text-[10px] font-bold uppercase tracking-widest bg-amber-900/50 text-amber-400 px-2 py-1 rounded border border-amber-900/50">
                  Popular
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm italic">
                *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
            </p>
        </div>
      </div>
    </div>
  );
};
