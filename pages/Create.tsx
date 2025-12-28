
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Info, Image as ImageIcon } from 'lucide-react';
import { useApp } from '../App';

const Create: React.FC = () => {
  const { show } = useApp();

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Create Your <span className="lime-accent">Masterpiece</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Upload your digital assets and turn them into non-fungible tokens in just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Upload */}
          <div className="space-y-6">
            <label className="block text-sm font-bold uppercase tracking-widest text-white/40">Upload File</label>
            <div 
              onClick={() => show("Choose file from your device")}
              className="border-2 border-dashed border-white/10 rounded-[40px] aspect-square flex flex-col items-center justify-center space-y-4 cursor-pointer hover:border-lime-accent/40 hover:bg-lime-accent/5 transition-all group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-lime-accent group-hover:text-black transition-colors">
                <Upload size={28} />
              </div>
              <div className="text-center">
                <p className="font-bold">PNG, GIF, WEBP, MP4</p>
                <p className="text-white/40 text-xs">Max size: 100MB</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-white/60">Item Name</label>
              <input 
                type="text" 
                placeholder="e.g. 'Cyber Abstract #01'"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-lime-accent/40 transition-all"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-white/60">Description</label>
              <textarea 
                rows={4}
                placeholder="Provide a detailed description of your item"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-lime-accent/40 transition-all resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-white/60">Price (ETH)</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-lime-accent/40 transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold text-white/60">Royalties (%)</label>
                <input 
                  type="number" 
                  placeholder="10"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-lime-accent/40 transition-all"
                />
              </div>
            </div>

            <button 
              onClick={() => show("Processing your minting request...")}
              className="w-full py-5 bg-lime-accent text-black font-extrabold rounded-2xl shadow-[0_10px_30px_rgba(212,255,0,0.2)] hover:scale-[1.02] transition-transform active:scale-95"
            >
              Create Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
