
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight, ExternalLink, Trophy } from 'lucide-react';
import { Section, Button, Card, RGBCard, Typewriter, CountUp } from '../components/UI';
import { STATS, PROGRAMS, TESTIMONIALS, STUDENT_ACHIEVEMENTS } from '../constants';
import { Stat } from '../types';

interface HomeProps {
  contentOverrides?: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroWords?: string[];
    stats?: Stat[];
  }
}

const NOTIFICATIONS = [
  { id: 0, text: "Akshara Bharatam Society is Celebrating its 5th year Anniversary even on May 30th", isNew: true, date: "Latest", url: "#/anniversary" },
  { id: 1, text: "ABS Talent Test 2026 Results Declared", isNew: true, date: "Latest", url: "#/results/talent-test" },
  { id: 2, text: "Akshara Bharatam Society Talent test notification 2025 -2026", isNew: false, date: "Latest", url: "https://drive.google.com/file/d/1OpVDhTeFhn72nLQs5nk21YjYgT-Y1HAC/view?usp=drivesdk" },
  { id: 3, text: "ABS Knowledge Quest (Quiz program) 2026", isNew: true, date: "Upcoming" },
  { id: 4, text: "NMMS coaching 2026", isNew: true, date: "Upcoming" },
];

const NotificationBox = () => {
  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col w-full max-w-sm lg:max-w-[260px] mx-auto lg:ml-auto h-[380px] relative z-20">
      <div className="bg-[#003B5C] dark:bg-[#020617] p-3 flex justify-between items-center z-10 border-b-4 border-yellow-400">
        <h3 className="text-white font-bold font-heading text-[10px] sm:text-xs tracking-wide flex items-center gap-2">
          EVENTS AND NOTIFICATIONS
        </h3>
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </div>
      <div className="flex-1 overflow-hidden relative bg-white dark:bg-slate-950 group pt-2">
        <div className="animate-vertical-scroll group-hover:[animation-play-state:paused]">
          {[...NOTIFICATIONS, ...NOTIFICATIONS, ...NOTIFICATIONS, ...NOTIFICATIONS].map((note, index) => (
            <div key={`${note.id}-${index}`} className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group/item">
              <div className="flex items-start gap-2">
                 <div className="mt-1 min-w-[14px]">
                   <ArrowRight size={14} className="text-[#06B6D4] group-hover/item:translate-x-1 transition-transform" />
                 </div>
                 <div className="flex-1">
                    {note.url ? (
                      <a href={note.url} target={note.url.startsWith('#') ? "_self" : "_blank"} rel={note.url.startsWith('#') ? undefined : "noopener noreferrer"} className="block text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-1 group-hover/item:text-[#06B6D4] transition-colors cursor-pointer">
                        {note.text}
                      </a>
                    ) : (
                      <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-1 group-hover/item:text-[#06B6D4] transition-colors cursor-pointer">
                        {note.text}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] text-slate-400 font-mono uppercase tracking-wider">{note.date}</span>
                      {note.isNew && (
                        <span className="text-[8px] font-bold text-white px-1 py-0.5 rounded bg-red-500 shadow-sm">
                          NEW
                        </span>
                      )}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center flex justify-between items-center px-4 z-10 relative">
         <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white uppercase tracking-wider">View All</a>
         <a href="#" className="text-[10px] font-bold text-[#06B6D4] hover:text-[#0891b2] uppercase tracking-wider flex items-center gap-1">
           Archive <ExternalLink size={10} />
         </a>
      </div>
    </div>
  );
};

const SCROLLING_IMAGES = [
  // ABS Talent Test
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/ABS%20Talent%20Test/WhatsApp%20Image%202026-02-08%20at%201.15.12%20PM%20(1).jpeg', label: 'ABS Talent Test' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/ABS%20Talent%20Test/WhatsApp%20Image%202026-02-08%20at%201.15.13%20PM%20(3).jpeg', label: 'ABS Talent Test' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/ABS%20Talent%20Test/WhatsApp%20Image%202026-02-08%20at%201.15.13%20PM.jpeg', label: 'ABS Talent Test' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/ABS%20Talent%20Test/WhatsApp%20Image%202026-02-08%20at%201.15.14%20PM%20(3).jpeg', label: 'ABS Talent Test' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/ABS%20Talent%20Test/WhatsApp%20Image%202026-02-08%20at%201.15.15%20PM.jpeg', label: 'ABS Talent Test' },

  // Awareness Program
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.16.51%20PM%20(1).jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.16.51%20PM.jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.16.52%20PM.jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.17.39%20PM%20(1).jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.17.39%20PM%20(3).jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.17.40%20PM%20(2).jpeg', label: 'Awareness Program' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Awareness%20Program/WhatsApp%20Image%202026-02-08%20at%201.17.40%20PM.jpeg', label: 'Awareness Program' },

  // Knowledge Quest
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Knowledge%20Quest/IMG-20260210-WA0008.jpg', label: 'Knowledge Quest' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Knowledge%20Quest/IMG-20260210-WA0009.jpg', label: 'Knowledge Quest' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Knowledge%20Quest/IMG-20260210-WA0011.jpg', label: 'Knowledge Quest' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Knowledge%20Quest/IMG-20260210-WA0012.jpg', label: 'Knowledge Quest' },

  // NMMS Coaching
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.13%20PM%20(1).jpeg', label: 'NMMS Coaching' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.14%20PM%20(1).jpeg', label: 'NMMS Coaching' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.14%20PM.jpeg', label: 'NMMS Coaching' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.19%20PM.jpeg', label: 'NMMS Coaching' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.22%20PM.jpeg', label: 'NMMS Coaching' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/NMMS%20Coaching/WhatsApp%20Image%202026-02-08%20at%201.40.28%20PM%20(2).jpeg', label: 'NMMS Coaching' },

  // Scholarship Distribution
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Scholoship%20Distribution/WhatsApp%20Image%202026-02-08%20at%201.16.12%20PM%20(1).jpeg', label: 'Scholarship Distribution' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Scholoship%20Distribution/WhatsApp%20Image%202026-02-08%20at%201.16.12%20PM.jpeg', label: 'Scholarship Distribution' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Scholoship%20Distribution/WhatsApp%20Image%202026-02-08%20at%201.16.13%20PM.jpeg', label: 'Scholarship Distribution' },
  { url: 'https://raw.githubusercontent.com/sai3659/ABS_Images/main/Scrolling1/Scholoship%20Distribution/WhatsApp%20Image%202026-02-08%20at%201.16.14%20PM%20(1).jpeg', label: 'Scholarship Distribution' },
];

const Home: React.FC<HomeProps> = ({ contentOverrides }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Use overrides if provided, else defaults
  const heroTitle = contentOverrides?.heroTitle || "Bring Quality in";
  const heroWords = contentOverrides?.heroWords || ["Education", "Life", "Society", "Rural India"];
  const displayStats = contentOverrides?.stats || STATS;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % SCROLLING_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHeroImage = () => setCurrentHeroImage(prev => (prev + 1) % SCROLLING_IMAGES.length);
  const prevHeroImage = () => setCurrentHeroImage(prev => (prev - 1 + SCROLLING_IMAGES.length) % SCROLLING_IMAGES.length);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      {/* Hero Section - Image Slider Background */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-36 md:pt-40 pb-16 md:pb-24">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {SCROLLING_IMAGES.map((img, idx) => (
             <div 
               key={idx}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
             >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover brightness-[0.95]" referrerPolicy="no-referrer" />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />
             </div>
          ))}
        </div>
        
        {/* Navigation Arrows for Slider */}
        <button onClick={prevHeroImage} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors" aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextHeroImage} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors" aria-label="Next image">
          <ChevronRight size={24} />
        </button>

        {/* Dots for Slider */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 overflow-x-auto max-w-[80vw] py-2 px-4 scrollbar-hide flex-wrap justify-center">
          {SCROLLING_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroImage(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentHeroImage ? 'bg-[#06B6D4] w-6' : 'bg-white/70 hover:bg-white'}`}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 grid lg:grid-cols-2 gap-12 items-center w-full mt-10 md:mt-0">
          <div className="text-center lg:text-left space-y-6 md:space-y-8 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold text-xs md:text-sm shadow-xl uppercase tracking-widest relative">
              <span className="absolute left-[16px] top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full blur-[8px] animate-pulse"></span>
              <Star size={14} className="text-amber-400 fill-amber-400 animate-[spin_3s_linear_infinite] drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] relative z-10" /> <span className="relative z-10">Empowering Rural India</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-white leading-[1.2] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              {heroTitle} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#9C4DFF] to-pink-400 drop-shadow-[0_2px_10px_rgba(156,77,255,0.5)]">
                <Typewriter 
                  words={heroWords} 
                  speed={100} 
                  delay={2500} 
                />
              </span>
            </h1>

            <p className="text-2xl md:text-4xl font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white tracking-wide uppercase">
              {SCROLLING_IMAGES[currentHeroImage]?.label}
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 lg:transform lg:translate-x-[140px] lg:translate-y-[2cm]">
             <NotificationBox />
          </div>
        </div>
      </section>

      {/* Featured Programs - Horizontal Scroll Layout */}
      <Section className="py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">Our Key Initiatives</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl">We run targeted programs to address specific gaps in the education system.</p>
        </div>
        
        {/* Horizontal Scroll Layout for Programs */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 -mx-4 px-4 md:-mx-8 md:px-8 snap-x hide-scrollbar">
          {PROGRAMS.map(prog => (
            <Card key={prog.id} className="min-w-[280px] md:min-w-[400px] snap-center overflow-hidden group h-full flex flex-col shadow-xl">
              <div className="h-52 md:h-64 overflow-hidden relative">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-4 left-4 md:top-5 md:left-5 z-20 bg-white/95 dark:bg-black/80 backdrop-blur text-[#06B6D4] text-[10px] md:text-xs font-black px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {prog.category}
                </span>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col bg-white/80 dark:bg-dark-card/80 backdrop-blur-md">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">{prog.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-base md:text-lg leading-relaxed line-clamp-3">{prog.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs md:text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/30 px-3 py-1 md:px-4 md:py-1.5 rounded-xl">{prog.impact}</span>
                  <NavLink to="/programs" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#06B6D4] hover:text-white transition-all shadow-md">
                    <ArrowRight size={20} className="md:w-6 md:h-6" />
                  </NavLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <NavLink to="/programs">
            <Button variant="outline" size="lg" className="px-8 md:px-10 h-14 md:h-16 text-base md:text-lg border-2">View All Programs</Button>
          </NavLink>
        </div>
      </Section>

    </>
  );
};

export default Home;
