import React, { useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Section, Card, Button, DecorativeShapes } from '../components/UI';
import { FOUNDERS, TEAM_MEMBERS } from '../constants';
import { ArrowLeft, Linkedin, Mail, Calendar } from 'lucide-react';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const profile = FOUNDERS.find(f => f.id === id) || TEAM_MEMBERS.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!profile) {
    return (
      <Section className="pt-44 md:pt-48 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Profile Not Found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Section>
    );
  }

  const isFounder = 'quote' in profile;

  return (
    <>
      <DecorativeShapes />
      <Section className="pt-44 md:pt-48 pb-20">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" className="mb-8 pl-0 group" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back
          </Button>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column: Image & Quick Info */}
            <div className="w-full md:w-1/3 space-y-6">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h1 className="text-3xl font-bold font-heading mb-1">{profile.name}</h1>
                  <p className="text-[#06B6D4] font-medium uppercase tracking-wider text-sm">{profile.role}</p>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h3>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" title="LinkedIn Profile">
                    <Linkedin size={18} />
                  </Button>
                  <Button variant="outline" className="flex-1" title="Email">
                    <Mail size={18} />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-2/3">
              {isFounder && (
                <div className="mb-10">
                  <blockquote className="text-2xl font-heading italic text-slate-700 dark:text-slate-300 border-l-4 border-purple-500 pl-6 py-2">
                    "{(profile as any).quote}"
                  </blockquote>
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                  About {profile.name}
                </h2>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full opacity-50"></div>
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed whitespace-pre-line pl-6 text-lg font-medium">
                    {('fullBio' in profile && profile.fullBio) ? profile.fullBio : profile.bio}
                  </div>
                </div>
              </div>

              {isFounder && (
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6">Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {(profile as any).tags.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Profile;
