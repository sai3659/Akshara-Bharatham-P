
import React, { useState } from 'react';
import { Section, Card, Button, Input, DecorativeShapes, SideNavigation } from '../components/UI';
import { Heart, CreditCard, ShieldCheck, Gift, Truck } from 'lucide-react';

const AMOUNTS = [500, 1000, 2500, 5000];

const DONATE_SECTIONS = [
  { id: 'monetary', label: 'Financial Contribution' },
  { id: 'in-kind', label: 'In-Kind Donation' },
];

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value));
  };

  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={DONATE_SECTIONS} />

      {/* Hero / Monetary Section */}
      <Section id="monetary" className="bg-slate-50 dark:bg-dark pt-40 md:pt-52">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Heart size={16} fill="currentColor" /> As a Contributor
            </div>
            <h1 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">Support Our Cause</h1>
            <p className="text-slate-600 dark:text-slate-400">Your contribution directly funds student scholarships and school infrastructure. Every bit counts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {/* Donation Form */}
             <Card className="md:col-span-2 p-8 shadow-2xl">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-8">
                   <button 
                    onClick={() => setFrequency('once')}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${frequency === 'once' ? 'bg-white dark:bg-dark-card shadow-sm text-purple-600' : 'text-slate-500'}`}
                   >One-time</button>
                   <button 
                     onClick={() => setFrequency('monthly')}
                     className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${frequency === 'monthly' ? 'bg-white dark:bg-dark-card shadow-sm text-purple-600' : 'text-slate-500'}`}
                   >Monthly</button>
                </div>

                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Select Amount (INR)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {AMOUNTS.map(amt => (
                    <button
                      key={amt}
                      onClick={() => { setAmount(amt); setCustomAmount(''); }}
                      className={`py-3 rounded-xl border-2 font-bold transition-all ${amount === amt ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                
                <Input 
                  placeholder="Enter custom amount" 
                  value={customAmount} 
                  onChange={handleCustomChange} 
                  className="mb-8"
                  type="number"
                />

                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Personal Details</h4>
                <div className="space-y-4 mb-8">
                  <Input placeholder="Full name as per Aadhar *" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="PAN Number *" required />
                    <Input placeholder="Aadhar Number *" required />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                     <textarea 
                       placeholder="Address *" 
                       className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#9C4DFF] focus:border-transparent outline-none transition-all placeholder:text-slate-400 h-24 resize-none"
                       required
                     ></textarea>
                  </div>
                  <Input placeholder="Email Address" type="email" required />
                </div>

                <Button className="w-full text-lg py-4 shadow-purple-500/20">
                  Donate ₹{amount} {frequency === 'monthly' && '/ month'}
                </Button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
                  <ShieldCheck size={14} />
                  <span>Secure payment via Razorpay / Stripe</span>
                </div>
             </Card>

             {/* Impact Preview */}
             <div className="space-y-6">
               <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-none shadow-lg">
                 <h4 className="font-bold text-lg mb-2">Your Impact</h4>
                 <p className="text-cyan-100 text-sm mb-6">With ₹{amount}, you contribute towards:</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-2 text-sm font-medium">
                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                     10,000 for 1 student
                   </li>
                   <li className="flex items-center gap-2 text-sm font-medium">
                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                     NMMS 1 month
                   </li>
                 </ul>
               </Card>
               
               <Card className="p-6">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tax Benefits</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                   Donations to Akshara Bharata Society are exempt from tax under section 80G of the Income Tax Act.
                 </p>
                 <Button variant="outline" size="sm" className="w-full">Download 80G Certificate</Button>
               </Card>
             </div>
          </div>
        </div>
      </Section>

      {/* In-Kind Donation Section */}
      <Section id="in-kind" className="bg-white dark:bg-[#0b1220] py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">In-Kind Donations</h2>
            <p className="text-slate-600 dark:text-slate-400">We also accept material contributions that can be directly used in schools. Please ensure items are in good working condition.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
             <Card className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Gift size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">What we accept</h4>
                  <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                    <li>Books (Storybooks, Encyclopedia)</li>
                    <li>Laptops / Tablets (Functional)</li>
                    <li>School Bags & Stationary</li>
                    <li>Sports Equipment</li>
                  </ul>
                </div>
             </Card>
             <Card className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">How to send</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">You can ship materials directly to our head office in Rambilli.</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">For large quantities (e.g., 20+ computers), we can arrange a pickup within Visakhapatnam district.</p>
                </div>
             </Card>
          </div>

          <div className="text-center">
             <Button variant="outline">Schedule a Material Drop-off</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Donate;
