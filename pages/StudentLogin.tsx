
import React from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { LogIn, User, Lock, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const StudentLogin: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-widest mb-6">
              <User size={16} /> Student Portal
            </div>
            <h1 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">Welcome Back</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Login to access your dashboard, view test results, and download study materials.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-t-4 border-indigo-600">
            <form className="space-y-6">
              <div className="space-y-4">
                <Input 
                  label="Student ID or Email" 
                  placeholder="e.g. ABS-2024-XXXX" 
                  className="pl-10" // Assuming we might want to add icons inside input later, or just standard styling
                />
                <div className="relative">
                   <Input 
                    label="Password" 
                    type="password" 
                    placeholder="Enter your password" 
                   />
                   <button type="button" className="absolute right-0 top-8 text-xs font-bold text-indigo-500 hover:text-indigo-600 p-2">
                     Forgot?
                   </button>
                </div>
              </div>

              <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 text-white">
                <LogIn size={20} className="mr-2" /> Secure Login
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-slate-500 text-sm mb-4">Don't have an account yet?</p>
              <NavLink to="/student-register">
                <Button variant="outline" className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-900/30">
                  Register New Student <ArrowRight size={16} className="ml-2" />
                </Button>
              </NavLink>
            </div>
          </Card>
          
          <div className="mt-8 text-center text-xs text-slate-400">
            <p>Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default StudentLogin;
