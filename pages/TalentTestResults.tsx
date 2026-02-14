
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { Search, Trophy, Calendar, User, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

const TalentTestResults: React.FC = () => {
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Mock Result Data
  const [result, setResult] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      
      // Mock validation/result (In reality this would come from backend)
      // For demo, we just show a successful result
      setResult({
        name: "P. Sai Kumar",
        hallTicket: "ABS-TT-2024-8932",
        school: "ZPHS Rambilli",
        score: "85/100",
        rank: "5",
        status: "Qualified",
        scholarshipEligible: true
      });
    }, 1500);
  };

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Trophy size={16} /> Results Portal
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              ABS Talent Test Results 2024
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Check your performance, rank, and scholarship eligibility status.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-t-4 border-amber-500 mb-12">
             <form onSubmit={handleSearch} className="grid md:grid-cols-2 gap-6 items-end">
                <Input label="Application ID / Hall Ticket No." placeholder="e.g. ABS-TT-2024-XXXX" required />
                <Input label="Date of Birth" type="date" required />
                <div className="md:col-span-2">
                   <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20">
                     {loading ? 'Fetching Results...' : 'Check Result'}
                   </Button>
                </div>
             </form>
          </Card>

          {searched && result && (
            <div className="animate-in slide-in-from-bottom-5 duration-500">
               <Card className="overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="bg-amber-500 p-6 text-white text-center">
                     <h3 className="text-2xl font-bold font-heading mb-1">Result Card</h3>
                     <p className="opacity-90 text-sm">ABS Talent Search Examination 2024</p>
                  </div>
                  
                  <div className="p-8 grid md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <User className="text-amber-500" size={20} />
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold">Student Name</p>
                              <p className="font-bold text-slate-900 dark:text-white text-lg">{result.name}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <FileText className="text-amber-500" size={20} />
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold">Hall Ticket No.</p>
                              <p className="font-mono text-slate-900 dark:text-white">{result.hallTicket}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <Calendar className="text-amber-500" size={20} />
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold">School Name</p>
                              <p className="text-slate-900 dark:text-white">{result.school}</p>
                           </div>
                        </div>
                     </div>
                     
                     <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center text-center">
                        <p className="text-sm font-bold text-slate-500 mb-2">Total Score</p>
                        <div className="text-4xl font-black text-slate-900 dark:text-white mb-4">{result.score}</div>
                        
                        <div className="flex gap-4 w-full">
                           <div className="flex-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                              <p className="text-xs text-slate-400 font-bold uppercase">Rank</p>
                              <p className="text-xl font-bold text-amber-600">#{result.rank}</p>
                           </div>
                           <div className="flex-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                              <p className="text-xs text-slate-400 font-bold uppercase">Status</p>
                              <p className="text-xl font-bold text-green-600">{result.status}</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {result.scholarshipEligible && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 border-t border-green-100 dark:border-green-800 flex items-center justify-center gap-2 text-green-700 dark:text-green-400 font-bold">
                       <CheckCircle2 size={20} />
                       Congratulations! You are eligible for the Phase-2 Interview.
                    </div>
                  )}
               </Card>
               
               <div className="text-center mt-8">
                 <Button variant="outline">Download Scorecard (PDF)</Button>
               </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default TalentTestResults;
