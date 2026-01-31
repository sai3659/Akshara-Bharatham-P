
import React from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { School, Lock, ShieldCheck, ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SchoolLogin: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-widest mb-6">
              <School size={16} /> Institute Portal
            </div>
            <h1 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">School Administration</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Manage student registrations, bulk uploads, and view school-level performance reports.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-t-4 border-amber-500">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl mb-6 flex items-start gap-3">
               <ShieldCheck size={20} className="text-amber-600 shrink-0 mt-0.5" />
               <p className="text-xs text-amber-800 dark:text-amber-400 font-medium leading-relaxed">
                 Access is restricted to authorized school coordinators and principals only. Please use your official UDISE code.
               </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <Input 
                  label="School UDISE Code / ID" 
                  placeholder="Enter School ID" 
                />
                <Input 
                  label="Administrator Password" 
                  type="password" 
                  placeholder="Enter password" 
                />
              </div>

              <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 shadow-amber-500/20 text-white">
                <Lock size={18} className="mr-2" /> Access Dashboard
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center space-y-3">
              <a href="#" className="block text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-amber-600 transition-colors">
                Forgot Institutional Password?
              </a>
              <NavLink to="/contact" className="inline-flex items-center text-sm font-bold text-[#06B6D4] hover:underline">
                Request New School Registration <ExternalLink size={12} className="ml-1" />
              </NavLink>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default SchoolLogin;
