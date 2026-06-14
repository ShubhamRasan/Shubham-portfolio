import { useState } from 'react';
import { Tv, Play, ChevronRight, MessageSquare, Volume2, Mic, Users, Heart } from 'lucide-react';

type ChannelType = 'bb' | 'friends';

export default function BroadcastMockup() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>('bb');
  const [assistantTriggered, setAssistantTriggered] = useState<boolean>(false);
  const [voiceQuery, setVoiceQuery] = useState<string>('');
  const [likes, setLikes] = useState<number>(342);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const friendsQueries = [
    "Who said 'We were on a break'?",
    "Show me Joey's favorite sandwich recipe",
    "Play Phoebe's 'Smelly Cat' song track",
    "List season 4 romantic episode guide"
  ];

  const triggerVoiceQuery = (query: string) => {
    setAssistantTriggered(true);
    setVoiceQuery(query);
    setTimeout(() => {
      // simulate artificial voice assistant answer delay
    }, 1000);
  };

  return (
    <div className="rounded-xl border border-zinc-805 bg-[#090a0f] p-5 shadow-2xl">
      <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">Live UI Prototype</span>
          <h4 className="font-display text-xl font-bold text-white">Broadcast Overlay & HUD concepts</h4>
          <p className="text-xs text-zinc-400">Interactive simulation of TV broadcast templates & smart widgets.</p>
        </div>
        <div className="flex gap-2 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
          <button
            onClick={() => {
              setActiveChannel('bb');
              setAssistantTriggered(false);
            }}
            className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
              activeChannel === 'bb' 
                ? 'bg-orange-500 text-white' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Bigg Boss lower-third
          </button>
          <button
            onClick={() => setActiveChannel('friends')}
            className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
              activeChannel === 'friends' 
                ? 'bg-orange-500 text-white' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            F.R.I.E.N.D.S Voice-Assistant
          </button>
        </div>
      </div>

      {/* Screen Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
        
        {/* Mock TV Content backdrop */}
        {activeChannel === 'bb' ? (
          <div className="relative h-full w-full">
            <img 
              src="https://picsum.photos/seed/biggboss-set/900/500" 
              alt="Reality tv production studio background"
              className="h-full w-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

            {/* Title / Watermark in corner */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-red-650 animate-ping" />
              <span className="font-display text-[11px] font-bold tracking-widest text-[#FFF] uppercase bg-red-600 px-2 py-0.5 rounded">BIGG BOSS LIVE</span>
              <span className="font-mono text-[9px] text-zinc-400">CAM 04 • EAST STAGE</span>
            </div>

            {/* Custom Lower-Third Graphic Concept designed by Shubham */}
            <div className="absolute bottom-4 inset-x-4 flex flex-col gap-2 rounded-xl bg-gradient-to-r from-orange-600/90 to-red-600/85 p-4 border border-orange-400/20 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-orange-200 uppercase font-black">ELIMINATION WEEK NOMINEE</span>
                  <h5 className="font-display text-md font-bold text-white sm:text-lg">Will the Secret Alliance break tonight?</h5>
                  <p className="text-xs text-orange-100 opacity-90">Sustained campaign layout: Cast your vote now using our unified broadcast applet.</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setLikes(l => isLiked ? l - 1 : l + 1);
                      setIsLiked(!isLiked);
                    }}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-inner border transition-all ${
                      isLiked 
                        ? 'bg-white text-orange-600 border-white' 
                        : 'bg-zinc-950/40 text-white border-zinc-800 hover:bg-zinc-950/65'
                    }`}
                  >
                    <Heart size={12} className={isLiked ? 'fill-current' : ''} />
                    <span>{likes} Votes</span>
                  </button>
                  <div className="hidden items-center gap-1.5 rounded-lg bg-zinc-950/30 px-2.5 py-1 text-xs text-white border border-white/10 sm:flex">
                    <Users size={12} />
                    <span className="font-mono font-medium">1.2M Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <img 
              src="https://picsum.photos/seed/friends-set/900/500" 
              alt="Cozy Central Perk Coffee spot"
              className="h-full w-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            {/* Dark transparent veil */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/50 via-transparent to-black/60" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Tv size={14} className="text-cyan-400" />
              <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase font-bold">F•R•I•E•N•D•S SMART HUB</span>
            </div>

            {/* Glassmorphic voice widgets overlay - clicking the assistant trigger populates this */}
            {assistantTriggered ? (
              <div className="absolute top-12 right-4 w-72 rounded-xl bg-zinc-950/85 p-3 text-left border border-cyan-500/25 shadow-2xl backdrop-blur-lg animate-in slide-in-from-right duration-350 z-20">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-[9px] text-cyan-400 tracking-wider uppercase">Active Request Log</span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="rounded bg-zinc-900/80 p-2 border border-zinc-800">
                    <p className="font-sans text-[10px] text-zinc-400">User Query:</p>
                    <p className="font-display text-xs font-semibold text-white">"{voiceQuery}"</p>
                  </div>
                  <div className="rounded bg-cyan-950/30 p-2.5 border border-cyan-800/20 text-xs text-cyan-100">
                    <span className="font-mono text-[8px] text-cyan-400 uppercase block font-black">AI Voice Assistant response</span>
                    {voiceQuery.includes('break') ? (
                      "Technically, Rachel claims yes initially but later rescinds it in Ross's letter of 18 pages (front and back!). Ross asserts yes outright."
                    ) : voiceQuery.includes('sandwich') ? (
                      "Joey’s holy grail of sandwiches is the classic Meatball Sub with melted provolone and a thick marinara layer. No sharing allowed!"
                    ) : voiceQuery.includes('Cat') ? (
                      "Playing Phoebe's smelly cat soundtrack... 'Smelly cat, smelly cat, what are they feeding you?' [Audio simulation active]"
                    ) : (
                      "Loading Season 4 archive... display map detailing Ross and Emily's London wedding arc, Phoebe's pregnancy surrogacy plotline."
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-zinc-950/50 p-4 border border-white/5 text-center backdrop-blur-sm max-w-sm">
                  <Mic size={24} className="mx-auto text-cyan-400 animate-bounce mb-2" />
                  <h6 className="font-display text-sm font-bold text-white">Smart Voice Assistant overlay</h6>
                  <p className="text-[11px] text-zinc-300 mt-1">Simulating integrated television client control. Click any speech bubble below to search show records instantly.</p>
                </div>
              </div>
            )}

            {/* Bottom dialogue options resembling speech bubbles */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2 overflow-x-auto pb-1 select-none">
              {friendsQueries.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => triggerVoiceQuery(q)}
                  className="flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1.5 text-[10px] font-medium text-white border border-zinc-805 hover:bg-cyan-950 hover:border-cyan-500/50 transition"
                >
                  <MessageSquare size={10} className="text-cyan-400" />
                  <span>{q}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Showcase Note */}
      <div className="mt-3 flex items-center gap-2 rounded bg-zinc-900/40 p-2.5 border border-zinc-850">
        <Volume2 size={13} className="text-orange-400 shrink-0" />
        <p className="text-[11px] text-zinc-400 leading-normal">
          <strong>Design Highlight:</strong> These mock layouts showcase dynamic transparency thresholds, glass container padding, and high-contrast color pairings styled specifically to comply with broadcast standards.
        </p>
      </div>
    </div>
  );
}
