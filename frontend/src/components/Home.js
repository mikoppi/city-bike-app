import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link className="home-journeys" to='/journeys'>
        
          <h1>Journeys</h1>
        
      </Link>
      <Link className="home-stations" to='/stations'>
        
          <h1>Stations</h1>
        
      </Link>
    </div>
  );
};

export default Home;
