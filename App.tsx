
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import StudentLogin from './pages/StudentLogin';
import SchoolLogin from './pages/SchoolLogin';
import TalentTestRegister from './pages/TalentTestRegister';
import NMMSRegister from './pages/NMMSRegister';
import KnowledgeQuestRegister from './pages/KnowledgeQuestRegister';

// Wrapper to conditionally render Layout (Header/Footer)
const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutWrapper>
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

          {/* Registration Routes */}
          <Route path="/register/talent-test" element={<TalentTestRegister />} />
          <Route path="/register/nmms" element={<NMMSRegister />} />
          <Route path="/register/knowledge-quest" element={<KnowledgeQuestRegister />} />
          
          {/* Legacy route redirects - optional but good practice */}
          <Route path="/student-register" element={<Navigate to="/register/talent-test" replace />} />
          
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
      </LayoutWrapper>
    </HashRouter>
  );
};

export default App;
