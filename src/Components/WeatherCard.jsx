import React, { useEffect, useState } from "react";
import "../styles.css";
import "bootstrap";
import City from "./City";
function WeatherCard() {
  const [places, setPlaces] = useState("");
  const [location, setLocation] = useState("Mohali");

  useEffect(() => {
    const unit = "metric";
    const appKey = "67331d1890679dd94c3f0344dcb72c31";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appKey}&units=${unit}`
    )
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <div className="container-fluid">
      <div className="search">
        <input
          type="text"
          value={location}
          onInput={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="location_input form-control"
        />
        <City data={places} tile />
      </div>
    </div>
  );
}
export default WeatherCard;

// https://api.openweathermap.org/data/2.5/weather?q=Mohali&appid=67331d1890679dd94c3f0344dcb72c31&units=metric
