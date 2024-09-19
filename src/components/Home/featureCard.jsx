import React from 'react'
import './home.css'

const FeatureCard = (props) => {
  return (
    <div>
      <div className="pb-3 bg-[#070132] fcard">
  <img
    className="w-full h-[211px] rounded-t-[20px]"
    src={props.img}
    alt="Location Image"
  />

<div className='p-[10px]'>
<div className="flex items-center justify-center w-[139px]  h-[36px] p-2 border border-white rounded-[20px] mt-4">
    <span className="text-white text-[13px] font-['Inter'] font-normal">
     {props.feat}
    </span>
  </div>

  <h3 className="text-white text-[20px] font-['Sora'] font-normal mt-2">
   {props.name}
  </h3>

  <p className="w-[100%] fdesc text-white text-[12px] font-['Inter'] mt-4">
   {props.description}
  </p>

  <div className="flex items-center justify-center w-[128px] h-[39px] p-2 bg-[#68C6C8] rounded-[10px] mt-4">
    <button className="text-white text-[15px] font-['Sora'] cursor-pointer font-normal">
      See more
    </button>
  </div>
</div>
  
</div>

    </div>
  )
}

export default FeatureCard
