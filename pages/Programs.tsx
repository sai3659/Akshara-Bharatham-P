
import React, { useEffect } from 'react';
import { Section, Card, DecorativeShapes, SideNavigation, Button } from '../components/UI';
import { PROGRAMS } from '../constants';
import { BookOpen, Award, Brain, Megaphone, Layers, ArrowRight, Lightbulb, Users, Trophy, CheckCircle2, ImageIcon, Zap, Target, Globe, MapPin, GraduationCap, Sparkles, User, School } from 'lucide-react';
import { useLocation, NavLink } from 'react-router-dom';

const PROGRAM_SECTIONS = [
  { id: 'all-programs', label: 'All Programs' },
  { id: 'talent-test', label: 'ABS Talent Test' },
  { id: 'knowledge-quest', label: 'Knowledge Quest' },
  { id: 'nmms-coaching', label: 'NMMS Coaching' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'awareness', label: 'Education Awareness' },
];

// Helper component for the "New" badge
const NewBadge = () => (
  <span className="absolute -top-3 -right-3 z-20 pointer-events-none">
    <span className="relative flex h-6 w-12">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-6 w-12 bg-red-600 text-[10px] font-bold text-white items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
        NEW
      </span>
    </span>
  </span>
);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const getProgramImage = (category: string, fallbackIndex = 0) => {
      const program = PROGRAMS.find(p => p.category === category);
      return program?.image || PROGRAMS[fallbackIndex].image;
  };

  const KNOWLEDGE_QUEST_IMAGES = [
    "https://lh3.googleusercontent.com/d/1KiGCS3VrxaTK_hJyMtRJpUWHQ3cGt-R_",
    "https://lh3.googleusercontent.com/d/1MJhWz8ZLDoX_mh8TrNrTSVLOtDmLNLm5",
    "https://lh3.googleusercontent.com/d/1-PnwKSzDbBXq1tWPNL2zBk8r879vIL0X",
    "https://lh3.googleusercontent.com/d/1dS-PdBs9ZG0NoSy3lvuhEMYYa3xhQBos",
    "https://lh3.googleusercontent.com/d/1IzKdT1oAKkp3d4mVLrQ1-gBJA6MU8HIt"
  ];

  const TALENT_TEST_IMAGES = [
    "https://lh3.googleusercontent.com/d/1-wm39NdMsk2CRhe1rhku8vYNfiaMsgrM",
    "https://lh3.googleusercontent.com/d/1206CSiGBOUf5JKyJFX05GTbQff6_b3ri",
    "https://lh3.googleusercontent.com/d/1MBARnXejoNj7ncisYuZkghk0xSsnKR3S",
    "https://lh3.googleusercontent.com/d/1O2Uzcr_VsaMz_w8-xUDmG5cWwFLADyhc",
    "https://lh3.googleusercontent.com/d/1O6qOVtpBU93WypHkRlsnf3KZHWecNkd2",
    "https://lh3.googleusercontent.com/d/1OTMDLcZiQeXqIe6laXQDBhBPgtP2xi5d",
    "https://lh3.googleusercontent.com/d/1RFD1MWfnjMPrZ7CV-X0z4pq6Ay3xtVaI",
    "https://lh3.googleusercontent.com/d/1TvBmyYnfEdzSrJ1TITSNY6UQUzFnbc7u",
    "https://lh3.googleusercontent.com/d/1d4J6o7_WOPoha49xcPuwHT3CwyT4hGYP",
    "https://lh3.googleusercontent.com/d/1h5XJzdpt_UJIOic9juGcExjS1TyfIm8e",
    "https://lh3.googleusercontent.com/d/1u-vEeGJwY373xbL4ZaBGak8BmiwVjNLS",
    "https://lh3.googleusercontent.com/d/1xc_5XnCs3-40kTlG7DaIt6xfNJLdmSZB"
  ];

  const NMMS_IMAGES = [
    "https://lh3.googleusercontent.com/d/11nFhR1CdDRT691YQJSvGpOAAbuSDylkz",
    "https://lh3.googleusercontent.com/d/19IKb0YH5XiyD-9isDKpLdkXZHEfARyHn",
    "https://lh3.googleusercontent.com/d/1FSITEYVHGpUfc5jJT-_rnz22JAJHtCZs",
    "https://lh3.googleusercontent.com/d/1FqtXceMyWgZx2XaDezAw18BDS9MhDOp7",
    "https://lh3.googleusercontent.com/d/1ICx1cmVmnOWSdKk7HL6B_5IEwpONLOPx",
    "https://lh3.googleusercontent.com/d/1KFy_LV7mrG9QhhemBlC3J5_222W2gkGq",
    "https://lh3.googleusercontent.com/d/1KujDxlqwk1pX7coX2Q6xZNRgpQIScMj0",
    "https://lh3.googleusercontent.com/d/1NDIixzC3XWZT-NFRaJbgJ3FSZv5yUQSZ",
    "https://lh3.googleusercontent.com/d/1SURYjjwjS80OPYVI2JamzduMFYyquhVe",
    "https://lh3.googleusercontent.com/d/1T0EMmzA6pfhQGjOPhJ5chYcBHO0ekupm",
    "https://lh3.googleusercontent.com/d/1TYIIskuK6hSc6kcjxsFOJc_6r4ecAJ2K",
    "https://lh3.googleusercontent.com/d/1ceGwPR0m1Oq8xQvb3JPxvSiJghFD5N37",
    "https://lh3.googleusercontent.com/d/1eDQKsp_JdLkRQylY5Am9-FvSlh6GRlKr",
    "https://lh3.googleusercontent.com/d/1i5GN8hdt3-DNpFFkT56jsSYZE0jcBEz5",
    "https://lh3.googleusercontent.com/d/1j9NkXSGjZWSI92_4iZ805DGEWz0k1K5b",
    "https://lh3.googleusercontent.com/d/1jwji4IGZfMNFsGNsKIRLQ8gb_3T6pVUW"
  ];

  const AWARENESS_IMAGES = [
    "https://lh3.googleusercontent.com/d/119D8z0bfDSAhF4EVt66gBpQxVkkrae9n",
    "https://lh3.googleusercontent.com/d/149_2zyqPwyg0-Ir3lO0QNyInzqTdSc9G",
    "https://lh3.googleusercontent.com/d/1C2MBFcNvFVtsKwB5cfPgKPfD-UwchP4A",
    "https://lh3.googleusercontent.com/d/1F09Ew98IvrH2-KjD8aCZXQNfv6FRK1iO",
    "https://lh3.googleusercontent.com/d/1OYStdc9lR1ZAt4qJoWroSkFHL9sKrimL",
    "https://lh3.googleusercontent.com/d/1UovCRk5u6vGbg4RuXuksEQpIfsSpNa57",
    "https://lh3.googleusercontent.com/d/1Xphtb2DZ0P6SB0l25CxQZiGcDBgD-cI1",
    "https://lh3.googleusercontent.com/d/1bUCFlazTqVbnrbKhghS1P0WoeQAPi9OK",
    "https://lh3.googleusercontent.com/d/1n1UPsLncRCdRRIvPGIjWQPA0VXAHnrgp",
    "https://lh3.googleusercontent.com/d/1o5VmPANSSOKRjDiarq0NEOYTsQfdOrlC"
  ];

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
            { label: 'Talent Test', icon: Award, color: 'text-amber-500', id: 'talent-test' },
            { label: 'Knowledge Quest', icon: Brain, color: 'text-purple-500', id: 'knowledge-quest' },
            { label: 'NMMS Coaching', icon: BookOpen, color: 'text-blue-500', id: 'nmms-coaching' },
            { label: 'Awareness', icon: Megaphone, color: 'text-pink-500', id: 'awareness' }
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
              <div className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ArrowRight size={12} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 2. ABS Talent Test Section */}
      <Section id="talent-test" className="bg-white dark:bg-[#0b1220] py-24 md:py-32 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
             <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                     <Award size={14} /> Annual Flagship Event
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">ABS Talent Test</h2>
             </div>

             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                 <div className="space-y-6">
                     <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-400">
                         <p className="font-medium text-lg text-slate-900 dark:text-slate-200">
                             We conduct Talent tests at the end of every academic year as part of our primary objective to encourage talented and poor students to pursue their higher education.
                         </p>
                         <p>
                             Atchutapuram and Rambilli Mandal High schools participated in 2024 ABS talent test. We selected 12 students for the scholarship after interviewing the multiple qualified students along with their parents and provided scholarships of 10000 rupees to them. The scholarships would be given to them until they finish their graduation with terms and conditions.
                         </p>
                     </div>
                     
                     {/* Process Steps */}
                     <div className="pt-6">
                         <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                             <CheckCircle2 size={18} className="text-amber-500"/> Selection Process
                         </h4>
                         <div className="flex flex-col gap-4">
                             {[
                                 { step: "1", text: "Written Talent Test in High Schools" },
                                 { step: "2", text: "Interview with Qualified Students & Parents" },
                                 { step: "3", text: "Scholarship Awarded until Graduation" }
                             ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                     <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 font-bold flex items-center justify-center shrink-0">
                                         {item.step}
                                     </div>
                                     <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.text}</span>
                                  </div>
                             ))}
                         </div>
                         <div className="mt-8 relative inline-block group">
                            <NewBadge />
                            <div className="absolute inset-0 bg-amber-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <NavLink to="/register/talent-test">
                                <Button className="w-full sm:w-auto shadow-xl shadow-amber-500/30 bg-gradient-to-r from-amber-500 to-orange-600 border-none text-white relative z-0 transform hover:scale-105 transition-all">
                                    <User size={18} className="mr-2" /> Student Registration
                                </Button>
                            </NavLink>
                         </div>
                     </div>
                 </div>

                 {/* Impact Stats Grid */}
                 <div className="grid grid-cols-2 gap-4">
                     <div className="col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 transition-transform">
                         <Trophy size={48} className="mb-4 text-white/90" />
                         <h3 className="text-5xl font-bold font-heading mb-2">12</h3>
                         <p className="text-lg font-medium text-amber-100">Meritorious Students Selected in 2024</p>
                     </div>
                     <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col justify-center text-center group hover:border-amber-500/50 transition-colors">
                         <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Scholarship Value</p>
                         <p className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">₹10,000</p>
                         <p className="text-xs text-slate-500 mt-1">Per Student / Year</p>
                     </div>
                      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col justify-center text-center group hover:border-amber-500/50 transition-colors">
                         <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Coverage</p>
                         <p className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">Graduation</p>
                         <p className="text-xs text-slate-500 mt-1">Full Support</p>
                     </div>
                 </div>
             </div>

             {/* Gallery */}
             <div className="relative group/gallery">
                  <div className="flex items-center justify-between mb-6 px-2">
                      <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                         <ImageIcon size={20} className="text-amber-500"/> 2024 Highlights
                      </h3>
                      <span className="text-xs text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Swipe to explore</span>
                  </div>
                  <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 md:-mx-0 md:px-0 snap-x hide-scrollbar scroll-smooth">
                     {TALENT_TEST_IMAGES.map((img, idx) => (
                         <div key={idx} className="min-w-[280px] md:min-w-[360px] h-[220px] rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 snap-center relative group cursor-pointer hover:shadow-xl transition-all">
                             <img src={img} alt={`Talent Test Highlight ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                     <Award size={24} />
                                  </div>
                             </div>
                         </div>
                     ))}
                  </div>
             </div>
          </div>
      </Section>

      {/* 3. Knowledge Quest Section - Updated Layout */}
      <Section id="knowledge-quest" className="bg-slate-50 dark:bg-dark py-24 md:py-32 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col gap-12">
                
                {/* Content Side - Centered above images */}
                <div className="space-y-8 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider justify-center">
                        <Brain size={14} /> Intellectual Growth
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight">Knowledge Quest Program</h2>
                    
                    <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-400 mx-auto">
                        <p className="font-medium text-slate-800 dark:text-slate-200 italic">
                          "We believe that quiz programs would provide platforms to meet new young minds and showcase their knowledge at broader level in society. It will encourage and motivate intelligent brains to acquire more knowledge with education."
                        </p>
                    </div>

                    {/* Objectives Cards */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto text-left">
                       <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/20 shadow-sm flex flex-col gap-3 group hover:border-purple-300 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                            <Lightbulb size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Broaden Horizons</h4>
                            <p className="text-xs text-slate-500 mt-1">Showcase knowledge at a broader level.</p>
                          </div>
                       </div>
                       <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/20 shadow-sm flex flex-col gap-3 group hover:border-purple-300 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                            <Zap size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Motivate Minds</h4>
                            <p className="text-xs text-slate-500 mt-1">Encourage intelligent brains to acquire more.</p>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center relative">
                        <div className="relative inline-block group">
                            <NewBadge />
                            <div className="absolute inset-0 bg-purple-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <NavLink to="/register/knowledge-quest">
                                <Button className="shadow-xl shadow-purple-500/30 bg-gradient-to-r from-purple-600 to-indigo-600 border-none text-white relative z-0 transform hover:scale-105 transition-all px-8 py-4 text-lg">
                                    <School size={18} className="mr-2" /> School Registration
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Gallery Side - Custom Collage Full Width */}
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[500px]">
                        {/* Main Featured Image */}
                        <div className="col-span-2 md:col-span-4 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer border-4 border-white dark:border-slate-800">
                           <img 
                             src={KNOWLEDGE_QUEST_IMAGES[0]} 
                             alt="Knowledge Quest Main" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                             <div className="text-white">
                               <p className="font-bold text-lg">Active Participation</p>
                               <p className="text-xs text-white/80">Students engaged in quiz rounds</p>
                             </div>
                           </div>
                        </div>

                        {/* Side Column Top */}
                        <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group border border-slate-100 dark:border-slate-800">
                           <img 
                             src={KNOWLEDGE_QUEST_IMAGES[1]} 
                             alt="Knowledge Quest 2" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>

                        {/* Side Column Bottom */}
                        <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group border border-slate-100 dark:border-slate-800">
                           <img 
                             src={KNOWLEDGE_QUEST_IMAGES[2]} 
                             alt="Knowledge Quest 3" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                    </div>
                    
                    {/* Bottom Row Strip */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 h-[120px] md:h-[150px]">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group border border-slate-100 dark:border-slate-800">
                           <img 
                             src={KNOWLEDGE_QUEST_IMAGES[3]} 
                             alt="Knowledge Quest 4" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group border border-slate-100 dark:border-slate-800">
                           <img 
                             src={KNOWLEDGE_QUEST_IMAGES[4]} 
                             alt="Knowledge Quest 5" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </Section>

      {/* 4. NMMS Coaching Section */}
      <Section id="nmms-coaching" className="bg-white dark:bg-[#0b1220] py-24 md:py-32 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <BookOpen size={14} /> Financial Assistance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">NMMS Coaching</h2>
                    <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-400 space-y-6">
                        <p>The NMMS scholarship is the National Means-cum-Merit Scholarship Scheme, a centrally sponsored program by the Indian government that provides financial assistance to meritorious students from economically weaker sections to prevent them from dropping out of school after class VII.</p>
                        <p>Selection is based on a state-level examination that includes a Mental Ability Test (MAT) and a Scholastic Aptitude Test (SAT).</p>
                        <p>Akshara Bharatam society has been providing training sessions to the students in all three mandals(Rambilli, Atchutapuram and Yelamanchili) to crack the NMMS - MAT and SAT exams.</p>
                    </div>

                    <div className="pt-4 relative inline-block group">
                        <NewBadge />
                        <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <NavLink to="/register/nmms">
                            <Button className="shadow-xl shadow-blue-500/30 bg-gradient-to-r from-blue-500 to-cyan-500 border-none text-white relative z-0 transform hover:scale-105 transition-all px-8 py-4 text-lg">
                                <School size={18} className="mr-2" /> School Registration
                            </Button>
                        </NavLink>
                    </div>

                    {/* Coverage Highlights */}
                    <div className="flex flex-wrap gap-3 pt-4">
                       {["Rambilli", "Atchutapuram", "Yelamanchili"].map(mandal => (
                          <span key={mandal} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wide">
                             <MapPin size={12} /> {mandal}
                          </span>
                       ))}
                    </div>
                </div>
                
                <div className="flex-1 w-full">
                    <div className="relative">
                       {/* Featured NMMS Image (First in list) */}
                       <img 
                           src={NMMS_IMAGES[0]} 
                           alt="NMMS Coaching Session" 
                           className="rounded-3xl shadow-2xl w-full object-cover h-[450px] border-4 border-white dark:border-slate-800 transition-transform hover:scale-[1.01] duration-500"
                       />
                       
                       {/* Floating Stats Card */}
                       <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/30 max-w-xs hidden md:block">
                          <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                             <GraduationCap className="text-blue-500" size={20} /> Exam Structure
                          </h5>
                          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                             <li className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg">
                                <span>Mental Ability (MAT)</span>
                                <CheckCircle2 size={14} className="text-green-500" />
                             </li>
                             <li className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg">
                                <span>Scholastic Aptitude (SAT)</span>
                                <CheckCircle2 size={14} className="text-green-500" />
                             </li>
                          </ul>
                       </div>
                    </div>
                </div>
             </div>

             {/* NMMS Gallery Strip */}
             <div className="relative group/gallery">
                  <div className="flex items-center justify-between mb-6 px-2">
                      <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                         <ImageIcon size={20} className="text-blue-500"/> Coaching Highlights
                      </h3>
                      <span className="text-xs text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Swipe to explore</span>
                  </div>
                  <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 md:-mx-0 md:px-0 snap-x hide-scrollbar scroll-smooth">
                     {NMMS_IMAGES.slice(1).map((img, idx) => (
                         <div key={idx} className="min-w-[280px] md:min-w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 snap-center relative group cursor-pointer hover:shadow-xl transition-all">
                             <img src={img} alt={`NMMS Coaching Highlight ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                     <BookOpen size={24} />
                                  </div>
                             </div>
                         </div>
                     ))}
                  </div>
             </div>
          </div>
      </Section>
      
      {/* 5. Mentorship Section */}
      <Section id="mentorship" className="bg-slate-50 dark:bg-dark py-24 md:py-32 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                         <Target size={14} /> Career Guidance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">Student Mentorship</h2>
                    <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-400">
                        <p className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 dark:bg-teal-900/10 rounded-r-lg">
                           "We are providing mentorships to the students who wrote ABS talent test-2024. Mentorship is for shaping their education career in better way. The best guidance would be given to choose the right path to reach their goals based on their interests."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                           <h4 className="font-bold text-slate-900 dark:text-white mb-1">Career Shaping</h4>
                           <p className="text-xs text-slate-500">Structured pathways for future success.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                           <h4 className="font-bold text-slate-900 dark:text-white mb-1">Right Guidance</h4>
                           <p className="text-xs text-slate-500">Tailored advice based on student interests.</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 w-full">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-teal-500 rounded-3xl rotate-3 group-hover:rotate-1 transition-transform opacity-20"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1521791136064-7985c2d1103b?auto=format&fit=crop&q=80&w=800" 
                            alt="Mentorship Session" 
                            className="rounded-3xl shadow-2xl w-full object-cover h-[450px] border-4 border-white dark:border-slate-800 relative z-10"
                        />
                        <div className="absolute bottom-8 left-8 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border-l-4 border-teal-500">
                           <p className="text-sm font-bold text-slate-800 dark:text-white">Guiding ABS Talent Test Students</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </Section>

      {/* 6. Education Awareness Section */}
      <Section id="awareness" className="bg-white dark:bg-[#0b1220] py-24 md:py-32 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Megaphone size={14} /> Community Outreach
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">Educational Awareness Program</h2>
                    
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative">
                        <Sparkles className="absolute -top-4 -right-4 text-yellow-400 fill-yellow-400 animate-pulse" size={32} />
                        <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed text-lg">
                           "Through this program we inject strong belief in the students that only education can change our lives and lifestyle. We visit all the government schools in three mandals(Rambilli, Atchutapuram and Yelamanchili) and take sessions on how education brings change in the life and the society by giving the example of inspirational personalities."
                        </p>
                    </div>

                    <div className="flex gap-6 items-center pt-4">
                        <div className="flex -space-x-4">
                           {[1,2,3,4].map(i => (
                              <div key={i} className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                                 {/* Placeholder avatars or icons */}
                                 <Users size={20} className="text-slate-500" />
                              </div>
                           ))}
                        </div>
                        <div>
                           <p className="font-bold text-slate-900 dark:text-white text-lg">Impact Across 3 Mandals</p>
                           <p className="text-sm text-slate-500">Inspiring students across Government Schools</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 w-full">
                    {/* Featured Awareness Image */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink-500 rounded-[2.5rem] rotate-2 group-hover:-rotate-1 transition-transform opacity-10"></div>
                        <img 
                           src={AWARENESS_IMAGES[0]} 
                           alt="Education Awareness Main" 
                           className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px] border-4 border-white dark:border-slate-800 relative z-10 transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </div>
                </div>
             </div>

             {/* Gallery Strip */}
             <div className="relative group/gallery">
                  <div className="flex items-center justify-between mb-6 px-2">
                      <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                         <ImageIcon size={20} className="text-pink-500"/> Outreach Gallery
                      </h3>
                      <span className="text-xs text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Swipe to explore</span>
                  </div>
                  <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 md:-mx-0 md:px-0 snap-x hide-scrollbar scroll-smooth">
                     {AWARENESS_IMAGES.slice(1).map((img, idx) => (
                         <div key={idx} className="min-w-[280px] md:min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 snap-center relative group cursor-pointer hover:shadow-xl transition-all">
                             <img src={img} alt={`Awareness Highlight ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                     <Megaphone size={24} />
                                  </div>
                             </div>
                         </div>
                     ))}
                  </div>
             </div>
          </div>
      </Section>
    </>
  );
};

export default Programs;
