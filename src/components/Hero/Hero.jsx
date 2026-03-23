import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToExplore = () => {
    document.getElementById('planets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        
        <div className="hero-content">
          <h1 className="hero-heading">
            Explore Our Solar System Through Data
          </h1>
          <p className="hero-subtext">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToExplore}>
              Explore the Data
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/hero-planet.png"
            alt="A vivid blue planet representing Earth from space"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;