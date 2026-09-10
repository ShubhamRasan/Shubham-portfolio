import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Bot, 
  Cpu,
  Wand2,
  Layers
} from 'lucide-react';

export interface AICreativeItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  resolution: string;
  promptNotes: string;
  coreTechnique: string;
  explanation: string;
  tools: string[];
  colors: string[];
}

export const aiCreativeSlides: AICreativeItem[] = [
  {
    id: 'ai-1',
    title: 'Toilet: Ek Prem Katha — Organic Holi AI Reimagining',
    subtitle: 'Akshay Kumar & Bhumi Pednekar • Airborne Gulal Powder Simulation',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Toilet-ek-Prem-khata.jpg',
    resolution: '1080 × 1350 PX • Ultra HD AI Synthesis',
    promptNotes: 'Gemini & GPT prompt architecture: "Cinematic 8K festive Indian Holi atmosphere, organic powder explosions, authentic expressions, rim lighting, 85mm portrait lens"',
    coreTechnique: 'Organic Powder Particle Simulation & Facial Integrity Preservation',
    explanation: 'Demonstrating the new meta for graphic designers: using GPT and Gemini for granular prompt engineering to simulate physics-accurate organic gulal clouds while maintaining 100% accurate facial likeness of Akshay Kumar and Bhumi Pednekar, finalized with Photoshop color grading.',
    tools: ['Google Gemini', 'ChatGPT / GPT-4o', 'Adobe Photoshop', 'Particle Simulation', 'Frequency Separation'],
    colors: ['#EC4899', '#F59E0B', '#10B981', '#3B82F6']
  },
  {
    id: 'ai-2',
    title: 'Raanjhanaa — Varanasi Ghats Kaleidoscopic Holi AI',
    subtitle: 'Dhanush & Sonam Kapoor • Atmospheric Color Explosion',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Rahanjhana.jpg',
    resolution: '1080 × 1350 PX • Multi-Model Synthesis',
    promptNotes: 'Prompt crafted for chaotic festive vibrancy, ancient stone ghat textures, vibrant water splashes, and emotional cinematic intensity between lead characters.',
    coreTechnique: 'Atmospheric Environmental Blending & Volumetric Color Clouds',
    explanation: 'Re-envisioning the iconic emotional drama in Varanasi during Holi. Synthesized multi-tiered color clouds in purple, crimson, and turquoise that interact naturally with fabric wrinkles and temple stones.',
    tools: ['Google Gemini', 'ChatGPT / DALL-E', 'Adobe Photoshop', 'Volumetric Haze', 'Color Balance Grading'],
    colors: ['#A855F7', '#EF4444', '#06B6D4', '#FEF08A']
  },
  {
    id: 'ai-3',
    title: 'High-Concept Character Genesis: Master Start I',
    subtitle: 'Futuristic Key Art Prototype • Specular Dynamic Lighting',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Start.jpg',
    resolution: '1080 × 1350 PX • Generative Prototype',
    promptNotes: 'Engineered prompt for high-contrast chiaroscuro, cybernetic lighting hues, and cinematic hero framing.',
    coreTechnique: 'Heroic Low-Angle Framing & Multi-Layer Lighting Synthesis',
    explanation: 'Exploration of character framing using advanced generative models to create deep dimensional depth and rich textural surface reflection.',
    tools: ['Google Gemini', 'ChatGPT Prompting', 'Photoshop Composite', 'HDR Tone Mapping'],
    colors: ['#8B5CF6', '#3B82F6', '#111827', '#F8FAFC']
  },
  {
    id: 'ai-4',
    title: 'Surreal Atmospheric Matrix: Master Start II',
    subtitle: 'Hyper-Detailed Concept • Dual-Tone Neon Illumination',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Start_2.jpg',
    resolution: '1080 × 1350 PX • Advanced Concept Art',
    promptNotes: 'Prompt: "Surreal depth of field, neon specular reflections, atmospheric particles, cinematic key visual, Unreal Engine 5 aesthetic render"',
    coreTechnique: 'Dual-Tone Neon Grade & Particle Dispersion',
    explanation: 'Explores cutting-edge concept art production speed, generating intricate background volumetrics in minutes and refining focal areas manually in Photoshop.',
    tools: ['Google Gemini', 'Photoshop Smart Filters', 'Specular Retouching', 'Depth Layering'],
    colors: ['#6366F1', '#EC4899', '#0F172A', '#E0E7FF']
  },
  {
    id: 'ai-5',
    title: 'Cinematic Depth & Atmospheric Volume: Start (2)',
    subtitle: 'Environmental Concept • Soft Diffusion & Fog Matrix',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Start%20(2).jpg',
    resolution: '1080 × 1350 PX • Lighting Study',
    promptNotes: 'Prompt focusing on natural soft diffusion, volumetric mist, and emotional subject isolation.',
    coreTechnique: 'Atmospheric Fog Grading & Depth of Field Control',
    explanation: 'A lighting study demonstrating how AI can generate delicate atmospheric transitions that previously took hours of manual brushwork.',
    tools: ['Google Gemini', 'ChatGPT', 'Photoshop Camera Raw', 'Luminance Masking'],
    colors: ['#475569', '#38BDF8', '#09090B', '#CBD5E1']
  },
  {
    id: 'ai-6',
    title: 'Character Concept Study: CK Archetype',
    subtitle: 'Stylized Editorial Study • Warm Amber Rim Accents',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/CK.jpg',
    resolution: '1080 × 1350 PX • Character Design',
    promptNotes: 'Prompting for subtle character emotion, tactile skin shaders, and cinematic warm amber backlighting.',
    coreTechnique: 'Tactile Shading & Warm Amber Edge Isolation',
    explanation: 'Refined character concept leveraging Gemini for initial silhouette generation followed by hand-tuned Photoshop skin retouching.',
    tools: ['Gemini Prompting', 'Photoshop Dodge & Burn', 'High-Pass Sharpness', 'Color Balance'],
    colors: ['#D97706', '#1E293B', '#F1F5F9', '#78350F']
  },
  {
    id: 'ai-7',
    title: 'Dramatic Portrait Study: JJ Archetype',
    subtitle: 'Moody High-Contrast Portrait • Deep Shadow Falloff',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/JJ.jpg',
    resolution: '1080 × 1350 PX • Low-Key Render',
    promptNotes: 'Prompt designed for extreme low-key shadow falloff, subtle rim lighting, and intense emotional presence.',
    coreTechnique: 'Low-Key Contrast & Precision Edge Lighting',
    explanation: 'Exemplifies prompt control over directional lighting angles and intensity falloff, creating a mood suitable for dark thrillers.',
    tools: ['ChatGPT / GPT-4o', 'Adobe Photoshop', 'Shadow Density Tuning', 'Curve Adjustments'],
    colors: ['#1E1B4B', '#9333EA', '#030712', '#E2E8F0']
  },
  {
    id: 'ai-8',
    title: 'Mrs. Editorial Variation: Natural Light Synthesis',
    subtitle: 'Photorealistic Editorial • Domestic Drama Aesthetic',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Mrs..jpg',
    resolution: '1080 × 1350 PX • Photorealism',
    promptNotes: 'Prompt engineering targeting natural morning window light, delicate fabric folds, and cinematic warmth.',
    coreTechnique: 'Natural Light Falloff & Micro-Texture Preservation',
    explanation: 'Generates believable, grounded domestic realism without artificial plasticity, pairing AI generation with organic skin retouching.',
    tools: ['Google Gemini', 'Photoshop Micro-Texture Layer', 'Warm Color LUT', 'Grain Overlay'],
    colors: ['#CA8A04', '#F43F5E', '#1F2937', '#FFFBEB']
  },
  {
    id: 'ai-9',
    title: 'Mrs. Concept Variation: High-Resolution Refinement',
    subtitle: 'High-Fidelity Subject Study • Film Grain Texture',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Mrs-UC.jpg',
    resolution: '1080 × 1350 PX • Refined Render',
    promptNotes: 'Refined prompt iteration with negative prompts to suppress AI artifacts and enhance natural skin pores.',
    coreTechnique: 'Artifact Elimination & Negative Prompt Tuning',
    explanation: 'Showcases the iterative craft: using negative prompting in GPT/Gemini to remove unwanted artifacts and achieve clean commercial output.',
    tools: ['Negative Prompt Filtering', 'Photoshop Healing Brush', 'Texture Layering', 'Selective Color'],
    colors: ['#B45309', '#BE185D', '#18181B', '#FDF4FF']
  },
  {
    id: 'ai-10',
    title: 'Mrs. Cinematic Mood Concept: Shadow & Reflection',
    subtitle: 'Reflective Lighting Study • Emotional Weight',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/Mrs%20(3).jpg',
    resolution: '1080 × 1350 PX • Cinematic Mood',
    promptNotes: 'Prompt targeting reflective glass surfaces, melancholy color palettes, and shallow depth of field.',
    coreTechnique: 'Reflective Surface Compositing & Depth Mapping',
    explanation: 'Combines multiple AI passes with manual Photoshop blending to create nuanced emotional storytelling through lighting.',
    tools: ['Google Gemini', 'Photoshop Layer Blending', 'Soft Focus Blur', 'Atmospheric Vignette'],
    colors: ['#9A3412', '#4338CA', '#0F172A', '#FEF2F2']
  },
  {
    id: 'ai-11',
    title: 'Prompt Iteration Phase 1: Baseline Concept',
    subtitle: 'The Generative Pipeline • Stage 01: Concept Exploration',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/1.jpg',
    resolution: '1080 × 1350 PX • Pipeline Phase 1',
    promptNotes: 'Phase 1: Initial conceptual prompt using Gemini to explore composition, color weight, and silhouette balance.',
    coreTechnique: 'Rapid Ideation & Conceptual Spatial Layout',
    explanation: 'Shows how Shubham uses AI during early agency ideation to test 20+ compositions in minutes before locking down the hero direction.',
    tools: ['Google Gemini', 'Rapid Ideation Pipeline', 'Aspect Ratio Calibration', 'Mood Boarding'],
    colors: ['#7C3AED', '#2563EB', '#0F172A', '#F1F5F9']
  },
  {
    id: 'ai-12',
    title: 'Prompt Iteration Phase 2: Lighting & Particle Refinement',
    subtitle: 'The Generative Pipeline • Stage 02: Physics & Particles',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/2.jpg',
    resolution: '1080 × 1350 PX • Pipeline Phase 2',
    promptNotes: 'Phase 2: Refining particle physics, specular bounce lights, and surface micro-details using prompt modifiers.',
    coreTechnique: 'Prompt Modifier Layering & Specular Tuning',
    explanation: 'Second stage in the professional AI design process: injecting camera parameters (f/1.8, ISO 100, volumetric fog) to refine the visual texture.',
    tools: ['ChatGPT Prompt Engineering', 'Photoshop Smart Sharpen', 'Contrast Tuning', 'Color grading'],
    colors: ['#DB2777', '#F59E0B', '#18181B', '#FDF2F8']
  },
  {
    id: 'ai-13',
    title: 'Prompt Iteration Phase 3: Final Production Master',
    subtitle: 'The Generative Pipeline • Stage 03: Photoshop Hybrid Master',
    image: '/Portfolio/Zee5%20Statics/AI%20Creatives/3.jpg',
    resolution: '1080 × 1350 PX • Pipeline Phase 3 Master',
    promptNotes: 'Phase 3: Final production-ready output combining AI generation with commercial Photoshop layout, vector branding, and print-ready color space.',
    coreTechnique: 'Hybrid AI + Manual Photoshop Commercial Finalization',
    explanation: 'The finalized artwork ready for broadcaster deployment. Demonstrates why AI alone isn’t enough: the true art lies in the designer’s manual curation and finishing touch.',
    tools: ['Adobe Photoshop CC', 'Vector Smart Objects', 'CMYK/RGB Translation', 'Noise Conditioning'],
    colors: ['#8B5CF6', '#10B981', '#09090B', '#FFFFFF']
  }
];

export default function Zee5AICreatives() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = aiCreativeSlides[currentIndex] || aiCreativeSlides[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < aiCreativeSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : aiCreativeSlides.length - 1));
  };

  // Auto-slide effect (advances every 4 seconds, pauses on hover or lightbox)
  useEffect(() => {
    if (isLightboxOpen || isPaused || aiCreativeSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < aiCreativeSlides.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, isPaused, aiCreativeSlides.length]);

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
  }, [aiCreativeSlides.length]);

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
            <span className="h-2 w-2 rounded-full bg-[#8b5cf6] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 font-bold flex items-center gap-1.5">
              <Bot size={12} className="text-purple-400" />
              THE NEW META: AI-INTEGRATED GRAPHIC DESIGN • GPT & GEMINI
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            AI-Enhanced Creative Lab: Prompt to Key Art
          </h3>
          <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
            Toilet: Ek Prem Katha & Raanjhanaa Holi Concepts • Character Genesis • Hybrid Photoshop Pipeline
          </p>
        </div>

        {/* Slide progress counter */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-zinc-400">
            {currentIndex + 1} / {aiCreativeSlides.length} AI CREATIVES
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Previous artwork"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#1c1c1c] border border-[#2c2c2c] hover:bg-white hover:text-black transition"
              title="Next artwork"
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

            {/* AI badge */}
            <div className="absolute top-3 right-3 z-10 bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1">
              <Cpu size={11} className="text-purple-400" />
              <span>GPT & Gemini Prompted</span>
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

          {/* FILMSTRIP THUMBNAILS (Scrollable for 13 items) */}
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-1.5 pt-1">
            {aiCreativeSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative border p-1 transition flex flex-col items-center bg-[#111111] ${
                  currentIndex === idx 
                    ? 'border-purple-400 ring-1 ring-purple-400/50' 
                    : 'border-[#222] opacity-60 hover:opacity-100 hover:border-zinc-500'
                }`}
              >
                <div className="h-12 w-full overflow-hidden flex items-center justify-center bg-black/60">
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
            <span className="text-[10px] font-mono uppercase bg-[#2e1065] text-purple-300 border border-purple-800/50 px-2.5 py-0.5 rounded-none tracking-widest inline-flex items-center gap-1">
              <Wand2 size={11} className="text-purple-400" />
              Generative AI & Hybrid Workflow
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {currentSlide.title}
            </h4>
            <p className="font-mono text-[11px] text-purple-400 font-semibold tracking-wider uppercase">
              {currentSlide.subtitle}
            </p>
          </div>

          <div className="h-[1px] bg-[#222222]" />

          {/* Prompt Architecture Box */}
          <div className="space-y-1">
            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">
              Prompt Architecture & Engineering Notes:
            </span>
            <p className="text-[11px] font-mono text-purple-200 bg-[#170e28] p-2.5 border border-purple-900/50 leading-relaxed italic">
              "{currentSlide.promptNotes}"
            </p>
          </div>

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
              Creative Execution & Narrative:
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
              Generative Color Harmonies:
            </span>
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              {currentSlide.colors.map((color, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span 
                    className="h-3 w-3 rounded-none border border-white/20 shadow-sm" 
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
              <span>Fullscreen AI Inspector</span>
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
              title="Previous artwork"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 border border-white/20 hover:border-white text-white transition rounded-none"
              title="Next artwork"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Lightbox Footer info */}
          <div className="border-t border-[#222] pt-3 text-center flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>PROMPT-TO-PIXEL AI MASTER • GPT & GEMINI RESEARCH LAB</span>
            <span>USE ARROW KEYS TO NAVIGATE • ESC TO EXIT</span>
          </div>

        </div>
      )}

    </div>
  );
}
