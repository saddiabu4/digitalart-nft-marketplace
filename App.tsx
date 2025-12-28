
import React, { useState, createContext, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Create from './pages/Create';
import Artists from './pages/Artists';
import Community from './pages/Community';
import { BellRing } from 'lucide-react';

// Navigation & Notification Context
const AppContext = createContext({
  show: (msg: string) => {},
  page: 'home',
  setPage: (p: string) => {},
});

export const useApp = () => useContext(AppContext);

const App: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [page, setPage] = useState('home');

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'marketplace': return <Marketplace />;
      case 'create': return <Create />;
      case 'artists': return <Artists />;
      case 'community': return <Community />;
      default: return <Home />;
    }
  };

  return (
    <AppContext.Provider value={{ show: showNotification, page, setPage }}>
      <div className="min-h-screen bg-[#05070a] text-white selection:bg-[#d4ff00] selection:text-black">
        {/* Animated background glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4ff00]/5 blur-[120px] rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"
          ></motion.div>
        </div>

        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="pt-24 min-h-[calc(100vh-80px)]"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <Footer />

        {/* Global Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 20, x: '-50%' }}
              className="fixed bottom-10 left-1/2 z-[100] bg-lime-accent text-black px-6 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 border border-black/10"
            >
              <BellRing size={20} />
              {notification}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
};

export default App;
