

import "./Modal.css"

function Modal({toggleModal, handleSubmit, handleClick}) {
  return (

    <div className='divModal'>
        <div className="divBotonCerrar">
            <button className="botonCerrar" onClick={toggleModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
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