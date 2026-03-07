import React from 'react';
import holiKidImg from '../assets/seva-squad-holi-tshirt-distribution.jpg';
import volunteerImg from '../assets/ngo-volunteer-tilak-nagar.jpg';
import volunteerImg2 from '../assets/seva-squad-tshirt-distribution.jpg';

const Hero = () => {
    return (
        <div>
            {/* 1. Hero Section */}


            {/* 2. Recent Campaign: Colors of Kindness (Holi) */}
            <section className="container py-5 mt-4">
                <h2 className="text-center fw-bold mb-3">Our Recent Impact: Colors of Kindness</h2>
                <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    This Holi, our Seva Squad distributed t-shirts and spread smiles among those who really need help. Here is a glimpse of our ground-level work.
                </p>

                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={holiKidImg}
                                className="card-img-top"
                                alt="Young boy smiling after receiving Seva Squad NGO T-shirt"
                                loading="lazy"
                                style={{
                                    height: '350px',
                                    objectFit: 'cover',
                                    objectPosition: 'top'
                                }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Spreading Smiles</h5>
                                <p className="card-text text-muted">Providing clothing and spreading joy in the community.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={volunteerImg2}
                                className="card-img-top"
                                alt="Young boy smiling after receiving Seva Squad NGO T-shirt"
                                loading="lazy"
                                style={{
                                    height: '350px',
                                    objectFit: 'cover',
                                    objectPosition: 'top'
                                }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Community Support</h5>
                                <p className="card-text text-muted">Our dedicated volunteers ensuring help reaches the right hands.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 (Duplicate structure for a 3rd image) */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={volunteerImg}
                                className="card-img-top"
                                alt="Young boy smiling after receiving Seva Squad NGO T-shirt"
                                loading="lazy"
                                style={{
                                    height: '350px',
                                    objectFit: 'cover',
                                    objectPosition: 'top'
                                }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">United for a Cause</h5>
                                <p className="card-text text-muted">Together we can make a larger impact on society.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;