
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight, ExternalLink, Trophy } from 'lucide-react';
import { Section, Button, Card, RGBCard, Typewriter, CountUp } from '../components/UI';
import { STATS, PROGRAMS, TESTIMONIALS, STUDENT_ACHIEVEMENTS } from '../constants';

const NOTIFICATIONS = [
  { id: 1, text: "Applications for 'Siksha' Scholarship 2025 are now OPEN! Apply before Jan 30th.", isNew: true, date: "17 Dec 2024" },
  { id: 2, text: "Annual General Body Meeting scheduled for Jan 25th at Main Campus.", isNew: true, date: "16 Dec 2024" },
  { id: 3, text: "Volunteer recruitment drive results have been announced. Check your email.", isNew: false, date: "14 Dec 2024" },
  { id: 4, text: "New Digital Computer Lab inaugurated in Rambilli Mandal High School.", isNew: true, date: "12 Dec 2024" },
  { id: 5, text: "Urgent: Blood donation camp organized next Sunday at Community Hall.", isNew: false, date: "10 Dec 2024" },
  { id: 6, text: "Teacher Training Workshop registration deadline extended till Friday.", isNew: false, date: "08 Dec 2024" },
  { id: 7, text: "Thank you to all donors! We reached our fundraising goal for the Library Project.", isNew: true, date: "05 Dec 2024" },
];

const NotificationBox = () => {
  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col w-full max-w-[260px] mx-auto lg:ml-auto h-[380px] relative z-20">
      <div className="bg-[#003B5C] dark:bg-[#020617] p-3 flex justify-between items-center z-10 border-b-4 border-yellow-400">
        <h3 className="text-white font-bold font-heading text-[10px] sm:text-xs tracking-wide flex items-center gap-2">
          EVENTS AND NOTIFICATIONS
        </h3>
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </div>
      <div className="flex-1 overflow-hidden relative bg-white dark:bg-slate-950 group">
        <div className="py-2 animate-vertical-scroll group-hover:[animation-play-state:paused]">
          {[...NOTIFICATIONS, ...NOTIFICATIONS].map((note, index) => (
            <div key={`${note.id}-${index}`} className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group/item">
              <div className="flex items-start gap-2">
                 <div className="mt-1 min-w-[14px]">
                   <ArrowRight size={14} className="text-[#06B6D4] group-hover/item:translate-x-1 transition-transform" />
                 </div>
                 <div className="flex-1">
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-1 group-hover/item:text-[#06B6D4] transition-colors cursor-pointer">
                      {note.text}
                    </p>
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

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      {/* Hero Section - Colorful static background with Typewriter animation */}
      {/* Optimized padding for mobile */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-x-clip bg-transparent pt-36 md:pt-60 pb-16 md:pb-24 transition-colors duration-500">
        {/* Layered Colorful Static Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-400/20 dark:bg-cyan-900/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-[20%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-400/20 dark:bg-purple-900/10 rounded-full blur-[70px] md:blur-[100px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-pink-300/20 dark:bg-pink-900/10 rounded-full blur-[90px] md:blur-[130px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-indigo-200/10 dark:bg-indigo-900/5 rounded-full blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/30 dark:bg-slate-900/20 rounded-[100px] blur-[60px] md:blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 text-slate-800 dark:text-cyan-300 font-bold text-xs md:text-sm shadow-xl uppercase tracking-widest border-l-4 border-l-[#06B6D4]">
              <Star size={14} className="text-amber-400 fill-amber-400" /> Empowering Rural India
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white leading-[1.1] drop-shadow-md">
              Bring Quality in <br/>
              <Typewriter 
                words={["Education", "Life", "Society", "Rural India"]} 
                speed={100} 
                delay={2500} 
              />
            </h1>

            <p className="text-base sm:text-lg md:text-2xl font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed text-slate-700 dark:text-slate-300 drop-shadow-sm">
              Akshara Bharatham Society is dedicated to supporting students and improving educational standards. Join our mission today to create a brighter future.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 lg:transform lg:translate-x-[140px] lg:translate-y-[2cm]">
             <div className="absolute inset-0 bg-cyan-400/20 dark:bg-cyan-900/30 blur-[60px] rounded-full scale-125 -z-10" />
             <NotificationBox />
          </div>
        </div>
      </section>

      {/* 1. Student Achievements Grid Section */}
      <Section className="bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50 overflow-hidden py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-20 gap-4 md:gap-0">
          <div>
             <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                <Trophy size={14} /> Hall of Fame
             </div>
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">Akshara Bharatham Society Achievers</h2>
             <p className="text-slate-600 dark:text-slate-400 mt-2 text-base md:text-lg">Celebrating the academic and extracurricular brilliance of our young minds.</p>
          </div>
          <NavLink to="/gallery#achievements">
             <Button variant="outline" size="md" className="font-bold w-full md:w-auto">View All Achievers</Button>
          </NavLink>
        </div>
        
        {/* Infinite Scroll / Marquee Layout for Achievers */}
        <div className="relative w-full overflow-hidden py-8 -mx-4 px-4 md:-mx-8 md:px-8 group">
           {/* Side Gradients for smooth fade */}
           <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-20 bg-gradient-to-r from-white/60 dark:from-slate-950/60 to-transparent pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-20 bg-gradient-to-l from-white/60 dark:from-slate-950/60 to-transparent pointer-events-none" />

           <div className="flex gap-4 md:gap-8 w-max animate-horizontal-scroll group-hover:[animation-play-state:paused] items-stretch">
              {[...STUDENT_ACHIEVEMENTS, ...STUDENT_ACHIEVEMENTS].map((student, index) => {
                 const originalIndex = index % STUDENT_ACHIEVEMENTS.length;
                 
                 return (
                    <RGBCard key={`${student.id}-${index}`} className="w-[280px] md:w-[420px] h-full relative group/card flex-shrink-0">
                       <div className="flex flex-col h-full">
                         <div className="h-48 md:h-60 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                           <img 
                             src={student.image} 
                             alt={student.name} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                              <h3 className="text-white font-bold font-heading text-xl md:text-2xl mb-1">{student.name}</h3>
                           </div>
                         </div>
                         <div className="p-4 md:p-6 flex flex-col flex-1 bg-white/60 dark:bg-dark-card/60 backdrop-blur-md">
                            <div className="flex items-start gap-2 mb-3">
                               <Trophy size={18} className={`shrink-0 mt-0.5 ${originalIndex === 0 ? 'text-yellow-500 fill-yellow-500' : originalIndex === 1 ? 'text-slate-400 fill-slate-400' : 'text-yellow-500'}`} />
                               <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base md:text-lg leading-tight pt-1">{student.achievement}</h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 text-xs md:text-sm">{student.description}</p>
                         </div>
                       </div>
                    </RGBCard>
                 );
              })}
           </div>
        </div>
      </Section>

      {/* 2. Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 dark:from-cyan-900/10 dark:via-purple-900/10 dark:to-cyan-900/10 backdrop-blur-md border-y border-white/30 dark:border-slate-800/50 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="inline-flex p-4 md:p-5 rounded-3xl bg-white/80 dark:bg-slate-800/80 text-[#06B6D4] mb-2 shadow-lg border border-white/50 dark:border-slate-700/50 group-hover:bg-[#06B6D4] group-hover:text-white transition-all duration-300">
                  <stat.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">
                  <CountUp end={stat.value} duration={2000} suffix="+" />
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase text-[10px] md:text-xs">{stat.label}</p>
              </div>
            ))}
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

      {/* Impact/Testimonial - Manual Slider */}
      <Section className="py-16 md:py-24 bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
               <div className="flex-1 space-y-6 md:space-y-8 w-full">
                  <div className="inline-block p-2 px-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-black uppercase tracking-widest border border-purple-200/50">
                    Success Stories
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight">Voices from the Field</h2>
                  <div className="relative p-1 rounded-[32px] bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 shadow-2xl">
                     <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[28px] overflow-hidden p-6 md:p-10 min-h-[350px] md:min-h-[400px] relative flex flex-col justify-center">
                        <div className="relative overflow-hidden h-full">
                          {TESTIMONIALS.map((t, idx) => (
                             <div 
                                key={idx} 
                                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                                  idx === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                                }`}
                             >
                               <Quote className="absolute top-0 left-0 text-purple-200/50 dark:text-purple-900/30 transform scale-[2] -translate-x-2 -translate-y-2" size={48} />
                               <p className="text-lg md:text-2xl italic text-slate-700 dark:text-slate-200 relative z-10 leading-relaxed font-semibold mb-6 md:mb-8 pl-4 md:pl-8">
                                 "{t.quote}"
                               </p>
                               <div className="pl-4 md:pl-8 border-l-4 border-purple-500">
                                 <h4 className="font-bold text-slate-900 dark:text-white text-lg md:text-xl">{t.author}</h4>
                                 <p className="text-[#06B6D4] font-black uppercase tracking-widest text-xs mt-1">{t.role}</p>
                               </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     {/* Mobile optimized controls */}
                     <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-4 md:hidden">
                       <button 
                         onClick={prevTestimonial}
                         className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700"
                       >
                         <ChevronLeft size={20} />
                       </button>
                       <button 
                         onClick={nextTestimonial}
                         className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700"
                       >
                         <ChevronRight size={20} />
                       </button>
                     </div>

                     {/* Desktop controls */}
                     <button 
                       onClick={prevTestimonial}
                       className="hidden md:flex absolute left-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-all z-20 border border-slate-100 dark:border-slate-700"
                     >
                       <ChevronLeft size={24} />
                     </button>
                     <button 
                       onClick={nextTestimonial}
                       className="hidden md:flex absolute right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-all z-20 border border-slate-100 dark:border-slate-700"
                     >
                       <ChevronRight size={24} />
                     </button>
                  </div>
                  <div className="flex gap-3 items-center mt-14 md:mt-0">
                    {TESTIMONIALS.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentTestimonial(i)}
                        className={`h-2 md:h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'w-8 md:w-12 bg-purple-500 shadow-lg shadow-purple-500/50' : 'w-2 md:w-3 bg-slate-300 dark:bg-slate-700 hover:bg-purple-300'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <NavLink to="/gallery#impact-stories" className="inline-block">
                    <Button variant="ghost" className="pl-0 hover:bg-transparent text-purple-600 dark:text-purple-400 hover:text-purple-500 text-lg md:text-xl font-bold group">
                      Read more impact stories 
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </NavLink>
               </div>
               <div className="flex-1 relative pl-8 hidden lg:block">
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400" className="rounded-[40px] shadow-2xl mt-12 border-8 border-white dark:border-slate-800 transform hover:-translate-y-3 transition-transform duration-500" alt="Student smiling" />
                    <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=400" className="rounded-[40px] shadow-2xl mb-12 border-8 border-white dark:border-slate-800 transform hover:-translate-y-3 transition-transform duration-500" alt="Group of students" />
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10" />
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Home;
