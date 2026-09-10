import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  Sparkles,
  SlidersHorizontal,
  Camera,
  Layers,
  CheckCircle2
} from 'lucide-react';

export interface HeroPhotoSlide {
  id: 'studio' | 'original';
  title: string;
  badge: string;
  badgeColor: string;
  image: string;
  layerTag: string;
  headline: string;
  subheadline: string;
  description: string;
  specs: string[];
  values: string[];
}

export const heroSlides: HeroPhotoSlide[] = [
  {
    id: 'studio',
    title: 'Studio Cut',
    badge: 'SR MASTER | AI-ARTIST',
    badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    image: '/shubham-portrait.jpg',
    layerTag: 'LAYER 01: STUDIO_COMPOSITE.RAW',
    headline: 'Shubham Rasanbhaire',
    subheadline: 'Visual Storyteller & Digital Artist',
    description: 'Master studio retouch featuring subtle chiaroscuro rim lighting, frequency separation skin texture preservation, and cinematic depth calibration.',
    specs: ['4K Ultra HD', '300 DPI Studio Grade', 'Chiaroscuro Rim Light', 'Composite Grade'],
    values: [
      'Absolute priority on pure layout enhancement & pixel alignment',
      'Complex composite grading that speaks cinematic stories'
    ]
  },
  {
    id: 'original',
    title: 'Original Portrait',
    badge: 'SR ORIGINAL | RAW SESSION',
    badgeColor: 'text-sky-400 border-sky-500/40 bg-sky-500/10',
    image: '/shubham-original-square.jpg',
    layerTag: 'LAYER 02: ORIGINAL_PORTRAIT.RAW',
    headline: 'Shubham Rasanbhaire',
    subheadline: 'Authentic Studio Session Capture',
    description: 'The untouched studio capture frame showcasing natural presence, genuine expression, and authentic ambient lighting before post-production compositing.',
    specs: ['Raw Sensor Capture', 'Natural Tungsten Fill', 'Authentic Expression', 'Foundation Layer'],
    values: [
      'Authentic foundation for all digital key art and personal branding',
      'True-to-life color calibration and uncompressed detail capture'
    ]
  }
];

export default function HeroPhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const currentSlide = heroSlides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  // Auto-slide effect (toggles every 3.5 seconds, pauses on hover or when lightbox is open)
  useEffect(() => {
    if (isLightboxOpen || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Outer Mockup Card Container */}
      <div className="rounded-none border border-[#222222] bg-[#111111] p-4 sm:p-6 shadow-2xl space-y-4 sm:space-y-5 text-left">

        {/* Card Header: Window Controls & Slide Selector */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-3">

          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 opacity-70">
              <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
              <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            </div>
          </div>

          {/* Quick Carousel Toggle Buttons */}
          <div className="flex items-center gap-1 bg-[#181818] p-0.5 border border-[#2a2a2a]">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase transition-all ${currentIndex === idx
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {slide.title}
              </button>
            ))}
          </div>

        </div>

        {/* Carousel Viewport Container */}
        <div className="relative aspect-square w-full rounded-none overflow-hidden bg-black border border-[#222222] group shadow-inner select-none">

          {/* Slide Image */}
          <img
            src={currentSlide.image}
            alt={currentSlide.headline}
            className="h-full w-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          />

          {/* Subtle vignette gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Right Badge: Studio Cut / Original Cut (Desktop only, mobile shows below) */}
          <div className={`hidden sm:flex absolute top-3 right-3 sm:top-4 sm:right-4 backdrop-blur-md font-mono text-[8px] sm:text-[9px] font-bold tracking-widest uppercase border px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-none shadow-md items-center gap-1.5 ${currentSlide.badgeColor}`}>
            <span>★</span>
            <span>{currentSlide.badge}</span>
          </div>

          {/* Top-Left Carousel Counter (Desktop only, mobile shows below) */}
          <div className="hidden sm:block absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/75 backdrop-blur-md text-zinc-300 font-mono text-[8px] sm:text-[9px] tracking-widest uppercase border border-[#333] px-2 py-0.5 sm:px-2.5 sm:py-1">
            0{currentIndex + 1} / 0{heroSlides.length}
          </div>

          {/* Carousel Left / Right Arrow Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all flex items-center justify-center opacity-80 hover:opacity-100 shadow-lg"
            title="Previous photo"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all flex items-center justify-center opacity-80 hover:opacity-100 shadow-lg"
            title="Next photo"
          >
            <ChevronRight size={16} />
          </button>

          {/* DESKTOP-ONLY Subtle Corner Overlay (COMPLETELY HIDDEN ON MOBILE TO KEEP PHOTO CLEAN) */}
          <div className="hidden sm:block absolute bottom-3 left-3 right-3 text-left pointer-events-none">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-400 tracking-wider font-extrabold uppercase">
                {currentSlide.layerTag}
              </span>
            </div>
            <p className="font-display font-bold text-lg text-white uppercase tracking-tight">
              {currentSlide.headline}
            </p>
            <p className="font-mono text-[9px] text-zinc-300 tracking-wider uppercase">
              {currentSlide.subheadline}
            </p>
          </div>

          {/* Quick Zoom Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-3 right-3 z-10 bg-[#111111]/85 backdrop-blur-md border border-[#333] hover:border-white px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-white hidden sm:flex items-center gap-1 transition"
          >
            <Maximize2 size={10} />
            <span>High-Res</span>
          </button>

        </div>

        {/* MOBILE DETAILS CONTAINER: CLEANLY PLACED BELOW THE PHOTO (ZERO TEXT ON PHOTO) */}
        <div className="sm:hidden block text-left space-y-2.5 pt-2 border-t border-[#222222]">
          <div className="flex items-center justify-between">
            <div className={`font-mono text-[8px] font-bold tracking-widest uppercase border px-2 py-0.5 rounded-none flex items-center gap-1 ${currentSlide.badgeColor}`}>
              <span>★</span>
              <span>{currentSlide.badge}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-zinc-300 bg-black/80 border border-[#333] px-2 py-0.5">
                0{currentIndex + 1} / 0{heroSlides.length}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="font-mono text-[8px] text-white bg-[#1a1a1a] border border-[#333] px-2 py-0.5 flex items-center gap-1 uppercase"
              >
                <Maximize2 size={9} />
                <span>Zoom</span>
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[8px] text-emerald-400 tracking-wider font-bold uppercase">
                {currentSlide.layerTag}
              </span>
            </div>
            <p className="font-display font-bold text-base text-white uppercase tracking-tight">
              {currentSlide.headline}
            </p>
            <p className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase">
              {currentSlide.subheadline}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            {/* Carousel Dots */}
            <div className="flex items-center gap-1.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? 'w-5 bg-white' : 'w-1.5 bg-zinc-600'
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-[9px] font-mono text-zinc-300 uppercase underline flex items-center gap-1"
            >
              <Maximize2 size={10} />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Technical Specs Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {currentSlide.specs.map((spec, i) => (
            <span key={i} className="rounded-none bg-[#181818] border border-[#2a2a2a] px-2 py-0.5 text-[9px] font-mono text-zinc-300">
              ❖ {spec}
            </span>
          ))}
        </div>

        {/* Work values list */}
        <div className="space-y-2 pt-1 border-t border-[#222222] text-[11px] sm:text-[12px] opacity-85">
          {currentSlide.values.map((val, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 bg-white shrink-0 mt-1.5" />
              <span className="text-[#cccccc] leading-relaxed font-light">{val}</span>
            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6">

          {/* Lightbox Header */}
          <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4 text-left">
            <div>
              <h5 className="font-display text-sm font-bold uppercase text-white tracking-wider">
                {currentSlide.headline} — {currentSlide.title}
              </h5>
              <p className="font-mono text-[10px] text-zinc-400 uppercase">
                {currentSlide.layerTag} • HIGH RESOLUTION PORTRAIT MASTER
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

          {/* Lightbox Stage */}
          <div className="relative flex-1 flex items-center justify-center overflow-auto">
            <img
              src={currentSlide.image}
              alt={currentSlide.headline}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[82vh] max-w-[90vw] object-contain transition-transform duration-200 select-none shadow-2xl"
            />

            {/* Stage Chevrons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>SHUBHAM RASANBHAIRE • PORTRAIT ARCHIVE</span>
            <span>ARROW KEYS TO SLIDE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
