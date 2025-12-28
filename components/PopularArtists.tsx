
import React from 'react';
import { motion } from 'framer-motion';
/* Changed from useNotification to useApp */
import { useApp } from '../App';

const ARTISTS = [
  {
    name: 'Osvaldo Percy',
    avatar: 'https://i.pravatar.cc/150?u=osvaldo',
    mainImage: 'https://picsum.photos/seed/artist1/400/300',
    cols: 1,
  },
  {
    name: 'Ranson Sqiure',
    avatar: 'https://i.pravatar.cc/150?u=ranson',
    mainImage: 'https://picsum.photos/seed/artist2/400/300',
    cols: 1,
  },
  {
    name: 'Cristio leo',
    avatar: 'https://i.pravatar.cc/150?u=cristio',
    mainImage: 'https://picsum.photos/seed/artist3/400/600',
    cols: 1,
    rowSpan: 2,
  },
  {
    name: 'Sebastian waltan',
    avatar: 'https://i.pravatar.cc/150?u=sebastian',
    mainImage: 'https://picsum.photos/seed/artist4/400/300',
    cols: 1,
  },
  {
    name: 'Abraham Zack',
    avatar: 'https://i.pravatar.cc/150?u=abraham',
    mainImage: 'https://picsum.photos/seed/artist5/400/300',
    cols: 1,
  },
];

const PopularArtists: React.FC = () => {
  /* Changed from useNotification() to useApp() */
  const { show } = useApp();

  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Popular <span className="lime-accent">Artists</span> <br />
          On This Week
        </h2>
        <button 
          onClick={() => show("Viewing All Top Artists...")}
          className="px-8 py-3 bg-lime-accent text-black font-bold rounded-full active:scale-95"
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {ARTISTS.map((artist, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => show(`Viewing ${artist.name}'s Profile`)}
            className={`relative group rounded-[32px] overflow-hidden glass-card p-3 cursor-pointer ${artist.rowSpan === 2 ? 'lg:row-span-2' : ''}`}
          >
            <div className="w-full h-full relative overflow-hidden rounded-[24px]">
              <img 
                src={artist.mainImage} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={artist.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-lime-accent p-0.5 overflow-hidden">
                <img src={artist.avatar} className="w-full h-full rounded-full object-cover" alt={artist.name} />
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Owner</p>
                <h4 className="text-base font-bold text-white">{artist.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularArtists;