import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-[#070031] text-white">
      <div className="top py-10 px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center pb-8 border-b border-white">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 p-3 bg-[#68c6c8] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
              <i className="fa-solid fa-phone text-2xl text-white"></i>
            </div>
            <div className="text-white text-base font-semibold mt-2">+123 4568 789 160</div>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 p-3 bg-[#68c6c8] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
              <i className="fa-solid fa-envelope text-2xl text-white"></i>
            </div>
            <div className="text-white text-base font-semibold mt-2">www.SmartTravel.com</div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 p-3 bg-[#68c6c8] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
              <i className="fa-solid fa-location-dot text-2xl text-white"></i>
            </div>
            <div className="text-white text-base font-semibold mt-2">Dada Estate Oshogbo Osun</div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold capitalize mb-4">About</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Our Story</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Awards</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Team</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold capitalize mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Our Services</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Clients</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Contact</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Fees</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold capitalize mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Blogs</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Newsletters</li>
              <li className="text-white hover:text-[#68c6c8] transition-colors duration-200 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h3 className="text-xl font-bold capitalize mb-4">Subscription</h3>
            <div className="bg-white text-black w-full p-2 rounded-lg flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-lg px-2 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom py-4 bg-[#68c6c8]">
        <div className="flex justify-center gap-6 mb-4">
          {/* Social Icons */}
          {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
            <div
              key={icon}
              className="w-12 h-12 p-3 bg-[#070031] rounded-full flex justify-center items-center text-white text-xl transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <i className={`fa-brands fa-${icon}`}></i>
            </div>
          ))}
        </div>
        <div className="text-center text-white text-base font-bold">
          © 2024-2025 Travel Smart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
