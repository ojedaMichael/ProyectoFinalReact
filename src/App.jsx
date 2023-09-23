
import React, { useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import CurrentContainer from './components/currentContainer/CurrentContainer';
import Modal from './components/modal/Modal';
import useCurrent from './services/useCurrent';

function App() {
  const { dataCurrent, currentDate, dataForecast } = useCurrent();

  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  
  }

  return (
    <>
      <div>
      {isVisible && <Modal toggleModal={toggleModal} />}
      </div>
      <div className='divMain'>
       
        <CurrentContainer
          data={dataCurrent}
          currentDate={currentDate}
          toggleModal={toggleModal}
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
