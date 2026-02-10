
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes } from '../components/UI';
import { User, Calendar, MapPin, Phone, Mail, GraduationCap, Briefcase, IndianRupee, Award, CheckCircle, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TalentTestRegister: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [otherOccupation, setOtherOccupation] = useState('');
  
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Award size={16} /> Student Registration
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
              ABS Talent Test Registration
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Register now to participate in our flagship talent search exam. Please fill all the details carefully as they will be used for certification.
            </p>
          </div>

          {!submitted ? (
            <Card className="p-8 md:p-12 shadow-2xl border-t-4 border-amber-500">
              <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-5 duration-300">
                
                {/* 1. Student Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <User size={20} className="text-amber-500" /> Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Student Full Name *" name="fullName" placeholder="As per school records" required />
                    <Input label="Date of Birth *" name="dob" type="date" required />
                    <Input label="Aadhar Number" name="aadhar" placeholder="12-digit UID" />
                    <Input label="School Name *" name="schoolName" placeholder="Current School Name" required />
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Residential Address *</label>
                        <textarea 
                           className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 h-24 resize-none"
                           placeholder="House No, Street, Village/City, Pincode"
                           required
                        ></textarea>
                    </div>
                  </div>
                </div>

                {/* 2. Contact Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Phone size={20} className="text-amber-500" /> Contact Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Phone Number *" name="phone" placeholder="+91 00000 00000" type="tel" required />
                    <Input label="Email ID" name="email" placeholder="student@example.com" type="email" />
                    <Input label="Contact Number (Teacher 1)" name="teacher1" placeholder="Teacher's Phone" />
                    <Input label="Contact Number (Teacher 2)" name="teacher2" placeholder="Alt Teacher's Phone" />
                  </div>
                </div>

                {/* 3. Family Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Users size={20} className="text-amber-500" /> Family Background
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Input label="Father Name *" name="fatherName" placeholder="Father's Full Name" required />
                    <Input label="Mother Name *" name="motherName" placeholder="Mother's Full Name" required />
                    <Input label="Guardian Name" name="guardianName" placeholder="If applicable" />
                    <Input label="Annual Income *" name="income" placeholder="In INR" type="number" required />
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 block flex items-center gap-2">
                       <Briefcase size={16} /> Father/Mother/Guardian Occupation *
                    </label>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {['Private Job', 'Government Job', 'Farmer', 'Daily wage worker', 'Other'].map((role) => (
                            <label key={role} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${occupation === role ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                <input 
                                    type="radio" 
                                    name="occupation" 
                                    value={role} 
                                    checked={occupation === role}
                                    onChange={(e) => setOccupation(e.target.value)}
                                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                                    required
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{role}</span>
                            </label>
                        ))}
                    </div>
                    {occupation === 'Other' && (
                        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                            <Input 
                                label="Please specify occupation *" 
                                name="otherOccupation" 
                                placeholder="Enter occupation" 
                                value={otherOccupation}
                                onChange={(e) => setOtherOccupation(e.target.value)}
                                required 
                            />
                        </div>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg text-lg border-none">
                    Submit Registration
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    By submitting, you confirm that all details provided are accurate.
                  </p>
                </div>
              </form>
            </Card>
          ) : (
             <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-green-500/30 shadow-lg">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Registration Successful!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                  Your application for the ABS Talent Test has been received. Your Hall Ticket will be generated shortly.
                </p>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl max-w-md mx-auto mb-8 border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-2">Application ID</p>
                  <p className="text-3xl font-black text-amber-600 tracking-widest">
                    ABS-TT-2024-8932
                  </p>
                </div>
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

export default TalentTestRegister;
