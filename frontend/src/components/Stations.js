import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import StationItem from "./StationItem";

const Stations = () => {
  const [list, setList] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setPage(1);
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await fetch(`${API_URL}/stations?page=${page}&limit=20`);
      const stations = await response.json();
      setList(stations);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changePage = async (change) => {
    setLoading(true);
    if (page + change <= 0) {
      setLoading(false);
    } else {
      setPage(page + change);
      setLoading(true);
      const response = await fetch(
        `${API_URL}/stations?page=${page + change}&limit=20`
      );
      const data = await response.json();
      setList(data);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (searched === "") return;
    try {
      const response = await fetch(`${API_URL}/search?station=${searched}`);
      const data = await response.json();

      setList(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearched(value);
  };

  return (
    <div className="stations">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search">Search a station: </label>
        <input type="text" id="search" onChange={(e) => handleChange(e)} />
        <input type="submit" value="Submit" />
        <button onClick={fetchStations}> Show all</button>
      </form>

      {loading || list.results.length === 1 ? (
        <div className="search"></div>
      ) : (
        <div className="pagination">
          {page === 1 ? null : (
            <button onClick={() => changePage(-1)}>&laquo;</button>
          )}
          <p>
            Page {page} of {list.last}
          </p>
          {page === parseInt(list.last) ? null : (
            <button onClick={() => changePage(1)}>&raquo;</button>
          )}
        </div>
      )}
      {loading ? <Circles color="#00BFFF" height={80} width={80} /> : null}
      {loading
        ? null
        : list.results.map((item, index) => (
            <StationItem key={index} item={item} />
          ))}

      {loading || list.results.length === 1 ? null : (
        <div className="pagination">
          {page === 1 ? null : (
            <button onClick={() => changePage(-1)}>&laquo;</button>
          )}
          <p>
            Page {page} of {list.last}
          </p>
          {page === parseInt(list.last) ? null : (
            <button onClick={() => changePage(1)}>&raquo;</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stations;
