import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';

// Public Main Pages
import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Services from '../pages/Services';
import Cards from '../pages/Cards';
import NotFound from '../pages/NotFound';

// Auth Pages
import Login from '../pages/Login';
import Register from '../pages/Register';

// User Pages
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';

// Feature Pages
import LatestNews from '../pages/LatestNews';
import PublicRights from '../pages/PublicRights';
import GovernmentSchemes from '../pages/GovernmentSchemes';
import Scholarships from '../pages/Scholarships';
import DataTransparency from '../pages/DataTransparency';
import GovernmentIds from '../pages/GovernmentIds';
import HigherOfficials from '../pages/HigherOfficials';
import { 
  JobOpportunities, 
  FreeEducationSchemes, 
  Achievements, 
  SafetyPurpose, 
  MedicalFunds, 
  SocialServices 
} from '../pages/SimplePages';
import EqualRights from '../PublicRights/FundamentalRights/EqualRights';
import EqualFreedom from '../PublicRights/FundamentalRights/equalfreedom';

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cards" element={<Cards />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Feature Routes */}
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/government-schemes" element={<GovernmentSchemes />} />
          <Route path="/public-rights" element={<PublicRights />} />
          <Route path="/equal-rights" element={<EqualRights />} />
          <Route path="/equal-freedom" element={<EqualFreedom />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/free-education" element={<FreeEducationSchemes />} />
          <Route path="/data-transparency" element={<DataTransparency />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/government-ids" element={<GovernmentIds />} />
          <Route path="/higher-officials" element={<HigherOfficials />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/safety-purpose" element={<SafetyPurpose />} />
          <Route path="/medical-funds" element={<MedicalFunds />} />
          <Route path="/social-services" element={<SocialServices />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
