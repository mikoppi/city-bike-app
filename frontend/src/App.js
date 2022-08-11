import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='main'>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Journeys/> }
          />
        </Routes>
    </div>
  )
}

export default App