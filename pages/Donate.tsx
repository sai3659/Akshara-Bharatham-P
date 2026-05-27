
import React from 'react';
import { Section, Card, Button, DecorativeShapes, SideNavigation } from '../components/UI';
import { Gift, Truck, BookOpen, Laptop } from 'lucide-react';

const DONATE_SECTIONS = [
  { id: 'in-kind', label: 'Material Contribution' },
  { id: 'logistics', label: 'Logistics & Drop-off' },
];

const Donate: React.FC = () => {
  return (
    <>
      <DecorativeShapes />
      <SideNavigation items={DONATE_SECTIONS} />

      {/* Hero / In-Kind Donation Section */}
      <Section id="in-kind" className="bg-slate-50 dark:bg-dark pt-40 md:pt-52">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest mb-6">
              <Gift size={16} fill="currentColor" /> Resource Contributor
            </div>
            <h1 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">Contribute Educational Resources</h1>
            <p className="text-slate-600 dark:text-slate-400">Your material contributions directly benefit student learning and school infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
             <Card className="p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen size={32} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Books & Stationery</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Help us build libraries and provide study materials by donating:
                </p>
                <ul className="text-sm text-left text-slate-600 dark:text-slate-300 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4 w-full">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Storybooks & Literature</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Encyclopedias & Reference</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Notebooks & Pens/Pencils</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> School Bags in good condition</li>
                </ul>
             </Card>

             <Card className="p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Laptop size={32} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Tech & Infrastructure</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Bridge the digital divide by contributing functional equipment:
                </p>
                <ul className="text-sm text-left text-slate-600 dark:text-slate-300 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4 w-full">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"/> Working Laptops/Computers</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"/> Tablets for e-learning</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"/> Projectors or Screens</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"/> Sports Equipment</li>
                </ul>
             </Card>
          </div>
        </div>
      </Section>

      <Section id="logistics" className="bg-white dark:bg-[#0b1220] py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Truck size={40} />
            </div>
            <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-6">Logistics & Drop-off</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              You can ship materials directly to our head office in Rambilli, Andhra Pradesh. For bulk donations like computers or multiple boxes of books, we can arrange a pickup within the Visakhapatnam district.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-lg">Schedule a Drop-off</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Logistics Team</Button>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Donate;
