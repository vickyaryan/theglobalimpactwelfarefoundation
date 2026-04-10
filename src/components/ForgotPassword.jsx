import React, { useState, useEffect } from 'react';
import { resetPassword } from './backend/firebase';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false); // Validation state
  const navigate = useNavigate();

  // Email format check karne ke liye useEffect
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await resetPassword(email);
      if (result.success) {
        toast.success("Reset link sent! Redirecting to login...");
        setEmail('');
        // 2 second ka delay taaki user toast message padh sake
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(result.message || "Failed to send reset link.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3 className="card-title text-center mb-3 fw-bold" style={{ color: '#1a365d' }}>
                Forgot Password?
              </h3>
              <p className="text-muted text-center mb-4">
                Enter your email to receive a reset link.
              </p>
              
              <form onSubmit={handleReset}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${email && !isEmailValid ? 'is-invalid' : ''}`}
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                  {email && !isEmailValid && (
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm mb-3 border-0" 
                  style={{ 
                    backgroundColor: isEmailValid ? '#1a365d' : '#cccccc', // Valid hone par hi color dikhega
                    cursor: isEmailValid ? 'pointer' : 'not-allowed'
                  }}
                  disabled={!isEmailValid || loading} // Button tabhi on hoga jab mail proper ho
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  ) : 'Send Reset Link'}
                </button>
              </form>
              
              <div className="text-center mt-3">
                <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: '#1a365d' }}>
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;