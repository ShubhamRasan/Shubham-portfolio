import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldAlert,
  Film
} from 'lucide-react';

export interface RaakhSlideItem {
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

export const raakhSlides: RaakhSlideItem[] = [
  {
    id: 'raakh-1',
    title: 'Investigation Board: "Can JP Trust What He Sees?"',
    subtitle: 'Sub-Inspector JP • Forensic Evidence & Crime Pinboard',
    image: '/Portfolio/RAAKH-%20BANIJAY/Raakh-Static-Post.jpg',
    resolution: '1080 × 1440 PX',
    coreTechnique: 'Red String Forensic Pinboard & Bloodied Polaroids',
    explanation: 'Constructed an intense psychological crime board centering Sub-Inspector JP, connected by forensic red yarn to blood-stained vehicle plates (DLC 9421) and suspect Polaroids.',
    tools: ['Adobe Photoshop', 'Polaroid Blood Staining', 'Pushpin Shadow Logic', 'Film Grain Overlay'],
    colors: ['#B91C1C', '#D4AF37', '#1E293B', '#F8FAFC']
  },
  {
    id: 'raakh-2',
    title: 'Interrogation Suspense: "Tumhare Hathiyar Kya Hain"',
    subtitle: 'Rakesh Bedi • Sinister Psychological Dialogue',
    image: '/Portfolio/RAAKH-%20BANIJAY/Rakesh-Bedi-Dialogue-2.jpg',
    resolution: '1080 × 1440 PX',
    coreTechnique: 'Distressed Stamped Letterpress & Low-Key Lighting',
    explanation: 'Overlaid rough crimson and white stamped letterpress typography over an intense low-key portrait of veteran actor Rakesh Bedi, highlighting sinister lens glare against ash-black chalkboard textures.',
    tools: ['Adobe Photoshop', 'Distressed Letterpress Type', 'High-Pass Skin Grading', 'Ash Slate Composite'],
    colors: ['#DC2626', '#FFFFFF', '#D97706', '#0F172A']
  },
  {
    id: 'raakh-3',
    title: 'Mystery Confrontation: "Yeh Toh Tumhein Khud Hi Dhoondna Padega"',
    subtitle: 'Ali Fazal / Lead Profile • Sideways Suspicion Hook',
    image: '/Portfolio/RAAKH-%20BANIJAY/Rakesh-Bedi-Dialogue.jpg',
    resolution: '1080 × 1440 PX',
    coreTechnique: 'Asymmetrical Profile Framing & Stamped Headline Distress',
    explanation: 'Framed the protagonist’s cautious sideways gaze beneath bold crimson and white distressed headline typography, casting cinematic falloff shadows across his olive shirt.',
    tools: ['Adobe Photoshop', 'Shadow Falloff Tuning', 'Woodblock Type Texture', 'Raw Filter Contrast'],
    colors: ['#DC2626', '#FFFFFF', '#78350F', '#09090B']
  },
  {
    id: 'raakh-4',
    title: 'Motion Poster Key Art: The Full Crime Board',
    subtitle: 'Master Canvas • Parallax 3D Spatial Layout',
    image: '/Portfolio/RAAKH-%20BANIJAY/Raakh-Motion-Poster.jpg',
    resolution: '1080 × 1440 PX',
    coreTechnique: 'Multi-Plane Parallax Layering for Motion Teasers',
    explanation: 'Prepared high-resolution layer separations isolating the uniform badge, pushpins, taut strings, and blood splatters, engineered specifically for motion trailer deployment.',
    tools: ['Adobe Photoshop', 'Multi-Plane Smart Objects', 'Depth Masking', 'Atmospheric Haze'],
    colors: ['#991B1B', '#E2E8F0', '#334155', '#000000']
  },
  {
    id: 'raakh-5',
    title: 'Philosophy Teaser: "A Hero Will Rise To Find The Truth"',
    subtitle: 'Vertical Campaign • Distressed Woodblock Typography',
    image: '/Portfolio/RAAKH-%20BANIJAY/HERO-BANNA-PADTA-HAI.jpg',
    resolution: '1080 × 1920 PX',
    coreTechnique: 'Minimalist Noir Monochromatic Typographic Art',
    explanation: 'Stark, high-impact vertical teaser using weathered woodblock letterforms in visceral blood red and off-white against a pure pitch-black void, establishing the film’s moral weight.',
    tools: ['Adobe Photoshop', 'Distressed Ink Bleed', 'Letterpress Texture', 'Vertical Format 9:16'],
    colors: ['#DC2626', '#FFFFFF', '#000000', '#7F1D1D']
  }
];

export default function RaakhSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = raakhSlides[currentIndex] || raakhSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < raakhSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : raakhSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || raakhSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < raakhSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, raakhSlides.length]);

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
  }, [raakhSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#dc2626] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
              ORIGINAL CRIME NOIR THRILLER • BANIJAY ASIA & ENDEMOLSHINE INDIA
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Raakh: Crime Thriller & Key Art Campaign
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Sub-Inspector JP • Rakesh Bedi • Forensic Crime Boards & Distressed Dialogue Typography
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {raakhSlides.length} ARTWORKS
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Next Slide (Right Arrow)"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN ARTWORK-FIRST LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: HERO IMAGE SLIDESHOW */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div 
            onClick={() => {
              setIsLightboxOpen(true);
              setZoomLevel(1);
            }}
            className="group relative w-full max-w-md aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl hover:border-[#dc2626]/50 transition-all flex items-center justify-center"
          >
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title}
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle top & bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity" />

            {/* Floating Top Tag */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="bg-black/85 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white border border-[#333]">
                ★ RAAKH NOIR THRILLER
              </span>
              <span className="px-2 py-0.5 font-mono text-[9px] uppercase font-bold text-white bg-[#dc2626]">
                {currentSlide.resolution}
              </span>
            </div>

            {/* Hover Fullscreen Prompt: In corner, keeping center 100% visible */}
            <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block">
              <div className="flex items-center gap-1.5 bg-black/90 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1.5 border border-white/30 shadow-xl">
                <ZoomIn size={11} className="text-[#dc2626]" />
                <span>INSPECT EDIT</span>
              </div>
            </div>

            {/* Slide Navigation Arrows on the Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#dc2626] text-white border border-white/20 transition opacity-80 hover:opacity-100"
              title="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#dc2626] text-white border border-white/20 transition opacity-80 hover:opacity-100"
              title="Next"
            >
              <ChevronRight size={18} />
            </button>

            {/* Bottom active subject strip */}
            <div className="absolute bottom-3 left-3 right-3 text-left bg-black/85 backdrop-blur-md p-2.5 border border-[#2a2a2a]">
              <span className="font-mono text-[8px] text-[#dc2626] uppercase tracking-wider font-extrabold block">
                {currentSlide.coreTechnique}
              </span>
              <p className="font-display text-sm font-bold text-white uppercase truncate">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="flex items-center gap-2 overflow-x-auto w-full max-w-md pt-3 pb-1 scrollbar-none justify-center">
            {raakhSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative shrink-0 aspect-[3/4] w-12 sm:w-14 rounded-none overflow-hidden border transition-all ${
                  currentIndex === idx 
                    ? 'border-[#dc2626] scale-105 shadow-[0_0_8px_rgba(220,38,38,0.6)]' 
                    : 'border-[#2a2a2a] opacity-50 hover:opacity-100 hover:border-[#555]'
                }`}
                title={s.title}
              >
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0.5 right-1 font-mono text-[7px] text-white font-extrabold bg-black/80 px-1">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: MAIN INFORMATION (UNCLUTTERED & CRAFT-FOCUSED) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Main Slide Title & Identification */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#dc2626] font-extrabold border border-[#dc2626]/30 bg-[#dc2626]/10 px-2 py-0.5">
                ARTWORK {currentIndex + 1} OF {raakhSlides.length}
              </span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase font-semibold">
                • {currentSlide.resolution}
              </span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight leading-tight">
              {currentSlide.title}
            </h4>

            <p className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* CORE DESIGN TECHNIQUE (HIGHLIGHTED PILL) */}
          <div className="rounded-none border border-[#222222] bg-[#141414] p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Sparkles size={13} className="text-[#dc2626]" />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">
                KEY DESIGN PATTERN & TREND
              </span>
            </div>
            <span className="inline-block text-white font-display text-sm font-bold uppercase tracking-wider">
              {currentSlide.coreTechnique}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {currentSlide.explanation}
            </p>
          </div>

          {/* TOOLS & BRAND SWATCHES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1c1c1c] pt-4">
            <div className="space-y-1.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                Toolkit Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentSlide.tools.map((t, idx) => (
                  <span key={idx} className="rounded-none bg-black border border-[#2c2c2c] px-2.5 py-1 font-mono text-[9px] text-zinc-300">
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                Brand Palette:
              </span>
              <div className="flex items-center gap-2 pt-0.5">
                {currentSlide.colors.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="h-3.5 w-3.5 rounded-none border border-white/20" style={{ backgroundColor: c }} />
                    <span className="font-mono text-[8px] text-zinc-400 uppercase font-bold">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDE NAVIGATION CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-3 pt-2 flex-nowrap">
            <button
              onClick={handlePrev}
              className="flex-1 rounded-none bg-[#181818] border border-[#2c2c2c] py-2 px-3 sm:py-2.5 sm:px-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300 hover:bg-white hover:text-black transition whitespace-nowrap text-center"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 rounded-none bg-[#dc2626] hover:bg-[#b91c1c] py-2 px-3 sm:py-2.5 sm:px-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white transition whitespace-nowrap text-center"
            >
              Next Artwork →
            </button>
            <button
              onClick={() => {
                setIsLightboxOpen(true);
                setZoomLevel(1);
              }}
              className="rounded-none bg-[#141414] border border-[#2c2c2c] p-2 sm:p-2.5 text-zinc-400 hover:text-white hover:border-[#dc2626] transition shrink-0"
              title="Fullscreen Inspect"
            >
              <Maximize2 size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX INSPECTOR */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-white">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-[#222222] bg-[#0c0c0c] px-6 py-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#dc2626]">
                [ RAAKH THRILLER KEY ART INSPECTOR ]
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-zinc-400">
                • {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 border border-[#2c2c2c] bg-black px-2 py-1">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                  className="p-1 hover:text-[#dc2626] transition"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="font-mono text-[10px] text-zinc-400 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(3, z + 0.25))}
                  className="p-1 hover:text-[#dc2626] transition"
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
              </div>

              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomLevel(1);
                }}
                className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-[#dc2626] hover:text-white transition"
                title="Close Inspector (Esc)"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Image Body */}
          <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center">
            <div 
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              className="transition-transform duration-200 ease-out max-h-[85vh] max-w-[85vw] flex items-center justify-center"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="max-h-[80vh] w-auto aspect-[3/4] object-contain shadow-2xl border border-[#333]"
              />
            </div>

            {/* Modal Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#dc2626] text-white border border-white/20 transition"
              title="Previous Artwork"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#dc2626] text-white border border-white/20 transition"
              title="Next Artwork"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between border-t border-[#222222] bg-[#0c0c0c] px-6 py-2.5 font-mono text-[10px] text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold">{currentSlide.title}</span>
              <span>•</span>
              <span className="text-[#dc2626] font-semibold">{currentSlide.coreTechnique}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>USE ARROW KEYS TO BROWSE</span>
              <span>•</span>
              <span className="text-white">SLIDE {currentIndex + 1} OF {raakhSlides.length}</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
