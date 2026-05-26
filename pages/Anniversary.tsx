import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Calendar, Users, ArrowRight, Star, BookOpen, GraduationCap, Heart, Award } from 'lucide-react';
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
        colors: ['#06B6D4', '#9C4DFF', '#F59E0B']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#06B6D4', '#9C4DFF', '#F59E0B']
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
      `}</style>
      <div className="pt-24 md:pt-36 min-h-screen bg-[#020617] flex flex-col relative overflow-hidden">
        {/* Cool animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/30 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[90px] animate-[ping_8s_ease-in-out_infinite]" />
        </div>

        <Section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 -mt-16">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-300 font-bold text-sm tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(253,224,71,0.5)] animate-bounce">
            <Sparkles size={16} /> Mark Your Calendars
          </div>

          <div className="relative inline-block mb-10 mt-8 w-full max-w-5xl">
            <h1 className="text-5xl md:text-[5.5rem] font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-300 to-cyan-300 drop-shadow-2xl leading-tight pb-2 relative z-10">
              5 Years of <br className="hidden md:block" /> Akshara Bharatam Society
            </h1>
            
            {/* Floating Icons Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-20">
               
               <div className="absolute top-[-20%] left-[10%] star-float" style={{ animationDelay: '0s' }}>
                 <BookOpen className="text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] fill-yellow-300/20" size={32} />
               </div>
               <div className="absolute bottom-[-10%] left-[20%] star-float" style={{ animationDelay: '1s' }}>
                 <Heart className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] fill-purple-400/20" size={24} />
               </div>
               <div className="absolute top-[-10%] right-[15%] star-float" style={{ animationDelay: '2s' }}>
                 <GraduationCap className="text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)] fill-cyan-300/20" size={40} />
               </div>
               <div className="absolute bottom-[-20%] right-[10%] star-float" style={{ animationDelay: '0.5s' }}>
                 <Award className="text-yellow-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] fill-yellow-100/20" size={28} />
               </div>
               <div className="absolute top-[40%] left-[-10%] star-float" style={{ animationDelay: '1.5s' }}>
                 <Star className="text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)] fill-pink-400" size={20} />
               </div>
               <div className="absolute top-[60%] right-[-5%] star-float" style={{ animationDelay: '2.5s' }}>
                 <Star className="text-green-300 drop-shadow-[0_0_10px_rgba(134,239,172,0.8)] fill-green-300" size={24} />
               </div>
            </div>
          </div>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed mt-4">
          Join us as we celebrate half a decade of empowering education, transforming lives, and building a brighter future for rural India. This incredible journey wouldn't be possible without you!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Calendar size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">May 30th</h3>
            <p className="text-slate-400 text-center text-sm md:text-base">Save the date for a grand celebration of impact and community.</p>
          </div>
          
          <NavLink to="/alumni" className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/30 p-6 rounded-3xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 group cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            <Users size={40} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              ABS Alumni <ArrowRight size={20} className="group-hover:translate-x-1 inline-block transition-transform text-white/50 group-hover:text-white" />
            </h3>
            <p className="text-slate-300 text-center text-sm md:text-base">Are you an alumnus? Click here to reconnect with the network!</p>
          </NavLink>
        </div>
      </Section>
    </div>
    </>
  );
};

export default Anniversary;
