import React from 'react'
import './home.css'
import features from '../JSON/featured'
import FeatureCard from './featureCard'

const Featured = () => {
  const feats = features.map((feat)=>{
    return <FeatureCard {...feat}/>
  })
  return (
    <div className='featured bg-white pl-[2%] pr-[2%] pt-[40px] text-4xl pb-[50px]'>
      <h1>Our <span className='text-[#68C6C8] font-bold'>Featured</span> Destinations</h1>
      <div className='flex gap-6 feats'>
      {feats}
      </div>
    </div>
  )
}

export default Featured
