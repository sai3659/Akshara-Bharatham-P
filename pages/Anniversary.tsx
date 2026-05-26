import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Phone, Clock, Quote, ArrowRight, Star, BookOpen, GraduationCap, Heart, Award } from 'lucide-react';
import { Section } from '../components/UI';
import confetti from 'canvas-confetti';

const Anniversary: React.FC = () => {
  useEffect(() => {
    // Fire confetti on load
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#9C4DFF', '#06B6D4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#9C4DFF', '#06B6D4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <>
      <style>{`
        .star-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(212,175,55,0.2); }
          50% { text-shadow: 0 0 15px rgba(212,175,55,0.6); }
        }
        .gold-text-gradient {
          background: linear-gradient(to right, #B8860B, #FFD700, #B8860B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="pt-24 md:pt-32 min-h-screen bg-[#020617] flex flex-col relative overflow-hidden">
        {/* Cool animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#9C4DFF]/10 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-[#06B6D4]/10 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[90px] animate-[ping_8s_ease-in-out_infinite]" />
        </div>

        <Section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-8 pb-20">
          <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-[3rem]" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#D4AF37]/30 rounded-tr-[3rem]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/30 rounded-bl-[3rem]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-[3rem]" />

            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-medium text-sm md:text-base italic mb-8 bg-[#D4AF37]/10 animate-bounce">
                <Sparkles size={16} /> You are cordially invited to celebrate the <Sparkles size={16} />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">AKSHARA BHARATAM SOCIETY</span>
              </h1>

              {/* Quote Section */}
              <div className="max-w-2xl mx-auto relative px-8 py-6 mb-12 border-y border-[#D4AF37]/20 bg-white/5 rounded-3xl">
                <Quote className="absolute top-2 left-2 text-[#D4AF37]/20" size={32} />
                <Quote className="absolute bottom-2 right-2 text-[#D4AF37]/20 rotate-180" size={32} />
                <p className="text-lg md:text-2xl text-slate-200 font-medium italic leading-relaxed">
                  "While Democracy is the Soul of a good Society,<br className="hidden md:block"/> Education is the Oxygen to it's Life"
                </p>
              </div>

              {/* 5th Anniversary Highlight */}
              <div className="mb-12 relative inline-flex flex-col items-center">
                 <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[50px] rounded-full" />
                 <h2 className="text-[6rem] md:text-[10rem] font-black leading-none gold-text-gradient drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] relative z-10">
                   5<span className="text-4xl md:text-6xl align-top absolute mt-4 -ml-2 text-[#D4AF37]">th</span>
                 </h2>
                 <p className="text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xl md:text-3xl mt-4 relative z-10">
                   Anniversary
                 </p>
                 <p className="text-slate-400 italic text-lg mt-4 font-medium relative z-10">
                   Five Years of Commitment, Service & Impact
                 </p>
              </div>

              {/* Chief Guest Section */}
              <div className="mb-14 pb-14 border-b border-white/10 relative">
                <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Chief Guest</p>
                <div className="inline-block relative">
                   <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                     </svg>
                   </div>
                   <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                     </svg>
                   </div>
                   <h3 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-wide font-heading">
                     Dr. GUDIPATI SRINIVASA RAO
                   </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium mt-3">
                  NCMP; M.Com; M.B.A.; PGDCA; DBF; NET; Ph.D. (Finance); Ph.D. (Marketing)
                </p>
              </div>

              {/* Event Details Grid */}
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left mb-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 transition-all hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '100ms' }}>
                  <div className="bg-[#1E3A8A] p-3 rounded-full text-white shrink-0 mt-1 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
                    <Phone size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#60A5FA] mb-1 tracking-wider">CONTACT</h4>
                    <p className="text-white font-medium text-lg">+91 72594 90606</p>
                    <p className="text-white font-medium text-lg">8500200401</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 transition-all hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '300ms' }}>
                  <div className="bg-[#1E3A8A] p-3 rounded-full text-white shrink-0 mt-1 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
                    <Clock size={24} className="animate-[spin_4s_linear_infinite]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#60A5FA] mb-1 tracking-wider">TIME</h4>
                    <p className="text-white font-medium text-lg">10:00 AM to 5:00 PM</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 transition-all hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '500ms' }}>
                  <div className="bg-[#1E3A8A] p-3 rounded-full text-white shrink-0 mt-1 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
                    <Calendar size={24} className="animate-[bounce_2s_infinite]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#60A5FA] mb-1 tracking-wider">DATE</h4>
                    <p className="text-white font-medium text-lg">30/05/2026</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 transition-all hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '700ms' }}>
                  <div className="bg-[#1E3A8A] p-3 rounded-full text-white shrink-0 mt-1 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
                    <MapPin size={24} className="animate-[bounce_2s_infinite]" style={{ animationDelay: '500ms' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#60A5FA] mb-1 tracking-wider">VENUE</h4>
                    <p className="text-white font-bold text-sm">SRI LAKSHMI FUNCTION HALL</p>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      Besides ICICI BANK<br/>
                      OPP. TRENDS<br/>
                      S E Z, PUDIMADAKA ROAD<br/>
                      ATCHUTHAPURAM
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Message */}
              <div className="max-w-2xl mx-auto italic font-medium leading-relaxed border-t border-white/10 pt-8 mt-8 animate-[fadeInUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '1000ms' }}>
                <p className="text-[#D4AF37] opacity-90 animate-[pulse-glow_3s_ease-in-out_infinite] text-lg md:text-xl">
                  We look forward to your gracious presence on this special occasion and seek your blessings as we continue our journey ahead.
                </p>
              </div>

            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Anniversary;
