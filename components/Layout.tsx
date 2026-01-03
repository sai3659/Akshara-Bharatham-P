
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Heart, ChevronDown, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from './UI';
import { NGO_DETAILS, LOGO_URL } from '../constants';

// Updated Navigation Structure: Realigned Media options to match Gallery page sections
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    children: [
      { label: 'Our Mission', path: '/about' },
      { label: 'Leadership', path: '/founders' },
      { label: 'Extended Team', path: '/team' },
    ]
  },
  { 
    label: 'Programs', 
    path: '/programs',
    children: [
      { label: 'All Programs', path: '/programs' },
      { label: 'Education Support', path: '/programs' },
      { label: 'Digital Literacy', path: '/programs' },
      { label: 'Scholarships', path: '/programs' },
    ]
  },
  { 
    label: 'Media', 
    path: '/gallery',
    children: [
      { label: 'Photo Gallery', path: '/gallery' },
      { label: 'Impact Stories', path: '/impact' },
      { label: 'Upcoming Events', path: '/events' },
      { label: 'Blog & News', path: '/blog' },
      { label: 'Hall of Fame', path: '/achievements' },
    ]
  },
  { 
    label: 'Get Involved', 
    path: '/volunteer',
    children: [
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Donate', path: '/donate' },
      { label: 'Partner with Us', path: '/contact' },
    ]
  },
  { label: 'Contact', path: '/contact' },
];

// --- Magnetic Logo ---
const MagneticLogo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <NavLink 
      to="/" 
      ref={ref}
      className="flex items-center gap-4 group relative z-50 shrink-0 py-2 px-4 rounded-3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)' }}
    >
      {/* Dynamic Background Design for the whole logo area */}
      <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/40 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl scale-110" />
      
      {/* Logo Container with Pulsating Glow */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center relative shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:border-[#06B6D4] group-hover:shadow-[#06B6D4]/60 group-hover:animate-pulse-glow z-10">
         {!imgError ? (
           <img 
             src={LOGO_URL} 
             alt="Akshara Bharatham Logo" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             onError={() => setImgError(true)}
           />
         ) : (
           <div className="w-full h-full bg-[#06B6D4] flex items-center justify-center text-white font-black text-2xl md:text-3xl rounded-full">
             AB
           </div>
         )}
      </div>

      <div className="flex flex-col relative py-2 pr-6 pl-2">
        {/* Strong Design Elements Behind Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[120%] -z-10 pointer-events-none">
          {/* Main design block: Skewed gradient box */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-purple-500/10 dark:from-[#06B6D4]/20 dark:to-purple-500/20 skew-x-[-15deg] rounded-lg transition-all duration-700 group-hover:from-[#06B6D4]/20 group-hover:to-purple-500/30 group-hover:skew-x-[-10deg] group-hover:scale-x-110 group-hover:scale-y-110 border-l-4 border-[#06B6D4] opacity-50 dark:opacity-100" />
          
          {/* Secondary glowing line */}
          <div className="absolute bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-[#06B6D4] to-purple-500 group-hover:w-full transition-all duration-1000 opacity-80" />
          
          {/* Faint accent blur */}
          <div className="absolute -right-8 top-0 w-16 h-16 bg-purple-500/40 dark:bg-purple-600/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>

        <span className="font-cool font-extrabold text-2xl md:text-3xl lg:text-4xl leading-none tracking-tighter text-slate-900 dark:text-white group-hover:text-[#06B6D4] transition-all duration-500 ease-out whitespace-nowrap uppercase drop-shadow-sm group-hover:scale-[1.02] origin-left">
          Akshara Bharatham
        </span>
        <span className="font-cool text-[10px] md:text-xs lg:text-sm font-black tracking-[0.5em] text-[#06B6D4] uppercase mt-1 transition-all duration-700 group-hover:tracking-[0.65em] group-hover:text-purple-500">
          Society
        </span>
      </div>
    </NavLink>
  );
};

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleDropdownToggle = (label: string, e: React.MouseEvent) => {
    e.preventDefault(); 
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 transition-all duration-300 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between py-4 lg:h-32 lg:py-0 gap-y-4">
          
          {/* 1. Logo */}
          <MagneticLogo />

          {/* 2. Actions (Theme/Join Us) */}
          <div className="flex items-center gap-4 ml-auto lg:ml-0 lg:order-3 shrink-0 pl-6">
            <button 
              onClick={toggleTheme}
              className="w-12 h-12 rounded-full bg-slate-100/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4] backdrop-blur-sm"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="hidden sm:block">
              <NavLink to="/donate">
                <Button size="lg" className="shadow-[#06B6D4]/20 bg-[#06B6D4] hover:bg-[#0891b2]">Join Us</Button>
              </NavLink>
            </div>
          </div>

          {/* 3. Navigation Menu */}
          <nav className={`
            order-last lg:order-2 
            w-full lg:w-auto lg:flex-1
            flex items-center justify-center gap-2 
            overflow-x-auto lg:overflow-visible 
            hide-scrollbar 
            pb-2 lg:pb-0
            lg:ml-12
            border-t lg:border-t-0 border-slate-100 dark:border-slate-800 lg:border-none pt-4 lg:pt-0
          `}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group shrink-0">
                <div className="flex items-center">
                  <NavLink 
                    to={item.path}
                    onClick={(e) => {
                      if (item.children && window.innerWidth < 1024) {
                         handleDropdownToggle(item.label, e);
                      }
                    }}
                    className={({ isActive }) => 
                      `px-4 py-2.5 rounded-full flex items-center gap-1.5 text-base font-bold transition-all whitespace-nowrap ${
                        isActive && !activeDropdown
                          ? 'bg-[#06B6D4]/10 text-[#06B6D4]' 
                          : activeDropdown === item.label
                             ? 'text-[#06B6D4] bg-slate-100 dark:bg-slate-800'
                             : 'text-slate-700 dark:text-slate-200 hover:text-[#06B6D4] dark:hover:text-[#06B6D4] hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 opacity-60 ${activeDropdown === item.label ? 'rotate-180' : 'group-hover:rotate-180'}`} 
                      />
                    )}
                  </NavLink>
                </div>

                {item.children && (
                  <>
                    <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                      <div className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden p-3">
                        {item.children.map((child, index) => (
                          <NavLink 
                            key={`${child.path}-${index}`}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-5 py-3 rounded-2xl text-sm transition-all font-bold ${
                                 isActive && child.path !== '#'
                                  ? 'bg-[#06B6D4]/10 text-[#06B6D4]'
                                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#06B6D4]'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    {activeDropdown === item.label && (
                       <>
                         <div 
                           className="lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" 
                           onClick={() => setActiveDropdown(null)}
                         />
                         <div className="lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md bg-white dark:bg-[#0f172a] rounded-[32px] shadow-2xl z-[70] p-4 border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 fade-in duration-300">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                                <span className="font-black text-xl text-slate-900 dark:text-white">
                                  {item.label}
                                </span>
                                <button 
                                  onClick={() => setActiveDropdown(null)}
                                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                  <X size={24} className="text-slate-500"/>
                                </button>
                            </div>
                            <div className="max-h-[60vh] overflow-y-auto px-2 pb-2">
                              {item.children.map((child, index) => (
                                <NavLink 
                                  key={`${child.path}-${index}-mobile`}
                                  to={child.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block px-6 py-4 rounded-2xl text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#06B6D4]"
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                         </div>
                       </>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 dark:bg-[#0b1220]/60 backdrop-blur-lg border-t border-white/20 dark:border-slate-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-white font-bold text-xl shadow-2xl overflow-hidden border border-slate-100">
                 <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-cool font-black text-2xl text-slate-900 dark:text-white leading-none uppercase">Akshara Bharatham</span>
                <span className="font-cool text-xs font-black tracking-widest text-[#06B6D4] uppercase mt-1">Society</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">
              {NGO_DETAILS.shortIntro}
            </p>
            <div className="flex gap-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <a 
                   key={i} 
                   href={i === 0 ? "https://www.facebook.com/p/Akshara-Bharatam-Society-100072491923829/" : "#"} 
                   target={i === 0 ? "_blank" : "_self"} 
                   rel={i === 0 ? "noopener noreferrer" : ""} 
                   className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#06B6D4] hover:text-white transition-all shadow-md hover:-translate-y-1"
                 >
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <h4 className="font-black text-slate-900 dark:text-white mb-8 text-xl">Quick Links</h4>
            <ul className="space-y-5">
              {['About Us', 'Our Programs', 'Volunteer', 'Contact Us'].map(link => (
                <li key={link}><a href="#" className="text-slate-600 dark:text-slate-400 font-bold hover:text-[#06B6D4] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-8 text-xl">Legal</h4>
            <ul className="space-y-5">
              {[
                { label: 'Privacy Policy', path: '/privacy' }, 
                { label: 'Terms of Service', path: '/terms' }, 
                { label: 'Cookie Policy', path: '/cookie-policy' }, 
                { label: 'Financial Reports', path: '/financial-reports' }
              ].map(link => (
                <li key={link.label}><NavLink to={link.path} className="text-slate-600 dark:text-slate-400 font-bold hover:text-[#06B6D4] transition-colors">{link.label}</NavLink></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-black text-slate-900 dark:text-white mb-8 text-xl">Contact</h4>
             <ul className="space-y-6 text-slate-600 dark:text-slate-400">
               <li className="flex gap-4">
                 <MapPin className="shrink-0 text-[#06B6D4]" size={24} />
                 <span className="font-medium">{NGO_DETAILS.location}</span>
               </li>
               <li className="flex gap-4">
                 <Phone className="shrink-0 text-[#06B6D4]" size={24} />
                 <span className="font-medium">{NGO_DETAILS.phone}</span>
               </li>
               <li className="flex gap-4">
                 <Mail className="shrink-0 text-[#06B6D4]" size={24} />
                 <span className="font-medium break-all">{NGO_DETAILS.email}</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/50 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">© {new Date().getFullYear()} Akshara Bharatham Society. All rights reserved.</p>
          <div className="flex gap-2 text-sm text-slate-500 font-bold">
             <span>Made with <Heart size={14} className="inline text-red-500 fill-red-500" /> for a better future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
