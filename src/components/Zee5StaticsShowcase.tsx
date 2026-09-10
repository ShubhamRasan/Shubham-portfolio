import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  TrendingUp,
  LayoutGrid,
  Flame,
  Clapperboard
} from 'lucide-react';

export interface Zee5StaticItem {
  id: string;
  category: 'blockbuster' | 'tribute' | 'social';
  title: string;
  subtitle: string;
  image: string;
  resolution: string;
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const zee5StaticSlides: Zee5StaticItem[] = [
  // --- BLOCKBUSTERS ---
  {
    id: 'zs-1',
    category: 'blockbuster',
    title: 'Gadar 2: Sunny Deol Explosive Battlefield Action',
    subtitle: 'Blockbuster Cinema Static • Explosive Dust & Debris VFX',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/GADAR-2.jpg',
    resolution: '1080 × 1350 PX • Blockbuster Social',
    coreTechnique: 'High-Impact Battlefield Debris Compositing & Action Grading',
    explanation: 'Constructed an explosive, high-octane action creative centering Sunny Deol as Tara Singh. Features dynamic dust clouds, flying concrete debris particles, fiery backlighting, and bold blockbuster title typography.',
    tools: ['Adobe Photoshop', 'Action Debris VFX', 'Fire & Spark Particles', 'High-Pass Sharpening'],
    colors: ['#D97706', '#DC2626', '#1C1917', '#FEF3C7']
  },
  {
    id: 'zs-2',
    category: 'blockbuster',
    title: 'Sam Bahadur: Vicky Kaushal Military Dialogue Static',
    subtitle: 'Biographical War Drama • Field Marshal Sam Manekshaw',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/SAM-BAHADUR-Dialoige-static.jpg',
    resolution: '1080 × 1350 PX • Dialogue Static',
    coreTechnique: 'Military Stencil Typography & Historic Olive/Sepia Grade',
    explanation: 'Presents Vicky Kaushal’s Field Marshal Sam Manekshaw alongside iconic wartime dialogue. Designed with distressed army stencil letterforms, military insignia accents, and disciplined olive-drab tonal balance.',
    tools: ['Adobe Photoshop', 'Military Stencil Type', 'Distressed Canvas Displacement', 'Olive-Drab Color Balance'],
    colors: ['#4D7C0F', '#B45309', '#1F2937', '#F9FAFB']
  },
  {
    id: 'zs-3',
    category: 'blockbuster',
    title: 'Love Hostel: Bobby Deol & Sanya Malhotra Noir Thriller',
    subtitle: 'Dark Crime Thriller • Gritty Neon Motel Aesthetic',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Love-Hostel.jpg',
    resolution: '1080 × 1350 PX • Crime Thriller',
    coreTechnique: 'Moody Neon Motel Glow & Gritty Noir Chiaroscuro',
    explanation: 'Captures the sinister, high-stakes atmosphere of Love Hostel. Melds neon motel signage glow with deep shadow falloff across Bobby Deol’s menacing character profile.',
    tools: ['Adobe Photoshop', 'Neon Glow Diffusion', 'Low-Key Contrast Curves', 'Film Grain Displacement'],
    colors: ['#E11D48', '#0284C7', '#09090B', '#F1F5F9']
  },
  {
    id: 'zs-4',
    category: 'blockbuster',
    title: 'Simmba: Cop Universe High-Energy Dynamic Art',
    subtitle: 'Rohit Shetty Cop Universe • Bold Comic-Book Dynamic Lighting',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Simmba.jpg',
    resolution: '1080 × 1350 PX • Action Static',
    coreTechnique: 'High-Saturation Gold/Amber Action Aura & Cop Badging',
    explanation: 'Vibrant, high-octane commercial static packed with golden cop badge highlights, dynamic speed streaks, and punchy pop-entertainment social typography.',
    tools: ['Adobe Photoshop', 'Gold Specular Accents', 'Radial Speed Streaks', 'Vibrant Saturation Grading'],
    colors: ['#F59E0B', '#DC2626', '#1E3A8A', '#FFFFFF']
  },
  {
    id: 'zs-5',
    category: 'blockbuster',
    title: 'Kisi Ka Bhai Kisi Ki Jaan (KBKJ): Salman Khan Celebration',
    subtitle: 'Mass Action Key Art • Dynamic Hero Silhouette',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/KBKJ.jpg',
    resolution: '1080 × 1350 PX • Mass Entertainer',
    coreTechnique: 'Heroic Silhouette Backlighting & Metallic Title Branding',
    explanation: 'Celebrating Salman Khan’s mass entertainer release on ZEE5 with bold metallic typography, warm dust particles, and iconic action stance framing.',
    tools: ['Adobe Photoshop', 'Heroic Silhouette Extraction', 'Metallic Emboss', 'Warm Flare'],
    colors: ['#D97706', '#7F1D1D', '#0F172A', '#FEF08A']
  },
  {
    id: 'zs-6',
    category: 'blockbuster',
    title: 'Game Changer: Ram Charan Mega-Scale Political Thriller',
    subtitle: 'Shankar Direction • Grand Canvas Theatrical Poster',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Game-Changer.jpg',
    resolution: '1080 × 1440 PX • Mega Theatrical',
    coreTechnique: 'Epic Scale Crowd Composition & High-Contrast Blue/Amber Grade',
    explanation: 'A grand theatrical poster for director Shankar’s political spectacle starring Ram Charan. Balances monumental architectural geometry with high-contrast dual-tone grading.',
    tools: ['Adobe Photoshop', 'Epic Architectural Masking', 'Dual-Tone Blue/Amber', 'Title Typography'],
    colors: ['#1E3A8A', '#D97706', '#030712', '#F8FAFC']
  },
  {
    id: 'zs-7',
    category: 'blockbuster',
    title: 'Game Changer (GC): Character Teaser Static',
    subtitle: 'Ram Charan • Sleek Modern Action Framing',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/GC.jpg',
    resolution: '1080 × 1350 PX • Teaser Static',
    coreTechnique: 'Modern Minimalist Action Framing & Lens Reflection',
    explanation: 'A punchy, character-focused teaser framing Ram Charan’s intense gaze with subtle cyan-to-amber chromatic aberration.',
    tools: ['Adobe Photoshop', 'Chromatic Aberration', 'Selective Sharpening', 'Sleek Title Placement'],
    colors: ['#0284C7', '#F59E0B', '#09090B', '#FFFFFF']
  },

  // --- TRIBUTES & SPECIALS ---
  {
    id: 'zs-8',
    category: 'tribute',
    title: 'Saurabh Shukla: Masterclass Actor Tribute (India Release)',
    subtitle: 'Career Milestone Salute • Clean Platform Accolade',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Saurabh-Shukla-India.jpg',
    resolution: '1080 × 1350 PX • Tribute Static',
    coreTechnique: 'Warm Expressive Portrait Grading & Milestone Badging',
    explanation: 'A heartfelt tribute celebrating veteran actor Saurabh Shukla. Clean typography and subtle warm portrait grading honoring his iconic characters.',
    tools: ['Adobe Photoshop', 'Expressive Portrait Retouching', 'Milestone Badging', 'Clean Typography'],
    colors: ['#D97706', '#475569', '#0F172A', '#FFFFFF']
  },
  {
    id: 'zs-9',
    category: 'tribute',
    title: 'Saurabh Shukla: Global Streaming Tribute Edition',
    subtitle: 'International Audience Release • Global ZEE5 Branding',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Saurabh-Shukla-Global.jpg',
    resolution: '1080 × 1350 PX • Global Edition',
    coreTechnique: 'International Broadcaster Standardization & Portrait Polish',
    explanation: 'Global platform edition adapted for ZEE5 international feeds with refined multilingual headline hierarchy.',
    tools: ['Adobe Photoshop', 'Global Lockup Standardization', 'Skin Smoothing', 'High-Contrast Edge'],
    colors: ['#B45309', '#334155', '#18181B', '#FEF3C7']
  },
  {
    id: 'zs-10',
    category: 'tribute',
    title: 'Vivah: Nostalgic Family & Romance Milestone Static',
    subtitle: 'Classic Milestone Celebration • Rajshri Legacy',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Vivha.jpg',
    resolution: '1080 × 1350 PX • Classic Tribute',
    coreTechnique: 'Soft Traditional Nostalgia Grading & Festive Halos',
    explanation: 'A nostalgic creative celebrating Sooraj Barjatya’s classic Vivah, bathed in golden warmth and traditional festive lighting.',
    tools: ['Adobe Photoshop', 'Nostalgic Soft Glow', 'Festive Particle Dust', 'Warm Serif Typography'],
    colors: ['#E11D48', '#D4AF37', '#1E1B4B', '#FFFBEB']
  },
  {
    id: 'zs-11',
    category: 'tribute',
    title: 'Indian Navy Day: National Defense Salute Static',
    subtitle: 'Patriotic Holiday Campaign • Oceanic Blue Gradient',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/NAVY-DAY-1.jpg',
    resolution: '1080 × 1350 PX • National Defense',
    coreTechnique: 'Oceanic Blue Atmospheric Haze & Warship Vector Silhouette',
    explanation: 'Honoring the Indian Navy with deep oceanic blue gradients, realistic sea spray textures, and authoritative defense typography.',
    tools: ['Adobe Photoshop', 'Sea Spray Compositing', 'Oceanic Color Mapping', 'Naval Insignia Vector'],
    colors: ['#0369A1', '#0C4A6E', '#FFFFFF', '#FF9933']
  },
  {
    id: 'zs-12',
    category: 'tribute',
    title: 'Christmas Festive Holiday AI Special Creative',
    subtitle: 'Holiday Season Campaign • Snow Frost & Golden Sparkles',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/AI-CREATIVE-Christmas.jpg',
    resolution: '1080 × 1350 PX • Festive Season',
    coreTechnique: 'Festive Snow Particle Simulation & Warm Holiday Bokeh',
    explanation: 'Blends generative AI snow particles with festive holiday bokeh lights to create a warm Christmas celebration static.',
    tools: ['Generative AI', 'Photoshop Particle Brush', 'Holiday Bokeh Overlay', 'Gold Star Dust'],
    colors: ['#DC2626', '#15803D', '#D4AF37', '#FFFFFF']
  },
  {
    id: 'zs-13',
    category: 'tribute',
    title: 'Mrs.: Emotional Character Milestone (Variant I)',
    subtitle: 'Sanya Malhotra • Nuanced Domestic Realism',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/MRs (2).jpg',
    resolution: '1080 × 1350 PX • Drama Static',
    coreTechnique: 'Delicate Ambient Light & Micro-Expression Focus',
    explanation: 'Intimate character static drawing viewer empathy through gentle window lighting and grounded color grading.',
    tools: ['Adobe Photoshop', 'Natural Light Curves', 'Micro-Expression Retouch', 'Subtle Vignette'],
    colors: ['#B45309', '#1F2937', '#FEF3C7', '#F43F5E']
  },
  {
    id: 'zs-14',
    category: 'tribute',
    title: 'Mrs.: Thematic Social Static (Variant II)',
    subtitle: 'Critical Acclaim Focus • Quote & Typography Layout',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Mrs.jpg',
    resolution: '1080 × 1350 PX • Social Accolade',
    coreTechnique: 'Quote Layout Hierarchy & Symmetrical Portrait Balancing',
    explanation: 'Structured social static presenting powerful thematic quotes layered with balanced typography over a thoughtful portrait.',
    tools: ['Adobe Photoshop', 'Quote Alignment Grid', 'Skin Tone Harmony', 'Shadow Falloff'],
    colors: ['#D97706', '#111827', '#FFFFFF', '#BE185D']
  },

  // --- TRENDING SOCIALS & COMEDY ---
  {
    id: 'zs-15',
    category: 'social',
    title: 'LOLz: Day 1 to Day 4 Binge Campaign Static',
    subtitle: 'Comedy Special Social Hook • Playful Dynamic Grid',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/LOLZ-Day-1-Day-4-Static_1.jpg',
    resolution: '1080 × 1350 PX • Binge Tracker',
    coreTechnique: 'Multi-Day Progress Layout & Pop Comedy Palette',
    explanation: 'Designed to drive multi-day binge viewing for a comedy series, utilizing high-energy pop yellow hues and relatable character reactions.',
    tools: ['Adobe Photoshop', 'Pop Color Hierarchy', 'Comic Vector Accents', 'Reaction Expressions'],
    colors: ['#FACC15', '#DC2626', '#09090B', '#FFFFFF']
  },
  {
    id: 'zs-16',
    category: 'social',
    title: 'LOLz: Character Punchline Promo Static',
    subtitle: 'Instagram Carousels • High-Engagement Meme Hook',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/LOLz_Character-post_COPY.jpg',
    resolution: '1080 × 1350 PX • Instagram Meme Hook',
    coreTechnique: 'Viral Dialogue Placement & Punchy Cutout Isolation',
    explanation: 'Optimized for Instagram feeds with punchy dialogue captions and expressive character framing that encourages shares and comments.',
    tools: ['Adobe Photoshop', 'Dialogue Caption Styling', 'Punchy Cutout Mask', 'Vibrant Background'],
    colors: ['#EC4899', '#3B82F6', '#1E1B4B', '#FEF08A']
  },
  {
    id: 'zs-17',
    category: 'social',
    title: 'EDKD Series: Viral Social Hook (Edition I)',
    subtitle: 'Trending Digital Series • High-Contrast Relatability',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/EDKD.jpg',
    resolution: '1080 × 1350 PX • Trending Social',
    coreTechnique: 'Split-Frame Contrast & Modern Editorial Type',
    explanation: 'Modern social media format designed for mobile scrolling, balancing high-drama character stills with bold conversational hooks.',
    tools: ['Adobe Photoshop', 'Editorial Typographic Grid', 'Split Tone Contrast', 'Feed Optimization'],
    colors: ['#6366F1', '#F43F5E', '#0F172A', '#FFFFFF']
  },
  {
    id: 'zs-18',
    category: 'social',
    title: 'EDKD Series: High-Engagement Carousel Post',
    subtitle: 'Episode Cliffhanger Hook • Dramatic Lighting Accent',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/EDKD (2).jpg',
    resolution: '1080 × 1350 PX • Episode Hook',
    coreTechnique: 'Cliffhanger Visual Composition & Warm Accent Glow',
    explanation: 'Highlights the pivotal confrontation of the episode to drive next-episode streaming conversions on the ZEE5 platform.',
    tools: ['Adobe Photoshop', 'Cliffhanger Visual Pacing', 'Warm Accent Flare', 'Title Kerning'],
    colors: ['#E11D48', '#D97706', '#18181B', '#F8FAFC']
  },
  {
    id: 'zs-19',
    category: 'social',
    title: 'AKG Series: Crime Mystery Promotion Static',
    subtitle: 'Investigative Thriller • Forensic Cool Grading',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/AKG.jpg',
    resolution: '1080 × 1350 PX • Crime Hook',
    coreTechnique: 'Forensic Teal/Slate Palette & Evidence Framing',
    explanation: 'Investigative mystery static employing cool teal-slate color grading and forensic lighting to hook crime thriller fans.',
    tools: ['Adobe Photoshop', 'Teal/Slate Color Grade', 'Texture Displacement', 'High-Pass Eyes'],
    colors: ['#0E7490', '#334155', '#020617', '#E2E8F0']
  },
  {
    id: 'zs-20',
    category: 'social',
    title: 'BB Series: High-Impact Character Confrontation',
    subtitle: 'Relationship Drama • Symmetrical Stare-Down',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/BB.jpg',
    resolution: '1080 × 1350 PX • Drama Static',
    coreTechnique: 'Symmetrical Face-Off & Tension Lighting',
    explanation: 'Pits two lead characters against each other across a stark central axis to highlight psychological tension.',
    tools: ['Adobe Photoshop', 'Bilateral Symmetry', 'Edge Shadow Falloff', 'Color LUT'],
    colors: ['#BE185D', '#D97706', '#111827', '#FFFFFF']
  },
  {
    id: 'zs-21',
    category: 'social',
    title: 'CC-G: Prime Entertainment Release Static',
    subtitle: 'Action Comedy • Vibrant Colorful Layout',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/CC-G.jpg',
    resolution: '1080 × 1350 PX • Release Promo',
    coreTechnique: 'Punchy Comic Style & High-Energy Saturation',
    explanation: 'Vibrant and inviting entertainment static engineered to catch attention on busy algorithmic social media feeds.',
    tools: ['Adobe Photoshop', 'Dynamic Saturation', 'Comic Edge Sharpen', 'Vibrant Gradients'],
    colors: ['#F59E0B', '#3B82F6', '#09090B', '#FEF08A']
  },
  {
    id: 'zs-22',
    category: 'social',
    title: 'GG: Minimalist Psychological Teaser',
    subtitle: 'Suspense Drama • Shadow Silhouette',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/GG.jpg',
    resolution: '1080 × 1350 PX • Minimal Teaser',
    coreTechnique: 'Negative Space Dominance & Stark Chiaroscuro',
    explanation: 'Uses vast negative space and a single piercing character eye to evoke raw curiosity and psychological suspense.',
    tools: ['Adobe Photoshop', 'Negative Space Balancing', 'Chiaroscuro Curve', 'Title Lockup'],
    colors: ['#0A0A0A', '#DC2626', '#E5E7EB', '#404040']
  },
  {
    id: 'zs-23',
    category: 'social',
    title: 'NEW-5X: High-Volume Streamer Showcase Banner',
    subtitle: '5-Day Streaming Extravaganza • Dynamic Multi-Card',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/NEW-5x.jpg',
    resolution: '1080 × 1350 PX • Promo Blitz',
    coreTechnique: 'Multi-Card Depth Layering & Promotional Hierarchy',
    explanation: 'Showcases an expansive weekend watchlist featuring multiple high-profile titles stacked in dynamic 3D cards.',
    tools: ['Adobe Photoshop', '3D Card Stacking', 'Depth of Field Layering', 'Promotional Typography'],
    colors: ['#7C3AED', '#EC4899', '#0F172A', '#FEF08A']
  },
  {
    id: 'zs-24',
    category: 'social',
    title: 'High-Fidelity Cinema Static (Finest 720×1080)',
    subtitle: 'Pristine Aspect Optimization • Theatrical Polish',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/NEW-720-X-1080-FINNEST.jpg',
    resolution: '720 × 1080 PX • Display Master',
    coreTechnique: 'Sub-Pixel Rendering & Crisp Typography Alignment',
    explanation: 'Optimized for high-density mobile displays ensuring text, badges, and skin textures remain razor-sharp.',
    tools: ['Adobe Photoshop', 'Sub-Pixel Text Rendering', 'Frequency Separation', 'Lossless Export'],
    colors: ['#2563EB', '#D97706', '#111827', '#FFFFFF']
  },
  {
    id: 'zs-25',
    category: 'social',
    title: 'New Start: Fresh Season OTT Banner',
    subtitle: 'Season Premiere Announcement • Radiant Aura',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/NEW-START.jpg',
    resolution: '1080 × 1350 PX • Season Launch',
    coreTechnique: 'Radiant Dawn Gradients & Inspiring Typography',
    explanation: 'Inspiring season premiere banner symbolizing renewal and emotional fresh starts through golden dawn lighting.',
    tools: ['Adobe Photoshop', 'Dawn Gradient Mapping', 'Volumetric Glow', 'Serif Headline Design'],
    colors: ['#F59E0B', '#DB2777', '#1E1B4B', '#FEF3C7']
  },
  {
    id: 'zs-26',
    category: 'social',
    title: 'Rewind-5: Yearly Streaming Retrospective',
    subtitle: 'Annual Platform Recap • Infographic Artistry',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Rewind-5.jpg',
    resolution: '1080 × 1350 PX • Year-End Recap',
    coreTechnique: 'Infographic Typographic Layout & Year-End Polish',
    explanation: 'Year-end streaming retrospective celebrating the 5 biggest audience moments and record-breaking view counts.',
    tools: ['Adobe Photoshop', 'Stat Infographics', 'Celebratory Confetti Flare', 'Clean Metric Layout'],
    colors: ['#8B5CF6', '#F59E0B', '#09090B', '#FFFFFF']
  },
  {
    id: 'zs-27',
    category: 'social',
    title: 'Social Momentum (SM-1): Trending Audio/Dialogue Static',
    subtitle: 'Viral Instagram Reels Static • Dialogue Accents',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/Sm.jpg',
    resolution: '1080 × 1350 PX • Viral Social Art',
    coreTechnique: 'Audio-Wave Graphic Accents & Dynamic Framing',
    explanation: 'Synchronized with viral Instagram audio tracks to maximize platform algorithm push and organic user shares.',
    tools: ['Adobe Photoshop', 'Audio Wave Vector Art', 'Dynamic Subject Framing', 'High-Contrast Edge'],
    colors: ['#EC4899', '#3B82F6', '#18181B', '#FEF08A']
  },
  {
    id: 'zs-28',
    category: 'social',
    title: 'Social Momentum (SM-2): Relatable Engagement Static',
    subtitle: 'Audience Interaction Post • Poll & Quiz Integration',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/SM (2).jpg',
    resolution: '1080 × 1350 PX • Community Post',
    coreTechnique: 'Gamified Social Layout & High-Readability Fonts',
    explanation: 'A gamified community post encouraging comments and user selections between favorite character arcs.',
    tools: ['Adobe Photoshop', 'Gamified Grid Alignment', 'Drop Shadow Readability', 'Brand Badge'],
    colors: ['#6366F1', '#10B981', '#0F172A', '#FFFFFF']
  },
  {
    id: 'zs-29',
    category: 'social',
    title: 'Seasonal Template 6: Rapid Production Master',
    subtitle: 'Standardized Broadcaster Template • Agility Workflow',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/TEMP-6.jpg',
    resolution: '1080 × 1350 PX • Production Template',
    coreTechnique: 'Modular Smart Object Architecture for Daily Pacing',
    explanation: 'A modular Photoshop template Shubham engineered to allow rapid sub-30-minute turnarounds during busy broadcast weeks.',
    tools: ['Adobe Photoshop', 'Smart Object Templating', 'Global Layer Styles', 'Dynamic Text Layer'],
    colors: ['#D97706', '#BE185D', '#111827', '#F3F4F6']
  },
  {
    id: 'zs-30',
    category: 'social',
    title: 'Start Slate: Master Broadcaster Launch Slate',
    subtitle: 'Video Opening Card • High-Impact Title Ident',
    image: '/Portfolio/Zee5%20Statics/Zee%205%20Statics/startslate.jpg',
    resolution: '1080 × 1350 PX • Launch Slate',
    coreTechnique: 'Crisp Broadcast Title Slate & Metallic Emblem',
    explanation: 'The official visual opening slate applied across social video teasers, establishing instant brand recognition.',
    tools: ['Adobe Photoshop', 'Broadcast Safe Margins', '3D Metallic Gleam', 'Pure Black Letterbox'],
    colors: ['#7C3AED', '#F59E0B', '#000000', '#FFFFFF']
  }
];

export default function Zee5StaticsShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'blockbuster' | 'tribute' | 'social'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showGridView, setShowGridView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const filteredSlides = activeCategory === 'all'
    ? zee5StaticSlides
    : zee5StaticSlides.filter((s) => s.category === activeCategory);

  const currentSlide = filteredSlides[currentIndex] || filteredSlides[0] || zee5StaticSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredSlides.length - 1));
  };

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

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
            <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <Instagram size={12} className="text-amber-400" />
              VIRAL SOCIAL ART & INSTAGRAM TREND POWERHOUSE • ZEE5 ENTERTAINMENT
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            ZEE5 Statics: Blockbuster Social Art & Instagram Trends
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Gadar 2 • Sam Bahadur • Simmba • Love Hostel • Game Changer • Saurabh Shukla • 30 Master Statics
          </p>
        </div>

        {/* Category Filter & Grid Toggle Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Category pills */}
          <div className="flex items-center bg-[#111] p-1 border border-[#262626]">
            {(['all', 'blockbuster', 'tribute', 'social'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider transition ${
                  activeCategory === tab 
                    ? 'bg-white text-black' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab === 'all' 
                  ? 'All (30)' 
                  : tab === 'blockbuster' 
                  ? 'Films (7)' 
                  : tab === 'tribute' 
                  ? 'Tributes (7)' 
                  : 'Socials (16)'}
              </button>
            ))}
          </div>

          {/* Toggle Grid View button */}
          <button
            onClick={() => setShowGridView((v) => !v)}
            className={`p-1.5 border transition flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider ${
              showGridView 
                ? 'bg-amber-600 border-amber-500 text-white' 
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
                title="Previous static"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-mono text-xs font-bold text-zinc-400 px-1">
                {currentIndex + 1} / {filteredSlides.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
                title="Next static"
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
                className="group relative bg-[#111111] border border-[#222222] hover:border-amber-400 transition cursor-pointer overflow-hidden p-1.5 flex flex-col justify-between"
              >
                <div className="h-44 w-full overflow-hidden flex items-center justify-center bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-left space-y-0.5">
                  <span className="text-[8px] font-mono uppercase bg-amber-950/60 text-amber-300 px-1.5 py-0.5 inline-block">
                    {slide.category}
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

              {/* Category badge */}
              <div className="absolute top-3 right-3 z-10 bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1">
                <Flame size={11} className="text-amber-400" />
                <span>{currentSlide.category.toUpperCase()} ART</span>
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
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase bg-[#2e1d0d] text-amber-300 border border-amber-900/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
                <Clapperboard size={11} className="text-amber-400" />
                Modern Trending Social Format
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
                Core Graphic Design & Compositing Technique:
              </span>
              <p className="text-xs font-mono text-zinc-200 bg-[#161616] p-2.5 border border-[#262626] leading-relaxed">
                ❖ {currentSlide.coreTechnique}
              </p>
            </div>

            {/* Detailed breakdown */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Social Strategy & Visual Impact:
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {currentSlide.explanation}
              </p>
            </div>

            {/* Active Toolkit */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
                Active Software Stack:
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
                Blockbuster Color Harmonies:
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
                <span>Fullscreen Static Inspector</span>
              </button>
              <button
                onClick={() => setShowGridView(true)}
                className="rounded-none bg-[#1a1a1a] text-zinc-300 border border-[#333] hover:border-white transition px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <LayoutGrid size={13} />
                <span>View All 30 Statics</span>
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
              title="Previous static"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next static"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>INSTAGRAM VIRAL MASTER • ZEE5 SOCIAL CAMPAIGNS ARCHIVE</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
