import React from 'react';
import './DataTable.css';

const DataTable = () => {
  const planetData = [
    {
      name: 'Mercury',
      diameter: '4,879 km',
      mass: '3.30 × 10²³ kg',
      distance: '57.9 million km',
      moons: '0',
      orbitalPeriod: '88 days',
      temperature: '167°C'
    },
    {
      name: 'Venus',
      diameter: '12,104 km',
      mass: '4.87 × 10²⁴ kg',
      distance: '108.2 million km',
      moons: '0',
      orbitalPeriod: '225 days',
      temperature: '464°C'
    },
    {
      name: 'Earth',
      diameter: '12,756 km',
      mass: '5.97 × 10²⁴ kg',
      distance: '149.6 million km',
      moons: '1',
      orbitalPeriod: '365.25 days',
      temperature: '15°C'
    },
    {
      name: 'Mars',
      diameter: '6,792 km',
      mass: '6.42 × 10²³ kg',
      distance: '227.9 million km',
      moons: '2',
      orbitalPeriod: '687 days',
      temperature: '-65°C'
    },
    {
      name: 'Jupiter',
      diameter: '142,984 km',
      mass: '1.90 × 10²⁷ kg',
      distance: '778.5 million km',
      moons: '95',
      orbitalPeriod: '12 years',
      temperature: '-110°C'
    },
    {
      name: 'Saturn',
      diameter: '120,536 km',
      mass: '5.68 × 10²⁶ kg',
      distance: '1.43 billion km',
      moons: '146',
      orbitalPeriod: '29 years',
      temperature: '-140°C'
    },
    {
      name: 'Uranus',
      diameter: '51,118 km',
      mass: '8.68 × 10²⁵ kg',
      distance: '2.87 billion km',
      moons: '28',
      orbitalPeriod: '84 years',
      temperature: '-195°C'
    },
    {
      name: 'Neptune',
      diameter: '49,528 km',
      mass: '1.02 × 10²⁶ kg',
      distance: '4.50 billion km',
      moons: '16',
      orbitalPeriod: '165 years',
      temperature: '-200°C'
    }
  ];

  return (
    <section className="data-table-section">
      <div className="container">
        <h2>Planetary Data Comparison</h2>
        <p className="section-description">
          Compare key characteristics of all eight planets in our solar system.
          Data sourced from NASA astronomical observations.
        </p>

        <div className="table-container">
          <table className="planetary-table">
            <thead>
              <tr>
                <th>Planet</th>
                <th>Diameter</th>
                <th>Mass</th>
                <th>Distance from Sun</th>
                <th>Moons</th>
                <th>Orbital Period</th>
                <th>Surface Temperature</th>
              </tr>
            </thead>
            <tbody>
              {planetData.map((planet, index) => (
                <tr key={index}>
                  <td className="planet-name-cell">{planet.name}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.mass}</td>
                  <td>{planet.distance}</td>
                  <td>{planet.moons}</td>
                  <td>{planet.orbitalPeriod}</td>
                  <td>{planet.temperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataTable;