import React, { useEffect, useRef } from "react";
import './Hero.css';

const Hero = () => {
  const slideRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const slide = slideRef.current;
    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    // Ensure slide, nextButton, and prevButton exist before adding listeners
    if (!slide || !nextButton || !prevButton) return;

    const handleNext = () => {
      const items = slide.querySelectorAll(".item");
      slide.appendChild(items[0]); // Move the first item to the end
    };

    const handlePrev = () => {
      const items = slide.querySelectorAll(".item");
      slide.prepend(items[items.length - 1]); // Move the last item to the beginning
    };

    // Auto-slide every 10 seconds
    const autoSlideInterval = setInterval(() => {
      handleNext();
    }, 10000);

    // Add event listeners
    nextButton.addEventListener("click", handleNext);
    prevButton.addEventListener("click", handlePrev);

    // Clean up on component unmount
    return () => {
      clearInterval(autoSlideInterval);
      nextButton.removeEventListener("click", handleNext);
      prevButton.removeEventListener("click", handlePrev);
    };
  }, []); // Only run once when the component is mounted

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {/* Switzerland */}
        <div className="item" style={{ backgroundImage: `url('/Switzerland.jpg')` }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">
              It is a well brought up coutry in the heart of europe.
            </div>
            <button>See More</button>
          </div>
        </div>

        {/* Bahamas */}
        <div className="item" style={{ backgroundImage: `url('/Bahamas.jpg')` }}>
          <div className="content">
            <div className="name">Bahamas</div>
            <div className="des">
              The perfect place for the holidays.
            </div>
            <button>See More</button>
          </div>
        </div>

        {/* Finland */}
        <div className="item" style={{ backgroundImage: `url('/Finland.jpg')` }}>
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">
              No better place to go to, when you need peace.
            </div>
            <button>See More</button>
          </div>
        </div>

        {/* Tokyo */}
        <div className="item" style={{ backgroundImage: `url('/Tokyo.jpg')` }}>
          <div className="content">
            <div className="name">Tokyo</div>
            <div className="des">
              The city of the future and the technological city.
            </div>
            <button>See More</button>
          </div>
        </div>

        {/* Paris */}
        <div className="item" style={{ backgroundImage: `url('/Paris.jpg')` }}>
          <div className="content">
            <div className="name">Paris</div>
            <div className="des">
              The city of love, Where one can find his soulmate easily.
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button">
        <button className="prev" ref={prevRef}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" ref={nextRef}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
