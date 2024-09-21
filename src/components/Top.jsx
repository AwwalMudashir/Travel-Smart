import React, { useState, useEffect } from 'react';

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show button when the user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3  bg-[#68C6C8] text-white shadow-lg hover:bg-blue-600 transition duration-300"
        >
         <i className="fa-solid fa-angle-up" style={{ color: '#ffffff' }}></i>
        </button>
      )}
    </>
  );
};

export default GoToTop;
