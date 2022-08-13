import React, { useState, useEffect } from "react";
import Details from "./Details";
import { Circles } from "react-loader-spinner";

const StationItem = ({ item }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getDetails();
  }, []);

  const showDetails = () => {
    setDetailsOpen((prevState) => !prevState);
  };

  const getDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/details?station=${item.ID}`);
      const data = await response.json();
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="station-item">
      <button
        className={`detailbutton-${detailsOpen ? "open" : "closed"}`}
        onClick={showDetails}
      >
        {loading ? "Loading..." : item.Name}
      </button>
      <div className="details-wrapper">
        <>
          {detailsOpen && !loading ? (
            <Details item={item} details={details} loading={loading} />
          ) : null}
        </>
      </div>
    </div>
  );
};

export default StationItem;
