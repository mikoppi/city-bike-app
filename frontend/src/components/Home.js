import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link className="home-journeys" to='/journeys'>
        <div>
          <h1>Journeys</h1>
        </div>
      </Link>
      <Link className="home-stations" to='/stations'>
        <div >
          <h1>Stations</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
