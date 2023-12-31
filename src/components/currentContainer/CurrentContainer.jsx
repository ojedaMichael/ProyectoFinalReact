import React, { useState } from "react";
import "./CurrentContainer.css";
import shower from "../../assets/Shower.png";

function CurrentContainer({ data, currentDate, toggleModal, geolocation }) {
  

  if (!data) {
    return <div>Cargando...</div>;
  }

  const celsius = data.main.temp - 273.15;
  const temperature = parseFloat(celsius.toFixed(0));
  const weatherDescription = data.weather[0].description;
  const location = data.name;
 
  return (
    <>
      <div className="divCurrentContainer">
        <div className="divInput">
          <button onClick={toggleModal} className="botonSearch">
            search for places
          </button>
          <button onClick={geolocation} className="botonLocation">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>
        <div className="divCurrententDisplay">
          <div className="divCurrent">
            <div className="divImg">
              <img className="currentImg" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
            </div>
            <div className="divTemp">
              <h1 className="currentTemperature">
                {temperature} <span>°c</span>
              </h1>
            </div>
            <h2 className="state">{weatherDescription}</h2>
          </div>
          <div className="currentDate">
            <h3 className="date">Today • {currentDate}</h3>
          </div>
          <div className="divData">
            <h3 className="DataLocation">
              <span className="material-symbols-outlined location">
                location_on
              </span>
              {location}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentContainer;
