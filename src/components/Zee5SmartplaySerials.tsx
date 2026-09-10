import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Tv, 
  Sparkles, 
  LayoutGrid,
  Layers,
  Heart
} from 'lucide-react';

export interface SmartplaySlideItem {
  id: string;
  series: 'vasudha' | 'saaru' | 'tstk';
  title: string;
  subtitle: string;
  image: string;
  resolution: string;
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const smartplaySlides: SmartplaySlideItem[] = [
  // --- VASUDHA (9) ---
  {
    id: 'sp-v1',
    series: 'vasudha',
    title: 'Vasudha: Master Dual-Character Key Art',
    subtitle: 'Prime Time Family Drama • Emotional Status Contrast',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/VASUDHAA%20(2).jpg',
    resolution: '1080 × 1440 PX • 300 DPI',
    coreTechnique: 'Intricate Gold Jewelry Retouching & Chiaroscuro Duality',
    explanation: 'Shubham’s signature serial composition. Captures the intense emotional tension between tradition and ambition, meticulously isolating gold zari necklaces, silk saree textures, and split warm/cool directional lighting.',
    tools: ['Adobe Photoshop', 'Zari Specular Retouching', 'Split Lighting Grading', 'Smartplay Badge Integration'],
    colors: ['#BE185D', '#D97706', '#1E1B4B', '#FEF3C7']
  },
  {
    id: 'sp-v2',
    series: 'vasudha',
    title: 'Vasudha: Single Protagonist Portrait',
    subtitle: 'Character Profile Key Art • Smartplay Streaming Tag',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/VASUDHA-Single-Smartplay.jpg',
    resolution: '1080 × 1440 PX • Broadcast Key Art',
    coreTechnique: 'High-Key Emotional Eye Light & Silk Sheen Balancing',
    explanation: 'Clean portrait focusing on the protagonist’s resilience, balancing catchlights in the eyes with subtle rim glow across traditional Indian gold jhumkas.',
    tools: ['Adobe Photoshop', 'Catchlight Retouching', 'Silk Texture Recovery', 'Warm Gold LUT'],
    colors: ['#BE185D', '#F59E0B', '#111827', '#FFFFFF']
  },
  {
    id: 'sp-v3',
    series: 'vasudha',
    title: 'Vasudha: Matriarch vs Daughter Confrontation',
    subtitle: 'Family Conflict Teaser • Cinematic Gold Halos',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/VASUDHAA-Test.jpg',
    resolution: '1080 × 1440 PX • Serial Teaser',
    coreTechnique: 'Two-Shot Spatial Tension & Symmetrical Hierarchy',
    explanation: 'Establishes household dominance through lighting hierarchy: the matriarch bathed in golden amber while the younger lead stands in softer ambient light.',
    tools: ['Adobe Photoshop', 'Spatial Distance Blur', 'Golden Halos', 'Saree Fabric Retouching'],
    colors: ['#D97706', '#991B1B', '#1C1917', '#FEF08A']
  },
  {
    id: 'sp-v4',
    series: 'vasudha',
    title: 'Vasudha: Smartplay Streaming One-Sheet',
    subtitle: 'ZEE5 Smartplay Campaign • Broadcast Timeline Branding',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha-Smart-play.jpg',
    resolution: '1080 × 1440 PX • Smartplay Special',
    coreTechnique: 'Seamless UI Badge Integration & Broadcast Typography',
    explanation: 'Integrating the official ZEE5 Smartplay banner seamlessly without obscuring critical character silhouettes or Indian traditional ornaments.',
    tools: ['Adobe Photoshop', 'Vector UI Overlays', 'Smart Object Positioning', 'Edge Feathering'],
    colors: ['#BE185D', '#D97706', '#0F172A', '#F8FAFC']
  },
  {
    id: 'sp-v5',
    series: 'vasudha',
    title: 'Vasudha: High-Drama Confrontation Variant',
    subtitle: 'Intense Plot Reveal • Low-Key Studio Lighting',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha-Smart-play (2).jpg',
    resolution: '1080 × 1440 PX • Drama Static',
    coreTechnique: 'Dramatic Shadow Sculpting & Deep Crimson Vignette',
    explanation: 'Sculpted deep shadow falloffs across the frame to amplify dramatic stakes during a pivotal plot twist in the serial storyline.',
    tools: ['Adobe Photoshop', 'Shadow Sculpting Curves', 'Deep Crimson Vignette', 'High-Pass Sharpness'],
    colors: ['#991B1B', '#B45309', '#09090B', '#FDF2F8']
  },
  {
    id: 'sp-v6',
    series: 'vasudha',
    title: 'Vasudha: Regal Amber Elegance Edition',
    subtitle: 'Festive Episode Special • Intricate Kundan Jewelry',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha-Smart-play-2.jpg',
    resolution: '1080 × 1440 PX • Festive Special',
    coreTechnique: 'Kundan Gemstone Glare & Specular Reflection',
    explanation: 'Retouched intricate kundan and polki bridal jewelry, adding gentle chromatic sparkle flares to make the festive broadcast asset pop on mobile screens.',
    tools: ['Adobe Photoshop', 'Jewelry Glare Brushes', 'Skin Tone Color Balance', 'Specular Highlighting'],
    colors: ['#D4AF37', '#BE185D', '#18181B', '#FFFBEB']
  },
  {
    id: 'sp-v7',
    series: 'vasudha',
    title: 'Vasudha: Daily Episode Streaming Banner',
    subtitle: 'Digital Carousel Format • High-Contrast Readability',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha-Smartplay.jpg',
    resolution: '1080 × 1440 PX • Daily Banner',
    coreTechnique: 'Typography Kerning & Contrast Optimization',
    explanation: 'Engineered for daily streaming thumbnail visibility with strong typographic kerning and high-contrast character separation.',
    tools: ['Adobe Photoshop', 'Pen Tool Isolation', 'Text-Behind-Subject', 'Vignette Tuning'],
    colors: ['#DB2777', '#F59E0B', '#020617', '#FFFFFF']
  },
  {
    id: 'sp-v8',
    series: 'vasudha',
    title: 'Vasudha: Emotional Family Legacy Static',
    subtitle: 'Generational Drama Poster • Heritage Color Grading',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha.jpg',
    resolution: '1080 × 1440 PX • Story Arc Static',
    coreTechnique: 'Warm Heritage Color Matrix & Saree Drapery',
    explanation: 'Warm, rich Indian heritage color grading emphasizing familial warmth, silk drapery physics, and emotional storytelling.',
    tools: ['Adobe Photoshop', 'Selective Color Grading', 'Fabric Texture Recovery', 'Soft Ambient Glow'],
    colors: ['#9A3412', '#C026D3', '#111827', '#FEF3C7']
  },
  {
    id: 'sp-v9',
    series: 'vasudha',
    title: 'Vasudha: The Complete Master Canvas',
    subtitle: 'Broadcaster Master File • Multi-Layer Production Canvas',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Vasudha_Smartplay_.jpg',
    resolution: '1080 × 1440 PX • Master File',
    coreTechnique: 'Complex Multi-Layer Composite & Master Grading',
    explanation: 'The comprehensive master file encompassing all character cutouts, jewelry specular passes, background blur gradients, and broadcaster UI templates.',
    tools: ['Adobe Photoshop', 'Multi-Layer Smart Objects', 'Master Gradient Mapping', 'Color LUT Integration'],
    colors: ['#BE185D', '#D97706', '#0A0A0A', '#FFFFFF']
  },

  // --- SAARU (6) ---
  {
    id: 'sp-s1',
    series: 'saaru',
    title: 'Saaru: Modern Romantic Serial Key Art',
    subtitle: 'Youth-Centric Contemporary Drama • Modern Romance Palette',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/SARU-SMART-PLAY_2.jpg',
    resolution: '1080 × 1440 PX • 300 DPI',
    coreTechnique: 'Vibrant Contemporary Grading & Bokeh Lighting',
    explanation: 'A fresh, vibrant key visual for youth romantic serial Saaru. Combines dreamy soft bokeh circles, pastel-neon rim lights, and contemporary romantic couple framing.',
    tools: ['Adobe Photoshop', 'Bokeh Lens Simulation', 'Dual-Tone Rim Lighting', 'Smartplay Badge Integration'],
    colors: ['#EC4899', '#38BDF8', '#1E1B4B', '#FFFFFF']
  },
  {
    id: 'sp-s2',
    series: 'saaru',
    title: 'Saaru: Streaming Launch Smartplay Campaign',
    subtitle: 'New Episode Teaser • Digital OTT Format',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/SARU-SMARTPLAY.jpg',
    resolution: '1080 × 1440 PX • OTT Launch',
    coreTechnique: 'Clean Modern Typography & Character Chemistry',
    explanation: 'Balances modern sans-serif serial title typography with intimate character eye contact, calibrated for young OTT streaming audiences.',
    tools: ['Adobe Photoshop', 'Title Layout Kerning', 'Soft Glow Diffusion', 'Skin Retouching'],
    colors: ['#F43F5E', '#8B5CF6', '#0F172A', '#FDF2F8']
  },
  {
    id: 'sp-s3',
    series: 'saaru',
    title: 'Saaru: Emotional Conflict Episode Teaser',
    subtitle: 'Relationship Crossroads • Soft Melancholic Lighting',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/SARU-Smartplay (2).jpg',
    resolution: '1080 × 1440 PX • Storyline Static',
    coreTechnique: 'Cool Ambient Shadow & Warm Character Highlight',
    explanation: 'Contrasting cool twilight ambient shadows with warm character skin tones to visualize emotional distance and longing.',
    tools: ['Adobe Photoshop', 'Split Tone Mapping', 'Ambient Shadow Cooling', 'Warm Key Balancing'],
    colors: ['#3B82F6', '#FB923C', '#111827', '#E0F2FE']
  },
  {
    id: 'sp-s4',
    series: 'saaru',
    title: 'Saaru: High-Key Romantic Joy Poster',
    subtitle: 'Festive Romance Special • Golden Hour Warmth',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/SARU-Smartplay_.jpg',
    resolution: '1080 × 1440 PX • Golden Hour Special',
    coreTechnique: 'Golden Hour Flare & Lens Flare Compositing',
    explanation: 'Simulated golden hour sun flare slicing across the couple, creating warmth and cinematic romance that draws instant attention.',
    tools: ['Adobe Photoshop', 'Optical Flare Generator', 'Warm Color Boost', 'Soft Ambient Haze'],
    colors: ['#F59E0B', '#E11D48', '#1C1917', '#FEF3C7']
  },
  {
    id: 'sp-s5',
    series: 'saaru',
    title: 'Saaru: Character Stare-Down Key Art',
    subtitle: 'Romantic Tension • Studio Cutout Detail',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/SARU.jpg',
    resolution: '1080 × 1440 PX • Key Visual',
    coreTechnique: 'Crisp Edge Masking & Studio Lighting Balance',
    explanation: 'Meticulous pen tool isolation preserving hair wisps and clothing edges, layered against atmospheric colored studio backdrops.',
    tools: ['Adobe Photoshop', 'Pen Tool Masking', 'Refine Edge Hair Pass', 'Background Color Gradient'],
    colors: ['#D946EF', '#06B6D4', '#0A0A0A', '#FFFFFF']
  },
  {
    id: 'sp-s6',
    series: 'saaru',
    title: 'Saaru: Official Broadcaster Master Static',
    subtitle: 'Comprehensive Serial Banner • Multi-Platform Master',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Saaru-Smartplay.jpg',
    resolution: '1080 × 1440 PX • Broadcaster Master',
    coreTechnique: 'Full Platform Adaptation & Dynamic Contrast',
    explanation: 'The definitive master campaign static adapted for mobile apps, television menus, and social media promotion feeds.',
    tools: ['Adobe Photoshop', 'Cross-Platform Layout', 'Sharpening Pass', 'Broadcaster Badge Stacking'],
    colors: ['#F43F5E', '#3B82F6', '#1E293B', '#FFFFFF']
  },

  // --- TSTK & SPECIALS (7) ---
  {
    id: 'sp-t1',
    series: 'tstk',
    title: 'TSTK: Grand Serial Key Art & Smartplay',
    subtitle: 'Tum Se Hi Taluq Hai • Daily Drama Campaign',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/Smartplay.jpg',
    resolution: '1080 × 1440 PX • 300 DPI',
    coreTechnique: 'Multi-Character Stacking & Dramatic Lighting Matrix',
    explanation: 'Multi-tiered character composition showcasing the core romantic triangle and household politics, linked by unified golden warmth.',
    tools: ['Adobe Photoshop', 'Multi-Character Hierarchy', 'Lighting Direction Matching', 'Smartplay Badge'],
    colors: ['#B45309', '#BE185D', '#111827', '#FEF08A']
  },
  {
    id: 'sp-t2',
    series: 'tstk',
    title: 'TSTK: Festive Holi Episode Special Creative',
    subtitle: 'Special Event Poster • Organic Powder & Festivity',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/TSTK-Holi-Creative.jpg',
    resolution: '1080 × 1440 PX • Event Special',
    coreTechnique: 'Organic Color Powder Burst & Liquid Splash Compositing',
    explanation: 'Created for the high-TRP Holi festival track. Blends dynamic color powder bursts and water droplets across the lead characters’ faces with cheerful vibrancy.',
    tools: ['Adobe Photoshop', 'Powder Splash Compositing', 'Vibrant Color Grading', 'Liquid Particle Brushes'],
    colors: ['#EC4899', '#EAB308', '#06B6D4', '#FFFFFF']
  },
  {
    id: 'sp-t3',
    series: 'tstk',
    title: 'TSTK: High-Stakes Dramatic Confrontation',
    subtitle: 'Climactic Episode Static • Low-Key Tension',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/TSTK (2).jpg',
    resolution: '1080 × 1440 PX • Tension Static',
    coreTechnique: 'Low-Key Lighting Falloff & Intense Gaze Directing',
    explanation: 'Directs viewer focus onto intense eye confrontation through dark vignetting and targeted key light falloff.',
    tools: ['Adobe Photoshop', 'Directional Vignetting', 'High-Pass Eyes', 'Deep Black Point Adjustment'],
    colors: ['#991B1B', '#D97706', '#09090B', '#E2E8F0']
  },
  {
    id: 'sp-t4',
    series: 'tstk',
    title: 'TSTK: Daily Streaming Banner Edition',
    subtitle: 'Daily OTT Promotion • Clean Cast Alignment',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/TSTK-Smartplay.jpg',
    resolution: '1080 × 1440 PX • Daily Banner',
    coreTechnique: 'Clean Cast Stacking & Smartplay UI Standardization',
    explanation: 'Standardized broadcaster banner formatting ensuring high readability on compact mobile app carousels.',
    tools: ['Adobe Photoshop', 'Mobile Display Contrast', 'Badge Alignment', 'Color Balance LUT'],
    colors: ['#BE185D', '#D97706', '#1E1B4B', '#FFFFFF']
  },
  {
    id: 'sp-t5',
    series: 'tstk',
    title: 'TSTK: Dynamic Episode Teaser Static',
    subtitle: 'Episode Hook Poster • Stylized Title Typography',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/TSTK-Smartplay (2).jpg',
    resolution: '1080 × 1440 PX • Teaser Poster',
    coreTechnique: 'Dynamic Title Typography & Rim Light Separation',
    explanation: 'Sharp character edge separation against deep background graphics, accompanied by stylized Urdu/Hindi title typography.',
    tools: ['Adobe Photoshop', 'Title Kerning & Gradient', 'Rim Light Brush', 'Contrast Curve'],
    colors: ['#D97706', '#991B1B', '#111827', '#FEF3C7']
  },
  {
    id: 'sp-t6',
    series: 'tstk',
    title: 'TSTK: Theatrical Poster Option Edition',
    subtitle: 'Cinematic Reimagining • High-Impact Drama',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/TSTK-new-Poster.jpg',
    resolution: '1080 × 1440 PX • Cinema Poster',
    coreTechnique: 'Cinematic Cinema Aspect Grading & Grain Texture',
    explanation: 'Presents the television serial with theatrical film poster prestige, utilizing 35mm film grain overlays and dramatic letterforms.',
    tools: ['Adobe Photoshop', 'Film Grain Overlay', 'Theatrical Title Card', 'Depth Grading'],
    colors: ['#831843', '#B45309', '#030712', '#F8FAFC']
  },
  {
    id: 'sp-t7',
    series: 'tstk',
    title: 'TSTK: Definitive Series Key Art Master',
    subtitle: 'Complete Campaign Master • Character Ensemble',
    image: '/Portfolio/Zee5%20Statics/Smartplay%20Serials/tstk.jpg',
    resolution: '1080 × 1440 PX • Ensemble Master',
    coreTechnique: 'Ensemble Character Harmony & Brand Typography Lockup',
    explanation: 'The overarching master ensemble poster bringing together the primary cast in harmonious emotional balance.',
    tools: ['Adobe Photoshop', 'Ensemble Composition', 'Brand Lockup', 'Color Harmonization'],
    colors: ['#991B1B', '#D97706', '#1E1E1E', '#FFFFFF']
  }
];

export default function Zee5SmartplaySerials() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vasudha' | 'saaru' | 'tstk'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showGridView, setShowGridView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const filteredSlides = activeFilter === 'all' 
    ? smartplaySlides 
    : smartplaySlides.filter((s) => s.series === activeFilter);

  const currentSlide = filteredSlides[currentIndex] || filteredSlides[0] || smartplaySlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredSlides.length - 1));
  };

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Auto-slide effect (advances every 4 seconds when in slideshow view, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || showGridView || isPaused || filteredSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < filteredSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, showGridView, isPaused, filteredSlides.length]);

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
  }, [filteredSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#ec4899] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-pink-400 font-bold flex items-center gap-1.5">
              <Tv size={12} className="text-pink-400" />
              PRIME TIME SERIAL POSTERS & SMARTPLAY UI SYSTEM • ZEE5 BROADCAST
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Smartplay Prime Serials: Key Art & UI System
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Vasudha (9 Artworks) • Saaru (6 Artworks) • TSTK (7 Artworks) • 22 High-Fidelity Posters
          </p>
        </div>

        {/* Series Filter & Grid Toggle Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Series pills */}
          <div className="flex items-center bg-[#111] p-1 border border-[#262626]">
            {(['all', 'vasudha', 'saaru', 'tstk'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider transition ${
                  activeFilter === tab 
                    ? 'bg-white text-black' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? `All (22)` : tab === 'vasudha' ? `Vasudha (9)` : tab === 'saaru' ? `Saaru (6)` : `TSTK (7)`}
              </button>
            ))}
          </div>

          {/* Toggle Grid View button */}
          <button
            onClick={() => setShowGridView((v) => !v)}
            className={`p-1.5 border transition flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider ${
              showGridView 
                ? 'bg-pink-600 border-pink-500 text-white' 
                : 'bg-[#1c1c1c] border-[#333] hover:border-white text-zinc-300'
            }`}
            title="Toggle full grid view"
          >
            <LayoutGrid size={13} />
            <span className="hidden sm:inline">{showGridView ? 'Slideshow' : 'Grid View'}</span>
          </button>

          {/* Progress counter */}
          {!showGridView && (
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                title="Previous poster"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-mono text-xs font-bold text-zinc-400 px-1">
                {currentIndex + 1} / {filteredSlides.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                title="Next poster"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* FULL RESPONSIVE GRID VIEW (TOGGLEABLE) */}
      {showGridView ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredSlides.map((slide, idx) => (
              <div 
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowGridView(false);
                }}
                className="group relative bg-[#111111] border border-[#222222] hover:border-pink-400 transition cursor-pointer overflow-hidden p-1.5 flex flex-col justify-between"
              >
                <div className="h-44 w-full overflow-hidden flex items-center justify-center bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-left space-y-0.5">
                  <span className="text-[8px] font-mono uppercase bg-pink-950/60 text-pink-300 px-1.5 py-0.5 inline-block">
                    {slide.series}
                  </span>
                  <p className="text-[10px] font-display font-bold text-white truncate">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <button
              onClick={() => setShowGridView(false)}
              className="px-6 py-2 bg-white text-black font-mono text-[10px] uppercase font-bold tracking-wider hover:bg-zinc-200 transition"
            >
              Return to Detailed Slideshow
            </button>
          </div>
        </div>
      ) : (
        /* MAIN TWO-COLUMN SHOWCASE CONTAINER */
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: HERO IMAGE & FILMSTRIP */}
          <div className="lg:col-span-6 space-y-4">
            <div className="group relative w-full max-w-md mx-auto aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl transition-all hover:border-[#444]">
              
              {/* Resolution watermark */}
              <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                {currentSlide.resolution}
              </div>

              {/* Series badge */}
              <div className="absolute top-3 right-3 z-10 bg-pink-500/20 backdrop-blur-sm border border-pink-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-pink-300 font-bold flex items-center gap-1">
                <Sparkles size={11} className="text-pink-400" />
                <span>{currentSlide.series.toUpperCase()} SERIAL</span>
              </div>

              {/* Poster image */}
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

            {/* FILMSTRIP THUMBNAILS (Scrollable row) */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700">
              {filteredSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 border p-1 transition flex flex-col items-center bg-[#111111] w-16 ${
                    currentIndex === idx 
                      ? 'border-pink-400 ring-1 ring-pink-400/50' 
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
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase bg-[#371024] text-pink-300 border border-pink-900/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
                <Heart size={11} className="text-pink-400" />
                Television Serial Key Art Craft
              </span>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                {currentSlide.title}
              </h4>
              <p className="font-mono text-[11px] text-pink-400 font-semibold tracking-wider uppercase">
                {currentSlide.subtitle}
              </p>
            </div>

            <div className="h-[1px] bg-[#222222]" />

            {/* Core Technique */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Core Retouching & Compositing Technique:
              </span>
              <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-2.5 border border-[#262626] leading-relaxed">
                ❖ {currentSlide.coreTechnique}
              </p>
            </div>

            {/* Detailed breakdown */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Creative Execution & Narrative:
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {currentSlide.explanation}
              </p>
            </div>

            {/* Active Toolkit */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Active Software & Retouching Stack:
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {currentSlide.tools.map((tool, i) => (
                  <span key={i} className="rounded-none bg-[#1a1a1a] px-2.5 py-0.5 text-[10px] text-zinc-300 border border-[#2c2c2c] font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Broadcast Color Swatches:
              </span>
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
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

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="rounded-none bg-white text-black hover:bg-zinc-200 transition px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2"
              >
                <Maximize2 size={13} />
                <span>Fullscreen Serial Inspector</span>
              </button>
              <button
                onClick={() => setShowGridView(true)}
                className="rounded-none bg-[#1a1a1a] text-zinc-300 border border-[#333] hover:border-white transition px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <LayoutGrid size={13} />
                <span>View All 22 Artworks</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6">
          
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4">
            <div className="text-left">
              <h5 className="font-display text-sm font-bold uppercase text-white tracking-wider">
                {currentSlide.title}
              </h5>
              <p className="font-mono text-[10px] text-pink-400 uppercase">
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
              title="Previous poster"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next poster"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>SMARTPLAY BROADCAST MASTER • ZEE5 SERIALS ARCHIVE</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
