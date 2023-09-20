import "./CurrentContainer.css"
import shower from '../../assets/Shower.png';

function CurrentContainer() {
  return (
    <>
     <div className='divCurrentContainer'>
        <div className="divInput">
           <button className="botonSearch">search for places</button>
           <button className="botonLocation"><span className="material-symbols-outlined">my_location</span></button> 
        </div>
        <div className="divCurrententDisplay">
            <div className="divCurrent">
                <div className="divImg">
                    <img className ="currentImg" src={shower} alt="" />
                </div>
                <div className="divTemp">
                    <h1 className="currentTemperature">20 <span>°F</span></h1>
                </div>
                <h2 className="state">clouds</h2>
            </div>
            <div className="currentDate">
               <h3 className="date">
                    <pre>Today • Mon, 18 Sep</pre>
                </h3>
            </div>
            <div className="divData">
                <h3 className="DataLocation">
                        <span className="material-symbols-outlined location"> location_on</span>
                        Talca
                </h3>
            </div>
        </div>
       
     </div>
    </>
   
  )
}

export default CurrentContainer