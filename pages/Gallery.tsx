
import React, { useEffect, useState } from 'react';
import { Section, Card, DecorativeShapes, SideNavigation, RGBCard } from '../components/UI';
import { GALLERY_IMAGES, TESTIMONIALS, EVENTS, BLOG_POSTS, STUDENT_ACHIEVEMENTS } from '../constants';
import { Calendar, Quote, MapPin, ImageIcon, Trophy, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MEDIA_SECTIONS = [
  { id: 'photo-gallery', label: 'Photo Gallery' },
];

const Gallery: React.FC = () => {
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle hash scrolling on mount and update
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -120; // Header offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={MEDIA_SECTIONS} />
      
      {/* 1. Photo Gallery Section */}
      <Section id="photo-gallery" className="pt-40 md:pt-52 bg-slate-50 dark:bg-dark">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
            <ImageIcon size={16} /> Photo Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Capturing the Impact</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A curated visual history of our initiatives, community gatherings, and on-ground milestones.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-zoom-in"
              onClick={() => openLightbox(index)}
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Fullscreen</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300" onClick={closeLightbox}>
           <button 
             onClick={closeLightbox} 
             className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 hover:bg-black/40 rounded-full"
             aria-label="Close"
           >
             <X size={32} />
           </button>
           
           <button 
             onClick={prevImage} 
             className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md hidden md:flex group"
             aria-label="Previous Image"
           >
             <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
           </button>

           <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={GALLERY_IMAGES[currentImageIndex]} 
                alt={`Gallery Fullscreen ${currentImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                {currentImageIndex + 1} / {GALLERY_IMAGES.length}
              </div>
           </div>

           <button 
             onClick={nextImage} 
             className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md hidden md:flex group"
             aria-label="Next Image"
           >
             <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
           </button>
           
           {/* Mobile Navigation Controls */}
           <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:hidden z-50" onClick={(e) => e.stopPropagation()}>
              <button onClick={prevImage} className="p-4 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/20 active:bg-white/20"><ChevronLeft size={24} /></button>
              <button onClick={nextImage} className="p-4 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/20 active:bg-white/20"><ChevronRight size={24} /></button>
           </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
