
import React from 'react';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { Target, Eye, ShieldCheck, Download, FileText, Users, GraduationCap, ArrowRight, History } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { TEAM_MEMBERS, FOUNDERS } from '../constants';

const ABOUT_SECTIONS = [
  { id: 'mission-history', label: 'Mission & History' },
  { id: 'leadership', label: 'Leadership Team' },
  { id: 'team', label: 'Extended Team' },
  { id: 'financials', label: 'Financial Reports' },
];

const About: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={ABOUT_SECTIONS} />
      
      {/* 1. Our Mission & History Section */}
      <Section id="mission-history" className="bg-slate-50 dark:bg-dark pt-40 md:pt-52">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Target size={16} /> Our Mission & History
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Empowering Rural India</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded in 2022, we are a non-profit organization dedicated to bridging the educational gap in rural India. 
            We believe that quality education is not a privilege, but a fundamental right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center border-t-4 border-purple-500">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Mission</h3>
            <p className="text-slate-500 dark:text-slate-400">
              To identify, nurture, and empower academically gifted students from economically disadvantaged backgrounds by providing scholarships, competitive exposure, NMMS coaching, and education awareness — ensuring no deserving student is denied the opportunity to grow beyond SSC due to financial hardship or lack of awareness.
            </p>
          </Card>
          <Card className="p-8 text-center border-t-4 border-[#06B6D4]">
            <div className="w-16 h-16 mx-auto bg-cyan-100 dark:bg-cyan-900/30 text-[#06B6D4] rounded-full flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Vision</h3>
            <p className="text-slate-500 dark:text-slate-400">
              A society where every talented child, regardless of economic background, has equal access to quality education — transforming lives, families, and communities from the roots up.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 text-center border-t-4 border-amber-500 mb-20 bg-white dark:bg-slate-900">
          <div className="w-16 h-16 mx-auto bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">Core Values</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 font-bold mb-10 italic">
            "Empowering Talent. Erasing Poverty. Transforming Tomorrow."
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Equal Opportunity</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"Every child deserves a chance, regardless of where they are born or how much their family earns."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Merit & Excellence</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"We identify and celebrate the true potential hidden in every deserving student."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Compassion & Care</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"We see the child before we see the circumstance."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Competitive Spirit</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"We prepare students not just for exams, but for life."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Awareness & Enlightenment</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"An informed family never lets their child drop out."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Commitment to Completion</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"A scholarship is not just money — it is a promise to walk with the student until graduation."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Social Transformation</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"One educated child transforms an entire generation."</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-amber-200 transition-colors">
              <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-1">Integrity & Transparency</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">"We earn trust through honest action."</p>
            </div>
          </div>
          <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-white">
            "Together, these values make Our NGO not just an organisation — but a movement for change."
          </p>
        </Card>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <History className="text-[#06B6D4]" /> Our Journey
          </h2>
          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 pl-8 relative">
            {[
              { 
                year: '2022', 
                title: 'Initial Expansion', 
                desc: 'Number of Mandals Covered: 1, Number of Students Selected for Scholarship: 7, Total Number of Students Getting Scholarship (Cumulative): 7.' 
              },
              { 
                year: '2023', 
                title: 'Growing Reach', 
                desc: 'Number of Mandals Covered: 1, Number of Students Selected for Scholarship: 5, Total Number of Students Getting Scholarship (Cumulative): 12.' 
              },
              { 
                year: '2024', 
                title: 'Broadening Horizons', 
                desc: 'Number of Mandals Covered: 2, Number of Students Selected for Scholarship: 12, Total Number of Students Getting Scholarship (Cumulative): 24.' 
              },
              { 
                year: '2025', 
                title: 'Continued Impact', 
                desc: 'Number of Mandals Covered: 3, Number of Students Selected for Scholarship: 16, Total Number of Students Getting Scholarship (Cumulative): 40.' 
              },
              { 
                year: '2026', 
                title: 'Scaling Excellence', 
                desc: 'Number of Mandals Covered: 3, Number of Students Selected for Scholarship: 18, Total Number of Students Getting Scholarship (Cumulative): 58. We also extended our program to Private Schools in 2026.' 
              }
            ].map((milestone, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#06B6D4] border-4 border-white dark:border-dark" />
                <span className="text-sm font-bold text-[#06B6D4] mb-1 block">{milestone.year}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{milestone.title}</h4>
                <p className="text-slate-500 dark:text-slate-400">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </Section>

      {/* 2. Leadership Team Section */}
      <Section id="leadership" className="bg-white dark:bg-[#0b1220]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4">
            Leadership Team
          </div>
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Our Leadership</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Akshara Bharatam is guided by a team of visionaries with decades of experience in social work, policy-making, and community building.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FOUNDERS.map((founder, index) => (
            <Card key={index} className="flex flex-col h-full group p-6 text-center">
              <div className="mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl group-hover:border-[#06B6D4] transition-colors">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{founder.name}</h3>
              <p className="text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-4">{founder.role}</p>
              <blockquote className="italic text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                "{founder.quote}"
              </blockquote>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <NavLink to="/founders">
            <Button size="lg" className="group">
              View Detailed Profiles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </NavLink>
        </div>
      </Section>

      {/* 3. Extended Team Section */}
      <Section id="team" className="bg-slate-50/50 dark:bg-dark-card/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            Extended Team
          </div>
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Our Extended Team</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A diverse collective of field coordinators, technical specialists, and on-ground mentors who make our mission a daily reality.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {TEAM_MEMBERS.map((m, i) => (
            <NavLink to={`/profile/${m.id}`} key={i}>
              <Card className="p-4 text-center h-full hover:border-purple-500 transition-colors">
                <img src={m.image} alt={m.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-purple-500/20" />
                <h4 className="font-bold text-slate-900 dark:text-white">{m.name}</h4>
                <p className="text-xs text-[#06B6D4] font-bold uppercase mt-1">{m.role}</p>
              </Card>
            </NavLink>
          ))}
        </div>
        <div className="text-center">
          <NavLink to="/team">
            <Button variant="outline">View Full Team Profile</Button>
          </NavLink>
        </div>
      </Section>

      {/* 4. Financial Reports Section */}
      <Section id="financials" className="bg-white dark:bg-[#0b1220]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              Financial Reports
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Transparency & Stewardship</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4">We are committed to total transparency. Every rupee you donate is tracked and audited.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 flex items-center gap-6 group hover:border-amber-400 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-amber-500 transition-colors">
                <FileText size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Annual Report 2023-24</h4>
                <Button variant="ghost" className="p-0 text-amber-600 hover:bg-transparent font-bold" onClick={(e) => e.preventDefault()}>Download PDF <Download size={16} className="ml-2" /></Button>
              </div>
            </Card>
            <Card className="p-8 flex items-center gap-6 group hover:border-[#06B6D4] transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-[#06B6D4] transition-colors">
                <ShieldCheck size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">FCRA Compliance</h4>
                <Button variant="ghost" className="p-0 text-[#06B6D4] hover:bg-transparent font-bold" onClick={(e) => e.preventDefault()}>View Documentation <ArrowRight size={16} className="ml-2" /></Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
