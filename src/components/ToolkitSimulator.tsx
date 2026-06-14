import { useState, useEffect } from 'react';
import { Sliders, RefreshCw, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { WorkflowState } from '../types';

const INITIAL_STATE: WorkflowState = {
  grain: 30,
  exposure: 5,
  contrast: 20,
  saturation: -15,
  sharpen: 40,
  upscaleRatio: 4,
  noiseReduction: 15
};

const PRESETS: Record<string, { state: Partial<WorkflowState>; desc: string }> = {
  'Raakh (Dramatic Thriller)': {
    state: { grain: 75, exposure: -15, contrast: 45, saturation: -60, sharpen: 60, upscaleRatio: 8, noiseReduction: 10 },
    desc: 'Deep shadows, heavy movie grain, and gritty black-and-crimson tonal adjustments.'
  },
  'Bigg Boss (Vivid Reality)': {
    state: { grain: 10, exposure: 12, contrast: 15, saturation: 40, sharpen: 25, upscaleRatio: 4, noiseReduction: 25 },
    desc: 'High warmth, clean vectors, high brightness, and vivid color-graded saturation.'
  },
  'Pristine 8K AI Restoration': {
    state: { grain: 0, exposure: 0, contrast: 10, saturation: 0, sharpen: 75, upscaleRatio: 8, noiseReduction: 60 },
    desc: 'Flawless noise cancellation, sharp details, and clean flat background fills.'
  }
};

export default function ToolkitSimulator() {
  const [state, setState] = useState<WorkflowState>(INITIAL_STATE);
  const [activePreset, setActivePreset] = useState<string>('Default Workspace');
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    addLog(`Initialized workspace. High-fidelity Adobe Photoshop and Generative AI pipelines ready.`);
  }, []);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${msg}`, ...prev.slice(0, 10)]);
  };

  const handleSliderChange = (key: keyof WorkflowState, val: number) => {
    setState((prev) => ({ ...prev, [key]: val }));
    setActivePreset('Custom Configuration');
    if (Math.random() > 0.7) {
      addLog(`Parameter '${String(key)}' updated to ${val}. Auto-calculating color curves...`);
    }
  };

  const applyPreset = (name: string) => {
    setIsProcessing(true);
    setActivePreset(name);
    addLog(`Loading Preset: "${name}"...`);
    
    setTimeout(() => {
      const p = PRESETS[name];
      if (p) {
        setState((prev) => ({ ...prev, ...p.state }));
        addLog(`Applied filter parameters. Upscaling raster layers to ${p.state.upscaleRatio || 4}K matrix...`);
        addLog(`Rendering composite: ${p.desc}`);
      }
      setIsProcessing(false);
    }, 400);
  };

  const resetWorkspace = () => {
    setState(INITIAL_STATE);
    setActivePreset('Default Workspace');
    addLog('Reset workspace configurations to default. Clean 300DPI project frame opened.');
  };

  // Convert settings dynamically to interesting CSS filters for the mockup image
  const filterStyle = {
    filter: `
      brightness(${100 + state.exposure}%) 
      contrast(${100 + state.contrast}%) 
      saturate(${100 + state.saturation}%) 
      ${state.sharpen > 50 ? 'contrast(105%) saturate(95%)' : ''}
    `
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0a0a0f] p-6 shadow-2xl">
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 pb-5 md:flex-row md:items-center">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">Interactive Studio</span>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">Photoshop & AI Pipeline Simulator</h3>
          <p className="mt-1 text-xs text-zinc-400">See how I manipulate color arrays and restoration models to build final master key art assets.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button 
            onClick={resetWorkspace} 
            className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-800 hover:bg-zinc-800 transition"
          >
            <RefreshCw size={12} />
            Reset Workspace
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Control Panel Column */}
        <div className="space-y-6 lg:col-span-5">
          {/* Presets List */}
          <div>
            <label className="mb-2 block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Choose Case Presets</label>
            <div className="grid grid-cols-1 gap-2">
              {Object.keys(PRESETS).map((pName) => (
                <button
                  key={pName}
                  onClick={() => applyPreset(pName)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium border transition-all ${
                    activePreset === pName 
                      ? 'border-orange-500/40 bg-orange-950/20 text-orange-400' 
                      : 'border-zinc-800 bg-[#0d0e12] text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <span>{pName}</span>
                  {activePreset === pName && <CheckCircle2 size={12} className="text-orange-400" />}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-zinc-800/60" />

          {/* Value adjustment sliders */}
          <div className="space-y-4">
            <label className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Adjustment Panel</label>
            
            {/* Grain */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300">Film Texture Grain</span>
                <span className="font-mono text-[10px] text-zinc-400">{state.grain}%</span>
              </div>
              <input 
                type="range" min="0" max="100" 
                value={state.grain}
                onChange={(e) => handleSliderChange('grain', Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-zinc-800 rounded-lg appearance-none"
              />
            </div>

            {/* Contrast */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300">Composite Contrast</span>
                <span className="font-mono text-[10px] text-zinc-400">{state.contrast > 0 ? `+${state.contrast}` : state.contrast}%</span>
              </div>
              <input 
                type="range" min="-40" max="80" 
                value={state.contrast}
                onChange={(e) => handleSliderChange('contrast', Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-zinc-800 rounded-lg appearance-none"
              />
            </div>

            {/* Exposure */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300">Shutter Exposure</span>
                <span className="font-mono text-[10px] text-zinc-400">{state.exposure > 0 ? `+${state.exposure}` : state.exposure}%</span>
              </div>
              <input 
                type="range" min="-50" max="50" 
                value={state.exposure}
                onChange={(e) => handleSliderChange('exposure', Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-zinc-800 rounded-lg appearance-none"
              />
            </div>

            {/* Saturation */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300">Color Saturation</span>
                <span className="font-mono text-[10px] text-zinc-400">{state.saturation > 0 ? `+${state.saturation}` : state.saturation}%</span>
              </div>
              <input 
                type="range" min="-80" max="80" 
                value={state.saturation}
                onChange={(e) => handleSliderChange('saturation', Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-zinc-800 rounded-lg appearance-none"
              />
            </div>

            {/* Sharpen */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300">Micro-Detail Sharpening</span>
                <span className="font-mono text-[10px] text-zinc-400">{state.sharpen}%</span>
              </div>
              <input 
                type="range" min="0" max="100" 
                value={state.sharpen}
                onChange={(e) => handleSliderChange('sharpen', Number(e.target.value))}
                className="w-full accent-orange-500 h-1 bg-zinc-800 rounded-lg appearance-none"
              />
            </div>

            {/* Upscaling Radio */}
            <div>
              <span className="block mb-1.5 text-xs text-zinc-300">AI Grid Multiplier</span>
              <div className="flex gap-2">
                {[4, 8].map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => {
                      setState(prev => ({ ...prev, upscaleRatio: ratio as 4|8 }));
                      addLog(`Upscale output set to ${ratio}K ultra-density grids.`);
                    }}
                    className={`flex-1 rounded py-1 text-xs font-mono border text-center transition ${
                      state.upscaleRatio === ratio
                        ? 'border-orange-500 bg-orange-950/25 text-orange-400'
                        : 'border-zinc-800 bg-[#0d0e12] text-zinc-400 hover:text-white'
                    }`}
                  >
                    {ratio}K UHD Master
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Preview & Log Column */}
        <div className="space-y-4 lg:col-span-7">
          <label className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Live Canvas Output</label>
          <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-black min-h-[300px] flex items-center justify-center">
            {/* Blending layers overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            {/* Main Interactive Preview Image */}
            <div className="relative w-full h-full max-h-[380px] overflow-hidden flex items-center justify-center p-2">
              <img 
                src="https://picsum.photos/seed/artwork-preview/900/500" 
                alt="Workspace preview rendering"
                style={filterStyle}
                className="rounded shadow-2xl object-cover h-64 w-full transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Film Grain simulator layer using CSS noise overlay */}
              {state.grain > 10 && (
                <div 
                  className="absolute inset-0 pointer-events-none bg-repeat mix-blend-overlay"
                  style={{ 
                    opacity: state.grain / 100 * 0.15,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }}
                />
              )}

              {isProcessing && (
                <div className="absolute inset-0 bg-[#090a0f]/85 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-30">
                  <Cpu className="text-orange-400 animate-spin" size={32} />
                  <span className="font-mono text-xs text-zinc-300 animate-pulse">Computing complex noise layers...</span>
                </div>
              )}
            </div>

            {/* Hud Overlay UI */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded bg-zinc-950/80 px-2 py-1 text-[10px] font-mono border border-zinc-800 text-zinc-300 backdrop-blur">
              <Sliders size={10} className="text-orange-500" />
              <span>{activePreset}</span>
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded bg-zinc-950/80 px-2 py-1 text-[9px] font-mono border border-zinc-800 text-zinc-400 backdrop-blur">
              <span>CANVAS: {state.upscaleRatio === 8 ? '7680x4320' : '3840x2160'} 300DPI</span>
            </div>
          </div>

          {/* Developer Real-time Photoshop Layer Compilation Log */}
          <div className="rounded-lg border border-zinc-850 bg-[#07080c] p-3">
            <div className="mb-2 flex items-center justify-between border-b border-zinc-850 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Layers size={11} className="text-zinc-500" />
                <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">Process Monitor & Metadata log</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            
            <div className="max-h-24 overflow-y-auto font-mono text-[10px] text-zinc-400 space-y-1 text-left select-none">
              {logs.map((log, idx) => (
                <div key={idx} className={idx === 0 ? 'text-zinc-200 font-semibold' : 'opacity-70'}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
