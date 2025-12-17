import React from "react";
import SpeakerCard from '../components/SpeakerCard';
import speakers from '../data/speakers';
import './Speakers.css';
import './pages.css';

export default function Speakers() {
  return (
    <div className="page speakers" style={{ background: 'transparent', width: '100%', minHeight: '100vh' }}>
      <div 
        className="white-card speakers-section" 
        style={{ 
          maxWidth: 1300, 
          width: '90%',
          margin: '2rem auto',
          padding: '2rem', 
          background: 'transparent', /* Removed white bg to blend like reference */
          boxShadow: 'none' 
        }}
      >
        <h1 className="section-title">Our Eminent Speakers</h1>
        
        <div className="speakers-grid">
            {speakers.map((sp, i) => (
              <div key={i} className="card-wrapper">
                <SpeakerCard 
                    name={sp.name} 
                    img={sp.img} 
                    title={sp.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}