import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // PHP script ka full URL jo aapne Hostinger par dala hai
    const apiURL = 'https://theglobalimpactwelfarefoundation.com/counter.php';

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching visitor count:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return null; // Load hote waqt kuch na dikhayein

  return (
    <div className="visitor-badge d-inline-flex align-items-center bg-dark text-light px-3 py-1 rounded-pill shadow-sm">
      <div className="pulse-dot me-2"></div>
      <small className="fw-bold">
        Visitors: <span className="text-info">{count || '...'}</span>
      </small>
      
      <style>{`
        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #0dcaf0;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(13, 202, 240, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 5px rgba(13, 202, 240, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(13, 202, 240, 0); }
        }
      `}</style>
    </div>
  );
};

export default VisitorCounter;