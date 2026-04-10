import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './components/backend/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Donate from './components/Donate';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import AboutUs from './components/AboutUs';
import VisitorCounter from './components/VisitorCounter';
import VisitorDisplay from './components/VisitorDisplay';
import WhatsApp from './components/WhatsApp';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Login from './components/Login';
import AdminDashboard from './components/admin/AdminDashboard'
import { useEffect, useState } from 'react';
import UserDashboard from './components/admin/UserDashboard';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [user, setUser] = useState(null); // User state define karein
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // User ki details yahan save hogi
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar userAutentication={user?.email === "theglobalimpactwelfare@gmail.com"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/display" element={<VisitorDisplay />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terms />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} /> 
          <Route 
  path="/admin-panel" 
  element={
    user ? (
      user.email === "theglobalimpactwelfare@gmail.com" 
        ? <AdminDashboard userAutentication={user.email === "theglobalimpactwelfare@gmail.com" } /> 
        : <UserDashboard />
    ) : (
      <Navigate to="/donate" />
    )
  } 
/>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
    <ToastContainer />
    <VisitorCounter />
    <WhatsApp />
    </>
  );
}

export default App;