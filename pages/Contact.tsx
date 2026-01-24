import React from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { NGO_DETAILS } from '../constants';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <Section className="bg-slate-50 dark:bg-dark pt-40 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
            <Mail size={16} /> Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about our programs or want to get involved? We'd love to hear from you and build a better future together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          {/* Form Side */}
          <Card className="p-8 md:p-12 shadow-2xl">
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
              <Button size="lg" className="w-full text-lg shadow-purple-500/20">Send Message</Button>
            </form>
          </Card>

          {/* Map Side - Decreased Size */}
          <div className="space-y-8">
            <div className="relative h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              {/* Embed Map Iframe */}
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
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                  <MapPin className="text-red-500" size={20} />
                </div>
              </div>
            </div>

            <Card className="p-8 border-l-4 border-[#06B6D4]">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl flex items-center gap-2">
                <Clock size={20} className="text-[#06B6D4]" /> Office Hours
              </h4>
              <div className="space-y-2 text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Explicit Contact Details Bar */}
      <div className="bg-slate-900 dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 dark:bg-slate-800/20 border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Visit Our Center</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{NGO_DETAILS.location}</p>
              </div>
           </div>
           
           <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 dark:bg-slate-800/20 border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Give us a Call</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{NGO_DETAILS.phone}</p>
                <p className="text-slate-500 text-xs mt-1">Direct support line</p>
              </div>
           </div>

           <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 dark:bg-slate-800/20 border border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Email Inquiries</h4>
                <p className="text-slate-400 text-sm leading-relaxed break-all">{NGO_DETAILS.email}</p>
                <p className="text-slate-500 text-xs mt-1">24/7 online support</p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Contact;