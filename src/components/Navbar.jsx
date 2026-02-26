import { Link } from 'react-router-dom';
// Step 1: Import the logo from your assets folder
import logo from '../assets/logo-gif.gif'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        
        {/* LEFT SIDE: LOGO & BRAND */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} // Step 2: Use the imported variable here
            alt="The Global Impact Logo" 
            height="60" 
            className="me-2"
            style={{ borderRadius: '4px' }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold lh-1 text-ngo-blue" style={{ fontSize: '1.2rem', color: '#1a365d' }}>
              THE GLOBAL IMPACT
            </span>
            <span className="small text-muted fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              WELFARE FOUNDATION
            </span>
          </div>
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT SIDE: NAVIGATION LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link 
                className="btn rounded-pill px-4 fw-bold shadow-sm" 
                style={{ backgroundColor: '#3498db', color: 'white' }} 
                to="/donate"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;