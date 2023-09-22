
import "./Modal.css"

function Modal({fnSubmit, fnToggle}) {
 
  return (
    <div className='divModal'>
        <div>
        <form onSubmit={fnSubmit}>
            <input className="inputTex" type="text" />
            <button  className="botonImput" type="submit">search</button>
            <button onClick={fnToggle}>cerrar</button>
        </form>
        </div>
        <div>
            <button className="boton1"  value="london">london</button>
            <button className="boton1"  value="paris">paris</button>
        </div>
        
    </div>
  )
}

export default Modal