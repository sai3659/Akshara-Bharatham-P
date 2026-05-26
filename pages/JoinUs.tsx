import React from 'react';
import { NavLink } from 'react-router-dom';
import { Section, Card, Button, DecorativeShapes } from '../components/UI';
import { Users, BadgeCheck, Handshake, Mail, ArrowRight } from 'lucide-react';

const JoinUs: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      
      {/* Hero Section */}
      <Section className="pt-40 md:pt-52 bg-slate-50 dark:bg-dark">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800/30">
            Join the Movement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 dark:text-white mb-6">
            Become a Part of Our Journey
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Akshara Bharatam Society relies on passionate individuals to drive our mission forward. There are multiple ways to get involved and make a lasting impact on rural education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Volunteer Option */}
          <Card className="p-8 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Volunteer</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
              Give your time and skills. Help us organize events, mentor students, or assist with educational programs on the ground.
            </p>
            <NavLink to="/volunteer" className="w-full">
              <Button variant="outline" className="w-full group">
                Discover More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </Card>

          {/* Member Option */}
          <Card className="p-8 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 border-2 border-indigo-100 dark:border-indigo-800/30">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
              <BadgeCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Become a Member</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
              Join our general body. Share your voice, vote on important matters, and become a part of our organizational core.
            </p>
            <NavLink to="/member" className="w-full">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 group">
                Join General Body
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </Card>

          {/* Partner Option */}
          <Card className="p-8 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <Handshake size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Corporate Partner</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
              Align your company's CSR goals with our mission. Partner with us for infrastructure, tech, and scholarship initiatives.
            </p>
            <NavLink to="/partner" className="w-full">
              <Button variant="outline" className="w-full group">
                Partner With Us
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </Card>
        </div>

        {/* Subscribe/Contact Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <Mail size={48} className="text-blue-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-slate-300 max-w-lg mb-8">
              Not ready to commit yet? Join our mailing list to receive monthly updates about our impact, events, and future opportunities to help.
            </p>
            <div className="flex w-full max-w-sm gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 flex-shrink-0 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default JoinUs;
