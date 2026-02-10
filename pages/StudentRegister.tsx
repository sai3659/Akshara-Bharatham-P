
import React, { useState } from 'react';
import { Section, Card, Button, Input, Select, DecorativeShapes } from '../components/UI';
import { UserPlus, GraduationCap, School, BookOpen, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const StudentRegister: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [registerType, setRegisterType] = useState<'student' | 'school'>('student');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Select Gender',
    schoolName: '',
    grade: 'Select Grade',
    parentName: '',
    parentPhone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    udiseCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (type: 'student' | 'school') => {
    setRegisterType(type);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
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
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[#06B6D4] font-bold text-sm uppercase tracking-widest mb-6">
              <UserPlus size={16} /> New Registration
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
              {registerType === 'student' ? 'Student Registration' : 'School Registration'}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Register with Akshara Bharatam Society to participate in Talent Tests, Knowledge Quests, and apply for scholarships.
            </p>
          </div>

          {!submitted ? (
            <Card className="p-8 md:p-12 shadow-2xl border-t-4 border-[#06B6D4]">
              {/* Radio Selection for Registration Type */}
              <div className="mb-8 flex justify-center">
                 <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl inline-flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleTypeChange('student')}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                        registerType === 'student' 
                          ? 'bg-white dark:bg-slate-700 text-[#06B6D4] shadow-sm' 
                          : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                       <User size={18} /> Student
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTypeChange('school')}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                        registerType === 'school' 
                          ? 'bg-white dark:bg-slate-700 text-[#06B6D4] shadow-sm' 
                          : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                       <School size={18} /> School
                    </button>
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-5 duration-300">
                
                {/* 1. Personal Details - Common for both */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <User size={20} className="text-purple-500" /> Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="First Name" name="firstName" placeholder="Enter first name" required onChange={handleChange} />
                    <Input label="Last Name" name="lastName" placeholder="Enter last name" required onChange={handleChange} />
                    <Input label="Date of Birth" name="dob" type="date" required onChange={handleChange} />
                    <Select 
                      label="Gender" 
                      name="gender" 
                      options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' }
                      ]} 
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* 2. Academic & School Info */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    {registerType === 'school' ? <School size={20} className="text-purple-500" /> : <GraduationCap size={20} className="text-purple-500" />} 
                    {registerType === 'school' ? 'Institute Details' : 'Academic Info'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Select 
                      label="Class / Grade" 
                      name="grade" 
                      options={[
                        { value: '6', label: 'Class 6' },
                        { value: '7', label: 'Class 7' },
                        { value: '8', label: 'Class 8' },
                        { value: '9', label: 'Class 9' },
                        { value: '10', label: 'Class 10' },
                      ]} 
                      onChange={handleChange}
                    />
                    
                    {/* School Name: Optional for Student, Compulsory for School */}
                    <Input 
                      label={registerType === 'school' ? "School Name" : "School Name (Optional)"} 
                      name="schoolName" 
                      placeholder="Full name of institute" 
                      required={registerType === 'school'} 
                      onChange={handleChange} 
                    />

                    {/* UDISE Code: Only for School Type */}
                    {registerType === 'school' && (
                      <Input 
                        label="UDISE Code / Reg No" 
                        name="udiseCode" 
                        placeholder="Govt Registration ID" 
                        required 
                        onChange={handleChange} 
                      />
                    )}
                  </div>
                </div>

                {/* 3. Contact Details - Common */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Phone size={20} className="text-purple-500" /> Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input 
                        label="Parent/Guardian Name" 
                        name="parentName" 
                        placeholder="Father or Mother's Name" 
                        required 
                        onChange={handleChange} 
                    />
                    <Input label="Phone Number" name="parentPhone" placeholder="+91 00000 00000" type="tel" required onChange={handleChange} />
                    <Input label="Email Address (Optional)" name="email" placeholder="contact@example.com" type="email" onChange={handleChange} />
                    <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
                       <Input label="City / Village" name="city" placeholder="City Name" required onChange={handleChange} className="md:col-span-1" />
                       <Input label="Pincode" name="pincode" placeholder="000000" required onChange={handleChange} className="md:col-span-1" />
                       <div className="md:col-span-3">
                         <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Full Address</label>
                         <textarea 
                           className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#9C4DFF] focus:border-transparent outline-none transition-all placeholder:text-slate-400 h-24 resize-none"
                           placeholder="House No, Street Name, Landmark..."
                         ></textarea>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full shadow-lg text-lg">
                    {registerType === 'student' ? 'Complete Student Registration' : 'Register with School ID'}
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    By registering, you agree to the <NavLink to="/terms" className="text-[#06B6D4] hover:underline">Terms of Service</NavLink> and <NavLink to="/privacy" className="text-[#06B6D4] hover:underline">Privacy Policy</NavLink>.
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
                  Welcome to the Akshara Bharatam family. Your {registerType === 'student' ? 'Student' : 'School'} ID has been generated.
                </p>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl max-w-md mx-auto mb-8 border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-2">Your Temporary ID</p>
                  <p className="text-3xl font-black text-[#06B6D4] tracking-widest">
                    {registerType === 'student' ? 'ABS-STD-2024-8932' : 'ABS-SCH-2024-102'}
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <NavLink to={registerType === 'student' ? "/student-login" : "/school-login"}>
                    <Button>Login Now</Button>
                  </NavLink>
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

export default StudentRegister;
