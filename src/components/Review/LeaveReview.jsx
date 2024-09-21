import React, { useState } from 'react';
import './Review.css';

const LeaveReview = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      review,
      rating,
    });
    // Handle form submission here
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white gap-8 justify-between items-start px-8 py-12">
      {/* Left Section: Importance of Review Writing */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">Why Your Review Matters</h1>
        <p className="text-lg mb-6">
          Writing a review helps other travelers make informed decisions. Your experience can guide others in choosing the best travel options. Whether it's about seamless booking, exceptional customer service, or unforgettable travel experiences, your feedback contributes to improving services and building trust within the travel community.
        </p>
        <p className="text-lg mb-6">
          In a world of online choices, real customer reviews play a huge role in shaping others' travel plans. Thank you for taking the time to share your thoughts and helping us grow!
        </p>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <i className="fas fa-check-circle mr-3 text-green-500"></i>
            Honest feedback builds trust with future customers.
          </li>
          <li className="flex items-center">
            <i className="fas fa-check-circle mr-3 text-green-500"></i>
            Helps us improve our services and make your next experience even better.
          </li>
          <li className="flex items-center">
            <i className="fas fa-check-circle mr-3 text-green-500"></i>
            Makes it easier for others to discover great travel experiences.
          </li>
        </ul>
      </div>

      {/* Right Section: Review Form */}
      <div className="bg-gray-100 p-8 rounded-lg w-full lg:max-w-md mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
              Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your review here..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex space-x-2 mt-1">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`text-2xl ${
                      ratingValue <= (hoverRating || rating)
                        ? 'text-yellow-500'
                        : 'text-gray-400'
                    }`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHoverRating(ratingValue)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveReview;
