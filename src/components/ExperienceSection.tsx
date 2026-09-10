import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  FileText, 
  ExternalLink, 
  Download, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Tv, 
  TrendingUp,
  MapPin,
  Maximize2,
  X
} from 'lucide-react';

export default function ExperienceSection() {
  const [activePdfModal, setActivePdfModal] = useState<string | null>(null);

  const experienceDetails = {
    company: "White Rivers Media Solutions Pvt. Ltd.",
    role: "Graphic Designer",
    dates: "16 May 2025 – 13 August 2026",
    duration: "1 Year, 3 Months (Full-Time Core Agency Tenure)",
    location: "Vidyavihar West, Mumbai, India",
    signatory: "Lizandra Pinto",
    designation: "Vice President - People and Culture",
    phone: "+91 9757217617",
    experienceLetterPdf: "/certificates/White_Rivers_Media_Experience_Letter_Shubham.pdf",
    anniversaryLetterPdf: "/certificates/White_Rivers_Media_1_Year_Work_Anniversary_Shubham.pdf"
  };

  const clientIPs = [
    {
      network: "Banijay Asia & EndemolShine India",
      role: "Marquee Broadcast & Reality Marketing",
      color: "border-rose-500/40 text-rose-400 bg-rose-500/10",
      projects: [
        "Bigg Boss Hindi (Salman Khan — Text-behind-subject depth layering & Season 18 tension)",
        "Bigg Boss Marathi (Historic 3.1 TVR record finale with Riteish Deshmukh & 3D gold type)",
        "Raakh: Crime Thriller (Forensic red-string investigation pinboards & Rakesh Bedi dialogue art)",
        "Banijay Asia OTT Suite (Two Much with Kajol & Twinkle, The Trial, Khatron Ke Khiladi, The 50)"
      ]
    },
    {
      network: "ZEE5 Entertainment & Zee Studios",
      role: "Theatrical Key Art, Awards & Prime Serials",
      color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      projects: [
        "The Bengal Files (Vivek Ranjan Agnihotri theatrical key art with Mithun Chakraborty — Most Appreciated Work)",
        "Bhagwat: Raakshas (Arshad Warsi crime campaign generating 1.1B+ Reach and 953M+ Views)",
        "Mrs. Award Campaign (Sanya Malhotra Best Actress Iconic Gold Awards & 5-star review rollups)",
        "Smartplay Prime Serials (Traditional gold jewelry retouching & UI badges for Vasudha, Saaru, TSTK)",
        "Blockbuster Statics (Gadar 2, Sam Bahadur, Love Hostel, Simmba, Game Changer, Saurabh Shukla)"
      ]
    },
    {
      network: "Jio Hotstar (JHS)",
      role: "High-Urgency Client Sprints",
      color: "border-sky-500/40 text-sky-400 bg-sky-500/10",
      projects: [
        "FRIENDS Iconic Sitcom Reunion (Warm tungsten coffeehouse grading on tight same-day deadline)",
        "Match-Day Sports Entertainment (High-energy motion blur & stadium floodlight promo hooks)",
        "KKKPK Reality Stunts (Hazard orange survival grading delivered in < 2 hours turnaround)"
      ]
    }
  ];

  const coreSkills = [
    "Theatrical Key Art Compositing",
    "Adobe Photoshop CC Masterclass",
    "GPT & Gemini AI Prompt Engineering",
    "Intricate Jewelry & Fabric Retouching",
    "Ultra-HD 8K Restoration & Scaling",
    "3D Metallic Typography & Beveling",
    "Performance Ad CTR Architecture",
    "Broadcast Safe-Margin Layouts"
  ];

  return (
    <section id="experience" className="border-t border-[#222222] bg-[#0a0a0a] py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background Decorative Signature */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] sm:text-[160px] font-black opacity-[0.015] select-none pointer-events-none tracking-widest font-sans uppercase whitespace-nowrap">
        EXPERIENCE
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION TITLE BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-none bg-[#141414] px-3 py-1 border border-[#262626] text-amber-300 font-mono text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-amber-400" />
              <span>VERIFIED AGENCY TENURE • 1+ YEARS FULL-TIME</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Professional Experience & Track Record
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed font-light">
              Full-time agency track record at <strong className="text-white font-medium">White Rivers Media</strong> leading commercial key art, national entertainment campaigns, and AI design pipelines for India's largest OTT platforms and broadcasters.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-3 bg-[#111111] p-3 border border-[#222222] self-start md:self-auto shrink-0">
            <div className="h-10 w-10 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Award size={20} />
            </div>
            <div>
              <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold block">
                OFFICIALLY CERTIFIED
              </span>
              <span className="font-display text-xs font-bold text-white uppercase tracking-tight block">
                White Rivers Media Solutions
              </span>
            </div>
          </div>
        </div>

        {/* PRIMARY EXPERIENCE SPOTLIGHT CARD */}
        <div className="rounded-none border border-[#262626] bg-[#111111] p-6 lg:p-8 space-y-8 text-left relative overflow-hidden">
          
          {/* Top Bar: Company, Role & Duration */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#222222] pb-6">
            
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-white text-black font-display font-black text-base tracking-tighter">
                WRM
              </div>
              <div className="space-y-1 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    {experienceDetails.role}
                  </h3>
                  <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-bold">
                    Full-Time Core Agency
                  </span>
                </div>
                <p className="text-sm font-medium text-zinc-300">
                  {experienceDetails.company}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-amber-400" />
                    <span>{experienceDetails.dates}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-zinc-500" />
                    <span>{experienceDetails.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#161616] p-3 border border-[#242424] text-center font-mono">
              <div className="px-2">
                <p className="text-lg font-bold text-white">1+ Year</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Agency Tenure</p>
              </div>
              <div className="px-2 border-l border-[#2c2c2c]">
                <p className="text-lg font-bold text-amber-400">14+ IPs</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Marquee Shows</p>
              </div>
              <div className="px-2 border-l border-[#2c2c2c]">
                <p className="text-lg font-bold text-emerald-400">1.1B+</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Reach Delivered</p>
              </div>
              <div className="px-2 border-l border-[#2c2c2c]">
                <p className="text-lg font-bold text-white">100%</p>
                <p className="text-[8px] text-zinc-500 uppercase tracking-wider">HR Certified</p>
              </div>
            </div>

          </div>

          {/* TWO-COLUMN BREAKDOWN: HR ENDORSEMENT & 1-YEAR ANNIVERSARY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Official Experience Letter Endorsement */}
            <div className="rounded-none border border-[#242424] bg-[#161616] p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#262626] pb-2.5">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-amber-400" />
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-300 tracking-wider">
                      Official Experience Letter
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500">13 August 2026</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans italic">
                  "This is to certify that Mr. Shubham Rasanbhaire was an employee of White Rivers Media Solutions Pvt. Ltd. from 16 May 2025 to 13 August 2026 as 'Graphic Designer'. <strong className="text-white font-medium not-italic">We found him sincere, honest, and efficient in executing responsibilities assigned to him.</strong> We take this opportunity to thank him for his contributions and wish him success in his future endeavors."
                </p>

                <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <div>
                    <span className="text-white font-bold block">{experienceDetails.signatory}</span>
                    <span className="text-zinc-500 text-[9px]">{experienceDetails.designation}</span>
                  </div>
                  <span className="bg-black border border-[#333] px-2 py-0.5 text-zinc-400 text-[9px]">
                    Verified Document
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={experienceDetails.experienceLetterPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white hover:bg-zinc-200 text-black font-mono text-[10px] uppercase font-bold tracking-wider transition"
                >
                  <FileText size={12} />
                  <span>View Official Experience Letter (PDF)</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Box 2: 1-Year Work Anniversary Commendation */}
            <div className="rounded-none border border-[#242424] bg-[#161616] p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#262626] pb-2.5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-pink-400" />
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-300 tracking-wider">
                      1st Work Anniversary Yearbook Honor
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500">1 Year Celebration</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans italic">
                  "Congratulations Shubham Rasanbhaire on completing 1 Year with us. <strong className="text-white font-medium not-italic">You have been an essential part of our organization's journey and success for which we are eternally grateful.</strong> To Many More Milestones... As we flip the last page of this special edition, we celebrate the passion, dedication, and growth that came with it. <span className="text-pink-400 font-bold not-italic">Keep shining. Keep inspiring.</span>"
                </p>

                <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <div>
                    <span className="text-white font-bold block">White Rivers Media Community</span>
                    <span className="text-zinc-500 text-[9px]">Annual Commendation Issue</span>
                  </div>
                  <span className="bg-pink-950/40 border border-pink-800/50 text-pink-300 px-2 py-0.5 text-[9px]">
                    ★ Milestone Honor
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={experienceDetails.anniversaryLetterPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#222222] hover:bg-[#333333] hover:border-white text-white border border-[#333] font-mono text-[10px] uppercase font-bold tracking-wider transition"
                >
                  <Award size={12} className="text-pink-400" />
                  <span>View 1-Year Anniversary Yearbook (PDF)</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

          </div>

          {/* CLIENT ACCOUNTS & MARQUEE SHOWS SPEARHEADED */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-[#222] pb-2">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-widest flex items-center gap-2">
                <Tv size={14} className="text-white" />
                Marquee Client Accounts & Franchise Campaigns Driven:
              </span>
              <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
                Click on any project in the portfolio to view full key art
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {clientIPs.map((client, idx) => (
                <div key={idx} className="rounded-none border border-[#222] bg-[#141414] p-4 space-y-3">
                  <div className="space-y-1">
                    <span className={`font-mono text-[8px] uppercase font-bold px-2 py-0.5 border ${client.color}`}>
                      {client.role}
                    </span>
                    <h4 className="font-display text-sm font-bold uppercase text-white tracking-wide pt-1">
                      {client.network}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-[11px] font-sans text-zinc-300 pt-1">
                    {client.projects.map((proj, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 bg-white shrink-0 mt-1" />
                        <span className="leading-snug">{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AGENCY TOOLKIT MASTERY */}
          <div className="space-y-2 pt-2 border-t border-[#222]">
            <span className="font-mono text-[9px] uppercase font-bold text-[#808080] tracking-widest block">
              Core Technical Competencies Cultivated at White Rivers Media:
            </span>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, sIdx) => (
                <span key={sIdx} className="rounded-none bg-[#171717] border border-[#2c2c2c] px-3 py-1 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
