
import React, { useState } from 'react';
import { Section, Card, Button, Input, Select, DecorativeShapes } from '../components/UI';
import { Brain, School, Phone, CheckCircle, UserPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const KnowledgeQuestRegister: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [studentCount, setStudentCount] = useState<number>(4);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const handleStudentCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStudentCount(Number(e.target.value));
  };

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Brain size={16} /> Knowledge Quest
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              Quiz Competition Registration
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Register your school team for the Knowledge Quest. Select your team size (4-6 students).
            </p>
          </div>

          {!submitted ? (
            <Card className="p-8 md:p-12 shadow-2xl border-t-4 border-purple-600">
              <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-5 duration-300">
                
                {/* 1. School Information */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <School size={20} className="text-purple-600" /> School Details
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    <Input label="Name of the School *" name="schoolName" placeholder="Official School Name" required />
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Full Address *</label>
                        <textarea 
                           className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 h-24 resize-none"
                           placeholder="Complete address"
                           required
                        ></textarea>
                    </div>
                  </div>
                </div>

                {/* 2. Coordinator Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Phone size={20} className="text-purple-600" /> Coordinator Contacts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Teacher Name (Primary) *" name="teacher1Name" placeholder="Full Name" required />
                    <Input label="Contact Number 1 *" name="teacher1Phone" placeholder="+91 00000 00000" type="tel" required />
                    <Input label="Teacher Name (Secondary)" name="teacher2Name" placeholder="Full Name" />
                    <Input label="Contact Number 2" name="teacher2Phone" placeholder="+91 00000 00000" type="tel" />
                  </div>
                </div>

                {/* 3. Student Team */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <UserPlus size={20} className="text-purple-600" /> Team Composition
                  </h3>
                  
                  <div className="mb-6 max-w-xs">
                     <Select 
                       label="Number of Students (Max 6) *" 
                       options={[
                         { value: '4', label: '4 Students' },
                         { value: '5', label: '5 Students' },
                         { value: '6', label: '6 Students' }
                       ]}
                       value={studentCount}
                       onChange={handleStudentCountChange}
                     />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    {Array.from({ length: studentCount }).map((_, index) => (
                      <Input 
                        key={index}
                        label={`Student Name ${index + 1} *`} 
                        name={`studentName${index + 1}`} 
                        placeholder={`Name of Student ${index + 1}`} 
                        required 
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg text-lg border-none">
                    Register Team
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
             <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-green-500/30 shadow-lg">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Team Registered!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                  Your school team has been successfully registered for the Knowledge Quest. Good luck!
                </p>
                <div className="flex gap-4 justify-center">
                  <NavLink to="/">
                    <Button variant="outline">Back to Home</Button>
                  </NavLink>
                </div>
             </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default KnowledgeQuestRegister;
