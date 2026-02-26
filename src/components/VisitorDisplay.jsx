import React, { useState, useEffect } from 'react';

const VisitorDisplay = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Database se data lane ke liye function
    const fetchStats = async () => {
      try {
        const response = await fetch('https://theglobalimpactwelfarefoundation.com/counter.php');
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };

    fetchStats();
  }, []); // [] matlab ye sirf page load par chalega

  return (
    <div className="card border-0 shadow-sm p-3 rounded-4 bg-light d-inline-block">
      <div className="d-flex align-items-center">
        <div className="bg-primary text-white p-2 rounded-circle me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
          </svg>
        </div>
        <div>
          <h6 className="mb-0 text-muted small fw-bold">Total Supporters</h6>
          <h4 className="mb-0 fw-bold" style={{ color: '#1a365d' }}>{visitorCount}</h4>
        </div>
      </div>
    </div>
  );
};

export default VisitorDisplay;