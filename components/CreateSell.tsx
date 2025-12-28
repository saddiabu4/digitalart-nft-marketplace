
import React from 'react';
import { motion } from 'framer-motion';
/* Changed from useNotification to useApp */
import { useApp } from '../App';

const CreateSell: React.FC = () => {
  /* Changed from useNotification() to useApp() */
  const { show } = useApp();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-5xl font-extrabold leading-tight">
          Create And Sell <br />
          Your <span className="lime-accent">Best NFTs</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence! We provide the best tools for creators.
        </p>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => show("Opening Creator Portal...")}
            className="px-10 py-4 bg-lime-accent text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,255,0,0.2)] transition-all active:scale-95"
          >
            Create Now
          </button>
          <button 
            onClick={() => show("Opening Documentation...")}
            className="px-10 py-4 border border-white/20 font-bold rounded-full hover:bg-white/5 transition-colors active:scale-95"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center h-[500px]"
      >
        {/* Collage Images */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute right-0 top-0 w-[240px] md:w-[280px] h-[350px] rounded-[40px] overflow-hidden glass-card p-3 z-10"
        >
          <img src="https://picsum.photos/seed/sell1/600/800" className="w-full h-full object-cover rounded-[32px]" alt="Collage 1" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute left-0 bottom-0 w-[260px] md:w-[320px] h-[400px] rounded-[40px] overflow-hidden glass-card p-3"
        >
          <img src="https://picsum.photos/seed/sell2/600/800" className="w-full h-full object-cover rounded-[32px]" alt="Collage 2" />
        </motion.div>
        
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-accent/20 blur-[100px] rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default CreateSell;