
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';
import { useApp } from '../App';

const ARTISTS_LIST = [
  { name: 'Alex Rivera', vol: '1,240 ETH', floor: '0.5 ETH', items: '230', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Zoe Thorne', vol: '980 ETH', floor: '0.3 ETH', items: '150', avatar: 'https://i.pravatar.cc/150?u=zoe' },
  { name: 'Marcus Flint', vol: '850 ETH', floor: '0.8 ETH', items: '90', avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Elena Vance', vol: '720 ETH', floor: '0.2 ETH', items: '340', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { name: 'Dr. Cyber', vol: '640 ETH', floor: '1.2 ETH', items: '45', avatar: 'https://i.pravatar.cc/150?u=cyber' },
];

const Artists: React.FC = () => {
  const { show } = useApp();

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 space-y-16">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">Top <span className="lime-accent">Artists</span></h1>
          <p className="text-white/50 max-w-md">The most active and trending digital creators of the month across our platform.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold hover:bg-white/10 transition-all">Today</button>
          <button className="px-6 py-3 bg-lime-accent text-black rounded-full text-sm font-bold">This Week</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {[
          { icon: TrendingUp, label: 'Market Volume', val: '$24.5M' },
          { icon: Users, label: 'Active Collectors', val: '12,400' },
          { icon: Award, label: 'Total Sales', val: '8.9K' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-8 rounded-[40px] flex items-center gap-6">
            <div className="w-16 h-16 bg-lime-accent/10 rounded-full flex items-center justify-center text-lime-accent">
              <stat.icon size={30} />
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.val}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-[40px] overflow-hidden">
        <div className="p-8 border-b border-white/5 bg-white/[0.02]">
          <div className="grid grid-cols-12 text-white/40 text-xs font-bold uppercase tracking-widest px-4">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Artist</div>
            <div className="col-span-2 text-right">Volume</div>
            <div className="col-span-2 text-right">Floor Price</div>
            <div className="col-span-2 text-right">Items</div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          {ARTISTS_LIST.map((artist, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              onClick={() => show(`Viewing ${artist.name}'s profile`)}
              className="grid grid-cols-12 items-center p-4 rounded-3xl cursor-pointer transition-colors"
            >
              <div className="col-span-1 font-mono text-white/40">0{idx + 1}</div>
              <div className="col-span-5 flex items-center gap-4">
                <img src={artist.avatar} className="w-12 h-12 rounded-2xl object-cover border border-white/10" alt={artist.name} />
                <h4 className="font-bold text-lg">{artist.name}</h4>
              </div>
              <div className="col-span-2 text-right font-mono font-bold text-lime-accent">{artist.vol}</div>
              <div className="col-span-2 text-right font-mono text-white/60">{artist.floor}</div>
              <div className="col-span-2 text-right font-mono text-white/60">{artist.items}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
