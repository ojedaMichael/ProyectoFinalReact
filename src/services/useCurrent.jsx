import { useEffect, useState } from "react";


function useCurrent() {
    const [cityName, setCityName] = useState("london");
    const APIKEY1 = "5da38c0a7274e681169ae21b2869674a";
    const APIKEY2 = "dd02104e389c6561bd96f4e8abe4fef1";
    
    const [dataCurrent, setDataCurrent] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);
    const currentDate = new Date().toLocaleDateString();
  
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
        } catch (error) {
          console.error('Error al obtener datos de la API', error);
        }
      };
      
      getData();
    }, [cityName]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const citName = e.target[0].value.toLowerCase();
      setCityName(citName);
    }

    const handleClick = (e) => {
      const ciName = e.target.value;
      setCityName(ciName);
    }
    console.log(dataCurrent);
    return { dataCurrent, dataForecast, handleSubmit, handleClick, currentDate}
}
export default useCurrent