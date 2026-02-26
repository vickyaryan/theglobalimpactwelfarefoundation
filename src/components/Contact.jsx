import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import SEO from './SEO';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('https://theglobalimpactwelfarefoundation.com/send_email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === 'success') {
        toast.success("Thank You! > Your message has been successfully sent. Our team will review your inquiry and get back to you shortly at info@theglobalimpactwelfarefoundation.com. We appreciate your interest in our foundation!");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission Failed > We're sorry, but there was a technical issue processing your request. Please try again later or contact us directly at info@theglobalimpactwelfarefoundation.com.");
    }
    setLoading(false);
  };


  return (
    <div className="container py-5 animate-fadeIn">
      <SEO
        title="Contact Us"
        description="Get in touch with The Global Impact Welfare Foundation. Visit our office at Hastal Vihar, Uttam Nagar or email us at info@theglobalimpactwelfarefoundation.com."
      />
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: '#1a365d' }}>Connect With Us</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Whether you have a question about our foundation, need assistance, or want to volunteer, our team is ready to help.
        </p>
      </div>

      <div className="row g-5 align-items-stretch">
        {/* LEFT SIDE: Contact Detail Cards */}
        <div className="col-lg-5">
          <div className="h-100 d-flex flex-column gap-3">

            {/* Address Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4 flex-grow-1 border-start border-4 border-primary">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light p-2 rounded-circle me-3">
                  <MapPin size={24} style={{ color: '#3498db' }} />
                </div>
                <h5 className="mb-0 fw-bold" style={{ color: '#1a365d' }}>Our Office</h5>
              </div>
              <p className="text-muted mb-0">
                1st Floor, D-110, Hastal Vihar<br />
                Near Holly Chauk, Uttam Nagar West<br />
                New Delhi - 110059
              </p>
            </div>

            {/* Communication Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4 flex-grow-1 border-start border-4 border-info">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light p-2 rounded-circle me-3">
                  <Mail size={24} style={{ color: '#3498db' }} />
                </div>
                <h5 className="mb-0 fw-bold" style={{ color: '#1a365d' }}>Direct Contact</h5>
              </div>
              <p className="mb-1 fw-semibold text-dark">+91 9667283466</p>
              <p className="text-muted mb-0 small text-break">info@theglobalimpactwelfarefoundation.com</p>
            </div>

            {/* Working Hours Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4 flex-grow-1 border-start border-4 border-dark">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light p-2 rounded-circle me-3">
                  <Clock size={24} style={{ color: '#1a365d' }} />
                </div>
                <h5 className="mb-0 fw-bold" style={{ color: '#1a365d' }}>Visit Us</h5>
              </div>
              <p className="text-muted mb-0 small">Mon - Sat: 10:00 AM to 6:00 PM</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="p-4 p-md-5 bg-white">
              <h3 className="fw-bold mb-4" style={{ color: '#1a365d' }}>Send a Message</h3>
              <form onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Your Name</label>
                    <input type="text" name="user_name" className="form-control bg-light py-3 border-0" placeholder="Enter Name" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Your Email</label>
                    <input type="email" name="user_email" className="form-control bg-light py-3 border-0" placeholder="Enter Email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold">Subject</label>
                    <input type="text" name="subject" className="form-control bg-light py-3 border-0" placeholder="Inquiry" required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold">Message</label>
                    <textarea name="message" className="form-control bg-light border-0" rows="4" placeholder="How can we help?" required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-lg w-100 text-white mt-4 py-3 shadow-sm fw-bold" style={{ background: '#1a365d' }}>
                    <Send size={18} className="me-2" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;