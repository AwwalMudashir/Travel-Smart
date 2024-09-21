import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Trip from './Trip Catalog/Trip'
import DestinationDetails from './DestinationDetails'
import Contact from './Contact/Contact'
import Review from './Review/Review'

const Display = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/trip-catalog' element={<Trip/>} />
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='/tour-review' element={<Review/>} />

      <Route path="/destination/:id" element={<DestinationDetails />} />

      {/* <Route path='/courses/Accp' element={<DisplayAccp/>} /> */}
      {/* <Route path='/courses/Acns' element={<DisplayAcns/>} /> */}
    </Routes>
  </div>
  )
}

export default Display
