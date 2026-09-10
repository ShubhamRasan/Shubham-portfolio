import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ExternalLink, 
  Flame, 
  Sparkles, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  LayoutGrid, 
  Film,
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export interface BigBossArtwork {
  id: string;
  category: 'hindi' | 'marathi';
  title: string;
  subtitle: string;
  theme: string;
  image: string;
  dimensions: string;
  aspectRatio: string;
  leadSubject: string;
  designPattern: string;
  trendBreakdown: string[];
  editingTechniques: string[];
  brandingColors: string[];
}

export const hindiArtworks: BigBossArtwork[] = [
  {
    id: 'hindi-salman-hook',
    category: 'hindi',
    title: 'Weekend Ka Vaar Viral Hook',
    subtitle: 'Which Is Your Favourite Season of Bigg Boss?',
    theme: 'Audience Fandom Engagement & Organic Comment Driver',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_2.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Salman Khan (Host)',
    designPattern: 'Text-Behind-Subject Depth Layering',
    trendBreakdown: [
      'Spatial Depth Layering: Precision pen-tool cutout of Salman Khan placed in front of oversized typography (FAVOURITE SEASON), creating modern 3D editorial depth.',
      'Broadcaster Visual Hook: Banijay signature hot-pink badge (WHICH IS YOUR) paired with the high-gloss 3D prismatic Bigg Boss eye logo.',
      'Stage Floor Reflections: Subtly graded studio floor reflections grounding the subject seamlessly into the layout.'
    ],
    editingTechniques: [
      'Photoshop Pen Tool Masking',
      'Non-destructive typography clipping',
      'Studio specular light balancing',
      'EndemolShine brand color harmonization'
    ],
    brandingColors: ['#FF0055', '#FFFFFF', '#0A0A0A', '#1E3A8A']
  },
  {
    id: 'hindi-season-13',
    category: 'hindi',
    title: 'Season 13: Historic Rivalry',
    subtitle: 'Sidharth Shukla vs Asim Riaz (The Iconic Clash)',
    theme: 'Reality TV Nostalgia & Historic Fandom Resonance',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_4.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Sidharth Shukla, Asim Riaz & Paras Chhabra',
    designPattern: 'Nostalgia Fandom Triggering',
    trendBreakdown: [
      'Unscripted Friction Framing: Focuses on the intense bilateral eye-contact between Sidharth and Asim, Indian TV’s most famous reality rivalry.',
      'Minimalist Brutalist Header: Crisp, high-contrast SEASON 13 typography in Banijay brand pink allowing raw emotion to dominate the canvas.',
      'Atmospheric Shadow Grading: Cooled background tones to let warm, heated skin tones and expressions command visual priority.'
    ],
    editingTechniques: [
      'Selective skin-tone color warming',
      'Edge falloff vignette grading',
      'Grain reduction and sharpening',
      'EndemolShine white-bar header grid'
    ],
    brandingColors: ['#FF0055', '#450A0A', '#FFFFFF', '#18181B']
  },
  {
    id: 'hindi-season-18',
    category: 'hindi',
    title: 'Season 18: The Direct Face-Off',
    subtitle: 'Vivian Dsena vs Avinash Mishra',
    theme: 'Narrative Suspense & Bilateral Confrontation',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_3.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Vivian Dsena & Avinash Mishra',
    designPattern: 'Bilateral Character Symmetry',
    trendBreakdown: [
      'Profile-to-Profile Tension: Balanced symmetrical composition pitting two prime alpha contenders in an unresolved house face-off.',
      'Set Ambience & Pillar Glow: Elevated cold blue-purple house lighting reflecting off the textured palace pillar.',
      'Direct Eye-Level Engagement: Framed precisely at viewer eye-level to pull social media users directly into the heated dynamic.'
    ],
    editingTechniques: [
      'Dual-temperature color balance (Warm vs Cold)',
      'Texture enhancement on winter apparel',
      'Subtle depth-of-field blur on background cameras'
    ],
    brandingColors: ['#FF0055', '#3B82F6', '#FFFFFF', '#1C1917']
  },
  {
    id: 'hindi-season-19',
    category: 'hindi',
    title: 'Season 19: Sisterhood & Connection',
    subtitle: 'Raw Vulnerability in Traditional Banarasi Silks',
    theme: 'Emotional Humanization & Contrast Storytelling',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/HINDI%20BIGBOSS/Discuss_.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Housemates Emotional Embrace',
    designPattern: 'Chiaroscuro Emotional Lighting',
    trendBreakdown: [
      'Emotional Counter-Programming: Balances reality aggression with deep, authentic sisterhood and emotional bonding.',
      'Fabric & Zari Retouching: High-precision texture sharpening on royal blue and crimson banarasi saree embroidery.',
      'Chiaroscuro Lighting: Dramatic rim light carving out the embrace from a deep dark background.'
    ],
    editingTechniques: [
      'Fabric zari specular highlight boost',
      'Skin micro-tone smoothing and preservation',
      'Dramatic rim-lighting compositing'
    ],
    brandingColors: ['#FF0055', '#991B1B', '#1E3A8A', '#D4AF37']
  }
];

export const marathiArtworks: BigBossArtwork[] = [
  {
    id: 'marathi-3-1-tvr',
    category: 'marathi',
    title: '3.1 TVR Historic Finale Record',
    subtitle: 'A Finale That Broke Records!',
    theme: 'Commercial Rating Triumph & Broadcaster Prestige',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/BB-TVR.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Riteish Deshmukh (Host)',
    designPattern: '3D Metallic Gold Typography & Flex Graphics',
    trendBreakdown: [
      '3D Bevel & Gold Texture: Modeled heavy 3D metallic golden numerals (3.1 TVR) with crimson double-inlay borders.',
      'Host Prestige Stance: Confident chin-touch pose in custom black sequined tuxedo with golden ember backlighting.',
      'Marathi Fiery Eye Logo: Custom golden-red vortex eye branding celebrating the grand broadcast milestone.'
    ],
    editingTechniques: [
      '3D extruded gold layer style rendering',
      'Tuxedo sequin reflection grading',
      'Amber vortex atmospheric particles'
    ],
    brandingColors: ['#D4AF37', '#FF0055', '#B91C1C', '#000000']
  },
  {
    id: 'marathi-paglu-trend',
    category: 'marathi',
    title: 'Aap Kiske PAGLU HAIN? 🎀',
    subtitle: 'Viral Coquette Pop-Culture Trend Synchronization',
    theme: 'Gen-Z Cultural Trend Hijacking & Ensemble Collaging',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/7.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Riteish Deshmukh & Top 5 Finalists',
    designPattern: 'Viral Meme Trend & Multi-Subject Hierarchy',
    trendBreakdown: [
      'Gen-Z Coquette Aesthetic: Integrated the viral pink ribbon bow emoji (🎀) with localized fandom slang (PAGLU HAIN?).',
      'Hierarchical Ensemble Stacking: Host Riteish Deshmukh anchored front-and-center, flanked by 5 finalists in energetic expressive poses.',
      'Golden Bokeh Glow: Warm celebration bokeh with flying sparkles uniting diverse character outfits into one seamless poster.'
    ],
    editingTechniques: [
      'Complex 6-person depth layering',
      'Global warm ambient light spill',
      'Playful condensed typography treatment'
    ],
    brandingColors: ['#F43F5E', '#D97706', '#FFFFFF', '#18181B']
  },
  {
    id: 'marathi-ticket-finale',
    category: 'marathi',
    title: 'Ticket to Finale Vortex',
    subtitle: 'Meet the Winners of Ticket to Finale!',
    theme: 'High-Stakes Arena & Final Stretch Rush',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/1.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Riteish Deshmukh in Tan Blazer',
    designPattern: 'Fiery Radial Dynamics & Pink Outer Framing',
    trendBreakdown: [
      'Radial Vortex Arena: Fiery circular vortex drawing visual focus directly to host Riteish Deshmukh’s determined gaze.',
      'EndemolShine Signature Contour: Outer pink border card system unifying social feed branding.',
      'Golden Celestial Eye: Golden Marathi Bigg Boss eye crowning the top apex.'
    ],
    editingTechniques: [
      'Radial spin blur fire overlay',
      'Fabric texture sharpening on suit',
      'Eye catchlight enhancement'
    ],
    brandingColors: ['#EA580C', '#FF0055', '#D4AF37', '#000000']
  },
  {
    id: 'marathi-deepali-sayyed',
    category: 'marathi',
    title: 'Finalist: Deepali Sayyed',
    subtitle: 'Baroque Golden Mirror Spotlight',
    theme: 'Royal Character Framing & Festive Prestige',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/2.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Deepali Sayyed in Emerald Green Saree',
    designPattern: 'The Baroque Golden Mirror System',
    trendBreakdown: [
      'Baroque Mirror Frame: Antique golden rococo frame creating a regal regal window for the contestant.',
      'Color Contrast Harmony: Deep emerald green beaded saree contrasted against golden ambient smoke.',
      'Bold Condensed Gold Type: Clean gold-gradient typography for immediate social recognition.'
    ],
    editingTechniques: [
      'Golden mirror composite framing',
      'Saree sparkle & jewelry enhancement',
      'Warm hair rim lighting'
    ],
    brandingColors: ['#047857', '#D4AF37', '#FF0055', '#000000']
  },
  {
    id: 'marathi-anushri-mane',
    category: 'marathi',
    title: 'Finalist: Anushri Mane',
    subtitle: 'Beaded Couture & Face Jewel Retouching',
    theme: 'High-Fashion Editorial & Youth Glamour',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/3.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Anushri Mane',
    designPattern: 'High-Fashion Couture Retouching',
    trendBreakdown: [
      'Delicate Texture Preservation: Retouched delicate rhinestone face pearls and couture tassel sleeves.',
      'Warm Amber Glow: Soft golden illumination highlighting posture and poise.',
      'Unified Identity: Consistent EndemolShine India Banijay logo placement.'
    ],
    editingTechniques: [
      'Frequency separation skin retouching',
      'Rhinestone jewel specular boost',
      'Micro-fringe tassel sharpening'
    ],
    brandingColors: ['#78350F', '#D4AF37', '#FF0055', '#FFFFFF']
  },
  {
    id: 'marathi-vishal-kotian',
    category: 'marathi',
    title: 'Finalist: Vishal Kotian',
    subtitle: 'High-Energy Victory Flex',
    theme: 'Alpha Energy & Palace Gates Backdrop',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/4.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Vishal Kotian (Double Biceps Flex)',
    designPattern: 'Dynamic Energy & Architectural Backing',
    trendBreakdown: [
      'Palace Door Architecture: Golden palace doors creating monumental grandeur behind the contestant.',
      'Athletic Muscle Definition: Specular highlights sculpted across biceps and chain-embellished vest.',
      'Bold Impact Headline: High-angle text placement maximizing viral excitement.'
    ],
    editingTechniques: [
      'Dodge and burn muscular definition',
      'Silver chain specular glow',
      'Gold ambient background illumination'
    ],
    brandingColors: ['#D4AF37', '#18181B', '#FF0055', '#F59E0B']
  },
  {
    id: 'marathi-tanvi-kolte',
    category: 'marathi',
    title: 'Finalist: Tanvi Kolte',
    subtitle: 'Traditional Red Silk & Gold Bangles',
    theme: 'Warm Traditional Charisma & Festive Elegance',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/5.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Tanvi Kolte in Crimson Ensemble',
    designPattern: 'Festive Glamour & Jewelry Accenting',
    trendBreakdown: [
      'Jewelry Accentuation: Hand-stacked golden glass bangles and jhumkas sharpened with golden gleam.',
      'Saturated Crimson Harmony: Rich festive red outfit paired with warm gold ambient smoke.',
      'Signature Frame Integration: Balanced portrait symmetry inside the golden mirror.'
    ],
    editingTechniques: [
      'Gold bangle specular glint creation',
      'Crimson hue saturation control',
      'Portrait edge isolation'
    ],
    brandingColors: ['#DC2626', '#D4AF37', '#FF0055', '#000000']
  },
  {
    id: 'marathi-raqesh-bapat',
    category: 'marathi',
    title: 'Finalist: Raqesh Bapat',
    subtitle: 'Tailored Velvet & Signature Brooch',
    theme: 'Sophisticated Suave Style & Velvet Textures',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/6.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Raqesh Bapat in Velvet Lapel Suit',
    designPattern: 'High-End Gentleman Editorial',
    trendBreakdown: [
      'Velvet Texture Nuance: Precision matte grading preserving rich black velvet lapels without crushing shadow detail.',
      'Metallic Accessory Pop: Golden panther lapel brooch and layered chains isolated with crisp highlights.',
      'Editorial Eyewear Grading: Clean anti-reflective gradient across stylish frames.'
    ],
    editingTechniques: [
      'Shadow preservation on black velvet',
      'Gold panther brooch micro-retouching',
      'Beard texture definition'
    ],
    brandingColors: ['#D4AF37', '#09090B', '#FF0055', '#E4E4E7']
  },
  {
    id: 'marathi-winner-post',
    category: 'marathi',
    title: 'Grand Finale Winner Reveal Stage',
    subtitle: 'Live Telecast Announcement Template',
    theme: 'Instant Live Broadcast Deployment & Celebration',
    image: '/Portfolio/BIG%20BOSS-%20BANIJAY/MARATHI%20BIGBOSS/Winner-Announcement-post.jpg',
    dimensions: '1080 × 1440 PX',
    aspectRatio: '3:4 Portrait Editorial',
    leadSubject: 'Winner Stage with Gold Confetti',
    designPattern: 'Live Broadcaster Ready Production Template',
    trendBreakdown: [
      'Rapid Turnaround Template: Built with editable smart objects for instant deployment within 60 seconds of live winner announcement.',
      'Golden Confetti & Arches: Multi-layered confetti ribbons and celestial light rays.',
      'Dual Pink-Gold Sparkle: Banijay magenta glitter headline typography with high visual impact.'
    ],
    editingTechniques: [
      'Multi-plane confetti depth sorting',
      'Glitter particle layer styles',
      'Automated social deployment layout'
    ],
    brandingColors: ['#EC4899', '#D4AF37', '#FFFFFF', '#09090B']
  }
];

export default function BigBossShowcase() {
  const [activeLanguage, setActiveLanguage] = useState<'hindi' | 'marathi'>('hindi');
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [showTechniqueTab, setShowTechniqueTab] = useState<'canvas' | 'breakdown'>('canvas');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const activeArtworks = activeLanguage === 'hindi' ? hindiArtworks : marathiArtworks;
  const currentArtwork = activeArtworks[activeIndex] || activeArtworks[0];

  // Reset index when changing language
  const handleLanguageChange = (lang: 'hindi' | 'marathi') => {
    setActiveLanguage(lang);
    setActiveIndex(0);
  };

  // Keyboard navigation & lightbox escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
      if (viewMode === 'single') {
        if (e.key === 'ArrowRight') {
          setActiveIndex((prev) => (prev < activeArtworks.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowLeft') {
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : activeArtworks.length - 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArtworks.length, viewMode]);

  return (
    <div className="relative w-full rounded-none border border-[#222222] bg-[#0c0c0c] text-white shadow-2xl overflow-hidden">
      
      {/* SIMULATED BROADCASTER HUD HEADER */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222222] bg-[#111111] px-4 py-3 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 opacity-70">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-300">
              BANIJAY_ENDEMOL_BB_{activeLanguage.toUpperCase()}_STAGE_V2.PSD
            </span>
            <span className="hidden sm:inline-block rounded-none bg-[#1e1014] px-2 py-0.5 font-mono text-[8px] font-bold text-[#ff0055] border border-[#ff0055]/40 uppercase">
              ● ENDEMOLSHINE INDIA
            </span>
          </div>
        </div>

        {/* CONTROLS: LANGUAGE TABS & VIEW SWITCHER */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Language Switcher (Hindi First as requested) */}
          <div className="flex items-center bg-black p-0.5 border border-[#2a2a2a]">
            <button
              onClick={() => handleLanguageChange('hindi')}
              className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                activeLanguage === 'hindi'
                  ? 'bg-[#ff0055] text-white font-extrabold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              🇮🇳 Bigg Boss Hindi ({hindiArtworks.length})
            </button>
            <button
              onClick={() => handleLanguageChange('marathi')}
              className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                activeLanguage === 'marathi'
                  ? 'bg-amber-500 text-black font-extrabold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              🚩 Bigg Boss Marathi ({marathiArtworks.length})
            </button>
          </div>

          {/* View Mode Toggle: Single Stage vs Full Grid */}
          <div className="flex items-center bg-[#181818] p-0.5 border border-[#2c2c2c]">
            <button
              onClick={() => setViewMode('single')}
              className={`p-1.5 transition ${viewMode === 'single' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              title="Single Stage View"
            >
              <Film size={12} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 transition ${viewMode === 'grid' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              title="Full Gallery Grid"
            >
              <LayoutGrid size={12} />
            </button>
          </div>

        </div>
      </div>

      {/* SINGLE STAGE VIEW */}
      {viewMode === 'single' && (
        <div className="p-4 sm:p-6 space-y-4">
          
          {/* Top Bar: Active Item Info & Sub-Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1c1c1c] pb-3">
            <div className="space-y-0.5 text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff0055] font-extrabold">
                  {activeLanguage === 'hindi' ? 'HINDI BROADCAST EDITORIAL' : 'MARATHI CELEBRATION ARCHITECTURE'}
                </span>
                <span className="text-zinc-600 font-mono text-[8px]">•</span>
                <span className="font-mono text-[9px] text-zinc-400 uppercase">
                  {currentArtwork.dimensions}
                </span>
              </div>
              <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                {currentArtwork.title}
              </h4>
              <p className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">
                {currentArtwork.subtitle}
              </p>
            </div>

            {/* Stage sub-tabs: Canvas vs Edit Breakdown */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-black p-0.5 border border-[#2a2a2a]">
                <button
                  onClick={() => setShowTechniqueTab('canvas')}
                  className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                    showTechniqueTab === 'canvas'
                      ? 'bg-white text-black font-extrabold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Artwork Canvas
                </button>
                <button
                  onClick={() => setShowTechniqueTab('breakdown')}
                  className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                    showTechniqueTab === 'breakdown'
                      ? 'bg-white text-black font-extrabold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Edit & Trends Breakdown
                </button>
              </div>

              {/* Fullscreen Trigger */}
              <button
                onClick={() => {
                  setIsLightboxOpen(true);
                  setZoomLevel(1);
                }}
                className="flex items-center gap-1.5 rounded-none bg-[#1c1c1c] px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-300 border border-[#333] hover:bg-white hover:text-black transition"
                title="Inspect High-Res"
              >
                <Maximize2 size={11} />
                <span className="hidden sm:inline">Inspect</span>
              </button>
            </div>
          </div>

          {/* MAIN STAGE CONTENT (Canvas or Breakdown) */}
          {showTechniqueTab === 'canvas' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Image Showcase in 3:4 Aspect Ratio (Left / Center) */}
              <div className="md:col-span-6 lg:col-span-5 flex justify-center">
                <div 
                  onClick={() => {
                    setIsLightboxOpen(true);
                    setZoomLevel(1);
                  }}
                  className="group relative w-full max-w-sm aspect-[3/4] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl transition hover:border-[#444]"
                >
                  <img 
                    src={currentArtwork.image} 
                    alt={currentArtwork.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient lighting & tag overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <span className="bg-black/80 backdrop-blur-md px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white border border-[#333]">
                      ★ BANIJAY SOCIAL
                    </span>
                    <span className="bg-[#ff0055]/90 text-white px-2 py-0.5 font-mono text-[8px] uppercase font-bold tracking-wider">
                      {currentArtwork.aspectRatio}
                    </span>
                  </div>

                  {/* Hover prompt */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1.5 bg-black/85 backdrop-blur-md text-white font-mono text-[10px] px-3 py-1.5 border border-white/40 shadow-xl">
                      <ZoomIn size={12} className="text-[#ff0055]" />
                      <span>CLICK TO INSPECT FULL EDIT</span>
                    </div>
                  </div>

                  {/* Bottom Subject Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-left bg-black/85 backdrop-blur-md p-2.5 border border-[#2a2a2a]">
                    <span className="font-mono text-[8px] text-[#ff0055] uppercase tracking-wider font-extrabold block">
                      {currentArtwork.designPattern}
                    </span>
                    <p className="font-display text-sm font-bold text-white uppercase">
                      {currentArtwork.leadSubject}
                    </p>
                  </div>
                </div>
              </div>

              {/* Edit Insights Side Panel (Right) */}
              <div className="md:col-span-6 lg:col-span-7 space-y-4 text-left">
                
                {/* Design Pattern Highlight */}
                <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                      <Sparkles size={11} className="text-[#ff0055]" />
                      <span>CORE EDIT PATTERN & TREND</span>
                    </span>
                    <span className="font-mono text-[8px] text-amber-400 border border-amber-800/40 bg-amber-950/20 px-2 py-0.5 uppercase">
                      {currentArtwork.designPattern}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {currentArtwork.theme}
                  </p>
                </div>

                {/* Key Trends & Techniques List */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#808080] font-bold block">
                    How I Created This & Trend Catchup:
                  </span>
                  <div className="space-y-2">
                    {currentArtwork.trendBreakdown.map((trend, i) => (
                      <div key={i} className="rounded-none border border-[#1e1e1e] bg-black p-3 text-left flex items-start gap-2.5">
                        <span className="text-[#ff0055] font-mono text-xs font-bold shrink-0 mt-0.5">0{i+1}</span>
                        <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                          {trend}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Tools & Swatches */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 font-bold block">
                      Photoshop Techniques:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {currentArtwork.editingTechniques.map((tech, i) => (
                        <span key={i} className="rounded-none bg-[#181818] border border-[#2c2c2c] px-2 py-0.5 font-mono text-[8px] text-zinc-300">
                          ✓ {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 font-bold block">
                      Brand Palette:
                    </span>
                    <div className="flex items-center gap-1.5 pt-1">
                      {currentArtwork.brandingColors.map((col, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-none border border-white/20" style={{ backgroundColor: col }} />
                          <span className="font-mono text-[8px] text-zinc-400 uppercase font-bold">{col}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* DETAILED EDITING BREAKDOWN TAB */
            <div className="space-y-4 text-left p-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-[#ff0055]" />
                    <h5 className="font-display text-xs font-bold uppercase text-white">
                      1. Creative Direction & Intent
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {currentArtwork.theme}
                  </p>
                  <div className="pt-2 border-t border-[#222]">
                    <span className="font-mono text-[9px] text-zinc-400">Lead Subject: </span>
                    <strong className="text-white text-xs">{currentArtwork.leadSubject}</strong>
                  </div>
                </div>

                <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-amber-400" />
                    <h5 className="font-display text-xs font-bold uppercase text-white">
                      2. Design Pattern & Trend
                    </h5>
                  </div>
                  <span className="inline-block bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40 px-2 py-0.5 font-mono text-[9px] font-bold uppercase">
                    {currentArtwork.designPattern}
                  </span>
                  <ul className="text-[11px] text-zinc-300 space-y-1.5 pt-1 list-disc pl-4 font-light">
                    {currentArtwork.trendBreakdown.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Sliders size={14} className="text-emerald-400" />
                    <h5 className="font-display text-xs font-bold uppercase text-white">
                      3. Photoshop Execution
                    </h5>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    {currentArtwork.editingTechniques.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-[#222]">
                    <span className="font-mono text-[8px] text-zinc-400 uppercase block mb-1">Canvas Grid:</span>
                    <span className="font-mono text-[9px] text-white bg-black px-2 py-1 border border-[#333]">
                      {currentArtwork.dimensions} • 3:4 Social Aspect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FILMSTRIP THUMBNAIL NAVIGATOR */}
          <div className="border-t border-[#1c1c1c] pt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                {activeLanguage === 'hindi' ? 'HINDI EDITORIAL SERIES' : 'MARATHI CELEBRATION SERIES'} ({activeIndex + 1} OF {activeArtworks.length})
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : activeArtworks.length - 1))}
                  className="p-1 rounded-none bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                  title="Previous Artwork"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev < activeArtworks.length - 1 ? prev + 1 : 0))}
                  className="p-1 rounded-none bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                  title="Next Artwork"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {activeArtworks.map((art, idx) => (
                <button
                  key={art.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setShowTechniqueTab('canvas');
                  }}
                  className={`group relative shrink-0 aspect-[3/4] w-16 sm:w-20 rounded-none overflow-hidden border transition-all ${
                    activeIndex === idx
                      ? 'border-[#ff0055] scale-105 shadow-[0_0_10px_rgba(255,0,85,0.4)]'
                      : 'border-[#2a2a2a] opacity-60 hover:opacity-100 hover:border-[#444]'
                  }`}
                >
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-1 left-1 font-mono text-[7px] text-white font-extrabold uppercase">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* FULL GALLERY GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="p-5 sm:p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#222] pb-3">
            <div>
              <h4 className="font-display text-lg font-bold uppercase text-white">
                {activeLanguage === 'hindi' ? 'Bigg Boss Hindi Editorial Grid' : 'Bigg Boss Marathi Editorial Grid'}
              </h4>
              <p className="font-mono text-[10px] text-zinc-400 uppercase">
                All {activeArtworks.length} Artworks • Click Any Artwork To Inspect Edit
              </p>
            </div>
            <button
              onClick={() => setViewMode('single')}
              className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-zinc-300 hover:text-white"
            >
              <span>Back To Stage View</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {activeArtworks.map((art, idx) => (
              <div 
                key={art.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setViewMode('single');
                  setShowTechniqueTab('canvas');
                }}
                className="group relative cursor-pointer aspect-[3/4] rounded-none overflow-hidden bg-black border border-[#222] hover:border-[#ff0055] transition-all hover:scale-[1.02] shadow-lg"
              >
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition" />
                
                <div className="absolute top-2 left-2">
                  <span className="bg-black/80 px-1.5 py-0.5 font-mono text-[8px] text-[#ff0055] font-extrabold uppercase border border-[#333]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <span className="font-mono text-[7px] text-amber-400 uppercase tracking-wider block">
                    {art.designPattern}
                  </span>
                  <p className="font-display text-xs font-bold text-white uppercase truncate">
                    {art.title}
                  </p>
                  <p className="font-mono text-[8px] text-zinc-400 uppercase truncate">
                    {art.leadSubject}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX INSPECTOR */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-white">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-[#222222] bg-[#0c0c0c] px-6 py-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#ff0055]">
                [ 3:4 EDITORIAL INSPECTOR ]
              </span>
              <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
                {currentArtwork.title} • {currentArtwork.dimensions} • {currentArtwork.designPattern}
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
                src={currentArtwork.image} 
                alt={currentArtwork.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-[#222222] bg-[#0c0c0c] px-6 py-2.5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Arrow keys / Thumbnail to switch. Press ESC to exit.</span>
            <div className="flex items-center gap-4">
              <span>Technique: <strong className="text-white">{currentArtwork.designPattern}</strong></span>
              <span>Client: <strong className="text-[#ff0055]">EndemolShine India | Banijay</strong></span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
