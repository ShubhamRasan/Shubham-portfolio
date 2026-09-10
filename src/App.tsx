import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Clapperboard, 
  Trophy, 
  Sliders, 
  Eye, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Mail, 
  User, 
  Send, 
  Check, 
  Briefcase, 
  Gamepad2, 
  Tv, 
  ChevronRight, 
  Download,
  Flame,
  MousePointerClick
} from 'lucide-react';

import { servicesData, portfolioProjects } from './data';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import BigBossSlideshow from './components/BigBossSlideshow';
import BanijaySlideshow from './components/BanijaySlideshow';
import RaakhSlideshow from './components/RaakhSlideshow';
import BengalFilesShowcase from './components/BengalFilesShowcase';
import Zee5AdCreatives from './components/Zee5AdCreatives';
import Zee5AwardCreatives from './components/Zee5AwardCreatives';
import Zee5AICreatives from './components/Zee5AICreatives';
import Zee5SmartplaySerials from './components/Zee5SmartplaySerials';
import Zee5StaticsShowcase from './components/Zee5StaticsShowcase';
import Zee5JHSShowcase from './components/Zee5JHSShowcase';
import Zee5BdayCreative from './components/Zee5BdayCreative';
import Zee5LogoShowcase from './components/Zee5LogoShowcase';
import HeroPhotoCarousel from './components/HeroPhotoCarousel';
import ExperienceSection from './components/ExperienceSection';
import BrandLogo, { BrandLogoMark } from './components/BrandLogo';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'entertainment'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [photoMode, setPhotoMode] = useState<'studio' | 'original'>('studio');
  
  // Custom contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Quick-scroll utility
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1200);
  };

  const filteredProjects = activeTab === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-white selection:text-black">
      
      {/* Decorative large background text signature for modern branding */}
      <div className="absolute top-20 right-10 text-[100px] sm:text-[140px] font-black opacity-[0.02] select-none pointer-events-none tracking-widest font-sans">
        CREATIVE
      </div>
      <div className="absolute top-[800px] left-10 text-[90px] sm:text-[120px] font-black opacity-[0.015] select-none pointer-events-none tracking-widest font-sans">
        AI_MATRIX
      </div>

      {/* STICKY GLASSMORPHISM NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 text-left cursor-pointer focus:outline-none transition-transform active:scale-95"
            aria-label="Return to top"
          >
            <BrandLogo size="md" showText={true} />
          </button>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection('about')} className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] hover:text-white transition">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] hover:text-white transition">Experience</button>
            <button onClick={() => scrollToSection('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] hover:text-white transition">Expertise</button>
            <button onClick={() => scrollToSection('portfolio-labs')} className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] hover:text-white transition">Portfolio Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] hover:text-white transition">Contact</button>
          </nav>

          {/* Action CTA Button */}
          <button 
            onClick={() => scrollToSection('portfolio-labs')}
            className="rounded-none bg-white text-black hover:bg-zinc-200 transition-colors px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap"
          >
            [ View My Work ]
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Copy Area */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-none bg-[#111111] px-3 py-1 border border-[#222222] text-zinc-300 font-mono text-[10px] font-semibold uppercase tracking-widest">
              <Sparkles size={11} className="text-white" />
              <span>AI-INTEGRATED GRAPHIC DESIGNER</span>
            </div>

            <div className="space-y-4">
              <h1 style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
                Shubham<br/>Rasanbhaire
              </h1>
              <p className="text-xs sm:text-sm tracking-widest uppercase opacity-60 font-mono">
                Visual Storyteller & Digital Artist
              </p>
            </div>

            <p className="font-sans text-base text-[#b0b0b0] sm:text-lg leading-relaxed max-w-md font-light">
              Graphic Designer specializing in high-impact entertainment marketing, AI-integrated workflows, and digital brand campaigns. Currently creating at <span className="text-white font-medium underline decoration-offset-4 decoration-[#333]">White Rivers Media</span>.
            </p>

            {/* CTA Widgets: Compact & Locked onto the Same Line */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-2 flex-nowrap">
              <button
                onClick={() => scrollToSection('portfolio-labs')}
                className="rounded-none bg-white text-black text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] px-3.5 py-2 sm:px-6 sm:py-2.5 hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-sm"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-none bg-[#141414] text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] px-3.5 py-2 sm:px-6 sm:py-2.5 border border-[#2e2e2e] hover:border-white transition-colors whitespace-nowrap shadow-sm"
              >
                Let's Collaborate
              </button>
            </div>

            {/* Quick stats board */}
            <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-4 border-t border-[#222222] max-w-xl text-[11px] uppercase tracking-wider opacity-75">
              <div>
                <p className="font-mono text-[9px] text-[#808080] font-bold uppercase tracking-widest">Toolkit</p>
                <p className="font-medium text-white mt-1">Adobe Photoshop</p>
                <p className="text-[10px] text-[#707070]">Advanced AI Gen</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-[#808080] font-bold uppercase tracking-widest">Experience</p>
                <p className="font-medium text-white mt-1">White Rivers Media</p>
                <p className="text-[10px] text-[#707070]">1+ Year Agency</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-[#808080] font-bold uppercase tracking-widest">Active Core</p>
                <p className="font-medium text-white mt-1">Sustained Brand</p>
                <p className="text-[10px] text-[#707070]">Web Campaigning</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-[#808080] font-bold uppercase tracking-widest">AI Matrix Scale</p>
                <p className="font-medium text-white mt-1">8K Resolution</p>
                <p className="text-[10px] text-[#707070]">Pure Precision</p>
              </div>
            </div>
          </div>

          {/* Interactive Designer Brand Carousel */}
          <div className="relative lg:col-span-5 flex justify-center items-center w-full">
            <HeroPhotoCarousel />
          </div>

        </div>
      </section>

      {/* VERIFIED PROFESSIONAL EXPERIENCE & AGENCY TENURE SECTION */}
      <ExperienceSection />

      {/* ABOUT ME SECTION */}
      <section id="about" className="relative border-t border-[#222222] bg-[#0c0c0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#808080] uppercase block">The Core Story</span>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">About Me</h2>
              <div className="h-[1px] w-20 bg-white" />
              
              <div className="rounded-none border border-[#222222] p-5 bg-[#111111] space-y-4">
                <div className="flex gap-3">
                  <Briefcase className="text-white shrink-0 animate-pulse" size={18} />
                  <div>
                    <h5 className="font-display text-sm font-semibold text-white uppercase tracking-wider">White Rivers Media Experience</h5>
                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">Driving visual layouts and promotional digital packages for television broadcasters and prime entertainment groups.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-zinc-300 text-left">
              <p className="font-sans text-base leading-relaxed text-[#c0c0c0]">
                With over a year of fast-paced agency experience at White Rivers Media, I bridge the gap between traditional graphic design and cutting-edge AI technologies. My core expertise lies in Adobe Photoshop, where I build everything from gritty, dramatic key art for web series to high-energy promotional campaigns for major television properties.
              </p>
              
              <p className="font-sans text-base leading-relaxed text-[#c0c0c0]">
                I am driven by a clean, minimalist aesthetic, ensuring every pixel serves a purpose and every layout communicates a clear, compelling message. By integrating advanced upscaling algorithms and restoration safeguards directly into daily agency workflows, I secure original details while enabling pristine high-resolution commercial prints.
              </p>

              {/* Toolkit tags block */}
              <div className="space-y-3 pt-4">
                <span className="block font-mono text-[9px] tracking-widest text-[#808080] uppercase font-bold">My Primary Creative Arsenal</span>
                <div className="flex flex-wrap gap-2">
                  {['Adobe Photoshop', 'AI Integration Pipelines', 'Vector Layouts', 'Posters Key Art Compose', 'Displacement Texturing', 'Image Restoration (4K/8K)', 'Dynamic Sports Graphics', 'Collector Figurine specs', 'Broadcaster HUD concepts'].map((tool, idx) => (
                    <span key={idx} className="rounded-none bg-[#111111] border border-[#222222] px-3 py-1.5 text-[11px] font-mono text-white">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES / EXPERTISE SECTION */}
      <section id="services" className="border-t border-[#222222] py-20 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 text-center">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#808080] uppercase">Services & Expertise</span>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">What I Bring to the Table</h2>
            <p className="mx-auto max-w-xl text-xs text-zinc-400 uppercase tracking-widest leading-normal">
              Specialized visual services centered on entertainment campaigns, high-end AI resolution scaling, and detailed concepts layout.
            </p>
          </div>

          {/* 3-Column layout requested by user */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className="group relative rounded-none border border-[#222222] bg-[#111111] p-6 text-left transition-all hover:border-[#333333] hover:bg-[#151515]"
              >
                {/* Number index to denote artistic layout, as in the user reference theme */}
                <span className="absolute top-4 right-4 text-xs font-black opacity-20 font-mono tracking-widest">
                  0{index + 1}
                </span>

                {/* Service Icon select */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-none bg-[#222222] border border-[#333333] text-white">
                  {service.iconName === 'Clapperboard' && <Clapperboard size={18} />}
                  {service.iconName === 'Sparkles' && <Sparkles size={18} />}
                  {service.iconName === 'Trophy' && <Trophy size={18} />}
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">
                    {service.title}
                  </h4>
                  <p className="font-mono text-[10px] text-[#808080] font-bold tracking-wider uppercase">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>

                {/* Sub-highlights items list */}
                <ul className="mt-5 space-y-2 border-t border-[#222222] pt-4 text-xs font-sans text-zinc-350">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-white shrink-0" />
                      <span className="text-[#cccccc]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO LABS: CUSTOM INTERACTIVE MODULES */}
      <section id="portfolio-labs" className="border-t border-[#222222] bg-[#0c0c0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-6 text-left">
            <div className="space-y-2 text-left">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#808080] uppercase">Aesthetic Portfolio</span>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">Studio Portfolios & Dynamic Prototypes</h2>
              <p className="text-xs text-zinc-400 max-w-2xl leading-normal">
                Every design project below contains descriptive summaries alongside direct <strong className="text-white font-medium">interactive layout systems</strong> to simulate reality broadcast triggers, movie color grades, and dimensions blueprint viewings.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 self-start md:self-auto bg-[#111111] p-1.5 rounded-none border border-[#222222]">
              {(['all', 'entertainment'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedProject(null);
                  }}
                  className={`rounded-none px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition ${
                    activeTab === tab 
                      ? 'bg-white text-black font-extrabold' 
                      : 'text-[#808080] hover:text-white'
                  }`}
                >
                  {tab === 'all' ? 'All Projects (14)' : 'Entertainment Campaigns'}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT EXAMPLES: CARDS DETAIL BLOCK GRID */}
          <div className="grid grid-cols-1 gap-8">
            
            {/* Show projects filtering */}
            {filteredProjects.map((project) => {
              if (project.id === 'entertainment-case-study') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                      
                      {/* Text Details Info (Col-1) */}
                      <div className="space-y-4 lg:col-span-5 text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-[#1e1e1e] text-white border border-[#2c2c2c] px-2.5 py-0.5 rounded-none tracking-widest">
                            Entertainment Campaign
                          </span>
                          <span className="text-[9px] font-mono text-[#808080] tracking-wider uppercase font-semibold">• 300DPI Render File</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          {project.description}
                        </p>

                        <div className="h-[1px] bg-[#222222]" />

                        {/* Rich Details and Tools */}
                        <div className="space-y-3 pt-1">
                          <div className="space-y-1">
                            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">Aesthetic Features & Deliverables:</span>
                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {project.keyFeatures.map((kf, i) => (
                                <span key={i} className="rounded-none bg-[#1c1c1c] px-2.5 py-1 text-[10px] text-zinc-300 border border-[#2c2c2c] font-mono">
                                  ❖ {kf}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold">Active Toolkit components:</span>
                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {project.toolsUsed.map((tool, i) => (
                                <span key={i} className="rounded-none bg-black px-2.5 py-0.5 text-[9px] font-mono text-[#c0c0c0] border border-[#222222]">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Professional color palette used */}
                          <div className="space-y-1">
                            <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest font-bold font-bold">Designer Color Swatches:</span>
                            <div className="flex gap-2 pt-1 h-5 select-none">
                              {project.colorPalette.map((color, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                  <span className="h-3 w-3 rounded-none border border-white/20" style={{ backgroundColor: color }} />
                                  <span className="font-mono text-[8px] text-[#808080] uppercase font-bold">{color}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Custom Live Interactive Unit (Col-2) */}
                      <div className="lg:col-span-7">
                        <CaseStudyShowcase />
                      </div>
                    </div>
                  </div>
                );
              }
              if (project.id === 'big-boss-hindi') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <BigBossSlideshow type="hindi" />
                  </div>
                );
              }

              if (project.id === 'big-boss-marathi') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <BigBossSlideshow type="marathi" />
                  </div>
                );
              }

              if (project.id === 'banijay-asia-campaigns') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <BanijaySlideshow />
                  </div>
                );
              }

              if (project.id === 'cinematic-key-art') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <RaakhSlideshow />
                  </div>
                );
              }

              if (project.id === 'bengal-files-posters') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <BengalFilesShowcase />
                  </div>
                );
              }

              if (project.id === 'zee5-ad-creatives') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5AdCreatives />
                  </div>
                );
              }

              if (project.id === 'zee5-award-creatives') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5AwardCreatives />
                  </div>
                );
              }

              if (project.id === 'zee5-ai-creatives') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5AICreatives />
                  </div>
                );
              }

              if (project.id === 'zee5-smartplay-serials') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5SmartplaySerials />
                  </div>
                );
              }

              if (project.id === 'zee5-statics') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5StaticsShowcase />
                  </div>
                );
              }

              if (project.id === 'zee5-jhs-static') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5JHSShowcase />
                  </div>
                );
              }

              if (project.id === 'zee5-bday-creative') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5BdayCreative />
                  </div>
                );
              }

              if (project.id === 'zee5-logo') {
                return (
                  <div 
                    key={project.id}
                    className="group rounded-none border border-[#222222] bg-[#111111] p-6 lg:p-8 hover:border-[#333333] transition relative overflow-hidden"
                  >
                    <Zee5LogoShowcase />
                  </div>
                );
              }

              return null;
            })}
          </div>

        </div>
      </section>

      {/* CLIENT ENGAGEMENT / DIRECT REVIEWS FORM & CTA FOOTER */}
      <section id="contact" className="relative border-t border-[#222222] bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Column 1: My official contacts list info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#808080] uppercase block">Ready to start?</span>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">Let's Create Something Great.</h2>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed uppercase tracking-wider font-semibold opacity-80">
                Currently working full-time at <strong className="text-white">White Rivers Media</strong>, but always open to discussing new design trends, AI workflows, or creative collaborations.
              </p>

              <div className="h-[1px] bg-[#222222]" />

              {/* Informational list variables */}
              <div className="space-y-4 font-sans text-xs">
                
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-none bg-[#111111] border border-[#222222] text-white">
                    <User size={13} />
                  </div>
                  <div>
                    <span className="text-[9px] text-[#808080] font-mono block uppercase tracking-wider font-bold">Name</span>
                    <strong className="text-white font-semibold text-sm">Shubham Rasanbhaire</strong>
                  </div>
                </div>

                {/* Designation */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-none bg-[#111111] border border-[#222222] text-white">
                    <Briefcase size={13} />
                  </div>
                  <div>
                    <span className="text-[9px] text-[#808080] font-mono block uppercase tracking-wider font-bold">Designation</span>
                    <strong className="text-white font-semibold text-sm">Graphic Designer</strong>
                  </div>
                </div>

                {/* WhatsApp Link custom banner */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-none bg-emerald-950/20 border border-emerald-500/30 text-emerald-400">
                    <Phone size={13} />
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-500 font-mono block uppercase tracking-wider font-bold">Direct WhatsApp (Tap to message)</span>
                    <a 
                      href="https://wa.me/918850203397" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 font-bold text-sm tracking-tight inline-flex items-center gap-1 border-b border-dashed border-emerald-400 pb-0.5 transition"
                    >
                      +91 8850203397
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                {/* Primary Toolkit card */}
                <div className="rounded-none bg-[#111111] p-3 border border-[#222222]">
                  <span className="block font-mono text-[9px] text-[#808080] uppercase tracking-widest mb-1.5 font-bold">Primary Toolkit:</span>
                  <p className="text-zinc-300 font-mono text-xs">Adobe Photoshop, Advanced AI Generation, Retouching pipeline scripts</p>
                </div>

              </div>
            </div>

            {/* Column 2: Sleek Interactive Inbox form */}
            <div className="lg:col-span-7">
              <div className="rounded-none border border-[#222222] bg-[#111111] p-6 shadow-2xl space-y-6 text-left">
                <div className="flex items-center gap-2 border-b border-[#222222] pb-4">
                  <Mail className="text-white" size={16} />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Direct Message Transmitter</h4>
                </div>

                {formSubmitted ? (
                  <div className="rounded-none bg-[#0a0a0a] p-6 border border-[#222222] text-center space-y-2.5">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-none bg-white text-black font-bold text-sm">
                      ✓
                    </div>
                    <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">Message Dispatched Successfully</h5>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Your transmission details have been relayed to Shubham. He will reach out via his agency inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-zinc-300 mb-1.5 font-bold uppercase tracking-wider text-[9px] font-mono">Your Name / Organization</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Netflix Creative team, White Rivers colleague"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-none border border-[#222222] bg-[#0a0a0a] p-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 mb-1.5 font-bold uppercase tracking-wider text-[9px] font-mono">Your Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@agency.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full rounded-none border border-[#222222] bg-[#0a0a0a] p-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 mb-1.5 font-bold uppercase tracking-wider text-[9px] font-mono">Your Design Proposal or Collab Idea</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Let's build web-series posters, upsample key TV properties, or share AI pipelines..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full rounded-none border border-[#222222] bg-[#0a0a0a] p-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-none bg-white hover:bg-zinc-200 transition py-3.5 font-bold text-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-none border-2 border-black border-t-transparent animate-spin" />
                          <span>Routing packets through White Rivers channels...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Transmit Secure Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER UNDERPLATE */}
      <footer className="border-t border-[#222222] bg-[#0c0c0e] py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="cursor-pointer group flex flex-col items-center gap-3 focus:outline-none"
            title="Return to Top"
          >
            <BrandLogoMark className="h-11 w-11 sm:h-12 sm:w-12" />
            <span className="font-display font-black text-sm sm:text-base tracking-[0.2em] text-white uppercase group-hover:text-zinc-300 transition">
              Shubham Rasanbhaire
            </span>
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] font-mono tracking-widest text-zinc-400 uppercase my-2">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition">About</button>
            <span className="text-zinc-700">•</span>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition">Experience</button>
            <span className="text-zinc-700">•</span>
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition">Expertise</button>
            <span className="text-zinc-700">•</span>
            <button onClick={() => scrollToSection('portfolio-labs')} className="hover:text-white transition">Portfolio</button>
            <span className="text-zinc-700">•</span>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button>
          </div>

          <div className="w-16 h-[1px] bg-zinc-800 my-1" />

          <p className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
            © {new Date().getFullYear()} Shubham Rasanbhaire. All Rights Reserved. • White Rivers Media
          </p>
          <p className="text-[9px] text-zinc-600 font-mono tracking-wider uppercase">
            Key Art • Entertainment Branding • Digital Cinema Suite
          </p>
        </div>
      </footer>

    </div>
  );
}
