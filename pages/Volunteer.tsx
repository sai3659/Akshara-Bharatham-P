
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Section, Card, Button, Input, Select, DecorativeShapes, SideNavigation } from '../components/UI';
import { submitVolunteerApp } from '../services/api';
import { Users, BookOpen, Laptop, HandHeart, CheckCircle, Heart, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const VOLUNTEER_SECTIONS = [
  { id: 'volunteer-roles', label: 'Volunteer Roles' },
  { id: 'application', label: 'Apply Now' },
  { id: 'benefits', label: 'Why Volunteer?' },
];

const VOLUNTEER_ROLES = [
  { title: "Teaching Assistant", desc: "Help teachers with core subjects.", icon: BookOpen, commitment: "5-10 hrs/wk" },
  { title: "Tech Mentor", desc: "Teach digital literacy skills.", icon: Laptop, commitment: "Weekends" },
  { title: "Field Support", desc: "Help in logistics and distribution.", icon: Users, commitment: "Flexible" },
  { title: "Fundraiser", desc: "Help organize online campaigns.", icon: HandHeart, commitment: "Remote" }
];

const Volunteer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'Teaching Assistant', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitVolunteerApp(formData);
    setSubmitted(true);
  };

  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={VOLUNTEER_SECTIONS} />
      
      {/* 1. Header & Roles Section */}
      <Section id="volunteer-roles" className="bg-slate-50 dark:bg-dark pt-40 md:pt-52">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Users size={16} /> Join as a Volunteer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Be the Change You Wish To See</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Share your skills, time, and passion. Whether you are a student, professional, or retired expert, we have a role for you.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {VOLUNTEER_ROLES.map((role, i) => (
            <Card key={i} className="p-6 text-center hover:border-purple-400 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-cta-gradient text-white flex items-center justify-center mb-4">
                <role.icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{role.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{role.desc}</p>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">{role.commitment}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* 2. Application Form Section */}
      <Section id="application" className="bg-white dark:bg-[#0b1220] py-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
             <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white">Ready to get started?</h2>
             <p className="text-slate-600 dark:text-slate-400">
               Fill out the application form to the right. Our coordinator will review your profile and reach out within 48 hours to schedule a brief orientation call.
             </p>
             <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
               <h4 className="font-bold text-slate-900 dark:text-white mb-2">Requirements</h4>
               <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                 <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-green-500"/> Minimum age of 18 years</li>
                 <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-green-500"/> Commitment of at least 3 months</li>
                 <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-green-500"/> Passion for rural development</li>
               </ul>
             </div>
          </div>
          
          <div className="flex-1 w-full">
            <Card className="p-8 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-6">Volunteer Application</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" required />
                    <Input placeholder="Phone Number" required />
                  </div>
                  <Input placeholder="Email Address" type="email" required />
                  <Select label="Preferred Role" options={VOLUNTEER_ROLES.map(r => ({ value: r.title, label: r.title }))} />
                  <div className="flex flex-col gap-1.5 w-full">
                     <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Why do you want to join?</label>
                     <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#9C4DFF] focus:border-transparent outline-none h-24 placeholder:text-slate-400" placeholder="Tell us briefly about yourself..."></textarea>
                  </div>
                  <Button className="w-full shadow-lg">Submit Application</Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"><CheckCircle size={40} /></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Application Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8">Thank you for stepping up. We have sent a confirmation email with the next steps.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another</Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* 3. Benefits / Other Options Section */}
      <Section id="benefits" className="bg-slate-50 dark:bg-dark py-24">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-12">What you gain</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-6">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <Users size={32} />
                 </div>
                 <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Community</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400">Connect with like-minded changemakers and leaders.</p>
               </div>
               <div className="p-6">
                 <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <Heart size={32} />
                 </div>
                 <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Fulfillment</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400">Experience the joy of making a tangible difference in a child's life.</p>
               </div>
               <div className="p-6">
                 <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <BookOpen size={32} />
                 </div>
                 <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Certification</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400">Receive formal certificates and letters of recommendation.</p>
               </div>
            </div>
            
            <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
               <p className="text-slate-500 dark:text-slate-400 mb-6">Not able to volunteer time right now?</p>
               <div className="flex gap-4 justify-center">
                 <NavLink to="/donate">
                   <Button variant="outline">Become a Contributor</Button>
                 </NavLink>
                 <NavLink to="/partner">
                   <Button variant="outline">Partner with Us</Button>
                 </NavLink>
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Volunteer;
