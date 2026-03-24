import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ planet }) => {
  const { name, image, distance } = planet;

  return (
    <figure className="planet-card">
      <div className="planet-image-container">
        <img
          src={image}
          alt={`Planet ${name}`}
          className="planet-image"
          loading="lazy"
        />
      </div>
      <figcaption className="planet-info">
        <h3 className="planet-name">{name}</h3>
        <p className="planet-distance">{distance}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;