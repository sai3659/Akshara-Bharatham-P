
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
      { label: 'ABS Talent Test', path: '/programs#talent-test' },
      { label: 'Knowledge Quest', path: '/programs#knowledge-quest' },
      { label: 'NMMS Coaching', path: '/programs#nmms-coaching' },
      { label: 'Mentorship', path: '/programs#mentorship' },
      { label: 'Awareness About Education', path: '/programs#awareness' },
    ]
  },
  { 
    label: 'Media', 
    path: '/gallery',
    children: [
      { label: 'Photo Gallery', path: '/gallery#photo-gallery' },
      { label: 'Impact Stories', path: '/gallery#impact-stories' },
      { label: 'Upcoming Events', path: '/gallery#events' },
      { label: 'Blog & News', path: '/gallery#blog' },
      { label: 'Hall of Fame', path: '/gallery#achievements' },
    ]
  },
  { 
    label: 'Get Involved', 
    path: '/volunteer', // Default path, but children are specific
    children: [
      { label: 'As a Volunteer', path: '/volunteer' },
      { label: 'As a Member', path: '/member' },
      { label: 'As a Partner', path: '/partner' },
      { label: 'As a Contributor', path: '/donate' },
    ]
  },
  {
    label: 'Registration',
    path: '/student-register',
    children: [
      { label: 'Register New Account', path: '/student-register' },
      { label: 'Student Login', path: '/student-login' },
      { label: 'School Login', path: '/school-login' },
    ]
  },
  { label: 'Contact Us', path: '/contact' },
];

// --- Static Logo ---
const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <NavLink 
      to="/" 
      className="flex items-center gap-3 sm:gap-4 md:gap-6 relative z-50 py-2 flex-1"
    >
      {/* Logo Container - Static Round Shape - Responsive Size */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl overflow-hidden border-2 md:border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center relative shrink-0 z-10 p-0.5 md:p-1">
         {!imgError ? (
           <img 
             src={LOGO_URL} 
             alt="Akshara Bharatham Logo" 
             className="w-full h-full object-contain rounded-full"
             onError={() => setImgError(true)}
           />
         ) : (
           <div className="w-full h-full bg-[#9C4DFF] flex items-center justify-center text-white font-black text-2xl md:text-5xl rounded-full">
             AB
           </div>
         )}
      </div>

      <div className="flex flex-col justify-center relative py-1 pl-1 md:pl-4 w-fit max-w-full">
        {/* Text - Static - Responsive Size */}
        <span className="font-special font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide text-[#003366] dark:text-white uppercase drop-shadow-sm block leading-none mb-1 md:mb-2">
          AKSHARA BHARATHAM SOCIETY
        </span>
        {/* Caption - Updated Quote, Increased Size, Full Justified */}
        <span className="font-medium text-[10px] sm:text-xs md:text-sm lg:text-lg tracking-wide italic leading-tight block w-full text-justify [text-align-last:justify] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
          "While Democracy is a Soul of a Good Society, Education is the Oxygen of it's Life"
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
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-8">
        
        {/* TOP ROW: Logo, Title and Actions (Full Width) */}
        {/* Collapses when scrolled */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-60 opacity-100'}`}>
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
             <Logo />
             
             {/* Desktop Join Us Button - Moved to Top Row Right */}
             <div className="hidden md:block pl-8 shrink-0 relative z-[60]">
               <NavLink to="/donate">
                  <Button size="lg" className="shadow-[#9C4DFF]/20 bg-[#9C4DFF] hover:bg-[#7c3aed] text-white font-bold tracking-wide whitespace-nowrap px-6 py-2 text-lg h-12 rounded-xl">
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
               <button onClick={() => setActiveDropdown(activeDropdown ? null : 'mobile')} className="p-2 -ml-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                 {activeDropdown ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>

            {/* Desktop/Tablet Navigation (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-6 md:ml-[8.75rem] lg:ml-[9.25rem]">
            {NAV_ITEMS.map((item) => {
              // Highlight parent if any child is active OR if we are exactly on the parent path
              const isParentPath = item.path === location.pathname;
              const isChildActive = item.children 
                ? item.children.some(child => child.path.split('#')[0] === location.pathname) 
                : false;
              
              const isParentActive = isParentPath || isChildActive;

              return (
              <div key={item.label} className="relative group shrink-0">
                <div className="flex items-center">
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `px-3 lg:px-5 py-2 rounded-full flex items-center gap-1.5 text-sm lg:text-base font-bold transition-all whitespace-nowrap ${
                        (isActive || isParentActive) && !activeDropdown
                          ? 'bg-[#9C4DFF]/10 text-[#9C4DFF]' 
                          : 'text-slate-700 dark:text-slate-300 hover:text-[#9C4DFF] dark:hover:text-[#9C4DFF] hover:bg-slate-50 dark:hover:bg-slate-800/50'
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
                               // Highlight if active OR if parent is active (to show all options of active section)
                               (isActive || (isParentPath && child.path !== '#'))
                                ? 'bg-[#9C4DFF]/10 text-[#9C4DFF]'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#9C4DFF]'
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
            )})}
            </nav>

            {/* Right Actions: Theme Toggle & Mobile Join Us Button */}
            <div className="flex items-center gap-2 lg:gap-4 ml-auto md:ml-0">
                <button 
                  onClick={toggleTheme}
                  className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-slate-100/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9C4DFF]"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                
                {/* Mobile Join Us Button (Hidden on Desktop) */}
                <div className="md:hidden">
                  <NavLink to="/donate">
                    <Button size="sm" className="shadow-[#9C4DFF]/20 bg-[#9C4DFF] hover:bg-[#7c3aed] text-white font-bold tracking-wide whitespace-nowrap px-3 py-1.5 text-xs">
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
                      className={({ isActive }) => 
                        `block py-3 px-4 text-lg font-bold ${
                          isActive ? 'text-[#9C4DFF]' : 'text-slate-800 dark:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <button onClick={(e) => { e.preventDefault(); handleDropdownToggle(item.label, e); }} className="p-3 text-slate-500">
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
                          className={({ isActive }) => 
                            `block py-3 px-4 text-sm font-medium ${
                               isActive ? 'text-[#9C4DFF]' : 'text-slate-600 dark:text-slate-400'
                            }`
                          }
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
    <footer className="bg-slate-900 text-white pt-12 md:pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                 <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain rounded-full" />
               </div>
               <span className="font-bold text-base md:text-lg tracking-wide">AKSHARA BHARATHAM</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               {NGO_DETAILS.shortIntro}
             </p>
             <div className="flex gap-4">
               {/* Social Icons */}
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#9C4DFF] transition-colors"><Twitter size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#9C4DFF] transition-colors"><Facebook size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#9C4DFF] transition-colors"><Instagram size={16} /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#9C4DFF] transition-colors"><Linkedin size={16} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><NavLink to="/about" className="hover:text-[#9C4DFF] transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-[#9C4DFF] transition-colors">Our Programs</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-[#9C4DFF] transition-colors">Impact Gallery</NavLink></li>
              <li><NavLink to="/volunteer" className="hover:text-[#9C4DFF] transition-colors">Volunteer</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-[#9C4DFF] transition-colors">Donate</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Legal & Policy</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><NavLink to="/privacy" className="hover:text-[#9C4DFF] transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-[#9C4DFF] transition-colors">Terms of Service</NavLink></li>
              <li><NavLink to="/cookie-policy" className="hover:text-[#9C4DFF] transition-colors">Cookie Policy</NavLink></li>
              <li><NavLink to="/financial-reports" className="hover:text-[#9C4DFF] transition-colors">Financial Reports</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-bold mb-4 md:mb-6 text-lg">Contact Us</h4>
             <ul className="space-y-4 text-slate-400 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin className="shrink-0 text-[#9C4DFF] mt-1" size={16} />
                 <span>{NGO_DETAILS.location}</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="shrink-0 text-[#9C4DFF]" size={16} />
                 <span>{NGO_DETAILS.phone}</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="shrink-0 text-[#9C4DFF]" size={16} />
                 <span className="break-all">{NGO_DETAILS.email}</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
           <p>© {new Date().getFullYear()} Akshara Bharatham Society. All rights reserved.</p>
           <p>Designed with <Heart size={12} className="inline text-red-500 mx-1" /> for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};
