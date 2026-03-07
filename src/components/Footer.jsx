import React from 'react';

const Footer = () => {
  return (
    // Yahan backgroundColor me aap apni website ka exact color code daal sakte hain
    <footer className="text-white pt-5 pb-4 mt-5" style={{ backgroundColor: '#003366' }}>
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          {/* Column 1: About NGO */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold" >
              The GIW Foundation
            </h5>
            <p className="text-light">
              Empowering Lives for a Better Tomorrow. Join our Seva Squad to bring a positive change in society through education, healthcare, and sustainability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold" >Quick Links</h5>
            <p>
              <a href="/" className="text-white text-decoration-none" style={{ transition: '0.3s' }}>Home</a>
            </p>
            <p>
              <a href="/about" className="text-white text-decoration-none">About Us</a>
            </p>
            <p>
              <a href="/donate" className="text-white text-decoration-none">Donate Now</a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
            </p>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Contact</h5>
            <p>
              <a 
                href="https://maps.app.goo.gl/tPETNsgHBhKwBCqp6" 
                target="_blank" 
                rel="noreferrer"
                className="text-decoration-none" 
                style={{ color: '#cbd5e1' }}
              >📍 Uttam Nagar, West Delhi, Delhi </a>
            </p>
            <p>
                <a 
                href="mailto:info@theglobalimpactwelfarefoundation.com" 
                className="text-decoration-none" 
                style={{ color: '#cbd5e1' }}
              > 📧 info@theglobalimpactwelfarefoundation.com </a>
            </p>
            <p>
              <a 
                href="tel:+919876543210" 
                className="text-decoration-none" 
                style={{ color: '#cbd5e1' }}
              > 📞 +91 9876543210 </a>
            </p>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Follow Us</h5>
            <p>
              <a 
                href="https://www.instagram.com/theglobalimpactwelfar/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white text-decoration-none"
              >
                📸 Instagram
              </a>
            </p>
            <p>
              <a 
                href="https://www.facebook.com/profile.php?id=61588080340922" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white text-decoration-none"
              >
                📘 Facebook
              </a>
            </p>
          </div>
          
        </div>

        <hr className="mb-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Copyright Section */}
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="mb-0 text-light">
              Copyright © 2026 All rights reserved by: 
              <a href="/" className="text-decoration-none ms-1">
                <strong style={{ color: '#f8b400' }}>The GIW Foundation</strong>
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;