import React from 'react';
import SEO from './SEO'; 

// 1. Sabhi images ko top par import karein
import volTilakNagar from '../assets/ngo-volunteer-tilak-nagar.jpg';
import holiTshirtDist from '../assets/seva-squad-holi-tshirt-distribution.jpg';
import sevaSquadDist from '../assets/seva-squad-tshirt-distribution.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // 2. String path ki jagah import kiye gaye variables ka use karein
  const galleryImages = [
    {
      id: 1,
      src: volTilakNagar, // Variable use kiya hai bina quotes ('') ke
      alt: "The GIW Foundation volunteers distributing clothes to children during Holi",
      title: "Colors of Kindness - Holi T-Shirt Distribution"
    },
    {
      id: 2,
      src: holiTshirtDist, // Variable use kiya hai
      alt: "GIW Foundation volunteer doing a night distribution drive in Delhi",
      title: "Night Drive: T-Shirt Distribution"
    },
    {
      id: 3,
      src: sevaSquadDist, // Variable use kiya hai
      alt: "Children holding stationary provided by The GIW Foundation",
      title: "Community Support: T-Shirt Distribution"
    },
    // Agar aage aur photos add karni hain, toh unhe bhi pehle import karein 
    // aur phir aise hi array me add karein.
  ];

  return (
    <div className="container py-5 animate-fadeIn">
      {/* SEO Metadata */}
      <SEO
        title="Impact Gallery | The GIW Foundation"
        description="See the ground-level impact of The GIW Foundation (GIW). Browse our gallery of education, healthcare, and relief drives."
      />

      {/* Header Section */}
      <div className="text-center mb-5">
        <span className="text-primary fw-bold tracking-wider text-uppercase small">Impact in Action</span>
        <h1 className="fw-bold text-dark display-5 mb-3 mt-2" style={{ color: '#1a365d' }}>
          Our Gallery
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          A picture is worth a thousand words. Explore the real change we are bringing to communities through the dedicated efforts of The GIW Foundation volunteers.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {galleryImages.map((image) => (
          <div className="col-lg-4 col-md-6" key={image.id}>
            <figure className="figure w-100 mb-0">
              <div 
                className="card border-0 shadow-sm overflow-hidden rounded-4" 
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Image rendering with fixed properties */}
                <img
                  src={image.src} // Yeh ab seedhe imported variable se image lega
                  alt={image.alt}
                  title={image.title}
                  className="figure-img img-fluid m-0 w-100"
                  loading="lazy" 
                  style={{ 
                    height: '300px', 
                    objectFit: 'cover',
                    objectPosition: 'top' // Ye ensure karega ki faces na katein
                  }}
                />
                <figcaption className="figure-caption bg-white p-3 text-center border-top">
                  <strong style={{ color: '#1a365d' }}>{image.title}</strong>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
      
      {/* Call to Action at Bottom */}
      <div className="text-center mt-5 p-4 bg-light rounded-4 shadow-sm">
        <h4 className="fw-bold" style={{ color: '#1a365d' }}>Want to be part of our next drive?</h4>
        <p className="text-muted mb-4">Join The GIW Foundation and help us create more smiles.</p>
        <Link to="/contact" className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm">
          Become a Volunteer
        </Link>
      </div>

    </div>
  );
};

export default Gallery;