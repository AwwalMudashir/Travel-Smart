import React from 'react'
import './About.css'

const AboutKits = () => {
  return (
    <div>
      <div className="relative w-full h-auto bg-white pb-[50px]">

  <div className="flex flex-col-reverse md:flex-row justify-center items-center pt-4 md:pt-24 mx-4 md:mx-20 gap-8">

    <div className="md:w-1/2 text-center md:text-left">
      <p className="text-lg md:text-2xl text-black capitalize">
        At <span className="uppercase font-bold">Smart Travel</span>, we make your journeys effortless and exciting. From booking to destination, we provide personalized travel solutions to fit your needs. Whether it's a relaxing vacation or an adventurous trip, we ensure a smooth and memorable experience. Let us handle the details so you can travel smart!
      </p>
    </div>

    <div className="md:w-1/2">
      <img
        className="w-full h-auto rounded-lg"
        src="/smart.jpg"
        alt="Placeholder"
      />
    </div>
  </div>

  <div className="left-0 right-0 mx-auto text-center text-black text-5xl font-bold capitalize mt-5 md:mt-10">
    Our Values
  </div>
  <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20">
    <div className="text-center">
      <img
        className="mx-auto mb-4 w-[231px] h-[192px] rounded-lg"
        src="/Customer-centric.jpg"
        alt="Customer-Centric"
      />
      <h3 className="text-xl font-bold text-black">Customer-Centric</h3>
      <p className="text-sm text-black font-light mt-2">
        We prioritize our customers’ needs by offering personalized, seamless travel experiences that make every trip memorable.
      </p>
    </div>

    <div className="text-center">
      <img
        className="mx-auto mb-4 w-[231px] h-[192px] rounded-lg"
        src="Innovation.jpg"
        alt="Innovation"
      />
      <h3 className="text-xl font-bold text-black">Innovation</h3>
      <p className="text-sm text-black font-light mt-2">
        We embrace cutting-edge technology and creative solutions to ensure hassle-free travel planning and smart solutions for every journey.
      </p>
    </div>

    {/* Value 3 */}
    <div className="text-center">
      <img
        className="mx-auto mb-4 w-[231px] h-[192px] rounded-lg"
        src="Integrity.jpg"
        alt="Integrity"
      />
      <h3 className="text-xl font-bold text-black">Integrity</h3>
      <p className="text-sm text-black font-light mt-2">
        We operate with transparency, honesty, and reliability, building trust with our clients at every step of their travel experience.
      </p>
    </div>

    {/* Value 4 */}
    <div className="text-center">
      <img
        className="mx-auto mb-4 w-[231px] h-[192px] rounded-lg"
        src="excellence.jpg"
        alt="Excellence"
      />
      <h3 className="text-xl font-bold text-black">Excellence</h3>
      <p className="text-sm text-black font-light mt-2">
        We are committed to delivering the highest quality in service, continuously improving to exceed our customers' expectations.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutKits
