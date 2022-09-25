import './App.module.css';
import Header from './Components/Header';
import Title from './Components/Title';
import Grid from './Components/Grid';
import Person from './Components/Person';
import Carousel from './Components/Carousel';
import Booking from './Components/Booking';
function App() {
  return (
    <>
    <div className='w-12/12 grid place-items-center sm:content-center'>
      <div className='w-8/12 py-10 sm:w-fit'>
        <Header></Header>
        <Title></Title>
        <Grid></Grid>
        <Person></Person>
        <Booking></Booking>
        <Header></Header>
      </div>
    </div>
    </>
  );
}

export default App;
