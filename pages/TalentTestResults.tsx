
import React, { useState, useRef } from 'react';
import * as Papa from 'papaparse';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { Trophy, User, FileText, AlertCircle, MapPin, Download } from 'lucide-react';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/13Fi0_2Ypcjru4aW9kV_Y3btqD8fRtqJ_d6KqjG28AGw/export?format=csv';

const TalentTestResults: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  
  const [result, setResult] = useState<any>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid phone number.');
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
        const student = data.find((row: any) => row['Phone Number'] === phoneNumber);
        
        if (student) {
          setResult(student);
          
          // Trigger confetti on success
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#06B6D4', '#9C4DFF', '#F59E0B']
          });
        } else {
          setError('No record found with this phone number. Please check and try again.');
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
        scale: 2, // Higher resolution
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      const studentName = result['Student Name'] || result['Full Name'] || 'Student';
      pdf.save(`ABS_Talent_Test_Result_${studentName.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('Failed to download PDF. Please try again or use browser print.');
    } finally {
      setDownloading(false);
    }
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
              ABS Talent Test Results
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Enter your registered phone number to view your exam details and results.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-t-4 border-amber-500 mb-12">
             <form onSubmit={handleSearch} className="flex flex-col gap-6">
                <div>
                   <Input 
                     label="Registered Phone Number" 
                     placeholder="e.g. 9876543210"
                     type="tel"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     required 
                   />
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}
                <div>
                   <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20" disabled={loading}>
                     {loading ? 'Fetching Results...' : 'Get Result'}
                   </Button>
                </div>
             </form>
          </Card>

          {searched && result && (
            <div className="animate-in slide-in-from-bottom-5 duration-500">
               <div ref={resultCardRef}>
                 <Card className="overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="bg-amber-500 p-6 text-white text-center">
                       <h3 className="text-2xl font-bold font-heading mb-1">ABS Talent Test Result</h3>
                       <p className="opacity-90 text-sm">Performance and Scorecard</p>
                    </div>
                    
                    {/* Highlight Section */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 border-b border-slate-100 dark:border-slate-800 text-center">
                       <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">ABS Talent Test Marks</p>
                       <div className="text-6xl font-black text-amber-600 dark:text-amber-500 mb-6 drop-shadow-sm">
                          {result['ABS Talent Test Marks'] || '-'}
                       </div>
                       
                       <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
                          <div className="flex items-center gap-3">
                             <User className="text-amber-500" size={20} />
                             <div className="text-left">
                                <p className="text-xs text-slate-400 font-bold uppercase">Student Name</p>
                                <p className="font-bold text-slate-900 dark:text-white text-lg">{result['Student Name'] || result['Full Name'] || '-'}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <FileText className="text-amber-500" size={20} />
                             <div className="text-left">
                                <p className="text-xs text-slate-400 font-bold uppercase">Hall Ticket No.</p>
                                <p className="font-mono text-slate-900 dark:text-white font-bold">{result['Hall Ticket Number'] || result['Application ID'] || '-'}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <MapPin className="text-amber-500" size={20} />
                             <div className="text-left">
                                <p className="text-xs text-slate-400 font-bold uppercase">District</p>
                                <p className="font-bold text-slate-900 dark:text-white text-lg">{result['District'] || '-'}</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Detailed Marks Table */}
                    <div className="p-8">
                       <h4 className="text-xl font-bold font-heading mb-4 text-slate-800 dark:text-slate-200">Detailed Marks Breakdown</h4>
                       <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                              <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
                                  <tr>
                                      <th scope="col" className="px-6 py-4 font-bold">Subject / Section</th>
                                      <th scope="col" className="px-6 py-4 font-bold text-right">Marks Obtained</th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Intermediate Total Marks</td>
                                      <td className="px-6 py-4 text-right font-bold text-amber-600 dark:text-amber-500">{result['Intermediate Total Marks'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">English Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['English Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Sanskrit Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['Sanskrit Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Mathematics A Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['Mathematics A Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Mathematics B Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['Mathematics B Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Physics Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['Physics Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Chemistry Paper-II</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['Chemistry Paper-II'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Physics Practical</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['PHYSICS PRACTICAL'] || '-'}</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                      <td className="px-6 py-4 font-medium">Chemistry Practical</td>
                                      <td className="px-6 py-4 text-right font-mono">{result['CHEMISTRY PRACTICAL'] || '-'}</td>
                                  </tr>
                              </tbody>
                          </table>
                       </div>
                    </div>
                 </Card>
               </div>
               
               <div className="text-center mt-8">
                 <Button 
                   variant="outline" 
                   onClick={handleDownloadPDF}
                   disabled={downloading}
                   className="gap-2"
                 >
                   <Download size={18} />
                   {downloading ? 'Generating PDF...' : 'Download Results PDF'}
                 </Button>
               </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default TalentTestResults;
