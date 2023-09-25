import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container/Container';
import CurrentContainer from './components/currentContainer/CurrentContainer';
import Modal from './components/modal/Modal';

function App() {
  const [cityName, setCityName] = useState("london");
  const APIKEY1 = "5da38c0a7274e681169ae21b2869674a";
  const APIKEY2 = "dd02104e389c6561bd96f4e8abe4fef1";
  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);
  const [dataGeo, setDataGeo] = useState(null);
  const currentDate = new Date().toLocaleDateString();
  const [isVisible, setIsVisible] = useState(false);
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const toggleModal = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY1}`);
        if (res1.ok) {
          const datos1 = await res1.json();
          setDataCurrent(datos1);
        } else {
          throw new Error(`Error en la solicitud API 1: ${res1.status}`);
        }

        const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY2}`);
        if (res2.ok) {
          const datos2 = await res2.json();
          setDataForecast(datos2);
        } else {
          throw new Error(`Error en la solicitud API 2: ${res2.status}`);
        }

        const res3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY2}`);
        if (res3.ok) {
          const datos3 = await res3.json();
          setDataGeo(datos3);
        } else {
          throw new Error(`Error en la solicitud API 3: ${res3.status}`);
        }
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    getData();
  }, [cityName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const citName = e.target[0].value.toLowerCase();
    setCityName(citName)
  }
  const handleClick = (e) => {
    const ciName = e.target.value;
    setCityName(ciName);
  };

  const geolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude);
      setCityName(dataGeo.name)
    })
    
  }

  return (
    <>
      <div>
        {isVisible && <Modal 
        toggleModal={toggleModal}
        handleSubmit={handleSubmit}
        handleClick={handleClick} />}
      </div>
      <div className='divMain'>
        <CurrentContainer
          data={dataCurrent}
          currentDate={currentDate}
          toggleModal={toggleModal}
          geolocation={geolocation}
        />

        <Container
          data={dataCurrent}
          dataForecast={dataForecast}
        />
      </div>
    </>
  );
}

export default App;
