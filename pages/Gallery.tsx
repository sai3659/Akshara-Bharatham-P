import React from 'react';
import { NavLink } from 'react-router-dom';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { GALLERY_IMAGES, TESTIMONIALS, EVENTS, BLOG_POSTS, STUDENT_ACHIEVEMENTS } from '../constants';
// Added MapPin to the list of icons imported from lucide-react
import { Calendar, Heart, Newspaper, Trophy, ArrowRight, Image as ImageIcon, Quote, MapPin } from 'lucide-react';

const MEDIA_SECTIONS = [
  { id: 'photo-gallery', label: 'Photo Gallery' },
  { id: 'impact-stories', label: 'Impact Stories' },
  { id: 'events', label: 'Upcoming Events' },
  { id: 'blog', label: 'Blog & News' },
  { id: 'achievements', label: 'Hall of Fame' },
];

const Gallery: React.FC = () => {
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
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Community Engagement</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Impact Stories Section */}
      <Section id="impact-stories" className="bg-white dark:bg-[#0b1220] py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
              Impact Stories
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Success Testimonials</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Hear directly from the students and volunteers whose lives have been transformed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <Card key={i} className="p-8 relative">
                <Quote className="text-pink-100 dark:text-pink-900/30 absolute top-6 right-6" size={48} />
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center text-white font-bold">{t.author.charAt(0)}</div>
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                     <p className="text-xs text-pink-500 font-bold uppercase">{t.role}</p>
                   </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <NavLink to="/impact">
              <Button variant="outline">Explore All Stories</Button>
            </NavLink>
          </div>
        </div>
      </Section>

      {/* 3. Upcoming Events Section */}
      <Section id="events" className="bg-slate-50 dark:bg-dark py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
              Upcoming Events
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Community Calendar</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Join our workshops, fairs, and charity events scheduled for the coming months.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EVENTS.map((e) => (
              <Card key={e.id} className="overflow-hidden flex flex-col sm:flex-row h-full group">
                <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                  <img src={e.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={e.title} />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{e.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar size={14} className="text-purple-500" /> {e.date} | <MapPin size={14} className="text-cyan-500" /> {e.location}
                  </div>
                  <NavLink to="/events" className="text-sm font-bold text-purple-600 hover:text-purple-500 flex items-center gap-1">
                    Read Details <ArrowRight size={14} />
                  </NavLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Blog & News Section */}
      <Section id="blog" className="bg-white dark:bg-[#0b1220] py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Blog & News
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">NGO Updates</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Latest news, program launches, and insights from our team.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <Card key={post.id} className="group overflow-hidden flex flex-col">
                <img src={post.image} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" alt={post.title} />
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{post.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4">{post.excerpt}</p>
                  <NavLink to="/blog" className="mt-auto text-xs font-black uppercase text-blue-500 hover:text-blue-600 flex items-center gap-1">
                    Read Article <ArrowRight size={12} />
                  </NavLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Hall of Fame Section */}
      <Section id="achievements" className="bg-slate-50 dark:bg-dark py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            Hall of Fame
          </div>
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Celebrating Excellence</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">Honoring our students who have achieved extraordinary success against all odds.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {STUDENT_ACHIEVEMENTS.map(s => (
              <div key={s.id} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400 p-1 overflow-hidden mb-3 shadow-lg transform hover:scale-110 transition-transform">
                  <img src={s.image} className="w-full h-full object-cover rounded-full" alt={s.name} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{s.name}</h4>
                <p className="text-[10px] text-yellow-600 font-bold uppercase">{s.achievement.split(' ')[0]}</p>
              </div>
            ))}
          </div>
          
          <NavLink to="/achievements">
            <Button size="lg" className="shadow-yellow-500/20 bg-yellow-500 hover:bg-yellow-600 border-none">
              Visit Full Hall of Fame <Trophy size={18} className="ml-2" />
            </Button>
          </NavLink>
        </div>
      </Section>
    </>
  );
};

export default Gallery;