import "./CurrentContainer.css"
import clear from '../../assets/clear.png';
import location from '../../assets/myLocation.png';

function CurrentContainer() {
  return (
    <>
     <div className='divCurrentContainer'>
        <div className="divInput">
            <input type="text" />
            <span className="material-symbols-outlined">my_location</span>
        </div>
        <div>

        </div>
        <div className="divCurrent">
            <img className="currentImg" src={clear} alt="" />

        </div>
     </div>
    </>
   
  )
}

export default CurrentContainer