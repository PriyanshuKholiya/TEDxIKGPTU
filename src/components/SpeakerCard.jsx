import React, { useState } from 'react';
import './SpeakerCard.css';

// Redesigned, self-contained flip card component
// Props: { name, img, objectPosition, description, children } where
// children[0] = title (front)
export default function SpeakerCard({ name, img, objectPosition, description, children, ...rest }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const childArr = React.Children.toArray(children);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`speaker-card${isFlipped ? ' flipped' : ''}`} {...rest}>
      <div className="sc-card" role="group" aria-label={`Speaker card for ${name}`}>
        <div className="sc-inner">
          <div className="sc-face sc-front">
            <div className="sc-image">
              <img src={img} alt={name} style={objectPosition ? { objectPosition } : undefined} />
            </div>
            <div className="sc-info">
              <div className="sc-name" title={name}>{name}</div>
              <div className="sc-title">{childArr[0]}</div>
              <button 
                className="sc-flip-btn" 
                onClick={handleFlip}
                aria-label="View description"
              >
                View Description
              </button>
            </div>
          </div>
          <div className="sc-face sc-back" onClick={handleFlip} style={{ cursor: 'pointer' }}>
            <div className="sc-back-content">
              {/* FIX: Removed inline style "style={{ marginBottom: '1rem' }}" */}
              <div className="sc-name">{name}</div> 
              <div className="sc-desc">{description || 'Description coming soon...'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}