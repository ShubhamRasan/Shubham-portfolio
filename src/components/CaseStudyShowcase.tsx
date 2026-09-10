import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  X, 
  ExternalLink, 
  Download, 
  Flame, 
  Eye, 
  Sparkles, 
  Layers, 
  TrendingUp,
  Tv,
  ChevronLeft,
  ChevronRight,
  Info,
  Sliders
} from 'lucide-react';

export interface CaseStudyData {
  id: string;
  title: string;
  headline: string;
  client: string;
  platform: string;
  image: string;
  masterImage: string;
  resolution: string;
  aspectRatio: string;
  dimensions: { width: number; height: number };
  prophecy: string;
  summoning: string;
  aftermath: string;
  playbook: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  impactMetrics: {
    value: string;
    label: string;
    highlight?: boolean;
    badge?: string;
  }[];
}

// Multi-photo array: ready for additional photos in "Portfolio/Case study"
export const caseStudiesList: CaseStudyData[] = [
  {
    id: 'bhagwat-raakshas',
    title: "The Raakshas's Shadow",
    headline: "BHAGWAT - CHAPTER ONE: RAAKSHAS",
    client: "ZEE5 HINDI ORIGINAL",
    platform: "OTT Entertainment Campaign",
    image: "/Portfolio/Case%20study/Case-Study-2-display.jpg",
    masterImage: "/Portfolio/Case%20study/Case-Study-2-revised.jpg",
    resolution: "7063 × 5008 PX",
    aspectRatio: "1.41 : 1 (Landscape Master)",
    dimensions: { width: 7063, height: 5008 },
    prophecy: "To launch ZEE5's dark thriller Bhagwat – Chapter One: Raakshas by turning its Good vs Evil narrative into a festive cultural conversation.",
    summoning: "Leveraging the unexpected familiarity of the Panchayat cast supporting Jeetu's darker turn to Satish Ray's crossover with Arshad Warsi, sparked genuine intrigue around Bhagwat's world.",
    aftermath: "Turned cultural timing, fandom crossover and suspense into a festive cultural conversation that dominated entertainment media.",
    playbook: [
      {
        title: "Familiar Faces. Darker Turn.",
        subtitle: "Trojan Horse Casting Strategy",
        description: "Used the trusted, lovable faces of the Panchayat universe as a Trojan Horse, drawing mainstream family audiences into Bhagwat's gritty crime thriller narrative."
      },
      {
        title: "Cultural Synchronization.",
        subtitle: "Festive Good vs Evil Alignment",
        description: "Timed key campaign beats with Dussehra and Diwali, aligning the Raakshas vs Rakshak battle with the grand cultural celebration of light conquering darkness."
      },
      {
        title: "Intrigue-Led Communication.",
        subtitle: "Suspense Storytelling Over Spoilers",
        description: "Built immense viral curiosity through character tension, cryptic teaser posters, and dialogue teasers rather than premature plot revelation."
      }
    ],
    impactMetrics: [
      { value: "1.1B+", label: "Total Campaign Reach", highlight: true },
      { value: "953M+", label: "Total Video Views", highlight: true },
      { value: "250M+", label: "Watch Minutes Streamed" },
      { value: "21M+", label: "Social Engagements" },
      { value: "883+", label: "Media Stories & Coverage" },
      { value: "7.9/10", label: "IMDb Audience Score", badge: "IMDb" }
    ]
  }
];

export default function CaseStudyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'canvas' | 'playbook'>('canvas');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentStudy = caseStudiesList[currentIndex] || caseStudiesList[0];

  // Auto-slide effect when multiple studies exist
  useEffect(() => {
    if (isLightboxOpen || caseStudiesList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < caseStudiesList.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen]);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full rounded-none border border-[#222222] bg-[#0c0c0c] text-white shadow-2xl overflow-hidden">
      
      {/* CASE STUDY HUD HEADER */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#222222] bg-[#111111] px-4 py-3 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 opacity-70">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-300">
              SR_STUDIO_CASE_STUDY_STAGE_V1.PSD
            </span>
            <span className="hidden sm:inline-block rounded-none bg-[#1c1c1c] px-2 py-0.5 font-mono text-[8px] font-bold text-red-400 border border-red-900/40 uppercase">
              ● 300 DPI MASTER
            </span>
          </div>
        </div>

        {/* CONTROLS & TAB SWITCHER */}
        <div className="flex items-center gap-2">
          {/* Multi-photo Selector (ready for multiple photos) */}
          {caseStudiesList.length > 1 && (
            <div className="flex items-center gap-1 mr-2 border-r border-[#2a2a2a] pr-2">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : caseStudiesList.length - 1))}
                className="p-1 hover:bg-[#222] text-zinc-400 hover:text-white transition"
                title="Previous Case Study"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="font-mono text-[9px] text-zinc-400">
                {currentIndex + 1}/{caseStudiesList.length}
              </span>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev < caseStudiesList.length - 1 ? prev + 1 : 0))}
                className="p-1 hover:bg-[#222] text-zinc-400 hover:text-white transition"
                title="Next Case Study"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* View Mode Toggle */}
          <div className="flex items-center bg-black p-0.5 border border-[#2a2a2a]">
            <button
              onClick={() => setActiveTab('canvas')}
              className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                activeTab === 'canvas'
                  ? 'bg-white text-black font-extrabold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Master Canvas
            </button>
            <button
              onClick={() => setActiveTab('playbook')}
              className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider transition ${
                activeTab === 'playbook'
                  ? 'bg-white text-black font-extrabold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Playbook & Impact
            </button>
          </div>

          {/* Fullscreen Inspector Button */}
          <button
            onClick={() => {
              setIsLightboxOpen(true);
              setZoomLevel(1);
            }}
            className="flex items-center gap-1.5 rounded-none bg-[#1a1a1a] px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-300 border border-[#333333] hover:bg-white hover:text-black hover:border-white transition"
            title="Inspect full resolution master"
          >
            <Maximize2 size={11} />
            <span className="hidden md:inline">Inspect 7K</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: MASTER ARTWORK CANVAS */}
      {activeTab === 'canvas' && (
        <div className="relative p-4 sm:p-5">
          {/* Exact Aspect Ratio Container with enhanced mobile height */}
          <div 
            onClick={() => {
              setIsLightboxOpen(true);
              setZoomLevel(1);
            }}
            className="group relative w-full aspect-[4/3] sm:aspect-[7063/5008] cursor-zoom-in rounded-none overflow-hidden bg-black border border-[#222222] shadow-2xl transition-all hover:border-[#444444]"
          >
            <img 
              src={currentStudy.image} 
              alt={`${currentStudy.title} - ${currentStudy.client}`}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle top & bottom overlay accents for studio feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Top metadata badge (Desktop & Tablet only) */}
            <div className="hidden sm:flex absolute top-3 left-3 right-3 items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md px-2.5 py-1 border border-red-500/30 text-[9px] font-mono uppercase tracking-widest text-white shadow-lg">
                <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" />
                <span>{currentStudy.client}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md px-2.5 py-1 border border-[#333] text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                <span>{currentStudy.resolution}</span>
              </div>
            </div>

            {/* Hover trigger inspector badge: RELOCATED TO BOTTOM-RIGHT CORNER (NOT IN CENTER) */}
            <div className="absolute bottom-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
              <div className="flex items-center gap-1.5 bg-black/90 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1.5 border border-white/40 tracking-wider shadow-2xl">
                <ZoomIn size={12} className="text-red-400" />
                <span>INSPECT 7K MASTER</span>
              </div>
            </div>

            {/* Bottom info strip (Desktop only, mobile renders below) */}
            <div className="hidden sm:flex absolute bottom-3 left-3 right-3 flex-wrap items-end justify-between pointer-events-none gap-2">
              <div className="text-left bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 border border-[#2c2c2c] max-w-sm">
                <span className="font-mono text-[8px] text-red-400 tracking-wider font-extrabold uppercase block">
                  OFFICIAL ART DIRECTION CASE STUDY
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                  {currentStudy.title}
                </p>
                <p className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase">
                  {currentStudy.headline}
                </p>
              </div>

              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-[#333] text-[9px] font-mono text-zinc-400">
                <span>IMPACT:</span>
                <span className="text-red-400 font-bold">1.1B+ REACH</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">953M+ VIEWS</span>
              </div>
            </div>
          </div>

          {/* MOBILE DEDICATED INFO STRIP (CLEANLY SITUATED UNDER THE PHOTO, ZERO CLUTTER ON ARTWORK) */}
          <div className="sm:hidden block text-left space-y-2.5 pt-3 border-t border-[#1a1a1a]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-[#141414] px-2 py-0.5 border border-red-500/30 text-[8px] font-mono uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" />
                <span>{currentStudy.client}</span>
              </div>
              <span className="font-mono text-[8px] text-zinc-400 bg-black px-2 py-0.5 border border-[#2c2c2c]">
                {currentStudy.resolution}
              </span>
            </div>

            <div>
              <span className="font-mono text-[8px] text-red-400 tracking-wider font-extrabold uppercase block">
                OFFICIAL ART DIRECTION CASE STUDY
              </span>
              <h4 className="font-display font-bold text-base text-white uppercase tracking-tight">
                {currentStudy.title}
              </h4>
              <p className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase mt-0.5">
                {currentStudy.headline}
              </p>
            </div>

            {/* Mobile Impact KPIs */}
            <div className="grid grid-cols-2 gap-2 bg-[#121212] p-2 border border-[#222]">
              <div>
                <p className="font-mono text-[8px] text-zinc-500 uppercase">CAMPAIGN REACH</p>
                <p className="font-display text-sm font-bold text-red-400">1.1B+ REACH</p>
              </div>
              <div>
                <p className="font-mono text-[8px] text-zinc-500 uppercase">VIDEO VIEWS</p>
                <p className="font-display text-sm font-bold text-amber-400">953M+ VIEWS</p>
              </div>
            </div>
          </div>

          {/* QUICK ACTION FOOTER BAR */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#1a1a1a] pt-3 text-[10px] font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Aspect Ratio:</span>
              <span>1.41 : 1 Landscape</span>
              <span className="text-zinc-600">•</span>
              <span className="text-white font-semibold">Render Quality:</span>
              <span className="text-emerald-400">Ultra-HD 300DPI</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsLightboxOpen(true);
                  setZoomLevel(1);
                }}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
              >
                <Eye size={12} className="text-red-400" />
                <span>Open Lightbox</span>
              </button>
              <a 
                href={currentStudy.masterImage} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-white transition"
              >
                <ExternalLink size={12} className="text-amber-400" />
                <span>Open 15MB Raw File</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: STRATEGIC PLAYBOOK & IMPACT KPIs */}
      {activeTab === 'playbook' && (
        <div className="p-5 sm:p-6 space-y-6 text-left">
          
          {/* Key Campaign Headline */}
          <div className="border-b border-[#222] pb-4 flex flex-wrap justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 bg-red-500 rounded-none animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-red-400 font-bold">
                  ZEE5 HINDI ORIGINAL • ENTERTAINMENT CAMPAIGN ARCHITECTURE
                </span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight">
                {currentStudy.title}: {currentStudy.headline}
              </h3>
            </div>
            <div className="flex gap-2">
              <span className="rounded-none bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 text-[9px] font-mono text-zinc-300">
                Panchayat Universe Fandom Crossover
              </span>
              <span className="rounded-none bg-red-950/40 border border-red-800/40 px-2.5 py-1 text-[9px] font-mono text-red-300">
                Dussehra & Diwali Sync
              </span>
            </div>
          </div>

          {/* 3 CORE PILLARS: THE PROPHECY, THE SUMMONING, THE AFTERMATH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-red-500 uppercase tracking-widest">01</span>
                <h4 className="font-display text-xs font-extrabold uppercase text-white tracking-wider">
                  The Prophecy
                </h4>
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {currentStudy.prophecy}
              </p>
            </div>

            <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-red-500 uppercase tracking-widest">02</span>
                <h4 className="font-display text-xs font-extrabold uppercase text-white tracking-wider">
                  The Summoning
                </h4>
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {currentStudy.summoning}
              </p>
            </div>

            <div className="rounded-none border border-[#222] bg-[#111111] p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-red-500 uppercase tracking-widest">03</span>
                <h4 className="font-display text-xs font-extrabold uppercase text-white tracking-wider">
                  The Aftermath
                </h4>
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {currentStudy.aftermath}
              </p>
            </div>
          </div>

          {/* THE PLAYBOOK STRATEGIES */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#808080] font-bold block">
              Strategic Playbook Breakdown:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentStudy.playbook.map((tactic, idx) => (
                <div key={idx} className="rounded-none border border-[#1e1e1e] bg-black p-3.5 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold text-xs">▸</span>
                    <h5 className="font-display text-xs font-bold uppercase text-white">
                      {tactic.title}
                    </h5>
                  </div>
                  <span className="font-mono text-[9px] text-amber-400 uppercase tracking-wider block">
                    {tactic.subtitle}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    {tactic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* THE RAAKSHAS'S IMPACT (LIVE NUMBERS) */}
          <div className="rounded-none border border-red-950/50 bg-[#120808] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame size={15} className="text-red-500 animate-pulse" />
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-red-400">
                  The Raakshas's Impact Metrics
                </span>
              </div>
              <span className="font-mono text-[8px] text-zinc-400 uppercase">
                Aggregated Multi-Platform Analytics
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
              {currentStudy.impactMetrics.map((m, idx) => (
                <div 
                  key={idx}
                  className={`rounded-none border p-3 text-center transition ${
                    m.highlight 
                      ? 'border-red-600/60 bg-red-950/30 shadow-[0_0_15px_rgba(220,38,38,0.15)]' 
                      : 'border-[#2c2222] bg-black/60'
                  }`}
                >
                  <p className="font-display text-2xl font-black text-white tracking-tight">
                    {m.value}
                  </p>
                  <p className="font-mono text-[9px] text-zinc-300 uppercase tracking-wider mt-1 font-medium">
                    {m.label}
                  </p>
                  {m.badge && (
                    <span className="inline-block mt-1 bg-amber-400 text-black font-black font-mono text-[8px] px-1 py-0.2 rounded-none">
                      {m.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Switch back to visual canvas CTA */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveTab('canvas')}
              className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white uppercase tracking-wider"
            >
              <span>Back to Visual Composite Canvas</span>
              <span>→</span>
            </button>
          </div>

        </div>
      )}

      {/* FULLSCREEN 7K MASTER INSPECTOR LIGHTBOX */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-white">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-[#222222] bg-[#0c0c0c] px-6 py-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-red-500">
                [ 7K MASTER INSPECTOR ]
              </span>
              <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
                {currentStudy.title} • {currentStudy.resolution} • 300 DPI
              </span>
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#1a1a1a] border border-[#333] px-2 py-1 gap-2 font-mono text-xs">
                <button 
                  onClick={() => setZoomLevel((prev) => Math.max(0.5, prev - 0.25))}
                  className="p-1 hover:text-red-400 transition"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[11px] w-12 text-center text-zinc-300">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                  className="p-1 hover:text-red-400 transition"
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

              <a
                href={currentStudy.masterImage}
                target="_blank"
                rel="noreferrer"
                download
                className="hidden sm:flex items-center gap-1.5 rounded-none bg-[#1e1e1e] px-3 py-1.5 text-xs font-mono border border-[#333] hover:bg-white hover:text-black transition"
              >
                <Download size={13} />
                <span>Raw 15MB</span>
              </a>

              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomLevel(1);
                }}
                className="rounded-none bg-[#1f1f1f] p-2 text-zinc-400 hover:bg-red-600 hover:text-white transition"
                title="Close (Esc)"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Image Viewport */}
          <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
            <div 
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out' 
              }}
              className="max-w-6xl max-h-[85vh] transition-all shadow-2xl border border-[#222]"
            >
              <img 
                src={currentStudy.image} 
                alt={currentStudy.title}
                className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-[#222222] bg-[#0c0c0c] px-6 py-2.5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Scroll or use +/- to zoom. Press ESC to exit.</span>
            <div className="flex items-center gap-4">
              <span>Client: <strong className="text-white">{currentStudy.client}</strong></span>
              <span>Dimensions: <strong className="text-white">{currentStudy.resolution}</strong></span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
