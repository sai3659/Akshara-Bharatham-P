import React from 'react';
import { Section, RGBCard, DecorativeShapes } from '../components/UI';
import { STUDENT_ACHIEVEMENTS } from '../constants';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <Section className="pt-24 min-h-screen">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 mb-6 shadow-lg shadow-yellow-500/20">
             <Trophy size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Student Hall of Fame</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We take immense pride in the success of our students. Their achievements are a testament to their hard work and the quality of education we strive to provide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {STUDENT_ACHIEVEMENTS.map(student => (
            <RGBCard key={student.id} className="h-full flex flex-col">
              <div className="h-64 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                   <h3 className="text-white font-bold font-heading text-2xl mb-1">{student.name}</h3>
                   <span className="text-white/80 text-sm font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded inline-block w-max">
                     Class of 2023
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm">
                 <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 shrink-0">
                      <Trophy size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight pt-1">{student.achievement}</h4>
                 </div>
                 
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                   {student.description}
                 </p>
              </div>
            </RGBCard>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Achievements;