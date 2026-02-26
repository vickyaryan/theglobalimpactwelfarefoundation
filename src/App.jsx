import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Donate from './components/Donate';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import VisitorCounter from './components/VisitorCounter';
import VisitorDisplay from './components/VisitorDisplay';

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/display" element={<VisitorDisplay />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    <VisitorCounter />
    </>
  );
}

export default App;