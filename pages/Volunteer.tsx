
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Section, Card, Button, Input, Select, DecorativeShapes, SideNavigation } from '../components/UI';
import { submitVolunteerApp } from '../services/api';
import { Users, BookOpen, Laptop, HandHeart, CheckCircle, Heart, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const VOLUNTEER_SECTIONS = [
  { id: 'volunteer', label: 'Volunteer with Us' },
  { id: 'donate', label: 'Donate Now' },
  { id: 'contact', label: 'Partner with us' },
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
      
      {/* 1. Volunteer with Us Section */}
      <Section id="volunteer" className="bg-slate-50 dark:bg-dark pt-32 md:pt-40">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Users size={16} /> Section 1: Volunteer with Us
          </div>
          <h1 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Be the Change</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Share your skills, time, and passion. We have diverse roles ranging from teaching to technical support.
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

        <div className="max-w-2xl mx-auto mb-20">
          <Card className="p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Application Form</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" required />
                  <Input placeholder="Phone Number" required />
                </div>
                <Input placeholder="Email Address" type="email" required />
                <Select label="Preferred Role" options={VOLUNTEER_ROLES.map(r => ({ value: r.title, label: r.title }))} />
                <Button className="w-full">Apply Now</Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={32} /></div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h3>
                <p className="text-slate-500 dark:text-slate-400">Our coordinator will contact you soon.</p>
              </div>
            )}
          </Card>
        </div>
      </Section>

      {/* 2. Donate Now Section */}
      <Section id="donate" className="bg-white dark:bg-[#0b1220]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-wider">
              Section 2: Donate Now
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Fuel Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Every donation goes directly into infrastructure, scholarships, and resources for our students. Small contributions create big ripples.
            </p>
            <NavLink to="/donate">
              <Button size="lg" variant="secondary" className="bg-pink-500 hover:bg-pink-600 border-none group">
                Contribute Today <Heart className="ml-2 group-hover:scale-125 transition-transform" size={18} fill="currentColor" />
              </Button>
            </NavLink>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <Card className="p-6 text-center bg-pink-50/50 dark:bg-pink-900/10">
                <h4 className="text-3xl font-bold text-pink-600 mb-1">₹500</h4>
                <p className="text-xs text-slate-500">Buys a Stationery Kit</p>
             </Card>
             <Card className="p-6 text-center bg-purple-50/50 dark:bg-purple-900/10">
                <h4 className="text-3xl font-bold text-purple-600 mb-1">₹2500</h4>
                <p className="text-xs text-slate-500">Funds 1 Month Tutoring</p>
             </Card>
          </div>
        </div>
      </Section>

      {/* 3. Partner with us Section */}
      <Section id="contact" className="bg-slate-50 dark:bg-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4">
              Section 3: Partner with us
            </div>
            <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white">Start a Conversation</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4">Have specific questions? Reach out to our dedicated coordinators to discuss partnerships.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8">
              <Mail className="mx-auto mb-4 text-[#06B6D4]" size={32} />
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email</h4>
              <p className="text-sm text-slate-500 truncate">aksharabharatamsociety@gmail.com</p>
            </Card>
            <Card className="p-8">
              <MessageCircle className="mx-auto mb-4 text-[#06B6D4]" size={32} />
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Support Chat</h4>
              <p className="text-sm text-slate-500">Available Mon-Sat 9am-6pm</p>
            </Card>
            <div className="flex items-center justify-center p-8">
              <NavLink to="/contact">
                <Button variant="outline" size="lg" className="w-full">Full Contact Details</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Volunteer;
