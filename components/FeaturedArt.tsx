
import React from 'react';
import { motion } from 'framer-motion';
/* Changed from useNotification to useApp */
import { useApp } from '../App';

const ARTWORKS = [
  {
    title: 'Cyberpunk Cocomo',
    author: '490ETH',
    image: 'https://picsum.photos/seed/cocomo/600/700',
    time: '03:24:56',
  },
  {
    title: 'Charge, Qi tiao yu',
    author: '490ETH',
    image: 'https://picsum.photos/seed/charge/600/700',
    time: '03:24:56',
  },
  {
    title: 'Surgeon, Josh Rife',
    author: '490ETH',
    image: 'https://picsum.photos/seed/surgeon/600/700',
    time: '03:24:56',
  },
];

const FeaturedArt: React.FC = () => {
  /* Changed from useNotification() to useApp() */
  const { show } = useApp();

  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold max-w-lg">
          Amazing and Super <br />
          Unique Art of This <span className="lime-accent">Week</span>
        </h2>
        <button 
          onClick={() => show("Loading Marketplace...")}
          className="px-8 py-3 bg-lime-accent text-black font-bold rounded-full hover:opacity-90 transition-opacity active:scale-95"
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTWORKS.map((art, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card rounded-[32px] p-3 flex flex-col group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[26px]">
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/10">
                ⭐ Trending
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold truncate pr-4">{art.title}</h3>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs text-white/50">Ξ</span>
                  <span className="text-sm font-mono font-bold">{art.author}</span>
                </div>
              </div>

              <div className="flex items-center justify-between bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase text-white/40 font-bold tracking-widest">Ending In</p>
                  <p className="text-sm font-mono font-bold">{art.time}</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); show(`Bidding on ${art.title}...`); }}
                  className="px-5 py-2 border border-lime-accent/40 text-lime-accent text-xs font-bold rounded-xl hover:bg-lime-accent hover:text-black transition-all active:scale-95"
                >
                  Place A Bid
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArt;