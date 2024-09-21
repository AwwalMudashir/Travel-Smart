import React from "react";

const ContactForm = () => {
  return (
    <div className="flex bg-white gap-8 flex-col lg:flex-row justify-between items-start px-8 py-12">
      {/* Left Section: Contact Info */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 touch">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg mb-6">
          Thank you for visiting us! If you have any questions or need assistance
          with your travel plans, feel free to reach out. Our team is ready to
          help you find the perfect travel package, we’re excited to help make
          your travel dreams a reality.
        </p>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <i className="fas fa-map-marker-alt mr-3"></i>
            HP Plaza, Opposite Dada Estate Police Station, Osogbo, Osun State, Nigeria.
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-3"></i>
            09128485866, 09128485867
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3"></i>
            Aptechosogbo@Gmail.Com
          </li>
          <li className="flex items-center">
            <i className="fas fa-globe mr-3"></i>
            Hello@Aptech.Ng | www.Apech.Ng
          </li>
        </ul>

        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-gray-600">
            <i className="fab fa-youtube text-3xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-facebook text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="lg:w-1/2 bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Write Us A Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1e1e4e] text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
