import React, { useState, useEffect } from 'react';
import './VideoCarousel.css'; // Import the CSS file for animations

const continents = [
  {
    name: 'Africa',
    videoUrl: '/africa.mp4',
  },
  {
    name: 'Asia',
    videoUrl: '/asia.mp4',
  },
  {
    name: 'Europe',
    videoUrl: '/europe.mp4',
  },
  {
    name: 'North America',
    videoUrl: '/north-america.mp4',
  },
  {
    name: 'South America',
    videoUrl: '/south-america.mp4',
  },
  {
    name: 'Antarctica',
    videoUrl: '/antartica.mp4',
  },
  {
    name: 'Australia',
    videoUrl: '/australia.mp4',
  }
];

const Continents = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current video index
  const [fade, setFade] = useState(true); // Tracks the fade animation state

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % continents.length);
        setFade(true); // Fade in the next video
      }, 1000); // Delay for fading out
    }, 10000); // Switch video every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className={`video-container ${fade ? 'fade-in' : 'fade-out'}`}>
        <video
          key={currentIndex}
          src={continents[currentIndex].videoUrl}
          autoPlay
          muted
          loop
          className="video-element"
        ></video>
        <div className="overlay">
          <h1 className="continent-name">{continents[currentIndex].name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Continents;
