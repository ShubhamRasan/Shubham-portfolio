import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Instagram,
  Palette
} from 'lucide-react';

export interface LogoSlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  resolution: string;
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const logoSlides: LogoSlideItem[] = [
  {
    id: 'logo-1',
    title: 'ZEE5 Christmas Holiday Edition Logo',
    subtitle: 'Seasonal Brand Adaptation • Festive Santa Hat & Snow Frosting',
    image: '/Portfolio/Zee5%20Statics/Zee5%20Logo/ZEE-5-Christmas-logo-Recovered.jpg',
    resolution: '1080 × 1080 PX • Square Vector / 3D',
    coreTechnique: 'Organic Snow Frosting Displacement & Santa Hat 3D Integration',
    explanation: 'A festive brand identity adaptation engineered for ZEE5’s official Instagram and social platforms during the winter holiday season. Integrates a plush 3D Santa hat over the iconic "5" numeral, detailed crystalline snow accumulation along the circular boundaries, and delicate holiday sparkles.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Snow Frosting Brush & Displacement', 'Plush Fabric Shading'],
    colors: ['#DC2626', '#FFFFFF', '#7C3AED', '#FEF08A']
  },
  {
    id: 'logo-2',
    title: 'ZEE5 Official Social Media Handle Logo (SM)',
    subtitle: 'Brand Profile Avatar • Metallic Bevel & Chromatic Edge',
    image: '/Portfolio/Zee5%20Statics/Zee5%20Logo/zee5-logo-SM.jpg',
    resolution: '1080 × 1080 PX • Master Brand Icon',
    coreTechnique: '3D Bevel & Emboss, Metallic Sheen & Micro-Scale Legibility',
    explanation: 'Optimized for high-contrast visibility at small circular avatar sizes (32×32 px on Instagram/Twitter/YouTube). Features subtle metallic beveling, inner glow refraction, and an authoritative dark platform background that enhances brand prestige.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', '3D Metallic Emboss', 'Sub-Pixel Micro-Display Tuning'],
    colors: ['#7C3AED', '#3B82F6', '#09090B', '#FFFFFF']
  }
];

export default function Zee5LogoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = logoSlides[currentIndex] || logoSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < logoSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : logoSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || logoSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < logoSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, logoSlides.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [logoSlides.length]);

  return (
    <div 
      className="relative w-full text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222222] pb-4 mb-6 gap-3 text-left">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 font-bold flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-purple-400" />
              OFFICIAL SOCIAL MEDIA BRAND IDENTITY & CUSTOM LOGO SUITE
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            ZEE5 Custom Logos: Holiday & Social Brand Suite
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Official Instagram Handles • Christmas Holiday Edition • App Icon System
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {logoSlides.length} BRAND MARKS
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Previous logo"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Next logo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN SHOWCASE CONTAINER */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* LEFT COLUMN: HERO IMAGE & FILMSTRIP */}
        <div className="lg:col-span-6 space-y-4">
          <div className="group relative w-full max-w-sm mx-auto aspect-square cursor-zoom-in rounded-none overflow-hidden bg-[#0e0e0e] border border-[#222222] shadow-2xl transition-all hover:border-[#444] flex items-center justify-center p-6">
            
            {/* Resolution watermark */}
            <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
              {currentSlide.resolution}
            </div>

            {/* Brand badge */}
            <div className="absolute top-3 right-3 z-10 bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1">
              <Instagram size={11} className="text-purple-400" />
              <span>Official Social Mark</span>
            </div>

            {/* Logo image */}
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title}
              className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer drop-shadow-2xl"
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

          {/* FILMSTRIP THUMBNAILS */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {logoSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative border p-2 transition flex flex-col items-center bg-[#111111] ${
                  currentIndex === idx 
                    ? 'border-purple-400 ring-1 ring-purple-400/50' 
                    : 'border-[#222] opacity-60 hover:opacity-100 hover:border-zinc-500'
                }`}
              >
                <div className="h-20 w-full overflow-hidden flex items-center justify-center bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 mt-1 truncate w-full text-center">
                  0{idx + 1} • {slide.title.split(':')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: CRAFT INFORMATION & TECHNIQUE DETAILS */}
        <div className="lg:col-span-6 space-y-5 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase bg-[#2e1065] text-purple-300 border border-purple-800/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
              <Palette size={11} className="text-purple-400" />
              Brand Identity & Iconography
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {currentSlide.title}
            </h4>
            <p className="font-mono text-[11px] text-purple-400 font-semibold tracking-wider uppercase">
              {currentSlide.subtitle}
            </p>
          </div>

          <div className="h-[1px] bg-[#222222]" />

          {/* Core Technique */}
          <div className="space-y-1">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Core Brand Craft & Vector/3D Technique:
            </span>
            <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-3 border border-[#262626] leading-relaxed">
              ❖ {currentSlide.coreTechnique}
            </p>
          </div>

          {/* Detailed breakdown */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Identity System & Social Handle Strategy:
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {currentSlide.explanation}
            </p>
          </div>

          {/* Active Toolkit */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Active Software & Vector Stack:
            </span>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {currentSlide.tools.map((tool, i) => (
                <span key={i} className="rounded-none bg-[#1a1a1a] px-2.5 py-1 text-[10px] text-zinc-300 border border-[#2c2c2c] font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Brand Palette Harmonies:
            </span>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {currentSlide.colors.map((color, i) => (
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
              <span>Fullscreen Logo Inspector</span>
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
                {currentSlide.title}
              </h5>
              <p className="font-mono text-[10px] text-purple-400 uppercase">
                {currentSlide.subtitle} • {currentSlide.resolution}
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
              src={currentSlide.image} 
              alt={currentSlide.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[82vh] max-w-[90vw] object-contain transition-transform duration-200 select-none shadow-2xl"
            />

            {/* Floating Next/Prev on stage */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Previous brand mark"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next brand mark"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>OFFICIAL BRAND IDENT SUITE • ZEE5 SOCIAL MEDIA ARCHIVE</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
