import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  Sparkles, 
  PartyPopper,
  Cake,
  Star
} from 'lucide-react';

export default function Zee5BdayCreative() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const bdayItem = {
    title: 'Celebrity Birthday Creative: Bhuvan Arora',
    subtitle: 'Special Tribute Static • Farzi Breakout Star Celebration',
    image: "/Portfolio/Zee5%20Statics/BDAY%20Creative/Bhuvan-Arora-B'Day.jpg",
    resolution: '1080 × 1350 PX • High-Engagement Social',
    coreTechnique: 'Retro Pop Typography, Confetti VFX & Specular Rim Light',
    explanation: 'A vibrant celebrity birthday tribute designed for actor Bhuvan Arora (celebrated for his breakout performance in Farzi). Integrates energetic multi-colored retro pop typography, dynamic celebratory confetti particle bursts, crisp portrait rim lighting, and festive party tones crafted for maximum audience re-shares and celebrity engagement.',
    tools: ['Adobe Photoshop', 'Pen Tool Isolation', 'Party Confetti VFX Overlay', 'Retro 3D Typography', 'Rim Light Accents'],
    colors: ['#F43F5E', '#F59E0B', '#8B5CF6', '#FFFFFF']
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full text-white">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222222] pb-4 mb-6 gap-3 text-left">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-[#f43f5e] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-rose-400 font-bold flex items-center gap-1.5">
              <PartyPopper size={12} className="text-rose-400" />
              CELEBRITY TRIBUTE & FESTIVE MARKETING • ZEE5 SOCIALS
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Celebrity Birthday Creative: Bhuvan Arora
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Farzi Star Tribute • Retro Pop Typography • Confetti Particle Compositing
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase bg-rose-950/60 text-rose-300 border border-rose-800/60 px-3 py-1 font-bold flex items-center gap-1.5">
            <Cake size={12} className="text-rose-400" />
            Celebrity Special
          </span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN SHOWCASE CONTAINER */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* LEFT COLUMN: HERO IMAGE */}
        <div className="lg:col-span-6 space-y-4">
          <div className="group relative w-full max-w-md mx-auto aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl transition-all hover:border-[#444]">
            
            {/* Resolution watermark */}
            <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
              {bdayItem.resolution}
            </div>

            {/* Birthday badge */}
            <div className="absolute top-3 right-3 z-10 bg-rose-500/20 backdrop-blur-sm border border-rose-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-rose-300 font-bold flex items-center gap-1">
              <Star size={11} className="text-rose-400" />
              <span>B'Day Special</span>
            </div>

            {/* Creative image */}
            <img 
              src={bdayItem.image} 
              alt={bdayItem.title}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Quick lightbox zoom overlay button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-3 right-3 z-10 bg-[#111111]/90 backdrop-blur-md border border-[#333] hover:border-white px-2.5 py-1.5 text-[9px] font-mono uppercase tracking-wider text-white flex items-center gap-1.5 transition"
            >
              <Maximize2 size={11} />
              <span>Inspect High-Res</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: CRAFT INFORMATION & TECHNIQUE DETAILS */}
        <div className="lg:col-span-6 space-y-5 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase bg-[#380e1a] text-rose-300 border border-rose-900/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
              <Sparkles size={11} className="text-rose-400" />
              Celebrity Social Media Craft
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {bdayItem.title}
            </h4>
            <p className="font-mono text-[11px] text-rose-400 font-semibold tracking-wider uppercase">
              {bdayItem.subtitle}
            </p>
          </div>

          <div className="h-[1px] bg-[#222222]" />

          {/* Core Technique */}
          <div className="space-y-1">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Core Graphic Design Technique:
            </span>
            <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-3 border border-[#262626] leading-relaxed">
              ❖ {bdayItem.coreTechnique}
            </p>
          </div>

          {/* Detailed breakdown */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Creative Execution & Narrative:
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {bdayItem.explanation}
            </p>
          </div>

          {/* Active Toolkit */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Active Software & Particle Stack:
            </span>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {bdayItem.tools.map((tool, i) => (
                <span key={i} className="rounded-none bg-[#1a1a1a] px-2.5 py-1 text-[10px] text-zinc-300 border border-[#2c2c2c] font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Festive Party Color Harmonies:
            </span>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {bdayItem.colors.map((color, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span 
                    className="h-3.5 w-3.5 rounded-none border border-white/20 shadow-sm" 
                    style={{ backgroundColor: color }} 
                  />
                  <span className="font-mono text-[9px] text-zinc-400 uppercase font-bold">{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="w-full sm:w-auto rounded-none bg-white text-black hover:bg-zinc-200 transition px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2"
            >
              <Maximize2 size={13} />
              <span>Fullscreen Birthday Inspector</span>
            </button>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6">
          
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4">
            <div className="text-left">
              <h5 className="font-display text-sm font-bold uppercase text-white tracking-wider">
                {bdayItem.title}
              </h5>
              <p className="font-mono text-[10px] text-rose-400 uppercase">
                {bdayItem.subtitle} • {bdayItem.resolution}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
                className="p-2 bg-[#111] border border-[#333] hover:border-white text-zinc-300 hover:text-white transition"
                title="Zoom out"
              >
                <ZoomOut size={15} />
              </button>
              <span className="font-mono text-[10px] text-zinc-400 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                className="p-2 bg-[#111] border border-[#333] hover:border-white text-zinc-300 hover:text-white transition"
                title="Zoom in"
              >
                <ZoomIn size={15} />
              </button>
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomLevel(1);
                }}
                className="p-2 bg-red-950/40 border border-red-800/60 hover:bg-red-900 text-red-200 hover:text-white transition ml-2"
                title="Close (Esc)"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div className="relative flex-1 flex items-center justify-center overflow-auto">
            <img 
              src={bdayItem.image} 
              alt={bdayItem.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[82vh] max-w-[90vw] object-contain transition-transform duration-200 select-none shadow-2xl"
            />
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>CELEBRITY SPECIAL MASTER • ZEE5 SOCIAL TRIBUTE ARCHIVE</span>
            <span>ESC TO EXIT FULLSCREEN</span>
          </div>

        </div>
      )}

    </div>
  );
}
