import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Eye,
  CheckCircle2
} from 'lucide-react';

export interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const hindiSlides: SlideItem[] = [
  {
    id: 'hindi-1',
    title: 'Weekend Ka Vaar Viral Hook',
    subtitle: 'Salman Khan • "Which Is Your Favourite Season?"',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_2.jpg',
    coreTechnique: 'Text-Behind-Subject Depth Layering',
    explanation: 'Salman Khan precision-clipped with Photoshop Pen Tool and positioned over bold condensed typography (FAVOURITE SEASON) to create modern 3D spatial depth for viral social engagement.',
    tools: ['Adobe Photoshop', 'Pen Tool Masking', '3D Logo Composite'],
    colors: ['#FF0055', '#FFFFFF', '#1E3A8A', '#0A0A0A']
  },
  {
    id: 'hindi-2',
    title: 'Season 13: Iconic Rivalry',
    subtitle: 'Sidharth Shukla vs Asim Riaz',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_4.jpg',
    coreTechnique: 'Nostalgia Fandom & High-Contrast Tension',
    explanation: 'Framing Indian reality TV’s most famous unscripted confrontation. Background values are cooled down while skin highlights and facial tension are warmed up under a minimalist brutalist SEASON 13 header.',
    tools: ['Adobe Photoshop', 'Color Grading', 'Vignette Falloff'],
    colors: ['#FF0055', '#450A0A', '#FFFFFF', '#18181B']
  },
  {
    id: 'hindi-3',
    title: 'Season 18: Face-Off Tension',
    subtitle: 'Vivian Dsena vs Avinash Mishra',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_3.jpg',
    coreTechnique: 'Bilateral Character Symmetry',
    explanation: 'Balanced profile-to-profile symmetrical layout establishing raw house friction, graded with dual-temperature blue-purple set lighting and palace pillar textures.',
    tools: ['Adobe Photoshop', 'Ambient Glow', 'Micro-Sharpening'],
    colors: ['#FF0055', '#3B82F6', '#FFFFFF', '#1C1917']
  },
  {
    id: 'hindi-4',
    title: 'Season 19: Sisterhood & Emotion',
    subtitle: 'Raw Vulnerability in Banarasi Silks',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_.jpg',
    coreTechnique: 'Chiaroscuro & Fabric Zari Retouching',
    explanation: 'Humanizing reality TV through genuine connection. High-precision texture sharpening on royal blue and crimson Banarasi saree zari embroidery with dramatic warm rim lighting.',
    tools: ['Adobe Photoshop', 'Fabric Zari Boost', 'Chiaroscuro Lighting'],
    colors: ['#FF0055', '#991B1B', '#1E3A8A', '#D4AF37']
  }
];

export const marathiSlides: SlideItem[] = [
  {
    id: 'marathi-1',
    title: '3.1 TVR Historic Finale Record',
    subtitle: 'Riteish Deshmukh (Host) • Ratings Milestone',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/BB-TVR.jpg',
    coreTechnique: '3D Metallic Gold Typography',
    explanation: 'Modeled heavy 3D golden metallic numerals (3.1 TVR) with ruby-red inlays and specular highlights, celebrating the historic record-breaking finale with host Riteish Deshmukh in a sequined tuxedo.',
    tools: ['Photoshop 3D Styles', 'Gold Extrusion', 'Sequin Retouching'],
    colors: ['#D4AF37', '#FF0055', '#B91C1C', '#000000']
  },
  {
    id: 'marathi-2',
    title: 'Viral Trend: "Aap Kiske PAGLU HAIN? 🎀"',
    subtitle: 'Riteish Deshmukh & Top 5 Finalists',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/7.jpg',
    coreTechnique: 'Gen-Z Meme Trend Hijacking',
    explanation: 'Integrated the viral coquette pink ribbon bow trend (🎀) with localized fandom slang. Seamlessly composited 6 distinct character cutouts into a hierarchical pyramid with golden celebration bokeh.',
    tools: ['Photoshop Masking', '6-Person Stacking', 'Bokeh Blending'],
    colors: ['#F43F5E', '#D97706', '#FFFFFF', '#18181B']
  },
  {
    id: 'marathi-3',
    title: 'Ticket to Finale Arena',
    subtitle: 'Riteish Deshmukh in Tan Blazer',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/1.jpg',
    coreTechnique: 'Fiery Radial Dynamics & Brand Contour',
    explanation: 'High-energy radial fire vortex with flying sparks and celestial golden eye, wrapped in EndemolShine’s signature hot-pink outer perimeter border.',
    tools: ['Photoshop', 'Radial Blur', 'Fire Particles', 'Brand Contour'],
    colors: ['#EA580C', '#FF0055', '#D4AF37', '#000000']
  },
  {
    id: 'marathi-4',
    title: 'Finalist: Deepali Sayyed',
    subtitle: 'Regal Emerald Silk Saree',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/2.jpg',
    coreTechnique: 'Baroque Golden Mirror System',
    explanation: 'Antique golden rococo mirror creating a royal showcase for the contestant, contrasting deep emerald green silks against warm ambient smoke.',
    tools: ['Photoshop', 'Mirror Composite', 'Jewelry Gleam'],
    colors: ['#047857', '#D4AF37', '#FF0055', '#000000']
  },
  {
    id: 'marathi-5',
    title: 'Finalist: Anushri Mane',
    subtitle: 'Beaded Couture & Face Jewels',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/3.jpg',
    coreTechnique: 'High-Fashion Editorial Retouching',
    explanation: 'Frequency separation skin retouching preserving delicate rhinestone face pearls and couture tassel sleeves with warm amber illumination.',
    tools: ['Photoshop', 'Frequency Separation', 'Tassel Sharpening'],
    colors: ['#78350F', '#D4AF37', '#FF0055', '#FFFFFF']
  },
  {
    id: 'marathi-6',
    title: 'Finalist: Vishal Kotian',
    subtitle: 'Alpha Energy & Palace Gates',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/4.jpg',
    coreTechnique: 'Dynamic Alpha Energy & Specular Sculpting',
    explanation: 'Golden palace doors creating monumental grandeur, with sculpted specular highlights across muscular definition and silver chains.',
    tools: ['Photoshop', 'Dodge & Burn', 'Specular Sculpting'],
    colors: ['#D4AF37', '#18181B', '#FF0055', '#F59E0B']
  },
  {
    id: 'marathi-7',
    title: 'Finalist: Tanvi Kolte',
    subtitle: 'Traditional Crimson Silk',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/5.jpg',
    coreTechnique: 'Festive Glamour & Jewelry Accenting',
    explanation: 'Hand-stacked golden glass bangles and jhumkas sharpened with golden gleam, balanced inside the signature golden mirror frame.',
    tools: ['Photoshop', 'Glint Creation', 'Hue Control'],
    colors: ['#DC2626', '#D4AF37', '#FF0055', '#000000']
  },
  {
    id: 'marathi-8',
    title: 'Finalist: Raqesh Bapat',
    subtitle: 'Velvet Lapels & Signature Panther Brooch',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/6.jpg',
    coreTechnique: 'Gentleman Editorial & Velvet Texturing',
    explanation: 'Precision matte grading preserving rich black velvet lapels without crushing shadow detail, featuring the golden panther lapel brooch.',
    tools: ['Photoshop', 'Velvet Shadow Tuning', 'Eyewear Gradient'],
    colors: ['#D4AF37', '#09090B', '#FF0055', '#E4E4E7']
  },
  {
    id: 'marathi-9',
    title: 'Winner Announcement Live Template',
    subtitle: 'Grand Finale Telecast Deployment',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/Winner-Announcement-post.jpg',
    coreTechnique: 'Live Broadcast Production Template',
    explanation: 'Production-ready celebration template with golden confetti showers and glitter typography, built for 60-second turnaround upon live winner declaration.',
    tools: ['Photoshop', 'Multi-Plane Confetti', 'Smart Objects'],
    colors: ['#EC4899', '#D4AF37', '#FFFFFF', '#09090B']
  }
];

interface BigBossSlideshowProps {
  type: 'hindi' | 'marathi';
}

export default function BigBossSlideshow({ type }: BigBossSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const slides = type === 'hindi' ? hindiSlides : marathiSlides;
  const currentSlide = slides[currentIndex] || slides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, slides.length]);

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
  }, [slides.length]);

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
            <span className={`h-2 w-2 rounded-full ${type === 'hindi' ? 'bg-[#ff0055]' : 'bg-amber-400'} animate-pulse`} />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
              {type === 'hindi' ? 'COMMERCIAL BROADCASTER CAMPAIGN • BANIJAY × ENDEMOLSHINE INDIA' : 'REGIONAL BROADCAST MILESTONE • BANIJAY × ENDEMOLSHINE INDIA'}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            {type === 'hindi' ? 'Bigg Boss Hindi: Social Campaign' : 'Bigg Boss Marathi: 3.1 TVR & Finale'}
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            {type === 'hindi' ? 'Viral Engagement Edits & Depth Layering Systems' : 'Ratings Record Celebration & Baroque Finalist Systems'}
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {slides.length} ARTWORKS
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

      {/* TWO-COLUMN LAYOUT: LEFT SLIDESHOW (HERO IMAGE) + RIGHT MAIN INFORMATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: THE IMAGE SLIDESHOW (PROMINENT HERO) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div 
            onClick={() => {
              setIsLightboxOpen(true);
              setZoomLevel(1);
            }}
            className="group relative w-full max-w-md aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl hover:border-[#444] transition-all"
          >
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle top & bottom lighting vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity" />

            {/* Floating Top Tag */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="bg-black/80 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white border border-[#333]">
                {type === 'hindi' ? '★ BIGG BOSS HINDI' : '★ BIGG BOSS MARATHI'}
              </span>
              <span className={`px-2 py-0.5 font-mono text-[9px] uppercase font-bold text-white ${type === 'hindi' ? 'bg-[#ff0055]' : 'bg-amber-600'}`}>
                1080 × 1440 PX
              </span>
            </div>

            {/* Hover Fullscreen Prompt: In corner, keeping the center 100% visible */}
            <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block">
              <div className="flex items-center gap-1.5 bg-black/90 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1.5 border border-white/30 shadow-xl">
                <ZoomIn size={11} className={type === 'hindi' ? 'text-[#ff0055]' : 'text-amber-400'} />
                <span>INSPECT EDIT</span>
              </div>
            </div>

            {/* Slide Navigation Arrows on the Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black text-white border border-white/20 transition opacity-80 hover:opacity-100"
              title="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black text-white border border-white/20 transition opacity-80 hover:opacity-100"
              title="Next"
            >
              <ChevronRight size={18} />
            </button>

            {/* Bottom active subject strip */}
            <div className="absolute bottom-3 left-3 right-3 text-left bg-black/85 backdrop-blur-md p-2.5 border border-[#2a2a2a]">
              <span className="font-mono text-[8px] text-[#ff0055] uppercase tracking-wider font-extrabold block">
                {currentSlide.coreTechnique}
              </span>
              <p className="font-display text-sm font-bold text-white uppercase truncate">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="flex items-center gap-2 overflow-x-auto w-full max-w-md pt-3 pb-1 scrollbar-none justify-center">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative shrink-0 aspect-[3/4] w-12 sm:w-14 rounded-none overflow-hidden border transition-all ${
                  currentIndex === idx 
                    ? type === 'hindi'
                      ? 'border-[#ff0055] scale-105 shadow-[0_0_8px_rgba(255,0,85,0.5)]'
                      : 'border-amber-400 scale-105 shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                    : 'border-[#2a2a2a] opacity-50 hover:opacity-100 hover:border-[#555]'
                }`}
                title={s.title}
              >
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0.5 right-1 font-mono text-[7px] text-white font-extrabold">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: ONLY THE MAIN INFORMATION (UNCLUTTERED & ESSENTIAL) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Main Slide Title & Identification */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff0055] font-extrabold border border-[#ff0055]/30 bg-[#ff0055]/10 px-2 py-0.5">
                ARTWORK {currentIndex + 1} OF {slides.length}
              </span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase font-semibold">
                • 1080 × 1440 SOCIAL EDITORIAL
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
              <Sparkles size={13} className={type === 'hindi' ? 'text-[#ff0055]' : 'text-amber-400'} />
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
              className={`flex-1 rounded-none py-2 px-3 sm:py-2.5 sm:px-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition whitespace-nowrap text-center ${
                type === 'hindi' ? 'bg-[#ff0055] hover:bg-[#d60047] text-white' : 'bg-amber-600 hover:bg-amber-500 text-black'
              }`}
            >
              Next Artwork →
            </button>
            <button
              onClick={() => {
                setIsLightboxOpen(true);
                setZoomLevel(1);
              }}
              className="rounded-none bg-[#141414] border border-[#2c2c2c] p-2 sm:p-2.5 text-zinc-400 hover:text-white hover:border-white transition shrink-0"
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
              <span className={`font-mono text-xs font-black uppercase tracking-widest ${type === 'hindi' ? 'text-[#ff0055]' : 'text-amber-400'}`}>
                [ {type === 'hindi' ? 'HINDI' : 'MARATHI'} EDITORIAL INSPECTOR ]
              </span>
              <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
                {currentSlide.title} • {currentSlide.coreTechnique}
              </span>
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#1a1a1a] border border-[#333] px-2 py-1 gap-2 font-mono text-xs">
                <button 
                  onClick={() => setZoomLevel((prev) => Math.max(0.5, prev - 0.25))}
                  className="p-1 hover:text-[#ff0055] transition"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[11px] w-12 text-center text-zinc-300">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                  className="p-1 hover:text-[#ff0055] transition"
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
                <button 
                  onClick={() => setZoomLevel(1)}
                  className="px-1.5 py-0.5 text-[9px] text-zinc-400 hover:text-white border-l border-[#333]"
                  title="Reset Zoom"
                >
                  RESET
                </button>
              </div>

              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomLevel(1);
                }}
                className="rounded-none bg-[#1f1f1f] p-2 text-zinc-400 hover:bg-[#ff0055] hover:text-white transition"
                title="Close (Esc)"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Viewport */}
          <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
            <div 
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out' 
              }}
              className="max-h-[82vh] aspect-[3/4] transition-all shadow-2xl border border-[#222]"
            >
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-[#222222] bg-[#0c0c0c] px-6 py-2.5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Use Left/Right arrow keys to switch slides. Press ESC to exit.</span>
            <div className="flex items-center gap-4">
              <span>Technique: <strong className="text-white">{currentSlide.coreTechnique}</strong></span>
              <span>Client: <strong className={type === 'hindi' ? 'text-[#ff0055]' : 'text-amber-400'}>EndemolShine India | Banijay</strong></span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
