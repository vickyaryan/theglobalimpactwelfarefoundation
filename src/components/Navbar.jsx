import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './backend/firebase'; // Apna firebase config import karein
import { onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/logo-gif.gif'; 
import { User, LogOut, LogIn, Heart, Menu, X } from 'lucide-react';

const Navbar = ({userAutentication}) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      closeMenu();
      toast.info("Logged out successfully. See you soon!");
      window.location.href = "/"; // Logout ke baad home par redirect
    } catch (error) {
      toast.error("Error logging out.");
      console.error("Logout Error:", error);
    }
  };

  const closeMenu = () => {
    // Mobile menu ka element dhoondna
    const menu = document.getElementById('navbarNav');
    if (menu && menu.classList.contains('show')) {
      // Bootstrap ki default class 'show' ko remove karke toggle state badalna
      setIsOpen(false);
      // Bootstrap 5 CDN toggle logic
      const bsCollapse = window.bootstrap.Collapse.getInstance(menu) || new window.bootstrap.Collapse(menu);
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        
        {/* LEFT SIDE: LOGO & BRAND */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="The GIW Foundation Logo" 
            height="60" 
            className="me-2"
            style={{ borderRadius: '4px' }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold lh-1" style={{ fontSize: '1.2rem', color: '#1a365d' }}>
              THE GIW
            </span>
            <span className="small text-muted fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              FOUNDATION
            </span>
          </div>
        </Link>

        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} color="#1a365d" /> : <Menu size={28} color="#1a365d" />}
        </button>

        {/* RIGHT SIDE: NAVIGATION LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/about" onClick={closeMenu}>About Us</Link>
            </li>                
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/gallery" onClick={closeMenu}>Gallery</Link>
            </li>        
            <li className="nav-item">
              <Link className="nav-link fw-bold px-3" style={{ color: '#1a365d' }} to="/contact" onClick={closeMenu}>Contact</Link>
            </li>

            {/* AUTH SECTION */}
            {!user ? (
              <li className="nav-item ms-lg-3">
                <Link 
                  className="btn btn-outline-primary rounded-pill px-4 fw-bold shadow-sm d-flex align-items-center gap-2" 
                  to="/login"
                  style={{ borderColor: '#1a365d', color: '#1a365d' }}
                  onClick={closeMenu}
                >
                  <LogIn size={18} /> Login
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown ms-lg-3">
                <button 
                  className="btn btn-light rounded-pill px-3 d-flex align-items-center gap-2 dropdown-toggle shadow-sm"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <User size={20} className="text-primary" />
                  <span className="small fw-bold">{user.displayName || "My Account"}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end border-0 shadow mt-2 rounded-3" aria-labelledby="userDropdown">
                  <li><Link className="dropdown-item py-2" to="/donate" onClick={closeMenu}><Heart size={16} className="me-2 text-danger" /> Donate</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item py-2" to="/admin-panel" onClick={closeMenu}><Heart size={16} className="me-2 text-danger" /> {userAutentication ? 'Admin' : 'user'}</Link></li>
                  <li>
                    <button onClick={handleLogout} className="dropdown-item py-2 text-danger fw-bold">
                      <LogOut size={16} className="me-2" /> Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}

            <li className="nav-item ms-lg-2">
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