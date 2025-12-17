import React from 'react';

const SpeakerCard = ({ name, img, title }) => {
  return (
    <div className="speaker-card">
      {/* 1. Top Section: Image */}
      <div className="card-image-container">
        <img 
          src={img} 
          alt={name} 
          className="card-img" 
        />
      </div>

      {/* 2. Bottom Section: Black Info Box */}
      <div className="card-info">
        <h3 className="speaker-name">{name}</h3>
        <p className="speaker-title">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;