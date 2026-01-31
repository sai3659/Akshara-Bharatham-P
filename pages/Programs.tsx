
import React, { useEffect } from 'react';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { PROGRAMS } from '../constants';
import { BookOpen, Award, Brain, Megaphone, Layers, CheckCircle2, ArrowRight, Lightbulb, Globe, MapPin, GraduationCap, Trophy, Gift, FileText, Compass, Star, Target, Users, Quote } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const PROGRAM_SECTIONS = [
  { id: 'all-programs', label: 'All Programs' },
  { id: 'talent-test', label: 'ABS Talent Test' },
  { id: 'knowledge-quest', label: 'Knowledge Quest' },
  { id: 'nmms-coaching', label: 'NMMS Coaching' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'awareness', label: 'Education Awareness' },
];

const Programs: React.FC = () => {
  const location = useLocation();
  
  // Handle hash scrolling on mount and update
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -120; // Header offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Categorize programs based on constants.ts categories
  const talentTestPrograms = PROGRAMS.filter(p => p.category === 'Talent Test');
  const knowledgePrograms = PROGRAMS.filter(p => p.category === 'Knowledge Quest');
  const nmmsPrograms = PROGRAMS.filter(p => p.category === 'NMMS Coaching');
  const awarenessPrograms = PROGRAMS.filter(p => p.category === 'Awareness');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={PROGRAM_SECTIONS} />
      
      {/* 1. All Programs Overview */}
      <Section id="all-programs" className="pt-36 md:pt-52 bg-slate-50 dark:bg-dark min-h-[90vh] flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
            <Layers size={16} /> Our Initiatives
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 dark:text-white mb-8">Our Impact Portfolio</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A comprehensive ecosystem of targeted initiatives designed to identify talent, foster intellectual curiosity, and provide crucial financial aid to deserving students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Talent Test', count: talentTestPrograms.length, icon: Award, color: 'text-amber-500', id: 'talent-test' },
            { label: 'Knowledge Quest', count: knowledgePrograms.length, icon: Brain, color: 'text-purple-500', id: 'knowledge-quest' },
            { label: 'NMMS Coaching', count: nmmsPrograms.length, icon: BookOpen, color: 'text-blue-500', id: 'nmms-coaching' },
            { label: 'Awareness', count: awarenessPrograms.length, icon: Megaphone, color: 'text-pink-500', id: 'awareness' }
          ].map((stat, i) => (
            <Card 
              key={i} 
              className="p-8 text-center cursor-pointer hover:border-[#06B6D4] hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => scrollToSection(stat.id)}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                 <stat.icon size={32} className={`transition-transform duration-300 group-hover:scale-110 ${stat.color}`} />
              </div>
              <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{stat.label}</h4>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{stat.count} Active Projects</p>
              <div className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ArrowRight size={12} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 2. ABS Talent Test Section */}
      <Section id="talent-test" className="bg-white dark:bg-[#0b1220] py-24 md:py-32 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
           <div className="lg:w-1/3">
             <div className="sticky top-32">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                 <Award size={14} /> Competition
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">ABS Talent Test</h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                 A premier state-level examination designed to unearth hidden academic gems in rural high schools. We test logical reasoning, scientific aptitude, and mathematical precision.
               </p>
               
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800/30 mb-8">
                 <h4 className="font-bold text-amber-800 dark:text-amber-500 mb-4 flex items-center gap-2">
                   <CheckCircle2 size={18} /> Program Highlights
                 </h4>
                 <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                     State-wide ranking & recognition.
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                     Cash prizes and medals for top 100 rankers.
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                     Direct entry to advanced coaching camps.
                   </li>
                 </ul>
               </div>

               <NavLink to="/contact">
                 <Button className="w-full bg-amber-500 hover:bg-amber-600 shadow-amber-500/20 text-white">Register for Next Test</Button>
               </NavLink>
             </div>
           </div>

           <div className="lg:w-2/3 space-y-8">
              
              {/* Intro Block */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                <p className="text-lg text-slate-700 font-medium italic">
                  "We conduct Talent tests at the end of every academic year as part of our primary objective to encourage talented and poor students to pursue their higher education."
                </p>
              </div>

              {/* Existing Program Cards */}
              {talentTestPrograms.map(prog => (
                <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-amber-400 shadow-lg hover:shadow-xl transition-shadow">
                   <div className="md:w-64 h-64 md:h-auto relative shrink-0">
                      <img src={prog.image} className="w-full h-full object-cover" alt={prog.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:hidden">
                        <span className="text-white font-bold">{prog.title}</span>
                      </div>
                   </div>
                   <div className="p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{prog.title}</h3>
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">{prog.impact}</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{prog.description}</p>
                     
                     <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Eligibility</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Grades 8 - 10</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Duration</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">3 Hours</p>
                        </div>
                     </div>
                   </div>
                </Card>
              ))}

              {/* 2024 Impact Spotlight Card */}
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-800/50 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-500/30">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-400">2024 Impact Spotlight</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700 dark:text-slate-300">
                        <p className="text-lg leading-relaxed">
                            <strong className="text-amber-700 dark:text-amber-500">Atchutapuram and Rambilli Mandal High schools</strong> participated in the 2024 ABS talent test.
                        </p>
                        <p className="leading-relaxed">
                            We selected <span className="bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 px-2 py-0.5 rounded font-bold">12 students</span> for the scholarship after interviewing the multiple qualified students along with their parents.
                        </p>
                        
                        <div className="bg-white/80 dark:bg-black/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800/30 mt-4">
                            <div className="flex items-start gap-3">
                                <Gift className="text-amber-600 mt-1 shrink-0" size={20} />
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200">Scholarship Details</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
                                        We provided scholarships of <span className="font-bold text-green-600 dark:text-green-400">₹10,000</span> to them. The scholarships would be given to them until they finish their graduation with terms and conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </Card>

              {/* Extra Details */}
              <div className="grid md:grid-cols-2 gap-6">
                 <Card className="p-6 border-t-4 border-blue-400 bg-white dark:bg-dark-card h-full">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-blue-500"/> Selection Process
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"/><strong>Phase 1:</strong> Preliminary Written Test (Objective)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"/><strong>Phase 2:</strong> Mains Examination for qualified candidates</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"/><strong>Phase 3:</strong> Personal Interview (Student & Parent)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"/><strong>Final:</strong> House Visit for background verification</li>
                    </ul>
                 </Card>
                 <Card className="p-6 border-t-4 border-purple-400 bg-white dark:bg-dark-card h-full">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-purple-500"/> Syllabus & Pattern
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Mathematics (SSC Standard)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Physical & Biological Sciences</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Social Studies & General Knowledge</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/><strong>Mode:</strong> Offline (OMR Sheet based)</li>
                    </ul>
                 </Card>
              </div>

           </div>
        </div>
      </Section>

      {/* 3. Knowledge Quest Section */}
      <Section id="knowledge-quest" className="bg-slate-50 dark:bg-dark py-24 md:py-32 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row-reverse gap-12 mb-16">
           <div className="lg:w-1/3">
             <div className="sticky top-32">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
                 <Brain size={14} /> Intellectual Growth
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Knowledge Quest</h2>
               
               {/* Quote Block */}
               <blockquote className="text-lg font-medium italic text-slate-700 dark:text-slate-300 border-l-4 border-purple-500 pl-4 mb-6 leading-relaxed bg-purple-50/50 dark:bg-purple-900/10 p-4 rounded-r-xl">
                 "We believe that quiz programs would provide platforms to meet new young minds and showcase their knowledge at broader level in society. It will encourage and motivate intelligent brains to acquire more knowledge with education."
               </blockquote>

               <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                 Going beyond textbooks, our Knowledge Quest quiz competitions challenge students to stay updated with current affairs, general science, and history. We foster a competitive spirit that drives intellectual curiosity.
               </p>
               
               <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/30 mb-8">
                 <h4 className="font-bold text-purple-800 dark:text-purple-500 mb-4 flex items-center gap-2">
                   <CheckCircle2 size={18} /> Program Highlights
                 </h4>
                 <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                     Inter-school championship trophy.
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                     Focus on "Learning beyond grades".
                   </li>
                   <li className="flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                     Guest lectures by industry experts.
                   </li>
                 </ul>
               </div>

               <NavLink to="/contact">
                 <Button className="w-full bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 text-white">Register School Team</Button>
               </NavLink>
             </div>
           </div>

           <div className="lg:w-2/3 space-y-8">
              {/* Existing Program Cards */}
              {knowledgePrograms.map(prog => (
                <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                   <div className="md:w-64 h-64 md:h-auto relative shrink-0">
                      <img src={prog.image} className="w-full h-full object-cover" alt={prog.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:hidden">
                        <span className="text-white font-bold">{prog.title}</span>
                      </div>
                   </div>
                   <div className="p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{prog.title}</h3>
                        <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">{prog.impact}</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{prog.description}</p>
                     
                     <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Eligibility</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Grades 6 - 10</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Format</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Team of 3</p>
                        </div>
                     </div>
                   </div>
                </Card>
              ))}

              {/* Details Section */}
              <div className="grid md:grid-cols-2 gap-6">
                 <Card className="p-6 border-t-4 border-purple-400 bg-white dark:bg-dark-card h-full">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg"><Globe size={20} /></div>
                       <h4 className="font-bold text-lg text-slate-900 dark:text-white">Syllabus Focus</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Current Affairs & World Events</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>General Science & Technology</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Indian History & Geography</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"/>Literature, Arts & Culture</li>
                    </ul>
                 </Card>
                 <Card className="p-6 border-t-4 border-pink-400 bg-white dark:bg-dark-card h-full">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-lg"><Lightbulb size={20} /></div>
                       <h4 className="font-bold text-lg text-slate-900 dark:text-white">Competition Structure</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0"/><strong>Round 1:</strong> Written Screening Test (Individual)</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0"/><strong>Round 2:</strong> Audio-Visual Round (Team)</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0"/><strong>Round 3:</strong> Rapid Fire Buzzer Round</li>
                       <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0"/><strong>Finals:</strong> Grand Stage Event</li>
                    </ul>
                 </Card>
              </div>

              {/* Impact Block */}
              <Card className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-none shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-4 font-heading">More Than Just A Quiz</h3>
                   <p className="text-purple-100 leading-relaxed mb-6">
                     Knowledge Quest is designed to break the monotony of rote learning. By connecting classroom concepts to real-world applications, we help students realize that education is a tool for understanding the world, not just passing exams.
                   </p>
                   <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                         <h4 className="font-bold text-2xl mb-1">1000+</h4>
                         <p className="text-xs text-purple-200">Questions Bank</p>
                      </div>
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                         <h4 className="font-bold text-2xl mb-1">50+</h4>
                         <p className="text-xs text-purple-200">Participating Schools</p>
                      </div>
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                         <h4 className="font-bold text-2xl mb-1">₹50K</h4>
                         <p className="text-xs text-purple-200">Prize Pool</p>
                      </div>
                   </div>
                 </div>
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              </Card>

              {/* Mini Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   "https://images.unsplash.com/photo-1577896334614-5d139e802778?auto=format&fit=crop&q=80&w=300",
                   "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300",
                   "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300",
                   "https://images.unsplash.com/photo-1427504746696-ea30b5c95d9e?auto=format&fit=crop&q=80&w=300"
                 ].map((src, i) => (
                   <div key={i} className="h-32 rounded-xl overflow-hidden relative group shadow-sm">
                      <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Quiz Event" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                   </div>
                 ))}
              </div>

           </div>
        </div>
      </Section>

      {/* 4. NMMS Coaching Section (Renamed & Updated) */}
      <Section id="nmms-coaching" className="bg-white dark:bg-[#0b1220] py-24 md:py-32 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
           <div className="lg:w-1/3">
             <div className="sticky top-32">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                 <BookOpen size={14} /> Scholarship Support
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">NMMS Coaching</h2>
               
               {/* Intro/Definition Block */}
               <div className="bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-xl border-l-4 border-blue-600 mb-6">
                 <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                   The NMMS scholarship is the National Means-cum-Merit Scholarship Scheme, a centrally sponsored program by the Indian government that provides financial assistance to meritorious students from economically weaker sections to prevent them from dropping out of school after class VII.
                 </p>
               </div>

               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                 Selection is based on a state-level examination that includes a Mental Ability Test (MAT) and a Scholastic Aptitude Test (SAT).
               </p>
               
               <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg mb-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                 <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-4 flex items-center gap-2">
                   <MapPin size={18} /> Our Reach
                 </h4>
                 <p className="text-base font-bold text-indigo-700 dark:text-indigo-300 leading-relaxed bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border-l-4 border-indigo-500">
                   Akshara Bharatam society has been providing training sessions to the students in all three mandals to crack the NMMS - MAT and SAT exams:
                 </p>
                 <div className="flex flex-wrap gap-2 mt-4">
                   <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">Rambilli</span>
                   <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">Atchutapuram</span>
                   <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">Yelamanchili</span>
                 </div>
               </div>

               <NavLink to="/contact">
                 <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-blue-500/20 text-white">Enroll Student</Button>
               </NavLink>
             </div>
           </div>

           <div className="lg:w-2/3 space-y-8">
              {/* Main Program Card */}
              {nmmsPrograms.map(prog => (
                <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                   <div className="md:w-64 h-64 md:h-auto relative shrink-0">
                      <img src={prog.image} className="w-full h-full object-cover" alt={prog.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:hidden">
                        <span className="text-white font-bold">{prog.title}</span>
                      </div>
                   </div>
                   <div className="p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{prog.title}</h3>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">{prog.impact}</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{prog.description}</p>
                     
                     <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Target</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Grade 8 Students</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Schedule</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Aug - Nov (Annual)</p>
                        </div>
                     </div>
                   </div>
                </Card>
              ))}

              {/* Detailed Breakdown Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-t-4 border-amber-400 bg-white dark:bg-dark-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg"><Brain size={20} /></div>
                     <h4 className="font-bold text-lg text-slate-900 dark:text-white">Exam Pattern</h4>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                     <li className="flex gap-3">
                       <div className="font-bold text-slate-800 dark:text-slate-200 min-w-[3rem]">MAT</div>
                       <div>Mental Ability Test (90 Marks). Tests reasoning and critical thinking.</div>
                     </li>
                     <li className="flex gap-3">
                       <div className="font-bold text-slate-800 dark:text-slate-200 min-w-[3rem]">SAT</div>
                       <div>Scholastic Aptitude Test (90 Marks). Covers Science, Social Studies, and Mathematics of Class 7 & 8 level.</div>
                     </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-t-4 border-green-400 bg-white dark:bg-dark-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><GraduationCap size={20} /></div>
                     <h4 className="font-bold text-lg text-slate-900 dark:text-white">Eligibility & Benefits</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"/><strong>Who:</strong> Students studying in Class VIII in Government/Local Body/Aided schools.</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"/><strong>Income:</strong> Parental income less than ₹3.5 Lakhs per annum.</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"/><strong>Benefit:</strong> ₹12,000/- per annum for 4 years (Class 9 to 12).</li>
                  </ul>
                </Card>
              </div>
           </div>
        </div>
      </Section>
      
      {/* 5. Mentorship Section */}
      <Section id="mentorship" className="bg-slate-50 dark:bg-dark py-24 md:py-32 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row-reverse gap-12 mb-16">
           <div className="lg:w-1/3">
             <div className="sticky top-32">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
                 <Compass size={14} /> Career Guidance
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Student Mentorship</h2>

               {/* Highlighted Box for User Content */}
               <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg mb-8 relative overflow-hidden">
                 <div className="relative z-10">
                   <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                     <Star size={20} className="text-yellow-300 fill-yellow-300" /> Exclusive for Merit and Poor
                   </h4>
                   <p className="text-teal-50 font-medium leading-relaxed">
                     We are providing mentorships to the students who wrote <strong>ABS talent test-2024</strong>. Mentorship is for shaping their education career in a better way. The best guidance would be given to choose the right path to reach their goals based on their interests.
                   </p>
                 </div>
                 {/* Decorative background circles */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
               </div>

               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                 Our mentorship program connects ambitious students with experienced professionals and educators who provide personalized guidance, career advice, and academic support.
               </p>

               <NavLink to="/contact">
                 <Button className="w-full bg-teal-600 hover:bg-teal-700 shadow-teal-500/20 text-white">Request a Mentor</Button>
               </NavLink>
             </div>
           </div>

           <div className="lg:w-2/3 space-y-8">
              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 h-full border-t-4 border-teal-400">
                   <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                      <MapPin size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Career Path Mapping</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Helping students align their strengths and interests with suitable career options, from Engineering and Medicine to Arts and Civil Services.
                   </p>
                </Card>
                <Card className="p-6 h-full border-t-4 border-emerald-400">
                   <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <Target size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Goal Setting</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Breaking down long-term ambitions into actionable short-term milestones. We teach effective planning and time management.
                   </p>
                </Card>
                <Card className="p-6 h-full border-t-4 border-cyan-400">
                   <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Higher Ed Support</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Guidance on entrance exams (EAPCET, IIT-JEE, NEET), college applications, and scholarship opportunities available for higher studies.
                   </p>
                </Card>
                <Card className="p-6 h-full border-t-4 border-lime-400">
                   <div className="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 text-lime-600 rounded-xl flex items-center justify-center mb-4">
                      <Users size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Role Models</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Regular interaction with successful alumni and industry professionals to inspire confidence and provide real-world insights.
                   </p>
                </Card>
              </div>

              {/* How it works */}
              <Card className="p-8 bg-white dark:bg-dark-card border border-slate-100 dark:border-slate-800">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How Mentorship Works</h3>
                 <div className="space-y-6 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                    {[
                       { title: "Assessment", desc: "We evaluate the student's academic performance (ABS Talent Test), interests, and aptitude." },
                       { title: "Matching", desc: "Students are paired with mentors who have expertise in the student's area of interest." },
                       { title: "Regular Sessions", desc: "Monthly one-on-one or group sessions to track progress and discuss challenges." },
                       { title: "Review", desc: "Periodic reviews with parents to ensure the student is on the right track." }
                    ].map((step, i) => (
                       <div key={i} className="relative flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10 border-4 border-white dark:border-slate-900">
                             {i + 1}
                          </div>
                          <div>
                             <h4 className="font-bold text-lg text-slate-900 dark:text-white">{step.title}</h4>
                             <p className="text-slate-600 dark:text-slate-400 text-sm">{step.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </Card>
           </div>
        </div>
      </Section>

      {/* 6. Awareness About Education Section */}
      <Section id="awareness" className="bg-slate-50 dark:bg-dark py-24 md:py-32 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row-reverse gap-12 mb-16">
           <div className="lg:w-1/3">
             <div className="sticky top-32">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
                 <Megaphone size={14} /> Community Outreach
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Education Awareness</h2>
               
               {/* New highlighted text block */}
               <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg mb-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <Quote size={24} className="text-pink-200 mb-2 opacity-50"/>
                    <p className="font-medium leading-relaxed italic">
                      "Through this program we inject strong belief in the students that only education can change our lives and lifestyle."
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               </div>

               <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                 We conduct extensive campaigns to bridge the information gap, visiting government schools and engaging with communities to highlight the transformative power of education.
               </p>
               
               <div className="bg-pink-50 dark:bg-pink-900/10 p-6 rounded-2xl border border-pink-100 dark:border-pink-800/30 mb-8">
                 <h4 className="font-bold text-pink-800 dark:text-pink-500 mb-4 flex items-center gap-2">
                   <MapPin size={18} /> Impact Area
                 </h4>
                 <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                   We visit all government schools in three mandals:
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {['Rambilli', 'Atchutapuram', 'Yelamanchili'].map(m => (
                      <span key={m} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full border border-pink-200 dark:border-pink-800">
                        {m}
                      </span>
                    ))}
                 </div>
               </div>

               <NavLink to="/volunteer">
                 <Button className="w-full bg-pink-600 hover:bg-pink-700 shadow-pink-500/20 text-white">Volunteer for Campaign</Button>
               </NavLink>
             </div>
           </div>

           <div className="lg:w-2/3 space-y-8">
              {/* Existing Program Cards */}
              {awarenessPrograms.map(prog => (
                <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-pink-500 shadow-lg hover:shadow-xl transition-shadow">
                   <div className="md:w-64 h-64 md:h-auto relative shrink-0">
                      <img src={prog.image} className="w-full h-full object-cover" alt={prog.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:hidden">
                        <span className="text-white font-bold">{prog.title}</span>
                      </div>
                   </div>
                   <div className="p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{prog.title}</h3>
                        <span className="text-xs font-bold text-pink-600 bg-pink-50 dark:bg-pink-900/20 px-3 py-1 rounded-full">{prog.impact}</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{prog.description}</p>
                     
                     <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Focus</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Rural Families</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">Reach</p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">15+ Villages</p>
                        </div>
                     </div>
                   </div>
                </Card>
              ))}

              {/* New Detailed Content Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                 <Card className="p-6 border-t-4 border-rose-400 h-full bg-white dark:bg-dark-card">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                       <Lightbulb size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Inspirational Sessions</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      We take sessions on how education brings change in life and society by giving examples of inspirational personalities like Dr. A.P.J. Abdul Kalam, Dr. B.R. Ambedkar, and Savitribai Phule. We show students that their background does not define their future.
                    </p>
                 </Card>

                 <Card className="p-6 border-t-4 border-orange-400 h-full bg-white dark:bg-dark-card">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                       <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Parental Engagement</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Beyond students, we engage with parents to discuss the long-term economic and social benefits of continuing their children's education, especially focusing on reducing dropout rates among girl children.
                    </p>
                 </Card>
              </div>

              {/* Methodology / Flow */}
              <Card className="p-8 bg-white dark:bg-dark-card border border-slate-100 dark:border-slate-800">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Approach</h3>
                 <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                       <div>
                         <h4 className="font-bold text-slate-900 dark:text-white">School Visits</h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400">Regular scheduled visits to High Schools across the 3 mandals.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                       <div>
                         <h4 className="font-bold text-slate-900 dark:text-white">Storytelling & Motivation</h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400">Using real-life success stories of people from similar backgrounds who achieved greatness through education.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                       <div>
                         <h4 className="font-bold text-slate-900 dark:text-white">Interactive Q&A</h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400">Encouraging students to voice their fears and doubts, and providing practical solutions.</p>
                       </div>
                    </div>
                 </div>
              </Card>

           </div>
        </div>
      </Section>
    </>
  );
};

export default Programs;
