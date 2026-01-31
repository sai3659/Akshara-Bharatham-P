
import React from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { NGO_DETAILS } from '../constants';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <Section className="bg-slate-50 dark:bg-dark pt-36 md:pt-48 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
            <Mail size={16} /> Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about our programs or want to get involved? We'd love to hear from you and build a better future together.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column: Address and Office Hours */}
          <div className="space-y-8 h-full flex flex-col">
            {/* Address & Contact Info Card */}
            <Card className="p-8 border-l-4 border-[#06B6D4] bg-white dark:bg-dark-card flex-1">
               <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                 <MapPin className="text-[#06B6D4]" size={24} /> Contact Details
               </h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Location</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{NGO_DETAILS.location}</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{NGO_DETAILS.phone}</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Address</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm break-all">{NGO_DETAILS.email}</p>
                    </div>
                 </div>
               </div>
            </Card>

            {/* Office Hours Card */}
            <Card className="p-8 border-l-4 border-purple-500 bg-white dark:bg-dark-card">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl flex items-center gap-2">
                <Clock size={24} className="text-purple-500" /> Office Hours
              </h4>
              <div className="space-y-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="text-red-500 font-bold">Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Send Message Form */}
          <Card className="p-8 md:p-12 shadow-2xl h-full">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Send className="text-purple-500" size={24} /> Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" placeholder="John Doe" required />
                <Input label="Phone Number" placeholder="+91 00000 00000" />
              </div>
              <Input label="Email Address" placeholder="john@example.com" type="email" required />
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none h-40 placeholder:text-slate-400"
                ></textarea>
              </div>
              <Button size="lg" className="w-full text-lg shadow-purple-500/20 mt-2">Send Message</Button>
            </form>
          </Card>
        </div>

        {/* Bottom: Map Location */}
        <div className="max-w-7xl mx-auto">
           <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen 
                src={`https://www.google.com/maps?q=${NGO_DETAILS.coordinates.lat},${NGO_DETAILS.coordinates.lng}&hl=en;z=14&output=embed`}
                title="NGO Location"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                  <div className="bg-red-500 text-white p-3 rounded-full shadow-lg shadow-red-500/30">
                     <MapPin size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Locate Us</p>
                    <p className="font-bold text-slate-900 dark:text-white">Rambilli, Visakhapatnam</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
