
import React from 'react';
import { Section, Card, Button, Input, DecorativeShapes, SideNavigation } from '../components/UI';
import { Handshake, Building2, School, Globe2, ArrowRight } from 'lucide-react';

const PARTNER_SECTIONS = [
  { id: 'collaborate', label: 'Collaborate' },
  { id: 'models', label: 'Partnership Models' },
  { id: 'inquiry', label: 'Partner Inquiry' },
];

const Partner: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={PARTNER_SECTIONS} />

      {/* Hero Section */}
      <Section id="collaborate" className="pt-40 md:pt-52 bg-slate-50 dark:bg-dark">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Handshake size={16} /> As a Partner
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
            Collaborate for Impact
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We believe in the power of collective action. Whether you are a corporation, a school, or another NGO, we can achieve more together than we can alone.
          </p>
        </div>
      </Section>

      {/* Partnership Models */}
      <Section id="models" className="bg-white dark:bg-[#0b1220] py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
           {/* Corporate */}
           <Card className="p-8 group hover:border-teal-500 transition-all">
             <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
               <Building2 size={32} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Corporate CSR</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
               Fulfil your Corporate Social Responsibility goals by adopting a village school or sponsoring a computer lab. We provide detailed impact reports and branding opportunities.
             </p>
             <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">✓ Employee Engagement Drives</li>
                <li className="flex items-center gap-2">✓ Tax Benefits (80G)</li>
                <li className="flex items-center gap-2">✓ Brand Visibility</li>
             </ul>
             <Button variant="outline" className="w-full">CSR Inquiry</Button>
           </Card>

           {/* Schools */}
           <Card className="p-8 group hover:border-purple-500 transition-all">
             <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
               <School size={32} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Schools & Institutes</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
               Partner with us to host the 'ABS Talent Test' or 'Knowledge Quest' in your institution. Let your students compete with the best minds across the state.
             </p>
             <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">✓ Host Talent Tests</li>
                <li className="flex items-center gap-2">✓ Teacher Training Workshops</li>
                <li className="flex items-center gap-2">✓ Student Exchange Programs</li>
             </ul>
             <Button variant="outline" className="w-full">Register School</Button>
           </Card>

           {/* NGOs */}
           <Card className="p-8 group hover:border-blue-500 transition-all">
             <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Globe2 size={32} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">NGOs & Foundations</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
               Let's share resources and expertise. We collaborate with other foundations for large-scale book distribution drives and educational awareness campaigns.
             </p>
             <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">✓ Joint Fundraising</li>
                <li className="flex items-center gap-2">✓ Knowledge Sharing</li>
                <li className="flex items-center gap-2">✓ Resource Pooling</li>
             </ul>
             <Button variant="outline" className="w-full">Collaborate</Button>
           </Card>
        </div>
      </Section>

      {/* Partner Inquiry Form */}
      <Section id="inquiry" className="bg-slate-50 dark:bg-dark py-24">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
               <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-6">Start a Partnership</h2>
               <p className="text-slate-600 dark:text-slate-400 mb-6">
                 Interested in working with us? Fill out the form and our partnerships lead will get back to you with a proposal tailored to your organization's goals.
               </p>
               <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/30">
                 <h4 className="font-bold text-teal-800 dark:text-teal-400 mb-2">Direct Contact</h4>
                 <p className="text-sm text-teal-700 dark:text-teal-300">partnerships@aksharabharatam.org</p>
                 <p className="text-sm text-teal-700 dark:text-teal-300">+91 072594 90606 (Ext. 4)</p>
               </div>
            </div>
            <div className="flex-1 w-full">
               <Card className="p-8 shadow-xl">
                 <form className="space-y-4">
                    <Input placeholder="Organization Name" required />
                    <Input placeholder="Contact Person Name" required />
                    <Input placeholder="Email Address" type="email" required />
                    <div className="flex flex-col gap-1.5 w-full">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Partnership Interest</label>
                       <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none">
                          <option>Corporate CSR</option>
                          <option>School Event Hosting</option>
                          <option>NGO Collaboration</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none h-24 placeholder:text-slate-400" placeholder="Briefly describe how you'd like to partner..."></textarea>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-teal-500/20">Submit Inquiry</Button>
                 </form>
               </Card>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Partner;
