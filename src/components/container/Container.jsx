import "./Container.css"
import shower from '../../assets/Shower.png';

function Container({ data, dataForecast }) {
  if (!data) {
    return <div>Cargando...</div>
}
    const celsius = data.main.feels_like - 273.15
    const temperature = parseFloat(celsius.toFixed(0))
    const humidity = data.main.humidity
    const days = dataForecast.list[0].dt_txt
  return (
    
    <>
        <div className="divContainer">
          <div className="cards">
            
            <div className="card">
              <h3>{days}</h3>
              <div className="divImgCard">
                <img className="imgCard" src={shower} />
              </div>
              <div className="divSpan">
              <span>{dataForecast.list[0].dt_txt}<span>18 °C</span></span>
              </div>
            </div>
            
            <div className="card">
              <h3>tomorrow</h3>
              <div className="divImgCard">
                <img className="imgCard" src={shower} />
              </div>
              <div className="divSpan">
                <span>16 °C<span>18 °C</span></span>
              </div>
            </div>
            
            <div className="card">
              <h3>tomorrow</h3>
              <div className="divImgCard">
                <img className="imgCard" src={shower} />
              </div>
              <div className="divSpan">
              <span>16 °C <span>18 °C</span></span>
              </div>
            </div>
            
            <div className="card">
              <h3>tomorrow</h3>
              <div className="divImgCard">
                <img className="imgCard" src={shower} />
              </div>
              <div className="divSpan">
                <span>16 °C <span>18 °C</span></span>
                
              </div>
            </div>
            
            <div className="card">
              <h3>tomorrow</h3>
              <div className="divImgCard">
                <img className="imgCard" src={shower} />
              </div>
              <div className="divSpan">
              <span>16  °C <span>18  °C</span></span>
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
                    <label >0     50    100 </label>
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