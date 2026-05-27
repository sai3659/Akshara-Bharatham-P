import React from 'react';
import { Section, Card, Button } from '../components/UI';
import { NavLink } from 'react-router-dom';
import { Users, UserPlus, Handshake, Heart } from 'lucide-react';

const GetInvolved = () => {
    return (
        <Section className="bg-slate-50 dark:bg-dark py-20 min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">Get Involved</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">Join our mission and make a lasting impact in rural education.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Users className="w-12 h-12 mx-auto text-[#06B6D4] mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">As a Volunteer</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Contribute your time and skills to teach and mentor students.</p>
                    <NavLink to="/volunteer"><Button className="w-full">Learn More</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <UserPlus className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">As a Member</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Become an official member of Akshara Bharatam.</p>
                    <NavLink to="/member"><Button className="w-full">Learn More</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Handshake className="w-12 h-12 mx-auto text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">As a Partner</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Collaborate with us as an organization or school.</p>
                    <NavLink to="/partner"><Button className="w-full">Learn More</Button></NavLink>
                </Card>
                <Card className="p-8 text-center hover:-translate-y-1 transition-transform">
                    <Heart className="w-12 h-12 mx-auto text-rose-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">As a Contributor</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">Support our programs financially or through resources.</p>
                    <NavLink to="/donate"><Button className="w-full">Learn More</Button></NavLink>
                </Card>
            </div>
        </Section>
    );
};

export default GetInvolved;
