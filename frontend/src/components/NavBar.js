import React from 'react'
import { Link, NavLink } from "react-router-dom"
import {GiDutchBike} from 'react-icons/gi'


const NavBar = () => {

  let activeStyle = {
    backgroundColor: "#6491f8",
    
  };

  return (
    <nav className='nav'>
      <Link to='/' className='site-name'>{<GiDutchBike size={50}/>}||  HSL city bikes</Link>
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
