import SEO from "./SEO";

const Home = () => (
  <div>
    <SEO
  title="Home" 
  description="The Global Impact Welfare Foundation is a non-profit NGO based in Uttam Nagar, Delhi, dedicated to education, healthcare, and social welfare." 
/>
    {/* Hero Section */}
    <header style={{ background: 'linear-gradient(135deg, #1a365d 0%, #3498db 100%)' }} className="text-white py-5">
      <div className="container py-5 text-center">
        <h1 className="display-4 fw-bold mb-3">Empowering Lives for a Better Tomorrow</h1>
        <p className="lead mb-4 opacity-75">Join The Global Impact Welfare Foundation in creating sustainable change.</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-light btn-lg px-5 fw-bold text-ngo-blue shadow">Our Mission</button>
          {/* <button className="btn btn-outline-light btn-lg px-5 fw-bold">Watch Video</button> */}
        </div>
      </div>
    </header>

    {/* Impact Cards */}
    <div className="container py-5">
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 border-top border-4 border-info">
            <h3 className="h5 fw-bold text-ngo-blue">Education</h3>
            <p className="text-muted small">Supporting the next generation with digital and physical learning tools.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 border-top border-4 border-primary">
            <h3 className="h5 fw-bold text-ngo-blue">Healthcare</h3>
            <p className="text-muted small">Providing medical assistance and health awareness in rural communities.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 border-top border-4 border-dark">
            <h3 className="h5 fw-bold text-ngo-blue">Sustainability</h3>
            <p className="text-muted small">Driving environmental impact through community-led green initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;