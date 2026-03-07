import React from 'react';

const SocialWall = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1a365d' }}>Live Updates & Social Wall</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Stay connected with our day-to-day ground activities. Follow The GIW Foundation on social media.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Facebook Iframe Column */}
          <div className="col-lg-4 col-md-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="bg-primary text-white p-3 text-center d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-facebook fs-5"></i>
                <h5 className="mb-0 fw-bold">Facebook Updates</h5>
              </div>
              <div className="card-body p-0 text-center bg-white d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
                {/* Facebook Page Plugin Iframe */}
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61588080340922&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="340" 
                  height="500" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="GIW Foundation Facebook Feed"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Instagram Iframe Column */}
          <div className="col-lg-4 col-md-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="text-white p-3 text-center d-flex align-items-center justify-content-center gap-2" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <i className="bi bi-instagram fs-5"></i>
                <h5 className="mb-0 fw-bold">Instagram Highlights</h5>
              </div>
              <div className="card-body p-0 text-center bg-white d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
                {/* Instagram Single Post Embed Iframe 
                    Note: Replace 'C_XYZ123' with the actual shortcode of your latest Instagram reel/post 
                */}
                <iframe 
                  src="https://www.instagram.com/theglobalimpactwelfar/embed" 
                  width="340" 
                  height="500" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowtransparency="true"
                  title="GIW Foundation Instagram Post"
                  style={{ border: 'none', overflow: 'hidden' }} 
                ></iframe>
                
                {/* Agar poori profile dikhani ho bina API ke, toh aap Elfsight.com ka free widget code yahan daal sakte hain */}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="bg-danger text-white p-3 text-center d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-youtube fs-5"></i>
                <h5 className="mb-0 fw-bold">Latest from YouTube</h5>
              </div>
              <div className="card-body p-0 bg-black d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                {/* Yahan aap apne latest video ka embed code daal sakte hain */}
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/videoseries?list=UULFthegiwfoundation" 
                  title="The GIW Foundation YouTube Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-footer bg-white border-0 text-center py-3">
                <a href="https://www.youtube.com/@thegiwfoundation" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm rounded-pill px-4">
                  Subscribe Our Channel
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialWall;