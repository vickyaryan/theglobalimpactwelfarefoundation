import React, { useState, useEffect } from 'react';
import { auth, db } from './backend/firebase';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Lock, Mail, User, Phone } from 'lucide-react';
import { toast } from 'react-toastify'; // Toastify import
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState(''); // Mobile state
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/donate');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleAuthError = (err) => {
    let errorMessage = "An unknown error occurred.";
    if (err.code === 'auth/email-already-in-use') errorMessage = 'This email is already registered.';
    if (err.code === 'auth/weak-password') errorMessage = 'Password should be at least 6 characters.';
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') errorMessage = 'Invalid email or password.';
    
    toast.error(errorMessage); // Toast error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: fullName });

        // Save with Mobile Number
        await setDoc(doc(db, "users", user.uid), {
          fullName: fullName,
          email: email,
          mobile: mobile,
          createdAt: new Date().toLocaleDateString(),
          role: "user" 
        });

        toast.success(`Welcome to GIW Foundation, ${fullName}!`);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      navigate('/donate');
    } catch (err) {
      handleAuthError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          fullName: user.displayName,
          email: user.email,
          mobile: "Not Provided", // Google se mobile nahi milta default mein
          createdAt: new Date().toLocaleDateString(),
          role: "user"
        });
      }
      toast.success("Google Login Successful!");
      navigate('/donate');
    } catch (err) {
      handleAuthError(err);
    }
  };

  if (loading) return null;

  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: '#1a365d' }}>
                {isRegistering ? "Join GIW Foundation" : "Login"}
              </h2>
              <p className="text-muted small">Supporting humanity in Uttam Nagar & beyond</p>
            </div>

            <form onSubmit={handleSubmit}>
              {isRegistering && (
                <>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">Full Name</label>
                    <div className="input-group shadow-sm rounded">
                      <span className="input-group-text bg-white border-end-0"><User size={18} className="text-muted"/></span>
                      <input type="text" className="form-control border-start-0 ps-0" placeholder="Your Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                  </div>
                  
                  {/* MOBILE NUMBER FIELD */}
                  <div className="mb-3">
                    <label className="form-label small fw-bold">Mobile Number</label>
                    <div className="input-group shadow-sm rounded">
                      <span className="input-group-text bg-white border-end-0"><Phone size={18} className="text-muted"/></span>
                      <input type="tel" className="form-control border-start-0 ps-0" placeholder="10 Digit Number" required pattern="[0-9]{10}" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  </div>
                </>
              )}

              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <div className="input-group shadow-sm rounded">
                  <span className="input-group-text bg-white border-end-0"><Mail size={18} className="text-muted"/></span>
                  <input type="email" className="form-control border-start-0 ps-0" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Password</label>
                <div className="input-group shadow-sm rounded">
                  <span className="input-group-text bg-white border-end-0"><Lock size={18} className="text-muted"/></span>
                  <input type="password" className="form-control border-start-0 ps-0" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm mb-3" style={{ backgroundColor: '#1a365d' }} disabled={loading}>
                {loading ? 'Processing...' : (isRegistering ? 'Register Now' : 'Login Now')}
              </button>
            </form>

            <div className="text-center mb-3 text-muted small">OR</div>

            <button className="btn btn-outline-dark w-100 py-2 rounded-pill d-flex align-items-center justify-content-center gap-2 mb-4" onClick={handleGoogleSignIn}>
              <BsGoogle />
              Sign in with Google
            </button>

            <p className="text-center mb-0 small">
              {isRegistering ? 
                <>Already have an account? <button className="btn btn-link p-0 small fw-bold text-decoration-none" onClick={() => setIsRegistering(false)}>Login here</button></> : 
                <>Don't have an account? <button className="btn btn-link p-0 small fw-bold text-decoration-none" onClick={() => setIsRegistering(true)}>Register here</button></>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;