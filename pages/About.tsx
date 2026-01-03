import React from 'react';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { Target, Eye, ShieldCheck, Download, FileText, Users, GraduationCap, ArrowRight, History } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
      <Section id="mission-history" className="bg-slate-50 dark:bg-dark pt-32 md:pt-40">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Target size={16} /> Section 1: Our Mission & History
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Empowering Rural India</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded in 2010, we are a non-profit organization dedicated to bridging the educational gap in rural India. 
            We believe that quality education is not a privilege, but a fundamental right.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center border-t-4 border-purple-500">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Mission</h3>
            <p className="text-slate-500 dark:text-slate-400">
              To empower students in rural communities by providing access to quality education and mentorship.
            </p>
          </Card>
          <Card className="p-8 text-center border-t-4 border-[#06B6D4]">
            <div className="w-16 h-16 mx-auto bg-cyan-100 dark:bg-cyan-900/30 text-[#06B6D4] rounded-full flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Vision</h3>
            <p className="text-slate-500 dark:text-slate-400">
              A future where every child has the opportunity to realize their full potential.
            </p>
          </Card>
          <Card className="p-8 text-center border-t-4 border-amber-500">
            <div className="w-16 h-16 mx-auto bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Values</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Integrity, Transparency, and Community-First approach in everything we do.
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <History className="text-[#06B6D4]" /> Our Journey
          </h2>
          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 pl-8 relative">
            {[
              { year: '2010', title: 'The Beginning', desc: 'Started with 5 volunteers teaching in one village school.' },
              { year: '2015', title: 'Scaling Up', desc: 'Reached 50 schools and launched our first major scholarship program.' },
              { year: '2023', title: 'State Recognition', desc: 'Recognized for excellence in rural education by the government.' }
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
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
              Section 2: Leadership Team
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Our Leadership</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Akshara Bharatham is guided by a team of visionaries with decades of experience in social work, policy-making, and community building.
            </p>
            <NavLink to="/founders">
              <Button size="lg" className="group">
                Meet the Founders <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </NavLink>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-square rounded-[40px] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=600" alt="Founder" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <p className="text-white italic text-lg mb-2">"Education is the movement from darkness to light."</p>
                <p className="text-cyan-400 font-bold">- Dr. Rajesh Kumar, President</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Extended Team Section */}
      <Section id="team" className="bg-slate-50/50 dark:bg-dark-card/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            Section 3: Extended Team
          </div>
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Our Extended Team</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A diverse collective of field coordinators, technical specialists, and on-ground mentors who make our mission a daily reality.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { name: "Priya Sharma", role: "Coordination", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
            { name: "Karthik Reddy", role: "IT Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
            { name: "Sarah J.", role: "Grants", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
            { name: "Rahul Verma", role: "Liaison", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
          ].map((m, i) => (
            <Card key={i} className="p-4 text-center">
              <img src={m.img} alt={m.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-purple-500/20" />
              <h4 className="font-bold text-slate-900 dark:text-white">{m.name}</h4>
              <p className="text-xs text-[#06B6D4] font-bold uppercase mt-1">{m.role}</p>
            </Card>
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
              Section 4: Financial Reports
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
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Annual Report 2023-24</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Audited financial statements and auditor's notes.</p>
                <NavLink to="/financial-reports">
                  <Button variant="ghost" className="p-0 text-amber-600 hover:bg-transparent font-bold">Download PDF <Download size={16} className="ml-2" /></Button>
                </NavLink>
              </div>
            </Card>
            <Card className="p-8 flex items-center gap-6 group hover:border-[#06B6D4] transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-[#06B6D4] transition-colors">
                <ShieldCheck size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">FCRA Compliance</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Foreign contribution regulation filings and permits.</p>
                <NavLink to="/financial-reports">
                  <Button variant="ghost" className="p-0 text-[#06B6D4] hover:bg-transparent font-bold">View Documentation <ArrowRight size={16} className="ml-2" /></Button>
                </NavLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;