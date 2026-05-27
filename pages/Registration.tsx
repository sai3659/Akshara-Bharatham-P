import React from 'react';
import { Section, Card, Button } from '../components/UI';
import { NavLink } from 'react-router-dom';
import { Edit3, BookOpen, BrainCircuit } from 'lucide-react';

const Registration = () => {
    return (
        <Section className="bg-slate-50 dark:bg-dark py-20 min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Registration</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">Register for our upcoming programs and exams.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Edit3 className="w-12 h-12 mx-auto text-[#06B6D4] mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">ABS Talent Test</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Register for the annual scholarship test.</p>
                    <NavLink to="/register/talent-test"><Button className="w-full">Register Now</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <BookOpen className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">NMMS Coaching</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Enroll for expert guidance for NMMS exam.</p>
                    <NavLink to="/register/nmms"><Button className="w-full">Register Now</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <BrainCircuit className="w-12 h-12 mx-auto text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Knowledge Quest</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Participate in our quiz competitions.</p>
                    <NavLink to="/register/knowledge-quest"><Button className="w-full">Register Now</Button></NavLink>
                </Card>
            </div>
        </Section>
    );
};

export default Registration;
