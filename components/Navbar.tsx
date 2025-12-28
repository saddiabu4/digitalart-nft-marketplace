
import React, { useState, useEffect } from 'react';
/* Added AnimatePresence to framer-motion imports */
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useApp } from '../App';

const Navbar: React.FC = () => {
  const { page, setPage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marketplace', id: 'marketplace' },
    { name: 'Create', id: 'create' },
    { name: 'Artists', id: 'artists' },
    { name: 'Community', id: 'community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => setPage('home')}
            className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            Digital<span className="lime-accent">Art</span>
          </button>
          
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => setPage(link.id)}
                  className={`text-sm font-medium transition-colors ${page === link.id ? 'text-lime-accent' : 'text-white/70 hover:text-white'}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setPage('community')}
            className="hidden md:block px-8 py-2.5 bg-lime-accent text-black font-bold rounded-full hover:scale-105 transition-transform active:scale-95 text-center"
          >
            Contact
          </button>
          
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-white/10 absolute top-full left-0 w-full shadow-2xl"
          >
            <ul className="flex flex-col gap-4 p-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => { setPage(link.id); setIsMobileMenuOpen(false); }}
                    className={`text-xl font-bold block ${page === link.id ? 'text-lime-accent' : 'text-white/60'}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <button 
                onClick={() => { setPage('community'); setIsMobileMenuOpen(false); }}
                className="w-full py-4 bg-lime-accent text-black font-bold rounded-full mt-4 text-center"
              >
                Contact
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;