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
    <div className='grid place-items-center'>
      <div className='w-8/12 py-10'>
        <Header></Header>
        <Title></Title>
        <Grid></Grid>
        <Person></Person>
      </div>
    </div>
    <div>
      <Carousel></Carousel>
    </div>
    <div className='mt-[80vh] grid place-items-center'>
      <div className='w-8/12 py-10'>
        <Booking></Booking>
        <Header></Header>
      </div>
    </div>
    </>
  );
}

export default App;
