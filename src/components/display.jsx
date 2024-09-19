import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'

const Display = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      {/* <Route path='/about' element={<Accp/>} /> */}
      {/* <Route path='/courses/Accp' element={<DisplayAccp/>} /> */}
      {/* <Route path='/courses/Acns' element={<DisplayAcns/>} /> */}
    </Routes>
  </div>
  )
}

export default Display
