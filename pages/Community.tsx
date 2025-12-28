
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { useApp } from '../App';

const POSTS = [
  {
    title: 'How to choose your first NFT collection?',
    desc: 'Deep dive into market analysis and rare trait discovery for beginners.',
    date: '2 Days ago',
    category: 'Guides',
    image: 'https://picsum.photos/seed/blog1/800/500'
  },
  {
    title: 'The future of digital art in Metaverse',
    desc: 'Exploring virtual galleries and the impact of VR on digital ownership.',
    date: '4 Days ago',
    category: 'Metaverse',
    image: 'https://picsum.photos/seed/blog2/800/500'
  }
];

const Community: React.FC = () => {
  const { show } = useApp();

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Join the <span className="lime-accent">Circle</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Stay up to date with the latest news, events, and discussions from the digital art ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {POSTS.map((post, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/9] rounded-[40px] overflow-hidden mb-8 glass-card p-3">
              <img src={post.image} className="w-full h-full object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-700" alt={post.title} />
            </div>
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-lime-accent text-black text-[10px] font-extrabold uppercase rounded-full">{post.category}</span>
                <span className="text-white/40 text-sm font-bold">{post.date}</span>
              </div>
              <h2 className="text-3xl font-bold group-hover:text-lime-accent transition-colors">{post.title}</h2>
              <p className="text-white/50 leading-relaxed text-lg">{post.desc}</p>
              
              <div className="flex items-center gap-6 pt-4">
                <button onClick={(e) => { e.stopPropagation(); show("Comment feature coming soon!"); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <MessageSquare size={18} /> <span className="text-sm font-bold">24</span>
                </button>
                <button onClick={(e) => { e.stopPropagation(); show("Added to favorites!"); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <Heart size={18} /> <span className="text-sm font-bold">1.2K</span>
                </button>
                <button onClick={(e) => { e.stopPropagation(); show("Post shared!"); }} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <Share2 size={18} /> <span className="text-sm font-bold">Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card rounded-[60px] p-12 md:p-20 flex flex-col items-center text-center space-y-8">
        <h3 className="text-4xl font-extrabold">Ready to join our Discord?</h3>
        <p className="text-white/50 max-w-lg">Connect with 50,000+ artists and collectors in our private community server.</p>
        <button 
          onClick={() => window.open("https://discord.com", "_blank")}
          className="px-12 py-5 bg-white text-black font-extrabold rounded-full hover:bg-lime-accent transition-colors flex items-center gap-4"
        >
          Join Discord ✦
        </button>
      </div>
    </div>
  );
};

export default Community;
