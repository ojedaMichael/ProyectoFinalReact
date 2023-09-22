
import './App.css'
import Container from './components/container/Container'
import CurrentContainer from './components/currentContainer/CurrentContainer'
import useCurrent from './services/useCurrent'


function App() {
  const { dataCurrent, currentDate, dataForecast, handleSubmit} = useCurrent()
  return (
    <>
      <div className='divMain'>
        <CurrentContainer 
        data={dataCurrent} 
        currentDate={currentDate} />

        <Container 
        data={dataCurrent}
        dataForecast={dataForecast} />
       
      </div>
    </>
  );
}

export default App;
