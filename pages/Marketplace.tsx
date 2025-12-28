
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { useApp } from '../App';

const ITEMS = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: `Digital Essence #${i + 100}`,
  price: (Math.random() * 2).toFixed(2),
  image: `https://picsum.photos/seed/nft${i+10}/600/700`,
  author: ['CyberPunks', 'MetaGems', 'NeoArt'][i % 3]
}));

const Marketplace: React.FC = () => {
  const { show } = useApp();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Art', 'Music', 'Photography', 'Utility'];

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Explore <span className="lime-accent">Marketplace</span>
        </h1>
        <p className="text-white/50 max-w-xl">
          Discover thousands of rare digital collectibles from independent artists around the world.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative w-full lg:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-lime-accent transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by artist or item name"
            className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-lime-accent/30 focus:bg-white/[0.05] transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shrink-0 ${filter === cat ? 'bg-lime-accent text-black' : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
          <button className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white shrink-0">
            <Filter size={18} />
          </button>
          <button className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white shrink-0">
            <ArrowUpDown size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ITEMS.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-[32px] p-3 group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
              <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">ETH {item.price}</div>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-bold text-lg truncate">{item.title}</h4>
                <p className="text-white/40 text-xs font-medium">@{item.author}</p>
              </div>
              <button 
                onClick={() => show(`Bidding for ${item.title}...`)}
                className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-lime-accent hover:text-black hover:border-lime-accent transition-all"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
