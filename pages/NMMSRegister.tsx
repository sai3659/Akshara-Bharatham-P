
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { School, MapPin, Phone, Users, Clock, CheckCircle, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NMMSRegister: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 bg-slate-50 dark:bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-6">
              <School size={16} /> For Schools
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              NMMS Coaching Registration
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Register your school to arrange specialized NMMS coaching sessions for your students.
            </p>
          </div>

          {!submitted ? (
            <Card className="p-8 md:p-12 shadow-2xl border-t-4 border-blue-500">
              <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-5 duration-300">
                
                {/* 1. School Information */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <School size={20} className="text-blue-500" /> School Details
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    <Input label="Name of the School *" name="schoolName" placeholder="Official School Name" required />
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Full Address *</label>
                        <textarea 
                           className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 h-24 resize-none"
                           placeholder="Complete address including Mandal and District"
                           required
                        ></textarea>
                    </div>
                  </div>
                </div>

                {/* 2. Coordinator Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Phone size={20} className="text-blue-500" /> Coordinator Contacts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Teacher Name (Primary Contact) *" name="teacher1Name" placeholder="Full Name" required />
                    <Input label="Contact Number 1 *" name="teacher1Phone" placeholder="+91 00000 00000" type="tel" required />
                    <Input label="Teacher Name (Secondary Contact)" name="teacher2Name" placeholder="Full Name" />
                    <Input label="Contact Number 2" name="teacher2Phone" placeholder="+91 00000 00000" type="tel" />
                  </div>
                </div>

                {/* 3. Logistics */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Users size={20} className="text-blue-500" /> Coaching Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Number of students needing coaching *" name="studentCount" type="number" placeholder="e.g. 50" required />
                    <div className="grid grid-cols-2 gap-4">
                       <Input label="Preferred Date *" name="date" type="date" required />
                       <Input label="Preferred Time *" name="time" type="time" required />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg text-lg border-none">
                    Submit Request
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Our team will contact the provided numbers to confirm the schedule.
                  </p>
                </div>
              </form>
            </Card>
          ) : (
             <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-green-500/30 shadow-lg">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Request Submitted!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                  Thank you for registering your school for NMMS Coaching. Our coordinators will reach out shortly.
                </p>
                <div className="flex gap-4 justify-center">
                  <NavLink to="/">
                    <Button variant="outline">Back to Home</Button>
                  </NavLink>
                </div>
             </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default NMMSRegister;
