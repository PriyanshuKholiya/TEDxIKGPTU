import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 border-t-4 border-ted-red relative">
      <div className="max-w-[95%] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Image */}
        <div className="flex flex-col items-center md:items-start">
           <img 
             src="/Logo.png" 
             alt="TEDxIKGPTU" 
             className="h-10 w-auto object-contain mb-2" 
           />
           
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; 2025 TEDxIKGPTU. All Rights Reserved.</p>
          <p className="text-xs mt-1 text-gray-600">This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 -top-6 bg-ted-red hover:bg-red-700 text-white w-12 h-12 flex items-center justify-center rounded-lg shadow-lg transition-all"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
} 