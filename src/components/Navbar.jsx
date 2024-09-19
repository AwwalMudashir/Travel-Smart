import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Initialize the active item based on the current URL path
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    setActiveItem(currentPath);
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item === 'home' ? '' : item}`);
    setIsOpen(false); // Close menu on item click
  };

  // Scroll event listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = 100; // Adjust this value based on your hero section height
      setIsScrolled(window.scrollY > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`nav w-[100%] px-[3%] py-2 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-[#070132]' : 'bg-transparent'
        }`}
      >
        <img
          className="w-40 cursor-pointer"
          src={'/Travel-smart-logo.png'}
          alt="Travel Logo"
          onClick={() => handleItemClick('home')}
        />

        <div className="lg:hidden bar-t cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </div>

        <ul className="hidden lg:flex lg:gap-12 lg:text-xl">
          {['About', 'Trip Catalog', 'Contact Us', 'Contact Review'].map((item) => (
            <li
              key={item}
              className={`nav-item cursor-pointer ${
                activeItem === item ? 'border-b-2 border-[#68c6c8]' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Search Input (shown only on large screens) */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            className="p-2 w-[240px] border border-gray-300"
            placeholder="Search"
          />
          <button className="bg-[#68c6c8] text-white w-12 p-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </nav>

      {/* Dropdown Div (for mobile) */}
      <div
        className={`dropdown-menu transition-all duration-500 ease-in-out bg-white ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden lg:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 bg-[#070132]">
          {['About', 'Trip Catalog', 'Contact Us', 'Contact Review'].map((item, index) => (
            <li
              key={item}
              className={`text-xl cursor-pointer transition-opacity text-white delay-${
                index * 100
              }ms ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}

          <li className={`text-center w-full px-4`}>
            <div className="search flex justify-center w-[100%]">
              <input
                type="text"
                className="p-2 w-[85%] border border-gray-300"
                placeholder="Search"
              />
              <button className="bg-[#68c6c8] text-white w-[15%] p-2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
