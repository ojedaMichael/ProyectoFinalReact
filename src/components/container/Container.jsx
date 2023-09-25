import "./Container.css"


function Container({ data, dataForecast }) {
  if (!data || !dataForecast) {
    return <div>Cargando...</div>
}
    const celsius = data.main.feels_like - 273.15
    const temperature = parseFloat(celsius.toFixed(0))
    const humidity = data.main.humidity

  return (
    
    <>
        <div className="divContainer">
          <div className="cards">
            
            <div className="card">
              <h3>Tomorrow</h3>
              <div className="divImgCard">
                <img className="imgCard" src={`https://openweathermap.org/img/wn/${dataForecast.list[0].weather[0].icon}@2x.png`} ></img >

              </div>
              <div className="divSpan">
              <h3>{Math.trunc(dataForecast.list[0].main.temp_max - 273.15)} <h4>°C</h4> </h3>
              <h3>{Math.trunc(dataForecast.list[0].main.temp_min - 273.15)} <h4>°C</h4> </h3>
             
              </div>
            </div>
            
            <div className="card">
              <h3>{dataForecast.list[2].dt_txt.substr(0, 10)}</h3>
              <div className="divImgCard">
                <img className="imgCard" src={`https://openweathermap.org/img/wn/${dataForecast.list[2].weather[0].icon}@2x.png`} ></img >              
              </div>
              <div className="divSpan">
                <h3>{Math.trunc(dataForecast.list[2].main.temp_max - 273.15)} <h4>°C</h4> </h3>
                <h3>{Math.trunc(dataForecast.list[2].main.temp_min - 273.15)} <h4>°C</h4> </h3>
              </div>
            </div>
            
            <div className="card">
              <h3>{dataForecast.list[10].dt_txt.substr(0, 10)}</h3>
              <div className="divImgCard">
                <img className="imgCard"src={`https://openweathermap.org/img/wn/${dataForecast.list[10].weather[0].icon}@2x.png`} ></img >
              </div>
              <div className="divSpan">
              <h3>{Math.trunc(dataForecast.list[10].main.temp_max - 273.15)} <h4>°C</h4> </h3>
              <h3>{Math.trunc(dataForecast.list[10].main.temp_min - 273.15)} <h4>°C</h4> </h3>
              </div>
            </div>
            
            <div className="card">
              <h3>{dataForecast.list[18].dt_txt.substr(0, 10)}</h3>
              <div className="divImgCard">
                <img className="imgCard" src={`https://openweathermap.org/img/wn/${dataForecast.list[18].weather[0].icon}@2x.png`} ></img >
              </div>
              <div className="divSpan">
              <h3>{Math.trunc(dataForecast.list[18].main.temp_max - 273.15)} <h4>°C</h4> </h3>
              <h3>{Math.trunc(dataForecast.list[18].main.temp_min - 273.15)} <h4>°C</h4> </h3>
              </div>
            </div>
            
            <div className="card">
              <h3>{dataForecast.list[26].dt_txt.substr(0, 10)}</h3>
              <div className="divImgCard">
                <img className="imgCard" src={`https://openweathermap.org/img/wn/${dataForecast.list[26].weather[0].icon}@2x.png`} ></img >
                </div>
              <div className="divSpan">
              <h3>{Math.trunc(dataForecast.list[26].main.temp_max - 273.15)} <h4>°C</h4> </h3>
              <h3>{Math.trunc(dataForecast.list[26].main.temp_min - 273.15)} <h4>°C</h4> </h3>
              </div>
            </div>
            
           
          </div>
          <div>
            <div className="h2">
              <h2>Today’s Hightlights</h2>
            </div>
            <div>
              <div className="cardsInfo">
                <div className="cardLarge">
                  <h3 className="cardsInfoh3">wind status</h3>
                  <p className="cardsInfoH"> 5.24 <span className="feature-unit">mph</span></p>
                  <p><span id="wind-arrow" className=" material-symbols-outlined N">navigation</span>N</p>
                </div>
                <div className="cardLarge">
                  <h3>Humidity</h3>
                  <p> {humidity} <span className="feature-unit">%</span></p>
                  <div className="porcentaje">
                    <label className="labelProgres">
                      <h1>0</h1>
                      <h1>50</h1>
                      <h1>100</h1>
                    </label>
                    <progress id="file" max="100" value={humidity}></progress>
                    <label>%</label>
                  </div>
                 
                </div>
              </div>
              <div className="cardsInfo">
                <div className="cardMid">
                  <h3>Feel Like</h3>
                  <p> {temperature} <span className="feature-unit">°C</span></p>
                </div>
                <div className="cardMid">
                  <h3>Air Pressure</h3>
                  <p> 1016 <span className="feature-unit">mb</span></p>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
    </>
  
  )
}

export default Container