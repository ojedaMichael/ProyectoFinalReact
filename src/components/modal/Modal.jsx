
import useCurrent from "../../services/useCurrent"
import "./Modal.css"

function Modal({toggleModal}) {
  const { handleSubmit, handleClick } = useCurrent()
  return (

    <div className='divModal'>
        <div className="botonCerrar">
            <button onClick={toggleModal}>cerrar</button>
        </div>
        <div className="divInput"> 
        <form onSubmit={handleSubmit}>
            <input placeholder="search" className="inputText" type="text" />
            <button className="botonInput" type="submit">search</button>
        </form>
        </div>
        <div className="divBotons">
            <button className="boton1" onClick={handleClick} value="london">london</button>
            <button className="boton1" onClick={handleClick} value="paris">paris</button>
        </div>
        
    </div>
  )
}

export default Modal