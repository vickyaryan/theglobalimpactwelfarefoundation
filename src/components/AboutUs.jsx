import React from 'react';
import { Target, Eye, Heart, Users, Globe, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-light py-5 animate-fadeIn">
      <div className="container py-md-4">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="text-primary fw-bold tracking-wider text-uppercase small">Who We Are</span>
          <h2 className="fw-bold text-dark display-5 mb-3 mt-2" style={{ color: '#1a365d' }}>
            About The Foundation
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            The Global Impact Welfare Foundation (The GIW Foundation) is a registered non-profit organization driven by a single purpose: to empower marginalized communities and build a compassionate society where everyone can thrive.
          </p>
        </div>

        {/* Mission & Vision Section (Two Cards Side by Side) */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4 h-100 rounded-4 border-top border-4 border-primary">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="fw-bold mb-0" style={{ color: '#1a365d' }}>Our Mission</h3>
              </div>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                To uplift underprivileged communities by providing access to quality education, essential healthcare, and sustainable livelihood opportunities. We strive to create direct, ground-level impact that transforms lives permanently.
              </p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4 h-100 rounded-4 border-top border-4 border-info">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                  <Eye size={28} className="text-info" />
                </div>
                <h3 className="fw-bold mb-0" style={{ color: '#1a365d' }}>Our Vision</h3>
              </div>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                We envision a world free from poverty and inequality, where every individual—regardless of their background—has the resources and opportunities to live with dignity, hope, and self-reliance.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Content & GIW Foundation Action Team Section */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5">
          <div className="row g-0">
            <div className="col-lg-12 p-4 p-md-5 bg-white">
              <div className="d-flex align-items-center mb-4">
                <Heart size={32} className="text-danger me-3" />
                <h3 className="fw-bold mb-0" style={{ color: '#1a365d' }}>
                  Driven By Compassion, Executed With Action
                </h3>
              </div>
              
              <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                Founded with a deep-rooted desire to bring real change, The GIW Foundation operates on the belief that small acts of kindness can collectively change the world. We don't just work from offices; we are present on the ground. From organizing relief drives during festivals to ensuring basic necessities reach the unreached, our focus is on executing scalable and sustainable social projects.
              </p>

              <div className="bg-light p-4 rounded-3 border-start border-4 border-warning mt-4">
                <h4 className="fw-bold text-dark mb-2">
                  <Users size={24} className="text-warning me-2" />
                  The GIW Foundation Volunteers
                </h4>
                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                  Our true strength lies in our backbone—our dedicated volunteers at <strong>The GIW Foundation</strong>. This is our passionate force that works tirelessly on the field. Whether it is distributing clothes during Holi, conducting cleanliness drives, or providing educational kits, The GIW Foundation represents the true spirit of selfless service and community welfare.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-4 mt-5">
          <h3 className="fw-bold mb-4" style={{ color: '#1a365d' }}>Our Core Values</h3>
        </div>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-white shadow-sm p-4 rounded-circle d-inline-block mb-3">
                <ShieldCheck size={32} className="text-success" />
              </div>
              <h5 className="fw-bold">Transparency</h5>
              <p className="text-secondary small">Complete accountability for every donation and project we undertake.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-white shadow-sm p-4 rounded-circle d-inline-block mb-3">
                <Users size={32} className="text-primary" />
              </div>
              <h5 className="fw-bold">Inclusivity</h5>
              <p className="text-secondary small">Serving humanity without any discrimination of caste, creed, or religion.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-white shadow-sm p-4 rounded-circle d-inline-block mb-3">
                <Globe size={32} className="text-info" />
              </div>
              <h5 className="fw-bold">Sustainability</h5>
              <p className="text-secondary small">Creating solutions that offer long-term benefits to the society and environment.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;