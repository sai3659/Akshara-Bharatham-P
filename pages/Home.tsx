
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Quote, MapPin, X, ChevronLeft, ChevronRight, ExternalLink, Trophy } from 'lucide-react';
import { Section, Button, Card, RGBCard, Typewriter } from '../components/UI';
import { STATS, PROGRAMS, NGO_DETAILS, TESTIMONIALS, STUDENT_ACHIEVEMENTS } from '../constants';

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
  // Combine notifications twice for a seamless infinite loop
  const duplicatedNotifications = [...NOTIFICATIONS, ...NOTIFICATIONS];

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col w-full max-w-[260px] mx-auto lg:ml-auto h-[380px] relative z-20">
      <div className="bg-[#003B5C] dark:bg-[#020617] p-3 flex justify-between items-center z-10 border-b-4 border-yellow-400">
        <h3 className="text-white font-bold font-heading text-[10px] sm:text-xs tracking-wide flex items-center gap-2">
          EVENTS AND NOTIFICATIONS
        </h3>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </div>
      
      {/* Scroll Container */}
      <div className="flex-1 overflow-hidden relative bg-white dark:bg-slate-950 group">
        <div 
          className="animate-vertical-scroll hover:[animation-play-state:paused] py-2 cursor-pointer"
          style={{ animationDuration: '30s' }}
        >
          {duplicatedNotifications.map((note, index) => (
            <div 
              key={`${note.id}-${index}`} 
              className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group/item"
            >
              <div className="flex items-start gap-2">
                 <div className="mt-1 min-w-[14px]">
                   <ArrowRight size={14} className="text-[#06B6D4] group-hover/item:translate-x-1 transition-transform" />
                 </div>
                 <div className="flex-1">
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-1 group-hover/item:text-[#06B6D4] transition-colors">
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
        
        {/* Subtle Fades for visual polish */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-950 to-transparent pointer-events-none z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10 opacity-60"></div>
      </div>

      <div className="p-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center flex justify-between items-center px-4 shrink-0">
         <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white uppercase tracking-wider">View All</a>
         <a href="#" className="text-[10px] font-bold text-[#06B6D4] hover:text-[#0891b2] uppercase tracking-wider flex items-center gap-1">
           Archive <ExternalLink size={10} />
         </a>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [showStickyBar, setShowStickyBar] = useState(true);
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
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-x-clip bg-transparent pt-48 md:pt-56 pb-24 transition-colors duration-500">
        {/* Layered Colorful Static Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-pink-300/20 dark:bg-pink-900/10 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-200/10 dark:bg-indigo-900/5 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/30 dark:bg-slate-900/20 rounded-[100px] blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 text-slate-800 dark:text-cyan-300 font-bold text-sm shadow-xl uppercase tracking-widest border-l-4 border-l-[#06B6D4]">
              <Star size={14} className="text-amber-400 fill-amber-400" /> Empowering Rural India
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white leading-[1.1] drop-shadow-md">
              Bring Quality in <br/>
              <Typewriter 
                words={["Education", "Life", "Society", "Rural India"]} 
                speed={100} 
                delay={2500} 
              />
            </h1>

            <p className="text-lg md:text-2xl font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed text-slate-700 dark:text-slate-300 drop-shadow-sm">
              Akshara Bharatham Society is dedicated to supporting students and improving educational standards. Join our mission today to create a brighter future.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <NavLink to="/donate">
                <Button size="lg" className="shadow-2xl shadow-purple-500/30 w-full sm:w-auto px-10 text-xl h-16 group">
                   Join Us Now
                   <span className="ml-2">→</span>
                </Button>
              </NavLink>
              <NavLink to="/founders">
                <Button variant="outline" size="lg" className="border-2 border-slate-900 text-slate-900 dark:border-white dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black w-full sm:w-auto backdrop-blur-md h-16 px-8 text-xl">
                  Book Meeting
                </Button>
              </NavLink>
            </div>
          </div>
          
          <div className="relative mt-16 lg:mt-0 transform lg:translate-x-[90px] translate-y-[2cm]">
             <div className="absolute inset-0 bg-cyan-400/20 dark:bg-cyan-900/30 blur-[60px] rounded-full scale-125 -z-10" />
             <NotificationBox />
          </div>
        </div>
      </section>

      {/* 1. Student Achievements Grid Section */}
      <Section className="bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50 overflow-hidden py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-20">
          <div>
             <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                <Trophy size={14} /> Hall of Fame
             </div>
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">Student Achievements</h2>
             <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Celebrating the academic and extracurricular brilliance of our young minds.</p>
          </div>
          <NavLink to="/achievements">
             <Button variant="outline" size="md" className="font-bold">View All Achievers</Button>
          </NavLink>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STUDENT_ACHIEVEMENTS.slice(0, 3).map((student) => (
            <RGBCard key={student.id} className="h-full">
               <div className="flex flex-col h-full">
                 <div className="h-56 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                   <img 
                     src={student.image} 
                     alt={student.name} 
                     className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                      <h3 className="text-white font-bold font-heading text-2xl">{student.name}</h3>
                   </div>
                 </div>
                 <div className="p-6 flex flex-col flex-1 bg-white/60 dark:bg-dark-card/60 backdrop-blur-md">
                    <div className="flex items-start gap-2 mb-3">
                       <Trophy size={20} className="text-yellow-500 shrink-0 mt-0.5" />
                       <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight pt-1">{student.achievement}</h4>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">{student.description}</p>
                 </div>
               </div>
            </RGBCard>
          ))}
        </div>
      </Section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 dark:from-cyan-900/10 dark:via-purple-900/10 dark:to-cyan-900/10 backdrop-blur-md border-y border-white/30 dark:border-slate-800/50 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="inline-flex p-5 rounded-3xl bg-white/80 dark:bg-slate-800/80 text-[#06B6D4] mb-2 shadow-lg border border-white/50 dark:border-slate-700/50 group-hover:bg-[#06B6D4] group-hover:text-white transition-all duration-300">
                  <stat.icon size={40} />
                </div>
                <h3 className="text-5xl font-bold font-heading text-slate-900 dark:text-white">
                  {parseInt(stat.value).toLocaleString()}+
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <Section className="py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">Our Key Initiatives</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl">We run targeted programs to address specific gaps in the education system.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {PROGRAMS.slice(0, 3).map(prog => (
            <Card key={prog.id} className="overflow-hidden group h-full flex flex-col shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-5 left-5 z-20 bg-white/95 dark:bg-black/80 backdrop-blur text-[#06B6D4] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {prog.category}
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white/80 dark:bg-dark-card/80 backdrop-blur-md">
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">{prog.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg leading-relaxed line-clamp-3">{prog.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/30 px-4 py-1.5 rounded-xl">{prog.impact}</span>
                  <NavLink to="/programs" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#06B6D4] hover:text-white transition-all shadow-md">
                    <ArrowRight size={24} />
                  </NavLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <NavLink to="/programs">
            <Button variant="outline" size="lg" className="px-10 h-16 text-lg border-2">View All Programs</Button>
          </NavLink>
        </div>
      </Section>

      {/* Impact/Testimonial - Manual Slider */}
      <Section className="py-24 bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1 space-y-8 w-full">
                  <div className="inline-block p-2 px-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-black uppercase tracking-widest border border-purple-200/50">
                    Success Stories
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight">Voices from the Field</h2>
                  <div className="relative p-1 rounded-[32px] bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 shadow-2xl">
                     <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[28px] overflow-hidden p-10 min-h-[320px] relative flex flex-col justify-center">
                        <div className="relative overflow-hidden h-full">
                          {TESTIMONIALS.map((t, idx) => (
                             <div 
                                key={idx} 
                                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                                  idx === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                                }`}
                             >
                               <Quote className="absolute top-0 left-0 text-purple-200/50 dark:text-purple-900/30 transform scale-[2] -translate-x-2 -translate-y-2" size={48} />
                               <p className="text-xl md:text-2xl italic text-slate-700 dark:text-slate-200 relative z-10 leading-relaxed font-semibold mb-8 pl-8">
                                 "{t.quote}"
                               </p>
                               <div className="pl-8 border-l-4 border-purple-500">
                                 <h4 className="font-bold text-slate-900 dark:text-white text-xl">{t.author}</h4>
                                 <p className="text-[#06B6D4] font-black uppercase tracking-widest text-xs mt-1">{t.role}</p>
                               </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     <button 
                       onClick={prevTestimonial}
                       className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-all z-20 border border-slate-100 dark:border-slate-700"
                     >
                       <ChevronLeft size={24} />
                     </button>
                     <button 
                       onClick={nextTestimonial}
                       className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-all z-20 border border-slate-100 dark:border-slate-700"
                     >
                       <ChevronRight size={24} />
                     </button>
                  </div>
                  <div className="flex gap-3 items-center">
                    {TESTIMONIALS.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentTestimonial(i)}
                        className={`h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'w-12 bg-purple-500 shadow-lg shadow-purple-500/50' : 'w-3 bg-slate-300 dark:bg-slate-700 hover:bg-purple-300'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <NavLink to="/impact" className="inline-block">
                    <Button variant="ghost" className="pl-0 hover:bg-transparent text-purple-600 dark:text-purple-400 hover:text-purple-500 text-xl font-bold group">
                      Read more impact stories 
                      <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
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

      {/* Map Section */}
      <section className="h-[650px] w-full relative bg-slate-200/50 dark:bg-slate-800/50">
         <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            loading="lazy" 
            allowFullScreen 
            src={`https://www.google.com/maps?q=${NGO_DETAILS.coordinates.lat},${NGO_DETAILS.coordinates.lng}&hl=en;z=14&output=embed`}
            title="NGO Location"
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply dark:mix-blend-normal"
          ></iframe>
           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl p-10 rounded-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-10 items-center text-center md:text-left max-w-5xl w-[92%] border border-white/50 dark:border-slate-700/50">
             <div className="w-20 h-20 rounded-3xl bg-cta-gradient flex items-center justify-center text-white shrink-0 shadow-2xl shadow-purple-500/50 rotate-3">
               <MapPin size={40} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 dark:text-white text-3xl mb-3">Visit Akshara Bharatham Society</h3>
               <p className="text-slate-600 dark:text-slate-300 text-xl font-medium">{NGO_DETAILS.location}</p>
             </div>
             <div className="md:ml-auto">
               <NavLink to="/contact">
                <Button variant="outline" size="lg" className="border-2 font-black px-8 h-14 text-lg">Get Directions</Button>
               </NavLink>
             </div>
          </div>
      </section>

      {/* Sticky Donate Bar (Bottom) */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-dark-card/90 backdrop-blur-2xl border-t border-white/50 dark:border-slate-800 p-5 z-40 transform translate-y-0 transition-transform shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
            <div className="hidden md:flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <p className="text-base font-bold text-slate-800 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400 mr-2 uppercase tracking-widest text-xs">Target:</span>
                Empowering 1,000 more rural students this year.
              </p>
            </div>
            <div className="flex items-center gap-5 w-full md:w-auto justify-end">
              <NavLink to="/founders" className="flex-1 md:flex-none">
                <Button variant="outline" size="md" className="w-full font-bold px-6 border-2">Book Meeting</Button>
              </NavLink>
              <NavLink to="/donate" className="flex-1 md:flex-none">
                <Button size="md" className="w-full shadow-2xl shadow-purple-500/30 px-8 font-black">Join Our Cause</Button>
              </NavLink>
              <button 
                onClick={() => setShowStickyBar(false)} 
                className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-red-500 transition-all"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      {showStickyBar && <div className="h-28" />}
    </>
  );
};

export default Home;
