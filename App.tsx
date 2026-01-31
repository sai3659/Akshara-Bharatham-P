
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { BackToTop } from './components/UI';
import Home from './pages/Home';
import Founders from './pages/Founders';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import Volunteer from './pages/Volunteer';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import About from './pages/About';
import Legal from './pages/Legal';
import Member from './pages/Member';
import Partner from './pages/Partner';
import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';
import SchoolLogin from './pages/SchoolLogin';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Get Involved Routes */}
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/member" element={<Member />} />
            <Route path="/partner" element={<Partner />} />

            {/* Student Registration & Login Routes */}
            <Route path="/student-register" element={<StudentRegister />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/school-login" element={<SchoolLogin />} />

            {/* Media Route Consolidated */}
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/admin" element={<Admin />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/cookie-policy" element={<Legal type="cookies" />} />
            <Route path="/financial-reports" element={<Legal type="financials" />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;
