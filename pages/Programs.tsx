import React from 'react';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { PROGRAMS } from '../constants';
import { BookOpen, Laptop, GraduationCap, ArrowRight, Layers } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PROGRAM_SECTIONS = [
  { id: 'all-programs', label: 'All Programs' },
  { id: 'education-support', label: 'Education Support' },
  { id: 'digital-literacy', label: 'Digital Literacy' },
  { id: 'scholarships', label: 'Scholarships' },
];

const Programs: React.FC = () => {
  // Categorize programs for sectioning
  const educationPrograms = PROGRAMS.filter(p => p.category === 'Education');
  const techPrograms = PROGRAMS.filter(p => p.category === 'Technology');
  const scholarshipPrograms = PROGRAMS.filter(p => p.category === 'Financial Aid');

  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={PROGRAM_SECTIONS} />
      
      {/* 1. All Programs Section */}
      <Section id="all-programs" className="pt-40 md:pt-52 bg-slate-50 dark:bg-dark">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
            <Layers size={16} /> All Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Our Impact Portfolio</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of our multi-dimensional approach to uplifting rural education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Education Support', count: educationPrograms.length, icon: BookOpen, color: 'text-blue-500' },
            { label: 'Digital Literacy', count: techPrograms.length, icon: Laptop, color: 'text-purple-500' },
            { label: 'Scholarships', count: scholarshipPrograms.length, icon: GraduationCap, color: 'text-amber-500' }
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center">
              <stat.icon size={32} className={`mx-auto mb-4 ${stat.color}`} />
              <h4 className="font-bold text-slate-900 dark:text-white">{stat.label}</h4>
              <p className="text-xs text-slate-500 mt-1">{stat.count} Active Projects</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 2. Education Support Section */}
      <Section id="education-support" className="bg-white dark:bg-[#0b1220]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
               Education Support
             </div>
             <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-2">Academic Excellence</h2>
             <p className="text-slate-600 dark:text-slate-400">Remedial classes and teacher training to ensure foundational learning.</p>
           </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {educationPrograms.map(prog => (
            <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden">
               <img src={prog.image} className="w-full md:w-48 object-cover" alt={prog.title} />
               <div className="p-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prog.title}</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{prog.description}</p>
                 <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{prog.impact}</span>
               </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Digital Literacy Section */}
      <Section id="digital-literacy" className="bg-slate-50 dark:bg-dark">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
               Digital Literacy
             </div>
             <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-2">Technology & Innovation</h2>
             <p className="text-slate-600 dark:text-slate-400">Bridging the digital divide through labs and computer science skills.</p>
           </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {techPrograms.map(prog => (
            <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden">
               <img src={prog.image} className="w-full md:w-48 object-cover" alt={prog.title} />
               <div className="p-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prog.title}</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{prog.description}</p>
                 <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">{prog.impact}</span>
               </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. Scholarships Section */}
      <Section id="scholarships" className="bg-white dark:bg-[#0b1220]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
               Scholarships
             </div>
             <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-2">Financial Empowerment</h2>
             <p className="text-slate-600 dark:text-slate-400">Ensuring that financial constraints never hinder a child's ambition.</p>
           </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {scholarshipPrograms.map(prog => (
            <Card key={prog.id} className="flex flex-col md:flex-row overflow-hidden border-l-4 border-amber-400">
               <div className="p-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prog.title}</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{prog.description}</p>
                 <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">{prog.impact}</span>
               </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Programs;