import React from 'react'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {

  let activeStyle = {
    backgroundColor: "#1b2838",
    
  };

  return (
    <nav className='nav'>
      <Link to='/' className='site-name'>Helsinki city bikes</Link>
      <ul>
        <li>
          <NavLink
              to="/journeys"
              className='router-link'
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              Journeys
          </NavLink>
        </li>
        <li>
          <NavLink
              to="/stations"
              className='router-link'
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
              >
              Stations
          </NavLink>
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar
