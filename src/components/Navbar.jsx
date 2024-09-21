import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import destinations from './JSON/destinations';
import SearchResults from './SearchResults';

const Navbar = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null); // To detect clicks outside the search bar

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = 100;
      setIsScrolled(window.scrollY > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredResults = destinations.filter((destination) => {
        const nameMatch = destination.name.toLowerCase().includes(query.toLowerCase());
        const activitiesMatch = destination.activities.some((activity) => 
          typeof activity === 'string' && activity.toLowerCase().includes(query.toLowerCase())
        );

        return nameMatch || activitiesMatch;
      });

      setSearchResults(filteredResults);
    }
  };

  const handleSearch = () => {
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      navigate(`/destination/${firstResult.id}`); // Navigate by id
      setSearchQuery(''); // Clear the search query
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBlur = (event) => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <nav className={`nav w-[100%] px-[3%] py-2 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-[#070132]' : 'bg-transparent'}`}>
        <img
          className="w-40 cursor-pointer"
          src={'/Travel-smart-logo.png'}
          alt="Travel Logo"
          onClick={() => navigate('/')}
        />

        <div className="lg:hidden bar-t cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
        </div>

        <ul className="hidden lg:flex lg:gap-12 lg:text-xl">
          {['About', 'Trip Catalog', 'Contact Us', 'Tour Review'].map((item) => (
            <li key={item} className={`nav-item cursor-pointer`} onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}>
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center relative"> {/* Make this relative */}
          <input
            type="text"
            className="p-2 w-[240px] border border-gray-300 focus:outline-none focus:border-none"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onBlur={handleBlur}  // Hides results if input is empty and loses focus
            onKeyPress={handleKeyPress}
            ref={searchInputRef}
          />
          <button className="bg-[#68c6c8] text-white w-12 p-2" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {searchResults.length > 0 && (
            <SearchResults 
              results={searchResults} 
              setSearchQuery={setSearchQuery} 
            />
          )}
        </div>
      </nav>

      {/* Sliding Dropdown Menu (for mobile) */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#070132] z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <i className="fa-solid fa-xmark text-2xl text-white cursor-pointer" onClick={toggleMenu}></i>
        </div>

        <ul className="flex flex-col items-center gap-4 py-4">
          {['About', 'Trip Catalog', 'Contact Us', 'Tour Review'].map((item) => (
            <li key={item} className="text-xl cursor-pointer text-white" onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}>
              {item}
            </li>
          ))}
          <li className="w-full px-4">
            <div className="search flex justify-center w-[100%]">
              <input
                type="text"
                className="p-2 w-[85%] border border-gray-300 focus:outline-none focus:border-none"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onBlur={handleBlur}  // Hides results if input is empty and loses focus
                onKeyPress={handleKeyPress}
              />
              <button className="bg-[#68c6c8] text-white w-[15%] p-2" onClick={handleSearch}>
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
