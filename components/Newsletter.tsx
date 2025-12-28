
import React, { useState } from 'react';
import { motion } from 'framer-motion';
/* Changed from useNotification to useApp */
import { useApp } from '../App';

const Newsletter: React.FC = () => {
  /* Changed from useNotification() to useApp() */
  const { show } = useApp();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return show("Please enter your email");
    show(`Subscribed successfully with ${email}!`);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden rounded-[60px] glass-card p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-accent/10 to-transparent"></div>
      
      <div className="flex gap-4 items-end">
        <motion.div
           animate={{ y: [0, -15, 0] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="w-1/2 aspect-[4/5] rounded-[40px] glass-card p-2"
        >
          <img src="https://picsum.photos/seed/news1/500/600" className="w-full h-full object-cover rounded-[32px]" alt="News" />
        </motion.div>
        <motion.div
           animate={{ y: [0, 15, 0] }}
           transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
           className="w-1/2 aspect-[4/5] rounded-[40px] glass-card p-2"
        >
          <img src="https://picsum.photos/seed/news2/500/600" className="w-full h-full object-cover rounded-[32px]" alt="News" />
        </motion.div>
      </div>

      <div className="space-y-8">
        <h2 className="text-5xl font-extrabold leading-tight">
          Subscribe And <span className="lime-accent">get our</span> <br />
          <span className="lime-accent">Updates</span> Every Week
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
        </p>
        
        <form onSubmit={handleSubscribe} className="relative group">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
            className="w-full py-5 px-8 bg-white/[0.03] border border-white/10 rounded-full focus:outline-none focus:border-lime-accent/50 transition-all text-white placeholder:text-white/20 pr-40"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-8 bg-lime-accent text-black font-bold rounded-full hover:scale-95 transition-transform active:scale-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;