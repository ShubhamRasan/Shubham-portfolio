import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { Eye, Activity } from 'lucide-react';

export default function AIPortfolioSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#0c0d12] p-5 shadow-2xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">Interactive Lab</span>
          <h4 className="font-display text-xl font-bold text-white">4K → 8K Up-sampling & Element Extraction</h4>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 border border-zinc-800">
          <Eye size={14} className="text-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-zinc-400">Drag vertical dividing bar left/right</span>
        </div>
      </div>

      {/* Main comparative slider stage */}
      <div 
        id="restoration-slider-container"
        ref={containerRef}
        className="relative h-96 w-full select-none overflow-hidden rounded-lg cursor-ew-resize border border-zinc-800"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* Right side: High Fidelity Res (Pristine background image) */}
        <div className="absolute inset-0 h-full w-full">
          <img 
            src="https://picsum.photos/seed/face-enhance/1000/600" 
            alt="AI Restored High Fidelity portrait"
            className="h-full w-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          {/* Tag details */}
          <div className="absolute right-4 bottom-4 z-10 rounded bg-[#090a0f]/80 px-2 py-1 border border-zinc-800 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">★ AI 8K RESTORED PORTRAIT</span>
          </div>
        </div>

        {/* Left side: Blurry original (Clipped container) */}
        <div 
          className="absolute inset-y-0 left-0 z-10 h-full overflow-hidden border-r-2 border-orange-500"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Inner image is stretched matching size of the container parent */}
          <div className="absolute inset-0 h-full w-full" style={{ width: containerRef.current?.getBoundingClientRect().width || 600 }}>
            <img 
              src="https://picsum.photos/seed/face-enhance/1000/600" 
              alt="Low Resolution Blurry original"
              className="h-full w-full object-cover blur-md saturate-50 contrast-125 select-none"
              style={{ filter: 'blur(7px) saturate(75%)' }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Tag details */}
          <div className="absolute left-4 bottom-4 z-10 rounded bg-[#090a0f]/85 px-2 py-1 border border-orange-500/20 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-widest text-orange-400 uppercase font-semibold">⚡ ORIGINAL LOW-RES FLICKR SOURCE</span>
          </div>
        </div>

        {/* Vertical divider handle */}
        <div 
          id="restoration-slider-handle"
          className="absolute inset-y-0 z-20 w-1 flex items-center justify-center cursor-ew-resize pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="flex h-12 w-6 items-center justify-center rounded-full border border-orange-500 bg-zinc-950 shadow-xl transition-transform hover:scale-115">
            <div className="flex gap-0.5">
              <span className="h-4 w-0.5 rounded-full bg-orange-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-orange-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Info parameters Grid of Shubham's exact procedure */}
      <div className="mt-5 grid grid-cols-1 gap-4 rounded-lg bg-zinc-900/60 p-4 border border-zinc-800/80 sm:grid-cols-3">
        <div className="space-y-1">
          <p className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">01. Structural Lock</p>
          <h5 className="font-display text-sm font-semibold text-zinc-200">Face Vector Guarding</h5>
          <p className="text-xs text-zinc-400">Zero synthetic replacements. Preserves human iris contours, lip-lines, and natural pore placements.</p>
        </div>
        <div className="space-y-1 border-t border-zinc-800 pt-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
          <p className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">02. Noise Removal</p>
          <h5 className="font-display text-sm font-semibold text-zinc-200">Background Extraction</h5>
          <p className="text-xs text-zinc-400">Meticulously extracts chromatic noise, stray compression dust, and artifacts in single photoshop passes.</p>
        </div>
        <div className="space-y-1 border-t border-zinc-800 pt-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
          <p className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">03. Scale Expansion</p>
          <h5 className="font-display text-sm font-semibold text-zinc-200">Double Pass Lanczos</h5>
          <p className="text-xs text-zinc-400">Upsamples canvases into flawless 300DPI 8K master sheets for giant print billboards and digital campaigns.</p>
        </div>
      </div>
    </div>
  );
}
