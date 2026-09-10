import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Award,
  Crown
} from 'lucide-react';

export interface AwardCreativeItem {
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

export const awardCreativeSlides: AwardCreativeItem[] = [
  {
    id: 'award-1',
    title: 'Sanya Malhotra "Mrs." Best Actress: Iconic Gold Awards',
    subtitle: 'Iconic Gold Awards Triumph • Prestige Golden Laurel Wreath',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/Mrs-Award-1.jpg',
    resolution: '1080 × 1440 PX • Prestige Key Art',
    coreTechnique: 'Opulent 3D Metallic Gold Laurel & Portrait Vignette',
    explanation: 'Celebrating Sanya Malhotra’s Best Actress victory for the critically acclaimed film Mrs. at the Iconic Gold Awards. Features intricately embossed golden laurel branches, high-contrast emotional portrait grading, and opulent serif typography.',
    tools: ['Adobe Photoshop', '3D Gold Bevel & Foil Extrusion', 'Laurel Wreath Symmetry', 'Prestige Vignette'],
    colors: ['#D4AF37', '#F59E0B', '#1C1917', '#FFFFFF']
  },
  {
    id: 'award-2',
    title: 'Mrs. Critical Acclaim & Star Rating Accolades',
    subtitle: 'Film Festival Accolades • 5-Star Critical Review Rollup',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/Mrs-Award-2.jpg',
    resolution: '1080 × 1440 PX • Review Rollup',
    coreTechnique: 'Multi-Publication Review Typography & Laurel Badging',
    explanation: 'Harmonized critical five-star reviews from premier film publications over an evocative portrait of Sanya Malhotra. Highlights clean typographic alignment, golden laurel emblems, and cinematic film festival prestige.',
    tools: ['Adobe Photoshop', 'Star Rating Alignment Grid', 'Film Festival Typography', 'Soft Warm Falloff'],
    colors: ['#D4AF37', '#E5E7EB', '#0A0A0A', '#B45309']
  },
  {
    id: 'award-3',
    title: 'All-In-One Platform Triumphs: ZEE5 Originals',
    subtitle: 'Omnibus Awards Celebration • Multi-Show Milestone',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/All-IN-ONE.jpg',
    resolution: '1080 × 1350 PX • Celebration Poster',
    coreTechnique: 'Multi-IP Collage Composition & Golden Trophy Aura',
    explanation: 'A comprehensive platform milestone post celebrating multiple award wins across ZEE5 original series and feature films. Unifies diverse visual styles under a cohesive golden illumination matrix.',
    tools: ['Adobe Photoshop', 'Multi-Subject Collage Grid', 'Golden Ambient Lighting', 'Brand Trophy Retouching'],
    colors: ['#F59E0B', '#1E1B4B', '#FFFFFF', '#065F46']
  },
  {
    id: 'award-4',
    title: 'AI-Enhanced Special Recognition Creative',
    subtitle: 'Generative Lighting Accents • Futuristic Trophy Illumination',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/Ai-Creative-ZEE5.jpg',
    resolution: '1080 × 1350 PX • AI Integration',
    coreTechnique: 'Generative Atmospheric Particles & Volumetric Lighting',
    explanation: 'Blends generative AI visual textures with high-end Photoshop compositing to create volumetric light shafts, floating gold dust particles, and modern futuristic award statics.',
    tools: ['Generative AI Prompting', 'Photoshop Volumetric Rays', 'Particle Dispersion', 'Color Dodge Flare'],
    colors: ['#F59E0B', '#8B5CF6', '#111827', '#FEF08A']
  },
  {
    id: 'award-5',
    title: 'National Victory Celebration (With ZEE5 Branding)',
    subtitle: 'Sports & Cultural Triumph • Official Broadcaster Salute',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/India-Winning-feature-post-With-logo.jpg',
    resolution: '1080 × 1350 PX • Official Brand',
    coreTechnique: 'Tricolor Flame Glow & Victorious Typographic Impact',
    explanation: 'Official broadcaster celebratory post marking a historic national triumph. Combines energetic golden sparks, celebratory tricolor highlights, and authoritative ZEE5 insignia placement.',
    tools: ['Adobe Photoshop', 'Brand Lockup Balancing', 'Dynamic Light Streaks', 'Gold Specular Accents'],
    colors: ['#FF9933', '#138808', '#000080', '#D4AF37']
  },
  {
    id: 'award-6',
    title: 'National Victory Tribute (Clean Theatrical Edition)',
    subtitle: 'Unbranded Master Key Art • Pure Heroic Visual Focus',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/India-Winning-feature-post-Without-LOGO.jpg',
    resolution: '1080 × 1350 PX • Clean Key Art',
    coreTechnique: 'Uncluttered Cinematic Focal Hierarchy & Aura Radiance',
    explanation: 'The clean, uncluttered variant engineered to let the raw emotion, tricolor energy, and heroic lighting dominate the canvas without distraction.',
    tools: ['Adobe Photoshop', 'Clean Canvas Balancing', 'Volumetric Glow', 'Atmospheric Particles'],
    colors: ['#FF9933', '#FFFFFF', '#138808', '#0A0A0A']
  },
  {
    id: 'award-7',
    title: 'Regional Content Milestone & AI Synthesis',
    subtitle: 'Regional Milestone Tribute • Generative Cultural Accent',
    image: '/Portfolio/Zee5%20Statics/Award%20Creative%20and%20Statics/Religional-AI.jpg',
    resolution: '1080 × 1350 PX • Cultural Milestone',
    coreTechnique: 'Regional Cultural Retouching & AI Environment Fusion',
    explanation: 'Recognizing monumental milestones in regional storytelling. Utilizes hybrid AI synthesis to generate rich heritage-inspired architectural backgrounds paired with sharp foreground character cutouts.',
    tools: ['AI Landscape Synthesis', 'Photoshop Masking', 'Heritage Pattern Detailing', 'Warm Golden Grade'],
    colors: ['#D97706', '#991B1B', '#1E293B', '#FEF3C7']
  }
];

export default function Zee5AwardCreatives() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = awardCreativeSlides[currentIndex] || awardCreativeSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < awardCreativeSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : awardCreativeSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || awardCreativeSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < awardCreativeSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, awardCreativeSlides.length]);

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
  }, [awardCreativeSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <Trophy size={12} className="text-amber-400" />
              INDUSTRY HONORS & ACCOLADES • ZEE5 ENTERTAINMENT
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            ZEE5 Award Campaigns & Critical Accolades
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Mrs. (Sanya Malhotra) Iconic Gold Awards • 5-Star Reviews • National Victory Tributes
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {awardCreativeSlides.length} ACCOLADES
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Previous accolade"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Next accolade"
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

            {/* Award badge */}
            <div className="absolute top-3 right-3 z-10 bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1">
              <Crown size={11} className="text-amber-400" />
              <span>Award Winner</span>
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

          {/* FILMSTRIP THUMBNAILS (Scrollable for 7 items) */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 pt-1">
            {awardCreativeSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative border p-1 transition flex flex-col items-center bg-[#111111] ${
                  currentIndex === idx 
                    ? 'border-amber-400 ring-1 ring-amber-400/50' 
                    : 'border-[#222] opacity-60 hover:opacity-100 hover:border-zinc-500'
                }`}
              >
                <div className="h-14 w-full overflow-hidden flex items-center justify-center bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-[8px] font-mono uppercase tracking-wider text-zinc-300 mt-0.5 truncate w-full text-center">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: CRAFT INFORMATION & TECHNIQUE DETAILS */}
        <div className="lg:col-span-6 space-y-5 text-left">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase bg-[#2e1c0c] text-amber-300 border border-amber-800/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
              <Award size={11} className="text-amber-400" />
              Prestige Laurel & Accolade Typography
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {currentSlide.title}
            </h4>
            <p className="font-mono text-[11px] text-amber-400 font-semibold tracking-wider uppercase">
              {currentSlide.subtitle}
            </p>
          </div>

          <div className="h-[1px] bg-[#222222]" />

          {/* Core Technique */}
          <div className="space-y-1">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Core Graphic Design Technique:
            </span>
            <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-3 border border-[#262626] leading-relaxed">
              ❖ {currentSlide.coreTechnique}
            </p>
          </div>

          {/* Detailed breakdown */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Creative Execution & Narrative:
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {currentSlide.explanation}
            </p>
          </div>

          {/* Active Toolkit */}
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Active Software & Compositing Stack:
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
              Opulent Prestige Palette:
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
              <span>Fullscreen Accolade Inspector</span>
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
              <p className="font-mono text-[10px] text-amber-400 uppercase">
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
              title="Previous accolade"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next accolade"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>PRESTIGE AWARD CAMPAIGN • ZEE5 ENTERTAINMENT ARCHIVE</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
