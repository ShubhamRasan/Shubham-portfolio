import { useState } from 'react';
import { Package, Shield, Layout, MapPin, ClipboardList } from 'lucide-react';

type PackagingTheme = 'midnight' | 'emerald' | 'amber';
type BaseMaterial = 'acrylic' | 'marble' | 'led';

export default function FigurineConfigurator() {
  const [theme, setTheme] = useState<PackagingTheme>('midnight');
  const [base, setBase] = useState<BaseMaterial>('acrylic');
  const [viewLines, setViewLines] = useState<boolean>(true);

  const themeColors: Record<PackagingTheme, { bg: string; text: string; primary: string; border: string }> = {
    midnight: {
      bg: 'bg-blue-950/20',
      text: 'text-blue-400',
      primary: '#1e3a8a',
      border: 'border-blue-500/30'
    },
    emerald: {
      bg: 'bg-emerald-950/20',
      text: 'text-emerald-400',
      primary: '#065f46',
      border: 'border-emerald-500/30'
    },
    amber: {
      bg: 'bg-amber-950/20',
      text: 'text-amber-400',
      primary: '#92400e',
      border: 'border-amber-500/30'
    },
  };

  const getRenderStyle = () => {
    switch (theme) {
      case 'midnight': return 'from-blue-900 to-indigo-950';
      case 'emerald': return 'from-emerald-900 to-teal-950';
      case 'amber': return 'from-amber-950 to-orange-950';
    }
  };

  return (
    <div className="rounded-xl border border-zinc-805 bg-[#090a0f] p-5 shadow-2xl">
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">Design Concept Draft</span>
          <h4 className="font-display text-xl font-bold text-white">1/7 Scale Figurine Packaging & Mounting spec-sheet</h4>
          <p className="text-xs text-zinc-400">Interactive product sleeve & structural engineering blueprint selector.</p>
        </div>
        
        {/* Toggle wireframe guides */}
        <button
          onClick={() => setViewLines(!viewLines)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition border ${
            viewLines 
              ? 'bg-orange-500 text-white border-orange-450' 
              : 'bg-zinc-900 text-zinc-400 border-zinc-800'
          }`}
        >
          {viewLines ? 'Hide Structural Callouts' : 'Show Blueprint Overlays'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Side Option Toggles */}
        <div className="space-y-4 lg:col-span-5">
          {/* Box graphic selections */}
          <div>
            <label className="mb-1.5 block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Product Sleeve Theme</label>
            <div className="grid grid-cols-3 gap-2">
              {(['midnight', 'emerald', 'amber'] as PackagingTheme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`rounded-lg py-2 border text-xs font-semibold uppercase text-center transition ${
                    theme === t
                      ? 'border-orange-500 bg-orange-950/20 text-orange-400 font-bold'
                      : 'border-zinc-800 bg-[#0c0d12] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {t === 'midnight' ? 'Midnight Blue' : t === 'emerald' ? 'Championship' : 'Gold/Amber'}
                </button>
              ))}
            </div>
          </div>

          {/* Mount Material selections */}
          <div>
            <label className="mb-1.5 block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Pedestal Mount Base Material</label>
            <div className="grid grid-cols-3 gap-2">
              {(['acrylic', 'marble', 'led'] as BaseMaterial[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBase(b)}
                  className={`rounded-lg py-2 border text-xs font-semibold uppercase text-center transition ${
                    base === b
                      ? 'border-orange-500 bg-orange-950/20 text-orange-400 font-bold'
                      : 'border-zinc-800 bg-[#0c0d12] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {b === 'acrylic' ? 'Laser Acrylic' : b === 'marble' ? 'Black Marble' : 'LED Stadium Turf'}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-zinc-850" />

          {/* Technical Specifications Sheet list */}
          <div className="rounded-lg bg-zinc-900/40 p-3.5 border border-zinc-850 space-y-2.5">
            <h5 className="font-display text-xs font-bold text-zinc-200 flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
              <ClipboardList size={12} className="text-orange-400" />
              Blueprints Config / Bill of Materials (BOM)
            </h5>
            <div className="space-y-1.5 font-mono text-[11px] text-zinc-400">
              <div className="flex justify-between">
                <span>Model Scale factor:</span>
                <span className="text-white font-medium">1:7 Scale (Proportion-Lock)</span>
              </div>
              <div className="flex justify-between">
                <span>Total height draft:</span>
                <span className="text-white font-medium">255 mm (approx. 10.03 inches)</span>
              </div>
              <div className="flex justify-between">
                <span>Pedestal footprint:</span>
                <span className="text-white font-medium">145 mm (Square Base)</span>
              </div>
              <div className="flex justify-between">
                <span>Box Window material:</span>
                <span className="text-white">Ultra-low haze PET film (0.45mm)</span>
              </div>
              <div className="flex justify-between">
                <span>In-box Stadium Background:</span>
                <span className="text-orange-400 font-bold">White Rivers Cricket edition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual Draft Area */}
        <div className="lg:col-span-7">
          <div className={`relative aspect-video w-full rounded-lg bg-gradient-to-br ${getRenderStyle()} overflow-hidden border border-zinc-800 flex items-center justify-center p-4 transition-all duration-300`}>
            {/* Engineering Grid Underlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

            {/* Simulated 3D box model */}
            <div className="relative z-10 w-44 h-56 bg-zinc-900/90 rounded-lg border-2 border-zinc-700/60 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Outer sleeve header highlight */}
              <div className="bg-zinc-950 p-2 border-b border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-widest text-[#FFF] uppercase font-black">CHAMPIONSHIP SERIES</span>
                <Package size={10} className="text-orange-500 animate-pulse" />
              </div>

              {/* Clear Protective Window showcasing the collector figurine mock */}
              <div className="flex-1 bg-zinc-950/60 m-1.5 rounded border border-zinc-800/80 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-transparent z-10" />
                
                {/* Figurine Silhouette Graphic */}
                <img 
                  src="https://picsum.photos/seed/cricket-jersey-athlete/300/400" 
                  alt="Collector athlete replica figurine mockup"
                  className="h-full w-full object-cover opacity-60 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />

                {/* Grid guidelines overlay (the specs) */}
                {viewLines && (
                  <div className="absolute inset-0 z-20 border border-orange-500/40 border-dashed pointer-events-none flex flex-col justify-between p-1">
                    <div className="border-b border-orange-500/20 border-dashed pb-0.5 text-[7px] font-mono text-orange-400 text-left">
                      GRID H1: 245mm Limit
                    </div>
                    <div className="border-t border-orange-500/20 border-dashed pt-0.5 text-[7px] font-mono text-orange-400 text-right">
                      DRAFT ANGLE: 2.0°
                    </div>
                  </div>
                )}
              </div>

              {/* Box Footer branding details */}
              <div className={`p-2 text-center border-t border-zinc-800 ${themeColors[theme].bg} transition-colors duration-300`}>
                <p className="font-display text-[9px] font-bold text-white uppercase tracking-wider">SHUBHAM R. EDITIONS</p>
                <div className="flex justify-center items-center gap-1 mt-0.5">
                  <span className="h-1 w-1 bg-orange-500 rounded-full" />
                  <span className="font-mono text-[7px] text-zinc-400">1:7 MOUNT SPEC</span>
                </div>
              </div>
            </div>

            {/* Base Pedestal Mount underneath */}
            <div className="absolute bottom-4 z-0 w-52 h-4 bg-zinc-900 rounded border border-zinc-700/50 shadow-lg flex items-center justify-center">
              <div className={`h-1 w-44 rounded-full ${
                base === 'acrylic' ? 'bg-orange-500' : base === 'marble' ? 'bg-zinc-300' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]'
              }`} />
            </div>

            {/* Interactive Wireframe Labels overlaying the canvas */}
            {viewLines && (
              <div className="absolute inset-0 pointer-events-none z-20 text-[9px] font-mono">
                {/* Label 1 */}
                <div className="absolute top-8 left-6 flex items-center gap-1.5 bg-black/80 px-1.5 py-1 rounded border border-orange-500/30 text-orange-400">
                  <Layout size={8} />
                  <span>Sleeve Margin: 20mm</span>
                </div>

                {/* Label 2 */}
                <div className="absolute bottom-8 right-6 flex items-center gap-1.5 bg-black/80 px-1.5 py-1 rounded border-2 border-emerald-500/30 text-emerald-400">
                  <Shield size={8} />
                  <span>Rigid Stand: PX1</span>
                </div>

                {/* Label 3 */}
                <div className="absolute top-16 right-8 flex items-center gap-1.5 bg-black/80 px-1.5 py-1 rounded border border-blue-500/30 text-blue-400 font-bold">
                  <MapPin size={8} />
                  <span>1/7 SCALE SPEC</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
