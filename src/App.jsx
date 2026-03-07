import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/display" element={<VisitorDisplay />} />

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