
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { Search, Brain, Users, School, Phone, CheckCircle2, XCircle } from 'lucide-react';

const KnowledgeQuestResults: React.FC = () => {
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Mock Result Data
  const [result, setResult] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      
      // Mock result
      setResult({
        schoolName: "ZPHS Atchutapuram",
        teamId: "KQ-2024-TM-04",
        members: ["K. Ravi", "M. Lakshmi", "S. Srinu", "P. Anitha"],
        round: "Finals",
        position: "Runner Up",
        score: "140 Points"
      });
    }, 1500);
  };

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Brain size={16} /> Quiz Results
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              Knowledge Quest 2024 Results
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              View team standings and round-wise performance for your school team.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-t-4 border-purple-600 mb-12">
             <form onSubmit={handleSearch} className="grid md:grid-cols-2 gap-6 items-end">
                <Input label="Team Registration ID" placeholder="e.g. KQ-2024-TM-XX" required />
                <Input label="Coordinator Phone Number" type="tel" placeholder="+91" required />
                <div className="md:col-span-2">
                   <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20">
                     {loading ? 'Searching Team...' : 'View Team Performance'}
                   </Button>
                </div>
             </form>
          </Card>

          {searched && result && (
            <div className="animate-in slide-in-from-bottom-5 duration-500">
               <Card className="overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
                     <div>
                        <h3 className="text-2xl font-bold font-heading">Team Report</h3>
                        <p className="opacity-90 text-sm font-mono">{result.teamId}</p>
                     </div>
                     <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <School size={24} />
                     </div>
                  </div>
                  
                  <div className="p-8">
                     <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex-1 space-y-4">
                           <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                              <p className="text-xs text-slate-500 uppercase font-bold mb-1">School Name</p>
                              <p className="font-bold text-slate-900 dark:text-white text-lg">{result.schoolName}</p>
                           </div>
                           
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold mb-2 flex items-center gap-2">
                                 <Users size={14} /> Team Members
                              </p>
                              <div className="flex flex-wrap gap-2">
                                 {result.members.map((m: string, i: number) => (
                                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                                       {m}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4">
                           <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center flex flex-col justify-center">
                              <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase mb-1">Round Reached</p>
                              <p className="text-2xl font-black text-indigo-900 dark:text-white">{result.round}</p>
                           </div>
                           <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center flex flex-col justify-center">
                              <p className="text-green-600 dark:text-green-400 text-xs font-bold uppercase mb-1">Total Score</p>
                              <p className="text-2xl font-black text-green-900 dark:text-white">{result.score}</p>
                           </div>
                           <div className="col-span-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl text-center flex items-center justify-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600">
                                 <CheckCircle2 size={20} />
                              </div>
                              <div className="text-left">
                                 <p className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase">Final Standing</p>
                                 <p className="text-xl font-bold text-purple-900 dark:text-white">{result.position}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex justify-center">
                       <Button variant="outline">Print Certificate</Button>
                     </div>
                  </div>
               </Card>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default KnowledgeQuestResults;
