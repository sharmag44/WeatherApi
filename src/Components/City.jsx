import React from "react";
import "bootstrap";
import "../styles.css";

function City(props) {
  console.log(props.data);
  // console.log(props.data.main.temp);
  return (
    <div className="City">
      <div className="card ">
        <img
          className="card-img-top"
          src={`http://openweathermap.org/img/w/${
            props.data ? props.data.weather[0].icon : null
          }.png`}
          alt="Weather Report Icon"
          aria-hidden
        />
        <div className="card-body">
          <h3 className="card-title">
            Place:
            {props.data ? props.data.name : null}
          </h3>
          <h5 className="card-title">
            {" "}
            Today Report :{" "}
            {props.data ? props.data.weather[0].description : null}
          </h5>
          <p className="card-text">
            Temperature :{props.data ? props.data.main.temp : null} °C
          </p>
          <p className="card-text">
            Wind Speed :{props.data ? props.data.wind.speed : null} m/s
          </p>
          <p className="card-text">
            {" "}
            Country :{props.data ? props.data.sys.country : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default City;
