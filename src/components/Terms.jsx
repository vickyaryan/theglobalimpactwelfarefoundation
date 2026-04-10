import React from 'react';
import SEO from './SEO';

const Terms = () => {
  return (
    <div className="container py-5">
      <SEO title="Terms & Conditions | The GIW Foundation" description="Terms and Conditions for using The GIW Foundation website." />
      
      <div className="row justify-content-center">
        <div className="col-lg-10 bg-white p-4 p-md-5 shadow-sm rounded-4">
          <h1 className="fw-bold mb-4" style={{ color: '#1a365d' }}>Terms & Conditions</h1>
          <p className="text-muted small">Effective Date: March 2026</p>
          <hr />

          <section className="mb-4">
            <h4 className="fw-bold">1. Acceptance of Terms</h4>
            <p className="text-secondary">By accessing the website of The Global Impact Welfare Foundation (The GIW Foundation), you agree to comply with these terms and all applicable laws in India.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">2. Use of Website</h4>
            <p className="text-secondary">The content on this website, including photos of our drives in Uttam Nagar and Delhi, is for information purposes. Unauthorized use of our logo or images is prohibited.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">3. Donation Policy</h4>
            <p className="text-secondary">All donations made to The GIW Foundation are voluntary. Please ensure you provide correct details to receive your donation receipt. Donations once made are generally non-refundable.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">4. Limitation of Liability</h4>
            <p className="text-secondary">The GIW Foundation will not be liable for any damages arising out of the use or inability to use the materials on this website.</p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold">5. Governing Law</h4>
            <p className="text-secondary">Any disputes related to this website shall be governed by the laws of the State of Delhi, India.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;