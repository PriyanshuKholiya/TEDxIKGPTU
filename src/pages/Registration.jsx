import React from 'react';

export default function Nomination() {
  const formLink = "https://forms.gle/h4LPK5jVkNeeRynm8";

  return (
    <div className="w-full min-h-[80vh] bg-white flex flex-col items-center justify-center px-6">
      
      <div className="max-w-2xl w-full text-center">
        
        {/* Sober Heading - Clean & Direct */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">
          Speaker Nominations
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ted-red mb-8">
          Now Open
        </h2>

        {/* Minimal Divider */}
        <div className="w-12 h-1 bg-black mx-auto mb-8"></div>
        
        {/* Concise Text */}
        <p className="text-lg text-gray-800 mb-2 font-medium">
          Theme: MindForge
        </p>
        <p className="text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          We are looking for ideas that matter. If you have a perspective that can spark change, we invite you to apply.
        </p>

        {/* Simple, Solid Button */}
        <a 
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ted-red text-white text-base font-bold py-3 px-8 rounded hover:bg-black transition-colors duration-300"
        >
          Nominate Now
        </a>

      </div>
    </div>
  );
}