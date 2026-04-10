import React, { useState } from 'react';
import { Shirt, GraduationCap, Truck, User, MapPin, Mail, Phone } from 'lucide-react';
// import axios from 'axios'; // npm install axios
import { toast } from 'react-toastify';

const Free = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        item: 'tshirt',
        size: 'M',
        address: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-email-t-shirt.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Registration Successful! Mail sent 🚀");
                // Form reset karne ke liye:
                setFormData({ name: '', email: '', mobile: '', item: 'tshirt', size: 'M', address: '' });
            } else {
                toast.error("Server error: " + result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Network error ya server response nahi mila.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                        {/* Header with Gradient */}
                        <div className="p-4 text-center text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                            <h2 className="fw-bold mb-0">Claim Your GIW Cloth or CAP 🕶️</h2>
                            <p className="small opacity-75">Supporting humanity in style</p>
                        </div>

                        <div className="card-body p-4 p-md-5 bg-light">
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold small">Full Name</label>
                                    <div className="input-group"><span className="input-group-text bg-white border-end-0"><User size={18} /></span>
                                        <input type="text" className="form-control border-start-0" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                                </div>

                                {/* Email & Mobile */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small">Email</label>
                                        <div className="input-group"><span className="input-group-text bg-white border-end-0"><Mail size={18} /></span>
                                            <input type="email" className="form-control border-start-0" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold small">Mobile</label>
                                        <div className="input-group"><span className="input-group-text bg-white border-end-0"><Phone size={18} /></span>
                                            <input type="tel" className="form-control border-start-0" required pattern="[0-9]{10}" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} /></div>
                                    </div>
                                </div>

                                {/* Swag Selection */}
                                <div className="mb-4 text-center">
                                    <label className="form-label fw-bold d-block mb-3">Choose Your Swag</label>
                                    <div className="btn-group w-100" role="group">
                                        <input type="radio" className="btn-check" name="swag" id="tshirt" checked={formData.item === 'tshirt'} onChange={() => setFormData({ ...formData, item: 'tshirt' })} />
                                        <label className="btn btn-outline-primary py-3" htmlFor="tshirt"><Shirt className="me-2" /> T-Shirt</label>

                                        <input type="radio" className="btn-check" name="swag" id="cap" checked={formData.item === 'cap'} onChange={() => setFormData({ ...formData, item: 'cap' })} />
                                        <label className="btn btn-outline-primary py-3" htmlFor="cap"><GraduationCap className="me-2" /> Cap</label>
                                    </div>
                                </div>

                                {/* Size Selection - Conditional Rendering */}
                                {formData.item === 'tshirt' && (
                                    <div className="mb-4 animate-fade-in">
                                        <label className="form-label fw-bold small">Select T-Shirt Size</label>
                                        <select className="form-select border-0 shadow-sm py-3" onChange={(e) => setFormData({ ...formData, size: e.target.value })}>
                                            <option value="S">Small (S)</option>
                                            <option value="M">Medium (M)</option>
                                            <option value="L">Large (L)</option>
                                            <option value="XL">Extra Large (XL)</option>
                                        </select>
                                    </div>
                                )}

                                {/* Address */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold small">Delivery Address</label>
                                    <textarea className="form-control border-0 shadow-sm" rows="3" required onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-lg border-0 mt-3"
                                    style={{ background: 'linear-gradient(45deg, #1a365d, #2a4365)', transition: '0.3s' }}
                                >
                                    {loading ? 'Sending...' : 'Claim My Swag Now!'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Free