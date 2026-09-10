import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  TrendingUp,
  Target
} from 'lucide-react';

export interface AdCreativeItem {
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

export const adCreativeSlides: AdCreativeItem[] = [
  {
    id: 'ad-1',
    title: '26 January Republic Day: National Tribute Campaign',
    subtitle: 'National Holiday Campaign • IAF Fighter Jet Vapor & Tricolor Aura',
    image: '/Portfolio/Zee5%20Statics/AD%20Creative/26-JAN.jpg',
    resolution: '1080 × 1350 PX • High-CTR Social',
    coreTechnique: 'Atmospheric Tricolor Saffron/Navy/Green Grading & Jet Trails',
    explanation: 'A patriotic digital campaign commemorating India’s Republic Day. Features dynamic Indian Air Force fighter jets slicing through deep saffron and emerald atmospheric smoke, layered behind proud Indian Armed Forces silhouettes and crisp serif typography.',
    tools: ['Adobe Photoshop', 'Atmospheric Smoke Compositing', 'Tricolor Gradient Mapping', 'Jet Trail Vector Lighting'],
    colors: ['#FF9933', '#000080', '#138808', '#FFFFFF']
  },
  {
    id: 'ad-2',
    title: 'Bhagwat OTT Subscription Campaign: Arshad Warsi',
    subtitle: 'Commercial Performance Banner • ZEE5 Original Acquisition',
    image: '/Portfolio/Zee5%20Statics/AD%20Creative/AD-BHAGWAT.jpg',
    resolution: '1080 × 1350 PX • Commercial Display',
    coreTechnique: 'High-Conversion CTA Hierarchy & Crime Noir Atmosphere',
    explanation: 'Designed to drive high subscription conversions for Arshad Warsi’s crime thriller Bhagwat. Balances suspenseful character gaze, high-contrast rim lighting, and prominent "Watch only on ZEE5" CTA placement optimized for click-through performance.',
    tools: ['Adobe Photoshop', 'Conversion Eye-Tracking Flow', 'Key Light Balance', 'OTT Badge Architecture'],
    colors: ['#8B0000', '#D97706', '#0F172A', '#F8FAFC']
  },
  {
    id: 'ad-3',
    title: 'Performance Acquisition Creative: Protagonist Hook',
    subtitle: 'Cross-Platform Display • Character-Led Subscription Driver',
    image: '/Portfolio/Zee5%20Statics/AD%20Creative/AD-Creative-MALE.jpg',
    resolution: '1080 × 1350 PX • Multi-Placement Ad',
    coreTechnique: 'Focal Isolation & Clean Digital Commercial Layout',
    explanation: 'A sleek, performance-tested commercial banner engineered for programmatic ad networks. Features razor-sharp subject cutouts, directional lighting accents, and uncluttered copy real-estate ensuring instant readability on mobile screens.',
    tools: ['Adobe Photoshop', 'Pen Tool Masking', 'Soft Ambient Fill', 'Mobile Viewport Optimization'],
    colors: ['#0284C7', '#F59E0B', '#1E293B', '#FFFFFF']
  }
];

export default function Zee5AdCreatives() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = adCreativeSlides[currentIndex] || adCreativeSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < adCreativeSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : adCreativeSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || adCreativeSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < adCreativeSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, adCreativeSlides.length]);

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
  }, [adCreativeSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 font-bold flex items-center gap-1.5">
              <Target size={12} className="text-sky-400" />
              PERFORMANCE MARKETING & NATIONAL CAMPAIGNS • ZEE5 PREMIUM
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            ZEE5 Commercials & High-Conversion Ad Creatives
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            26-Jan Republic Day • Bhagwat (Arshad Warsi) • Subscription Conversion Architecture
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {adCreativeSlides.length} CREATIVES
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Previous creative"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Next creative"
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
          <div className="group relative w-full max-w-md mx-auto aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl transition-all hover:border-[#444]">
            
            {/* Resolution watermark */}
            <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
              {currentSlide.resolution}
            </div>

            {/* Performance badge */}
            <div className="absolute top-3 right-3 z-10 bg-sky-500/20 backdrop-blur-sm border border-sky-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-sky-300 font-bold flex items-center gap-1">
              <TrendingUp size={11} className="text-sky-400" />
              <span>High CTR Asset</span>
            </div>

            {/* Creative image */}
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title}
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

          {/* FILMSTRIP THUMBNAILS */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {adCreativeSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative border p-1 transition flex flex-col items-center bg-[#111111] ${
                  currentIndex === idx 
                    ? 'border-sky-400 ring-1 ring-sky-400/50' 
                    : 'border-[#222] opacity-60 hover:opacity-100 hover:border-zinc-500'
                }`}
              >
                <div className="h-16 w-full overflow-hidden flex items-center justify-center bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-300 mt-1 truncate w-full text-center">
                  0{idx + 1} • {slide.id.split('-')[1]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: CRAFT INFORMATION & TECHNIQUE DETAILS */}
        <div className="lg:col-span-6 space-y-5 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase bg-[#082f49] text-sky-300 border border-sky-800/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
              <Sparkles size={11} className="text-sky-400" />
              Digital Performance Advertising
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {currentSlide.title}
            </h4>
            <p className="font-mono text-[11px] text-sky-400 font-semibold tracking-wider uppercase">
              {currentSlide.subtitle}
            </p>
          </div>

          <div className="h-[1px] bg-[#222222]" />

          {/* Core Technique */}
          <div className="space-y-1">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Core Commercial Technique:
            </span>
            <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-3 border border-[#262626] leading-relaxed">
              ❖ {currentSlide.coreTechnique}
            </p>
          </div>

          {/* Detailed breakdown */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Marketing Strategy & Layout Design:
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {currentSlide.explanation}
            </p>
          </div>

          {/* Active Toolkit */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Active Software & Creative Stack:
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
              Campaign Color Swatches:
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
              <span>Fullscreen Ad Inspector</span>
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
              <p className="font-mono text-[10px] text-sky-400 uppercase">
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
              title="Previous creative"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next creative"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>PERFORMANCE MARKETING MASTER • ZEE5 AD NETWORK ARCHIVE</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
