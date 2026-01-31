
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes, SideNavigation } from '../components/UI';
import { BadgeCheck, Users, Vote, Star, CheckCircle2 } from 'lucide-react';

const MEMBER_SECTIONS = [
  { id: 'why-join', label: 'Why Join?' },
  { id: 'tiers', label: 'Membership Tiers' },
  { id: 'register', label: 'Register' },
];

const Member: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={MEMBER_SECTIONS} />

      {/* Hero Section */}
      <Section id="why-join" className="pt-40 md:pt-52 bg-slate-50 dark:bg-dark">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-widest mb-6">
            <BadgeCheck size={16} /> As a Member
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
            Join the General Body
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Become a part of the decision-making core of Akshara Bharatham Society. Members play a crucial role in shaping policy, electing leadership, and sustaining the organization's vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
           <Card className="p-8 text-center border-t-4 border-indigo-500">
             <div className="w-14 h-14 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
               <Vote size={28} />
             </div>
             <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Voting Rights</h3>
             <p className="text-sm text-slate-500">Participate in annual general meetings and vote on key resolutions.</p>
           </Card>
           <Card className="p-8 text-center border-t-4 border-purple-500">
             <div className="w-14 h-14 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
               <Users size={28} />
             </div>
             <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Exclusive Network</h3>
             <p className="text-sm text-slate-500">Access to a network of educators, policy makers, and philanthropists.</p>
           </Card>
           <Card className="p-8 text-center border-t-4 border-cyan-500">
             <div className="w-14 h-14 mx-auto bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6">
               <Star size={28} />
             </div>
             <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Impact Reports</h3>
             <p className="text-sm text-slate-500">Receive detailed quarterly financial and impact reports before public release.</p>
           </Card>
        </div>
      </Section>

      {/* Membership Tiers */}
      <Section id="tiers" className="bg-white dark:bg-[#0b1220] py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">Choose Your Membership</h2>
          <p className="text-slate-600 dark:text-slate-400">Annual memberships help cover our administrative overheads, ensuring 100% of donations go to students.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Student Tier */}
          <Card className="p-8 flex flex-col hover:border-indigo-400 transition-all">
             <div className="mb-4">
               <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase">Student</span>
             </div>
             <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">₹500<span className="text-lg text-slate-500 font-normal">/year</span></h3>
             <p className="text-slate-500 text-sm mb-6">For school and college students who want to contribute.</p>
             <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Digital Membership Card</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Volunteer Priority</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Certificate of Association</li>
             </ul>
             <Button variant="outline" className="w-full">Apply as Student</Button>
          </Card>

          {/* Active Member Tier (Highlight) */}
          <Card className="p-8 flex flex-col border-2 border-indigo-500 relative transform md:-translate-y-4 shadow-2xl bg-indigo-50/50 dark:bg-indigo-900/10">
             <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
             <div className="mb-4">
               <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase">Active Member</span>
             </div>
             <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">₹2,000<span className="text-lg text-slate-500 font-normal">/year</span></h3>
             <p className="text-slate-500 text-sm mb-6">For professionals dedicated to the cause.</p>
             <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> <strong>Voting Rights</strong> in AGM</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Quarterly Strategy Calls</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Merchandise Kit</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Event VIP Access</li>
             </ul>
             <Button className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20">Become a Member</Button>
          </Card>

           {/* Patron Tier */}
           <Card className="p-8 flex flex-col hover:border-indigo-400 transition-all">
             <div className="mb-4">
               <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Patron</span>
             </div>
             <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">₹10,000<span className="text-lg text-slate-500 font-normal">/year</span></h3>
             <p className="text-slate-500 text-sm mb-6">For visionaries who want to shape the future.</p>
             <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> All Active Member Benefits</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Direct Access to Founders</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Name on Donor Wall</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> Dinner with Board</li>
             </ul>
             <Button variant="outline" className="w-full">Join as Patron</Button>
          </Card>
        </div>
      </Section>

      {/* Registration Form */}
      <Section id="register" className="bg-slate-50 dark:bg-dark py-24">
        <div className="max-w-xl mx-auto">
          <Card className="p-8 shadow-2xl border-t-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Membership Application</h3>
            <form className="space-y-5">
              <Input placeholder="Full Name" required />
              <Input placeholder="Email Address" type="email" required />
              <Input placeholder="Phone Number" required />
              <Input placeholder="Occupation / Organization" />
              <div className="flex flex-col gap-1.5 w-full">
                 <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Tier</label>
                 <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option value="student">Student - ₹500/yr</option>
                    <option value="active">Active Member - ₹2,000/yr</option>
                    <option value="patron">Patron - ₹10,000/yr</option>
                 </select>
              </div>
              <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Proceed to Payment</Button>
              <p className="text-xs text-center text-slate-400 mt-4">
                Membership fees are non-refundable and subject to board approval for voting rights.
              </p>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Member;
