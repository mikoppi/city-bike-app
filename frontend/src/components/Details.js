import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Details = ({ item }) => {
  return (
    <div className="details">
      <div className="details-text">
        <h2>{item.Name}</h2>
        <p> Address: {item.Osoite}</p>
        <p> City: {item.Kaupunki}</p>
        <p> Operator: {item.Operaattor}</p>
        <p> Capacity: {item.Kapasiteet} bikes</p>
      </div>
      <div className="map">
        <MapContainer
          center={[item.y, item.x]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[item.y, item.x]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Details;
