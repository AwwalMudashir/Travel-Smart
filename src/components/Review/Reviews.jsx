import React from "react";
import './Review.css'

const Reviews = () => {
  const reviews = [
    { 
      name: "Daniel T.", 
      text: "Smart Travel made my vacation seamless! They took care of every little detail. I didn’t have to worry about a thing.", 
      stars: 4, 
      img: "https://img.freepik.com/free-photo/smiley-man-home-using-headphones_23-2148793511.jpg?t=st=1726864781~exp=1726868381~hmac=f63930ea0a6822629082302717be36ecf971d188c16d253dac059536ff47fa13&w=900" 
    },
    { 
      name: "Shayan A.", 
      text: "Booking through Smart Travel was the best decision! Everything from flights to accommodations was handled perfectly.", 
      stars: 5, 
      img: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1726864861~exp=1726868461~hmac=8f0fb9482da7539f5df81405c329179c1f71554f5ad3e9939219a276427e8d26&w=740" 
    },
    { 
      name: "Arian K.", 
      text: "I had an amazing trip thanks to Smart Travel! Their customer service and attention to detail were top-notch.", 
      stars: 4, 
      img: "https://img.freepik.com/free-photo/business-man-banner-concept-with-copy-space_23-2149601461.jpg?t=st=1726864983~exp=1726868583~hmac=ce6950c7f29787e6244ec9070e20c93e9b72ae89c5664756d9aa18200d8bed6c&w=1060" 
    },
    { 
      name: "Rahman F.", 
      text: "Smart Travel provided a hassle-free experience. They managed everything, and I could simply enjoy my journey!", 
      stars: 5, 
      img: "https://img.freepik.com/free-photo/scientists-look-red-chemical-glass-laboratory-hand-handle-glasses_1150-19492.jpg?t=st=1726865044~exp=1726868644~hmac=c7ff296f61066deff015b0b618de018d6283081e2dd2781d6cac61c3fff737cb&w=900" 
    },
  ];

  const socialComments = [
    { 
      platform: "Facebook", 
      text: "Smart Travel made my trip unforgettable! Everything was handled perfectly. Highly recommend them to all my friends! 🙌✈️", 
      icon: "fab fa-facebook", 
      color: "bg-blue-600" 
    },
    { 
      platform: "Instagram", 
      text: "Smart Travel turned my dream vacation into reality! ✈️💫 Check out their services, it’s absolutely worth it! 📸🌍 #TravelGoals", 
      icon: "fab fa-instagram", 
      color: "bg-pink-600" 
    },
    { 
      platform: "Snapchat", 
      text: "Just got back from the best vacation thanks to Smart Travel! 🏝️📸 They handled everything so I could focus on fun! #NoStress #TravelVibes", 
      icon: "fab fa-snapchat", 
      color: "bg-yellow-400" 
    },
    { 
      platform: "LinkedIn", 
      text: "Had an amazing business trip, all managed by Smart Travel. Efficient, reliable, and stress-free. I couldn’t ask for more! ✈️💼 #SmartTravel #BusinessDoneRight", 
      icon: "fab fa-linkedin", 
      color: "bg-blue-700" 
    },
    { 
      platform: "Twitter", 
      text: "Just finished my best trip ever, all thanks to Smart Travel! They handled every detail flawlessly! 🛫🌍 #TravelSmart #Wanderlust", 
      icon: "fab fa-twitter", 
      color: "bg-blue-500" 
    },
  ];
  

  const renderStars = (stars) => {
    const totalStars = 5;
    return (
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => (
          <i
            key={index}
            className={`fa-star ${index < stars ? "text-yellow-400" : "text-gray-400"} fas`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-white gap-4 lg:flex-row justify-between p-8">
      {/* Left: User Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-2/3">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#1e1e4e] text-white p-6 rounded-3xl flex flex-col items-center text-center shadow-lg">
            <img
              src={review.img}
              alt={review.name}
              className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <h3 className="font-bold text-xl mb-2">{review.name}</h3>
            <p className="mb-4">{review.text}</p>
            {renderStars(review.stars)}
          </div>
        ))}
      </div>

      {/* Right: Social Comments */}
      <div className="mt-10 lg:mt-0 lg:w-1/3">
        <h2 className="text-3xl sc font-bold mb-6">Social Comment</h2>
        <div className="space-y-6">
          {socialComments.map((comment, index) => (
            <div key={index} className={`p-4 rounded-xl shadow-lg flex items-center ${comment.color}`}>
              <i className={`${comment.icon} text-white text-4xl mr-4`} />
              <div className="text-white">
                <p className="font-bold">{comment.platform}</p>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
