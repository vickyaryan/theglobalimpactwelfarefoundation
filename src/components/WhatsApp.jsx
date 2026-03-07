import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a href="https://wa.me/919667283466"
      className="btn btn-success position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        width: '60px', 
        height: '60px', 
        zIndex: 1000 // Ensures it stays on top of other elements
      }}>
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsApp;