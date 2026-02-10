
import React, { useState } from 'react';
import { 
  Play, 
  Settings, 
  Layout, 
  Type, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Save, 
  RotateCcw,
  Sparkles,
  BarChart,
  Edit2
} from 'lucide-react';
import { Button, Input } from '../components/UI';
import Home from './Home';
import { STATS } from '../constants';
import { Stat } from '../types';

const Builder: React.FC = () => {
  // Builder State
  const [activeTab, setActiveTab] = useState<'content' | 'style'>('content');
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Site Content State
  const [heroTitle, setHeroTitle] = useState("Bring Quality in");
  const [heroSubtitle, setHeroSubtitle] = useState("Akshara Bharatam Society is dedicated to supporting students and improving educational standards. Join our mission today to create a brighter future.");
  const [heroWordsString, setHeroWordsString] = useState("Education, Life, Society, Rural India");
  
  // Stats State - For demo, we allow editing the first stat value
  const [stats, setStats] = useState<Stat[]>(STATS);

  const handleStatChange = (index: number, newValue: string) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], value: newValue };
    setStats(newStats);
  };

  return (
    <div className="flex h-screen w-full bg-[#1e1e1e] overflow-hidden text-slate-300 font-sans">
      
      {/* Left Sidebar: Controls (IDE Style) */}
      <div className="w-[350px] flex-shrink-0 flex flex-col border-r border-[#333] bg-[#1a1a1a]">
        
        {/* Header */}
        <div className="h-14 flex items-center px-4 border-b border-[#333] bg-[#111]">
          <Sparkles className="text-blue-500 mr-2" size={20} />
          <span className="font-bold text-white tracking-wide">Akshara Studio</span>
        </div>

        {/* Toolbar */}
        <div className="flex border-b border-[#333] bg-[#222]">
           <button 
             onClick={() => setActiveTab('content')}
             className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'content' ? 'border-blue-500 text-white bg-[#2a2a2a]' : 'border-transparent hover:bg-[#252525] text-gray-500'}`}
           >
             <Edit2 size={14} /> Content
           </button>
           <button 
             onClick={() => setActiveTab('style')}
             className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'style' ? 'border-blue-500 text-white bg-[#2a2a2a]' : 'border-transparent hover:bg-[#252525] text-gray-500'}`}
           >
             <Settings size={14} /> Config
           </button>
        </div>

        {/* Scrollable Settings Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-8 custom-scrollbar">
           
           {activeTab === 'content' && (
             <div className="space-y-8 animate-in fade-in slide-in-from-left-2 duration-300">
                {/* Hero Section Config */}
                <div>
                   <div className="flex items-center gap-2 mb-4 text-white font-semibold border-b border-[#333] pb-2">
                     <Type size={16} className="text-blue-400" />
                     <span>Hero Section</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block">Main Headline</label>
                        <input 
                          value={heroTitle}
                          onChange={(e) => setHeroTitle(e.target.value)}
                          className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block">Animated Words (Comma separated)</label>
                        <input 
                          value={heroWordsString}
                          onChange={(e) => setHeroWordsString(e.target.value)}
                          className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block">Subtitle</label>
                        <textarea 
                          value={heroSubtitle}
                          onChange={(e) => setHeroSubtitle(e.target.value)}
                          className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-24 resize-none"
                        />
                      </div>
                   </div>
                </div>

                {/* Stats Section Config */}
                <div>
                   <div className="flex items-center gap-2 mb-4 text-white font-semibold border-b border-[#333] pb-2">
                     <BarChart size={16} className="text-green-400" />
                     <span>Impact Stats</span>
                   </div>
                   
                   <div className="space-y-3">
                      {stats.map((stat, idx) => (
                        <div key={idx} className="bg-[#222] p-3 rounded-lg border border-[#333]">
                           <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">{stat.label}</label>
                           <input 
                             value={stat.value}
                             onChange={(e) => handleStatChange(idx, e.target.value)}
                             type="number"
                             className="w-full bg-[#111] border border-[#333] rounded px-2 py-1 text-sm text-white focus:border-blue-500 outline-none font-mono"
                           />
                        </div>
                      ))}
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'style' && (
             <div className="text-center text-gray-500 py-10 animate-in fade-in slide-in-from-right-2 duration-300">
                <Layout size={40} className="mx-auto mb-4 opacity-20" />
                <p className="text-sm">Advanced layout & theme configurations coming in v2.0</p>
             </div>
           )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#333] bg-[#111] space-y-3">
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none text-xs h-9">
               <Save size={14} className="mr-2" /> Publish Changes
            </Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 flex items-center justify-center border border-[#333] text-gray-400 hover:text-white hover:bg-[#222]">
               <RotateCcw size={14} />
            </Button>
          </div>
          <p className="text-[10px] text-gray-600 text-center">Last auto-saved: Just now</p>
        </div>
      </div>

      {/* Main Area: Preview */}
      <div className="flex-1 flex flex-col bg-[#0f0f0f] relative">
         
         {/* Top Bar: Viewport Controls */}
         <div className="h-14 flex items-center justify-center border-b border-[#333] bg-[#1a1a1a] gap-4">
             <div className="flex bg-[#222] rounded-lg p-1 border border-[#333]">
                <button 
                  onClick={() => setViewMode('desktop')}
                  className={`p-2 rounded transition-all ${viewMode === 'desktop' ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                  title="Desktop View"
                >
                  <Monitor size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('tablet')}
                  className={`p-2 rounded transition-all ${viewMode === 'tablet' ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                  title="Tablet View"
                >
                  <Tablet size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('mobile')}
                  className={`p-2 rounded transition-all ${viewMode === 'mobile' ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                  title="Mobile View"
                >
                  <Smartphone size={16} />
                </button>
             </div>
             
             <div className="absolute right-4 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   Live Preview
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors flex items-center gap-2">
                   <Play size={12} fill="currentColor" /> Visit Site
                </button>
             </div>
         </div>

         {/* Preview Canvas */}
         <div className="flex-1 overflow-hidden relative flex items-center justify-center p-8 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
            <div 
               className={`bg-white dark:bg-slate-950 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out border border-[#333] ${
                 viewMode === 'mobile' ? 'w-[375px] h-[812px] rounded-[30px] border-[8px] border-[#111]' : 
                 viewMode === 'tablet' ? 'w-[768px] h-[1024px] rounded-[20px] border-[8px] border-[#111]' : 
                 'w-full h-full rounded-none border-none'
               }`}
            >
               <div className={`w-full h-full overflow-y-auto custom-scrollbar ${viewMode !== 'desktop' ? 'rounded-[20px]' : ''}`}>
                 {/* 
                     We render the Home component here with overrides.
                     Note: The main App Layout (Header/Footer) is usually wrapping this.
                     For this builder preview, we are rendering just the Home content or we could wrap it
                     if we wanted full fidelity. For now, seeing the main content change is the goal.
                 */}
                 <div className="dark"> {/* Force dark mode class for preview consistency if needed, or toggle */}
                    <div className="bg-white dark:bg-[#020617] min-h-full text-slate-800 dark:text-slate-200">
                       <Home 
                         contentOverrides={{
                            heroTitle,
                            heroSubtitle,
                            heroWords: heroWordsString.split(',').map(s => s.trim()),
                            stats
                         }}
                       />
                    </div>
                 </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

export default Builder;
