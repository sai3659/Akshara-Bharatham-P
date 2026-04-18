
import React, { useState, useRef } from 'react';
import * as Papa from 'papaparse';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { ChevronLeft } from 'lucide-react';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/13Fi0_2Ypcjru4aW9kV_Y3btqD8fRtqJ_d6KqjG28AGw/export?format=csv&gid=1723745535';

const TalentTestResults: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  
  const [result, setResult] = useState<any>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue || searchValue.length < 3) {
      setError('Enter valid number');
      return;
    }
    
    setLoading(true);
    setError('');
    setResult(null);
    setSearched(false);
    
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data;
        // Check for either Phone Number or SSC Hall Ticket Number matching exactly
        const student = data.find((row: any) => 
          (row['Phone Number'] && row['Phone Number'] === searchValue) || 
          (row['SSC Hall Ticket Number'] && row['SSC Hall Ticket Number'] === searchValue)
        );
        
        if (student) {
          setResult(student);
          
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#06B6D4', '#9C4DFF', '#F59E0B']
          });
        } else {
          setError('Enter valid number');
        }
        setLoading(false);
        setSearched(true);
      },
      error: (err) => {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
        setSearched(true);
      }
    });
  };

  const handleDownloadPDF = async () => {
    if (!resultCardRef.current || !result) return;
    
    setDownloading(true);
    try {
      const element = resultCardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#112211'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      const studentName = result['Student Name'] || result['Full Name'] || 'Student';
      pdf.save(`Results_${studentName.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };
  
  const handleShare = async () => {
    if (navigator.share && result) {
      try {
        await navigator.share({
          title: 'ABS Talent Test Results',
          text: `Check out my results for ${result['Student Name']}! Total Marks: ${result['Total Marks']}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  };

  const subjects = [
    { id: 1, name: 'MATHEMATICS', key: 'Mathematics' },
    { id: 2, name: 'PHYSICS', key: 'Physics' },
    { id: 3, name: 'CHEMISTRY', key: 'Chemistry' },
    { id: 4, name: 'BIOLOGY', key: 'Biology' },
    { id: 5, name: 'SOCIAL', key: 'Social' },
    { id: 6, name: 'ENGLISH', key: 'English' }
  ];

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-32 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto">
          {!searched && (
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                ABS Talent Test Results
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Enter your Hall Ticket No. or Phone Number to view your results.
              </p>
              
              <Card className="p-8 shadow-2xl border-t-4 border-[#3ca354] max-w-xl mx-auto">
                 <form onSubmit={handleSearch} className="flex flex-col gap-6 text-left">
                    <div>
                       <Input 
                         label="Hall Ticket No. or Phone Number" 
                         placeholder="e.g. 2604248593 or 9876543210"
                         type="text"
                         value={searchValue}
                         onChange={(e) => setSearchValue(e.target.value)}
                         required 
                       />
                    </div>
                    {error && (
                      <div className="text-red-500 text-sm font-medium text-center">
                        {error}
                      </div>
                    )}
                    <div>
                       <Button size="lg" className="w-full bg-[#3ca354] hover:bg-[#2d8040] text-white transition-colors" disabled={loading}>
                         {loading ? 'Fetching Results...' : 'Get Results'}
                       </Button>
                    </div>
                 </form>
              </Card>
            </div>
          )}

          {searched && result && (
            <div className="animate-in slide-in-from-bottom-5 duration-500 max-w-lg mx-auto">
               
               {/* Phone/Image-like dark container container */}
               <div className="bg-gradient-to-b from-[#112211] to-[#0A110A] text-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#2a3c2a] p-4 relative" ref={resultCardRef}>
                  
                  {/* Decorative faint glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/10 blur-[50px] pointer-events-none"></div>

                  <div className="flex items-center gap-2 mb-6 pt-4 px-2">
                     <span className="cursor-pointer text-white opacity-80 hover:opacity-100" onClick={() => setSearched(false)}>
                       <ChevronLeft size={24} />
                     </span>
                     <h2 className="text-lg md:text-xl font-bold tracking-wide">
                        <span className="text-amber-500">ABS</span> Talent Test Results 2024
                     </h2>
                  </div>
                  
                  {/* Info Card */}
                  <div className="bg-[#404b40]/80 backdrop-blur-sm rounded-xl p-5 mb-8 shadow-inner border border-white/5 mx-2">
                     <div className="grid grid-cols-[100px_auto] gap-y-3 gap-x-2 text-[15px]">
                        <div className="text-slate-300">Hall Ticket</div>
                        <div className="font-bold font-mono tracking-wide">: {result['SSC Hall Ticket Number'] || '-'}</div>
                        
                        <div className="text-slate-300">Name</div>
                        <div className="font-bold">: {result['Student Name'] || result['Full Name'] || '-'}</div>
                        
                        <div className="text-slate-300">District/Village</div>
                        <div className="font-bold">: {result['Village'] || result['District'] || '-'}</div>
                        
                        <div className="text-slate-300">Total</div>
                        <div className="font-bold">: {result['Total Marks'] || '-'} <span className="text-green-400 font-medium ml-1 text-sm">( PASS )</span></div>
                     </div>
                  </div>

                  {/* Optional Tab/Header */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white rounded-full p-1 inline-flex shadow-sm">
                      <div className="bg-[#1b75d6] text-white px-6 py-1.5 rounded-full text-sm font-bold">Scorecard</div>
                    </div>
                  </div>

                  {/* Marks Table */}
                  <div className="border border-[#2a3c2a] rounded overflow-hidden mx-2 mb-8 bg-[#0d1a0d]">
                     <table className="w-full text-sm">
                        <thead className="bg-[#182818] border-b border-[#2a3c2a]">
                           <tr>
                              <th className="w-8 text-center py-3 px-1 border-r border-[#2a3c2a] text-slate-400"></th>
                              <th className="text-left py-3 px-3 border-r border-[#2a3c2a] text-white font-bold tracking-wider text-xs">SUBJECT</th>
                              <th className="text-center py-3 px-3 border-r border-[#2a3c2a] text-white font-bold tracking-wider text-xs w-16">marks</th>
                              <th className="text-center py-3 px-3 tracking-wider text-white font-bold text-xs w-16">status</th>
                           </tr>
                        </thead>
                        <tbody>
                           {subjects.map((sub) => (
                              <tr key={sub.id} className="border-b border-[#2a3c2a] last:border-0 hover:bg-[#1a2d1a] transition-colors">
                                 <td className="text-center py-2.5 px-1 border-r border-[#2a3c2a] text-[#556955] font-black">{sub.id}</td>
                                 <td className="text-left py-2.5 px-3 border-r border-[#2a3c2a] font-bold text-slate-200">{sub.name}</td>
                                 <td className="text-center py-2.5 px-3 border-r border-[#2a3c2a] font-bold text-white text-base">
                                   {result[sub.key] && result[sub.key] !== '' ? result[sub.key] : '-'}
                                 </td>
                                 <td className="text-center py-2.5 px-3 font-bold text-green-500">
                                   {result[sub.key] && result[sub.key] !== '' ? 'P' : '-'}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  {/* Actions */}
                  <div className="px-2 mb-4 flex gap-4">
                    <button 
                      onClick={handleDownloadPDF} 
                      disabled={downloading}
                      className="flex-1 bg-transparent border border-white/30 text-white font-bold rounded-lg py-3 hover:bg-white/10 transition duration-300"
                    >
                      {downloading ? 'Downloading...' : 'Download'}
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex-1 bg-[#2580f7] text-white font-bold rounded-lg py-3 hover:bg-[#1e6cd1] transition duration-300 shadow-lg shadow-blue-500/20"
                    >
                      Share
                    </button>
                  </div>

                  {/* Footer Notes */}
                  <div className="px-2 flex justify-center items-center text-xs text-slate-400 mb-2">
                    <p>Please Take A Screenshot & Share</p>
                  </div>

               </div>
               
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default TalentTestResults;
