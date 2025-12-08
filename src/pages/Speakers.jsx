import React from "react";
import SpeakerCard from '../components/SpeakerCard';
import speakers from '../data/speakers';
import './Speakers.css';
import './pages.css';

export default function Speakers() {
  return (
    <div className="page speakers" style={{ background: 'transparent', width: '100%' }}>
      <div 
        className="white-card speakers-section" 
        style={{ 
          maxWidth: 1300, /* Adjusted to 1300px */
          width: 'calc(100% - 3rem)',
          margin: '2.2rem auto',
          padding: '2.5rem 1.5rem', 
          borderRadius: 12, 
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)', 
          background: '#fff' 
        }}
      >
        <h1 style={{ color: "#e62b1e", marginTop: 0, fontSize: '2rem', fontWeight: 900, letterSpacing: '1px', textAlign: 'center' }}>Our Eminent Speakers</h1>
        <section style={{ margin: "1.5rem 0 0 0", width: "100%" }}>
          <div className="speakers-grid">
            {speakers.map((sp, i) => (
              <SpeakerCard key={i} name={sp.name} img={sp.img} objectPosition={sp.objectPosition} description={sp.description}>
               <div className="speaker-card-title" style={{ color: '#eec55d', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'pre-line' }}>{sp.title}</div>
              </SpeakerCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}