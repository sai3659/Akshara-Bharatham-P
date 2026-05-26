import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, ArrowRight, X, Loader2, Calendar } from 'lucide-react';
import { Section, Button } from '../components/UI';

const YEARS = [2026, 2025, 2024, 2023, 2022];

interface GitHubFile {
  name: string;
  download_url: string;
  type: string;
}

interface AlumniImage {
  url: string;
  name: string;
}

const Alumni: React.FC = () => {
  const [imagesByYear, setImagesByYear] = useState<Record<number, AlumniImage[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const newImages: Record<number, AlumniImage[]> = {};
      
      const extractName = (filename: string) => {
        let name = filename.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        name = name.replace(/\(\d{4}\)|\d{4}/g, '');
        name = name.replace(/[_-]/g, ' ');
        return name.trim();
      };

      try {
        await Promise.all(YEARS.map(async (year) => {
          try {
            const res = await fetch(`https://api.github.com/repos/sai3659/ABS_Images/contents/ABS%20Alumni%20${year}`);
            if (res.ok) {
              const data: GitHubFile[] = await res.json();
              newImages[year] = data
                .filter(file => file.type === 'file' && file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i))
                .map(file => ({
                  url: file.download_url,
                  name: extractName(file.name)
                }));
            } else {
              newImages[year] = [];
            }
          } catch (e) {
            console.error(`Failed to fetch for ${year}`, e);
            newImages[year] = [];
          }
        }));
        
        setImagesByYear(newImages);
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, []);

  return (
    <div className="pt-24 md:pt-36 bg-slate-50 dark:bg-[#020617] min-h-screen">
      <Section className="text-center max-w-3xl mx-auto pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9C4DFF]/10 text-[#9C4DFF] font-bold text-sm tracking-widest uppercase mb-6 shadow-sm">
          <GraduationCap size={18} /> Our Pride
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-heading text-slate-900 dark:text-white mb-6">
          ABS Alumni Network
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Reconnect, reminisce, and inspire. Explore our vibrant community of alumni across the years.
        </p>
      </Section>

      <Section className="pb-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#9C4DFF] animate-spin mb-4" />
            <p className="text-slate-500 font-medium animate-pulse">Loading Alumni Galleries...</p>
          </div>
        ) : (
          <div className="space-y-16 max-w-7xl mx-auto">
            {YEARS.map(year => {
              const images = imagesByYear[year] || [];
              if (images.length === 0) return null; // Hide years with no images
              
              return (
                <div key={year} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="bg-[#9C4DFF] text-white p-3 rounded-2xl shadow-lg shadow-[#9C4DFF]/30">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white">Batch of {year}</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{images.length} Alumni Memories</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="group cursor-pointer transform hover:-translate-y-2 transition-transform duration-500"
                        onClick={() => setSelectedImage(img.url)}
                      >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3">
                          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                          <img 
                            src={img.url} 
                            alt={`Alumni ${year} - ${img.name}`} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onLoad={(e) => {
                              (e.target as HTMLElement).previousElementSibling?.remove(); // remove loader
                            }}
                          />
                        </div>
                        <div className="text-center px-1">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{img.name}</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
                            Class of {year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        <div className="mt-24 text-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 md:p-12 rounded-[2rem] max-w-4xl mx-auto shadow-2xl border border-slate-200 dark:border-slate-800">
          <div className="w-20 h-20 bg-[#9C4DFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <Users size={32} className="text-[#9C4DFF]" />
          </div>
          <h2 className="text-3xl font-black font-heading mb-4">Are you an ABS Alumnus?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            We would love to hear from you! Join our official alumni network to connect with old friends, mentor current students, and stay updated on society events.
          </p>
          <Button size="lg" className="gap-2 bg-[#9C4DFF] hover:bg-[#8B45E3] text-white shadow-xl shadow-[#9C4DFF]/20 px-8 h-14 text-lg">
            Register as Alumni <ArrowRight size={20} />
          </Button>
        </div>
      </Section>

      {/* Image Modal Fullscreen View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          <img 
            src={selectedImage} 
            alt="Alumni Expanded" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Alumni;
