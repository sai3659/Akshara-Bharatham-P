import React from 'react';
import { Section, Card, Button } from '../components/UI';
import { NavLink } from 'react-router-dom';
import { Trophy, Award, Laptop } from 'lucide-react';

const Results = () => {
    return (
        <Section className="bg-slate-50 dark:bg-dark py-20 min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Results & Practice</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">Check exam results or practice for upcoming tests.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Trophy className="w-12 h-12 mx-auto text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">ABS Talent Test</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">View results and merit list.</p>
                    <NavLink to="/results/talent-test"><Button className="w-full">View Results</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Award className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Knowledge Quest</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Check quiz scores and winners.</p>
                    <NavLink to="/results/knowledge-quest"><Button className="w-full">View Results</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Laptop className="w-12 h-12 mx-auto text-[#06B6D4] mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Practice</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Take mock tests and practice materials.</p>
                    <NavLink to="/practice"><Button className="w-full">Start Practice</Button></NavLink>
                </Card>
            </div>
        </Section>
    );
};

export default Results;
