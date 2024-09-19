import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#070132]'>
    <div className='footer grid p-[35px]'>
    <div className='foots grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  text-white gap-[40px]'>
      <div className=''>
        {/* <img src="/Travel-smart-logo.png" className='w-[280px] h-[200px]' alt="" srcset="" /> */}
        <h1 className='text-5xl text-[#68C6C8] mb-[10px]'>Travel Smart</h1>
        <p>We are a user-friendly travel website that offers personalized trip recommendations, curated travel packages, and insightful guides. Whether you're seeking exotic destinations, Travel Smart helps you plan the perfect journey. With easy navigation and expert tips, it's your go-to platform for hassle-free, smart travel planning and unforgettable adventures.

</p>
        <div className='flex gap-6 mt-3'>
          <a href="https://x.com/aptechltd">
        <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">

        <i class="fa-brands fa-instagram"></i>
          </a>
        <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
      <div>
        <h1 className='text-2xl  text-[#68C6C8] mb-[10px]'>Contact Us</h1>
        <ul>
          <li>
    <b>Email</b>: info@travelsmart.ng
          </li>
          <li>
<b>Hours</b>: 9:00 am - 5:00 pm
          </li>
          <li>
<b>Phone</b>: +234 912 848 5866
          </li>
        </ul>
      </div>
      <div className='md:hidden sm:hidden lg:block'>
        <h1 className='text-2xl  text-[#68C6C8] mb-[10px]'>Links</h1>
        <ul>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
          <li>Enroll Now</li>
        </ul>
      </div>
    </div>
    <hr className='mt-[20px] mb-[20px]' />
    <p className='text-white text-center'>Copyright <i class="fa-regular fa-copyright"></i>  2024 Travel Smart</p>
    </div>
    </div>
  )
}

export default Footer
