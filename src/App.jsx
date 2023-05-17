import './App.module.css';
import Header from './Components/Header';
import Title from './Components/Title';
import Grid from './Components/Grid';
import Person from './Components/Person';
// import CustomCarousel from "./Components/Carousel";
import Booking from "./Components/Booking";

function App() {
  return (
    <>
      <div className="grid place-items-center">
        <div className="w-11/12 max-w-11/12 min-h-full lg:max-w-7/12 lg:w-7/12 pt-10">
          <Header />
          <Title />
          <div className="min-h-full" style={{minHeight: "fit-content"}}>
            <Grid />
          </div>
          <Person />
          <Booking />
          <div className="pb-10">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
