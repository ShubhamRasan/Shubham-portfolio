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
  Flame,
  Tv,
  Film
} from 'lucide-react';

export interface BanijaySlideItem {
  id: string;
  show: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'viral-meme' | 'ott-drama' | 'fandom-interactive';
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const banijaySlides: BanijaySlideItem[] = [
  {
    id: 'banijay-1',
    show: 'TWO MUCH WITH KAJOL AND TWINKLE',
    title: 'Aam Zindagi vs. Aam Waali Zindagi',
    subtitle: 'Salman Khan • Split-Screen Visual Pun',
    image: '/Portfolio/BANIJAY/TMWK.jpg',
    category: 'viral-meme',
    coreTechnique: 'Split-Screen Visual Pun & Color Grading',
    explanation: 'Created high-engagement virality by contrasting contemplative seriousness ("Aam Zindagi") with joyful indulgence ("Aam Waali Zindagi") holding fresh mangoes, with tailored typography accents.',
    tools: ['Adobe Photoshop', 'Dual Color Grading', 'Custom Pun Typography'],
    colors: ['#F59E0B', '#E11D48', '#FFFFFF', '#1C1917']
  },
  {
    id: 'banijay-2',
    show: 'TWO MUCH WITH KAJOL AND TWINKLE',
    title: 'Monday Morning: Expectation vs. Reality',
    subtitle: 'Janhvi Kapoor • Dual-Mood Emotional Contrast',
    image: '/Portfolio/BANIJAY/Why-again-Monday.jpg',
    category: 'viral-meme',
    coreTechnique: 'Dual-Mood Facial Expression Framing',
    explanation: 'Framed relatable corporate & student burnout by pairing Janhvi Kapoor’s radiant morning laugh against a hilarious hands-on-head reality reaction using crisp contrast pill typography.',
    tools: ['Adobe Photoshop', 'Lighting Match', 'Dual Vignette Overlay'],
    colors: ['#FF0055', '#D97706', '#FFFFFF', '#18181B']
  },
  {
    id: 'banijay-3',
    show: 'THE TRIAL (DISNEY+ HOTSTAR)',
    title: '"Mere Mitochondria Ki Power Khatam Ho Chuki Hai"',
    subtitle: 'Kajol • Courtroom Drama × Gen-Z Relatability',
    image: '/Portfolio/BANIJAY/The-Trial.jpg',
    category: 'ott-drama',
    coreTechnique: 'Dramatic Performance × Relatable Slang Hook',
    explanation: 'Merged an intense, emotional moment from Kajol’s courtroom drama with relatable biological burnout slang, anchored by Banijay’s signature magenta brand badge.',
    tools: ['Adobe Photoshop', 'Micro-Contrast Retouching', 'Editorial Typography'],
    colors: ['#FF0055', '#D4AF37', '#FFFFFF', '#1E1B4B']
  },
  {
    id: 'banijay-4',
    show: 'KHATRON KE KHILADI',
    title: 'Extreme Stunts to "Aam Waali Zindagi"',
    subtitle: 'Krishna Shroff • Golden Hour Fruit Composite',
    image: '/Portfolio/BANIJAY/KKK.jpg',
    category: 'viral-meme',
    coreTechnique: 'Outdoor Rim Lighting & Fruit Basket Composite',
    explanation: 'Subverted extreme action reality TV aesthetics with playful lifestyle humor, enhancing natural outdoor golden hour rim lighting across Krishna Shroff and a hand-crafted mango basket.',
    tools: ['Adobe Photoshop', 'Fruit Basket Composite', 'Rim Light Tuning'],
    colors: ['#F59E0B', '#1D4ED8', '#FFFFFF', '#14532D']
  },
  {
    id: 'banijay-5',
    show: 'BANIJAY ASIA UNIVERSE',
    title: 'The Co-Passenger Airplane Dilemma',
    subtitle: 'Akshay Kumar, Ranveer Singh, Malaika Arora & Rohit Shetty',
    image: '/Portfolio/BANIJAY/Which-seat-will-you-choose.jpg',
    category: 'fandom-interactive',
    coreTechnique: 'Gamified Interactive Engagement Grid',
    explanation: 'Designed a high-retention flight seat chart inviting fans to pick their seat (A to F) next to iconic celebrity pairs, triggering massive debate in organic comments.',
    tools: ['Vector Seating Mockup', 'Multi-Subject Masking', 'Drop Shadow Logic'],
    colors: ['#0284C7', '#FF0055', '#FFFFFF', '#0F172A']
  },
  {
    id: 'banijay-6',
    show: 'TEMPTATION ISLAND INDIA',
    title: 'Villa Fatigue: Mitochondria Depleted',
    subtitle: 'Elvish Yadav • Reality TV Burnout Hook',
    image: '/Portfolio/BANIJAY/Island.jpg',
    category: 'ott-drama',
    coreTechnique: 'Studio Depth Isolation & Keyword Highlight',
    explanation: 'Framed Elvish Yadav’s distressed expression with softened modern villa background art, focusing viewer eye tracking onto the hot-pink highlighted punchline.',
    tools: ['Adobe Photoshop', 'Subject Depth Masking', 'Focus Separation'],
    colors: ['#FF0055', '#6B7280', '#FFFFFF', '#18181B']
  },
  {
    id: 'banijay-7',
    show: 'THE NIGHT MANAGER × CAMPUS BEATS',
    title: 'What He Thinks vs. What He Actually Watches',
    subtitle: 'Aditya Roy Kapur • Cross-IP Watchlist Synergy',
    image: '/Portfolio/BANIJAY/Watchlist-2.jpg',
    category: 'ott-drama',
    coreTechnique: 'Cross-Show Synergy & Neon Atmosphere Composite',
    explanation: 'Blended espionage thriller mood with a high-energy dance romance cutout under warm neon restaurant signage, creating unexpected cross-IP audience conversion.',
    tools: ['Adobe Photoshop', 'Neon Glow Blending', 'Dual Exposure Balance'],
    colors: ['#06B6D4', '#EC4899', '#F59E0B', '#09090B']
  },
  {
    id: 'banijay-8',
    show: 'THE 50',
    title: 'Stadium Grit to Pure Celebration',
    subtitle: 'Prince Narula • High-Octane Reality Laughter',
    image: '/Portfolio/BANIJAY/50.jpg',
    category: 'viral-meme',
    coreTechnique: 'Color Grading & Sports Arena Integration',
    explanation: 'Tuned deep turf greens and structural stadium steel against warm yellow mango values to capture Prince Narula’s infectious reality show victory mood.',
    tools: ['Adobe Photoshop', 'Selective Hue Tuning', 'Shadow Lift'],
    colors: ['#EAB308', '#DC2626', '#FFFFFF', '#15803D']
  },
  {
    id: 'banijay-9',
    show: 'BOMBAY BEGUMS (NETFLIX)',
    title: '3D Floating Heart Emoji Aura',
    subtitle: 'Shahana Goswami • Modern Executive Romance',
    image: '/Portfolio/BANIJAY/Bombay-Begums.jpg',
    category: 'ott-drama',
    coreTechnique: '3D Floating Emoji Spatial Retouching',
    explanation: 'Modeled multi-plane glossy 3D heart emojis encircling Shahana Goswami in genuine photographic depth, complete with subtle magenta cast onto her plum executive blazer.',
    tools: ['Adobe Photoshop', '3D Layer Masks', 'Perspective Lighting'],
    colors: ['#EF4444', '#701A75', '#FFFFFF', '#1F2937']
  },
  {
    id: 'banijay-10',
    show: 'POP CULTURE & BIGG BOSS',
    title: 'Millennial vs. Gen Z: "Clock It 💅"',
    subtitle: 'Pooja Mishra • Slang Localization Translation',
    image: '/Portfolio/BANIJAY/Genz-Trend.jpg',
    category: 'fandom-interactive',
    coreTechnique: 'Editorial Split & Kinetic Emoji Typography',
    explanation: 'Iconic reality TV dialogue ("Get off my back!") translated into viral Gen-Z vocabulary ("Clock it 💅 Sounds like a you problem!"), styled over textured archival paper stock.',
    tools: ['Adobe Photoshop', 'Paper Texture Composite', 'Split-Column Typography'],
    colors: ['#F43F5E', '#6D28D9', '#000000', '#F5F5F4']
  },
  {
    id: 'banijay-11',
    show: 'BIGG BOSS OTT',
    title: 'Living Room Royalty: Aam Waali Zindagi',
    subtitle: 'Intricate Purple Brocade Corset & Mango Slice',
    image: '/Portfolio/BANIJAY/BB (2).jpg',
    category: 'viral-meme',
    coreTechnique: 'Fabric Texture Retouching & Gold Jewelry Gleam',
    explanation: 'Retouched intricate sequin and thread embroidery across the purple corset while sharpening traditional yellow jhumkas to amplify the luxury contrast with mango slices.',
    tools: ['Adobe Photoshop', 'Fabric Sharpening', 'Jewelry Gleam Accenting'],
    colors: ['#9333EA', '#EAB308', '#FFFFFF', '#451A03']
  },
  {
    id: 'banijay-12',
    show: 'MYNTRA FASHION SUPERSTAR',
    title: 'Living Room Television Set Mockup',
    subtitle: 'Manish Malhotra & Kusha Kapila watching Case Toh Banta Hai',
    image: '/Portfolio/BANIJAY/2Split-crousel-tv.jpg',
    category: 'fandom-interactive',
    coreTechnique: 'Living Room TV Framing & Natural Wall Shadows',
    explanation: 'Engineered a split-plane living room viewing setup with gentle wall foliage shadows and a high-definition flat screen television previewing Bollywood star comedy courtroom sketches.',
    tools: ['Adobe Photoshop', 'Perspective Warping', 'Foliage Shadow Casting'],
    colors: ['#EA580C', '#FF0055', '#F59E0B', '#18181B']
  },
  {
    id: 'banijay-13',
    show: 'CAMPUS BEATS',
    title: 'The Real-Time UI Notification Hook',
    subtitle: 'Shruti Sinha • "Aap Iss Campus Ki Heart Beat Ho"',
    image: '/Portfolio/BANIJAY/1.jpg',
    category: 'fandom-interactive',
    coreTechnique: 'Smartphone UI Notification Compositing',
    explanation: 'Embedded a realistic frosted glass iOS message banner directly over neon club ambiance, catching the character’s smile in real-time as she reads the message on her phone.',
    tools: ['Adobe Photoshop', 'iOS Notification Mockup', 'Ambient Light Bleed'],
    colors: ['#F43F5E', '#22C55E', '#FFFFFF', '#1E1B4B']
  },
  {
    id: 'banijay-14',
    show: 'CELEBRITY MASTERCHEF INDIA',
    title: '"We Learned Laughing From Them"',
    subtitle: 'Farah Khan • High-Key Studio Portraiture',
    image: '/Portfolio/BANIJAY/We-Learned1.jpg',
    category: 'ott-drama',
    coreTechnique: 'High-Key Studio Lighting & Kinetic Hand Motion',
    explanation: 'Captured spontaneous television warmth with deliberate kinetic hand blur against an immaculate white tailored blazer, paired with bold black-and-white boxed lettering.',
    tools: ['Adobe Photoshop', 'Motion Blur Tuning', 'Block Typography System'],
    colors: ['#FF0055', '#1E3A8A', '#FFFFFF', '#0F172A']
  },
  {
    id: 'banijay-15',
    show: 'CAMPUS BEATS FANDOM',
    title: 'Zodiac Signs: "Gemini as a Boyfriend"',
    subtitle: 'Shantanu Maheshwari • Pop-Art Distressed Sticker',
    image: '/Portfolio/BANIJAY/Zodiac-Signs-as-XYZ.jpg',
    category: 'fandom-interactive',
    coreTechnique: 'Pop-Art Distressed Sticker Typography',
    explanation: 'Custom hand-distressed sticker typography ("GEMINI") with thick dark contours and halftone print texture, crafted specifically to trigger social astrological debates.',
    tools: ['Adobe Photoshop', 'Distressed Grunge Texture', 'Pop-Art Contour'],
    colors: ['#F43F5E', '#000000', '#FFFFFF', '#334155']
  }
];

export default function BanijaySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'viral-meme' | 'ott-drama' | 'fandom-interactive'>('all');

  // Filter slides based on active category
  const filteredSlides = activeFilter === 'all' 
    ? banijaySlides 
    : banijaySlides.filter((s) => s.category === activeFilter);

  // Keep index within bounds if filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const currentSlide = filteredSlides[currentIndex] || filteredSlides[0] || banijaySlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || filteredSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < filteredSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, filteredSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#ff0055] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
              MULTI-IP CAMPAIGN CATALOG • BANIJAY ASIA & ENDEMOLSHINE INDIA
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Banijay Asia: Multi-IP Entertainment & Viral Campaigns
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Two Much • Khatron Ke Khiladi • The Trial • Temptation Island • The 50 • Bombay Begums • Campus Beats
          </p>
        </div>

        {/* Slide navigation and filter pills */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-1 border border-[#262626] bg-[#0c0c0c] p-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider font-bold transition ${
                activeFilter === 'all' 
                  ? 'bg-white text-black' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All ({banijaySlides.length})
            </button>
            <button
              onClick={() => setActiveFilter('viral-meme')}
              className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider font-bold transition ${
                activeFilter === 'viral-meme' 
                  ? 'bg-[#ff0055] text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Viral Memes
            </button>
            <button
              onClick={() => setActiveFilter('ott-drama')}
              className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider font-bold transition ${
                activeFilter === 'ott-drama' 
                  ? 'bg-[#ff0055] text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              OTT Series
            </button>
            <button
              onClick={() => setActiveFilter('fandom-interactive')}
              className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider font-bold transition ${
                activeFilter === 'fandom-interactive' 
                  ? 'bg-[#ff0055] text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Interactive
            </button>
          </div>

          {/* Slide counter & arrows */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-zinc-400">
              {currentIndex + 1} / {filteredSlides.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                title="Previous Slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                title="Next Slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN ARTWORK-FIRST LAYOUT: LEFT SLIDESHOW + RIGHT MAIN INFORMATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: HERO 3:4 IMAGE SLIDESHOW */}
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

            {/* Subtle top & bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity" />

            {/* Floating Top Tag */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="bg-black/85 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white border border-[#333]">
                ★ {currentSlide.show}
              </span>
              <span className="px-2 py-0.5 font-mono text-[9px] uppercase font-bold text-white bg-[#ff0055]">
                1080 × 1440 PX
              </span>
            </div>

            {/* Hover Fullscreen Prompt: In corner, keeping center 100% visible */}
            <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block">
              <div className="flex items-center gap-1.5 bg-black/90 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1.5 border border-white/30 shadow-xl">
                <ZoomIn size={11} className="text-[#ff0055]" />
                <span>INSPECT EDIT</span>
              </div>
            </div>

            {/* Navigation Arrows on the Image */}
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
          <div className="flex items-center gap-2 overflow-x-auto w-full max-w-md pt-3 pb-1 scrollbar-none justify-start px-1">
            {filteredSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative shrink-0 aspect-[3/4] w-12 sm:w-14 rounded-none overflow-hidden border transition-all ${
                  currentIndex === idx 
                    ? 'border-[#ff0055] scale-105 shadow-[0_0_8px_rgba(255,0,85,0.5)]' 
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

        {/* RIGHT COLUMN: ONLY THE MAIN INFORMATION (UNCLUTTERED & CRAFT-FOCUSED) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Main Slide Title & Identification */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff0055] font-extrabold border border-[#ff0055]/30 bg-[#ff0055]/10 px-2 py-0.5">
                ARTWORK {currentIndex + 1} OF {filteredSlides.length}
              </span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase font-semibold">
                • 1080 × 1440 SOCIAL CAMPAIGN
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                {currentSlide.show}
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight leading-tight">
                {currentSlide.title}
              </h4>
              <p className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          {/* CORE DESIGN TECHNIQUE (HIGHLIGHTED PILL) */}
          <div className="rounded-none border border-[#222222] bg-[#141414] p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Sparkles size={13} className="text-[#ff0055]" />
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
              className="flex-1 rounded-none bg-[#ff0055] hover:bg-[#d60047] py-2 px-3 sm:py-2.5 sm:px-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white transition whitespace-nowrap text-center"
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
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#ff0055]">
                [ BANIJAY ASIA CAMPAIGN INSPECTOR ]
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-zinc-400">
                • {currentSlide.show} • {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 border border-[#2c2c2c] bg-black px-2 py-1">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                  className="p-1 hover:text-[#ff0055] transition"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="font-mono text-[10px] text-zinc-400 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(3, z + 0.25))}
                  className="p-1 hover:text-[#ff0055] transition"
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
                className="p-1.5 rounded-none bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-[#ff0055] hover:text-white transition"
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
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#ff0055] text-white border border-white/20 transition"
              title="Previous Artwork"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#ff0055] text-white border border-white/20 transition"
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
              <span className="text-[#ff0055] font-semibold">{currentSlide.coreTechnique}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>USE ARROW KEYS TO BROWSE</span>
              <span>•</span>
              <span className="text-white">SLIDE {currentIndex + 1} OF {filteredSlides.length}</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
