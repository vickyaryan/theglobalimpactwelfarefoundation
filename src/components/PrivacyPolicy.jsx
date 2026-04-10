import React from 'react';
import SEO from './SEO';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <SEO title="Privacy Policy | The GIW Foundation" description="Privacy Policy of The Global Impact Welfare Foundation (The GIW Foundation)." />
      
      <div className="row justify-content-center">
        <div className="col-lg-10 bg-white p-4 p-md-5 shadow-sm rounded-4">
          <h1 className="fw-bold mb-4" style={{ color: '#1a365d' }}>Privacy Policy</h1>
          <p className="text-muted small">Last Updated: March 2026</p>
          <hr />

          <section className="mb-4">
            <h4 className="fw-bold">1. Information We Collect</h4>
            <p className="text-secondary">When you visit our website or fill out our contact form, we may collect personal information such as your name, email address, and phone number to better serve your inquiries.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">2. How We Use Your Information</h4>
            <p className="text-secondary">The GIW Foundation uses your data to provide support, process donations, send updates about our campaigns (like T-shirt distributions), and improve our website experience.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">3. Data Security</h4>
            <p className="text-secondary">We implement security measures to protect your personal information. We do not sell, trade, or otherwise transfer your data to outside parties.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">4. Third-Party Links</h4>
            <p className="text-secondary">Our website may include links to social media (Instagram, Facebook, YouTube) and Google Maps. These third-party sites have separate privacy policies, and we are not responsible for their content.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;