import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/solar-system-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div className="video-content">
            <h2>Explore Our Solar System</h2>
            <p>
              Journey through the wonders of our solar system. Discover the planets,
              their unique characteristics, and the mysteries of space through interactive
              data and stunning visualizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;