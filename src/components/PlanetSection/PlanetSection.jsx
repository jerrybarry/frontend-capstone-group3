import React, { useState, useEffect } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import './PlanetSection.css';

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('https://api.example.com/planets');
        // const data = await response.json();

        // Mock data for now
        const mockPlanets = [
          {
            name: 'Mercury',
            image: '/planets/mercury.jpg',
            distance: '57.9 million km from Sun'
          },
          {
            name: 'Venus',
            image: '/planets/venus.jpg',
            distance: '108.2 million km from Sun'
          },
          {
            name: 'Earth',
            image: '/planets/earth.jpg',
            distance: '149.6 million km from Sun'
          },
          {
            name: 'Mars',
            image: '/planets/mars.jpg',
            distance: '227.9 million km from Sun'
          },
          {
            name: 'Jupiter',
            image: '/planets/jupiter.jpg',
            distance: '778.5 million km from Sun'
          },
          {
            name: 'Saturn',
            image: '/planets/saturn.jpg',
            distance: '1.43 billion km from Sun'
          },
          {
            name: 'Uranus',
            image: '/planets/uranus.jpg',
            distance: '2.87 billion km from Sun'
          },
          {
            name: 'Neptune',
            image: '/planets/neptune.jpg',
            distance: '4.50 billion km from Sun'
          }
        ];

        setPlanets(mockPlanets);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch planet data');
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return (
      <section id="planets" className="planet-section">
        <div className="container">
          <h2>Our Solar System</h2>
          <div className="loading">Loading planets...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="planets" className="planet-section">
        <div className="container">
          <h2>Our Solar System</h2>
          <div className="error">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="planets" className="planet-section">
      <div className="container">
        <h2>Our Solar System</h2>
        <p className="section-description">
          Discover the eight planets that orbit our Sun, each with unique characteristics
          and fascinating features.
        </p>
        <div className="planets-grid">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;