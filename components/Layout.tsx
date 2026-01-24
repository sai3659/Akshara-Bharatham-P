import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Heart, ChevronDown, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from './UI';
import { NGO_DETAILS, LOGO_URL } from '../constants';

// Updated Navigation Structure
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

// --- Static Logo ---
const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <NavLink 
      to="/" 
      className="flex items-center gap-4 md:gap-6 relative z-50 py-2 flex-1"
    >
      {/* Logo Container - Static Round Shape - Increased Size */}
      <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center relative shrink-0 z-10 p-1">
         {!imgError ? (
           <img 
             src={LOGO_URL} 
             alt="Akshara Bharatham Logo" 
             className="w-full h-full object-contain rounded-full"
             onError={() => setImgError(true)}
           />
         ) : (
           <div className="w-full h-full bg-[#06B6D4] flex items-center justify-center text-white font-black text-3xl md:text-5xl rounded-full">
             AB
           </div>
         )}
      </div>

      <div className="flex items-center relative py-1 pl-2 md:pl-4 flex-1">
        {/* Text - Static - Increased Size */}
        <span className="font-special font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide text-[#003366] dark:text-white uppercase drop-shadow-sm w-full block leading-none">
          AKSHARA BHARATHAM SOCIETY
        </span>
      </div>
    </NavLink>
  );
};

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle scroll to hide top header
  useEffect(() => {
    const handleScroll = () => {
      // Hide top header when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-3xl transition-all duration-300 shadow-sm border-b border-slate-200/50 dark:border-slate-800">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        
        {/* TOP ROW: Logo, Title and Actions (Full Width) */}
        {/* Collapses when scrolled */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-60 opacity-100'}`}>
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
             <Logo />
             
             {/* Desktop Join Us Button - Moved to Top Row Right */}
             <div className="hidden md:block pl-8 shrink-0 relative z-[60]">
               <NavLink to="/donate">
                  <Button size="lg" className="shadow-[#06B6D4]/20 bg-[#06B6D4] hover:bg-[#0891b2] text-white font-bold tracking-wide whitespace-nowrap px-6 py-2 text-lg h-12 rounded-xl">
                    Join Us
                  </Button>
               </NavLink>
             </div>
          </div>
        </div>

        {/* BOTTOM ROW: Navigation (Left) + Mobile Actions (Right) */}
        <div className="flex items-center justify-between py-1 md:py-2">
            
            {/* Mobile Menu Toggle (Left on Mobile) */}
            <div className="md:hidden">
               <button onClick={() => setActiveDropdown(activeDropdown ? null : 'mobile')} className="p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                 {activeDropdown ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>

            {/* Desktop/Tablet Navigation (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group shrink-0">
                <div className="flex items-center">
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `px-3 lg:px-5 py-2 rounded-full flex items-center gap-1.5 text-sm lg:text-base font-bold transition-all whitespace-nowrap ${
                        isActive && !activeDropdown
                          ? 'bg-[#06B6D4]/10 text-[#06B6D4]' 
                          : 'text-slate-700 dark:text-slate-300 hover:text-[#06B6D4] dark:hover:text-[#06B6D4] hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 opacity-60 group-hover:rotate-180`} 
                      />
                    )}
                  </NavLink>
                </div>

                {item.children && (
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden p-2">
                      {item.children.map((child, index) => (
                        <NavLink 
                          key={`${child.path}-${index}`}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-xl text-sm transition-all font-bold ${
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
                )}
              </div>
            ))}
            </nav>

            {/* Right Actions: Theme Toggle & Mobile Join Us Button */}
            <div className="flex items-center gap-3 lg:gap-4 ml-auto md:ml-0">
                <button 
                  onClick={toggleTheme}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-100/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                {/* Mobile Join Us Button (Hidden on Desktop) */}
                <div className="md:hidden">
                  <NavLink to="/donate">
                    <Button size="sm" className="shadow-[#06B6D4]/20 bg-[#06B6D4] hover:bg-[#0891b2] text-white font-bold tracking-wide whitespace-nowrap px-4">
                      Join Us
                    </Button>
                  </NavLink>
                </div>
            </div>
        </div>

        {/* Mobile Dropdown Menu Logic */}
        {activeDropdown === 'mobile' && (
           <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 shadow-2xl p-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto z-40 animate-in slide-in-from-top-2 duration-200">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center">
                    <NavLink 
                      to={item.path}
                      onClick={() => !item.children && setActiveDropdown(null)}
                      className="block py-3 px-4 text-lg font-bold text-slate-800 dark:text-white"
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <button onClick={(e) => { e.preventDefault(); handleDropdownToggle(item.label, e); }} className="p-3">
                         <ChevronDown size={20} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && activeDropdown === item.label && (
                    <div className="pl-6 bg-slate-50 dark:bg-slate-900 rounded-xl mb-2">
                      {item.children.map((child, idx) => (
                        <NavLink 
                          key={idx} 
                          to={child.path}
                          onClick={() => setActiveDropdown(null)}
                          className="block py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
           </div>
        )}
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                 <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain rounded-full" />
               </div>
               <span className="font-bold text-lg tracking-wide">AKSHARA BHARATHAM</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               {NGO_DETAILS.shortIntro}
             </p>
             <div className="flex gap-4">
               {/* Social Icons */}
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Twitter size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Facebook size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Instagram size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Linkedin size={16} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><NavLink to="/about" className="hover:text-[#06B6D4] transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-[#06B6D4] transition-colors">Our Programs</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-[#06B6D4] transition-colors">Impact Gallery</NavLink></li>
              <li><NavLink to="/volunteer" className="hover:text-[#06B6D4] transition-colors">Volunteer</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-[#06B6D4] transition-colors">Donate</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal & Policy</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><NavLink to="/privacy" className="hover:text-[#06B6D4] transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-[#06B6D4] transition-colors">Terms of Service</NavLink></li>
              <li><NavLink to="/cookie-policy" className="hover:text-[#06B6D4] transition-colors">Cookie Policy</NavLink></li>
              <li><NavLink to="/financial-reports" className="hover:text-[#06B6D4] transition-colors">Financial Reports</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
             <ul className="space-y-4 text-slate-400 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin className="shrink-0 text-[#06B6D4] mt-1" size={16} />
                 <span>{NGO_DETAILS.location}</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="shrink-0 text-[#06B6D4]" size={16} />
                 <span>{NGO_DETAILS.phone}</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="shrink-0 text-[#06B6D4]" size={16} />
                 <span className="break-all">{NGO_DETAILS.email}</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <p>© {new Date().getFullYear()} Akshara Bharatham Society. All rights reserved.</p>
           <p>Designed with <Heart size={12} className="inline text-red-500 mx-1" /> for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};