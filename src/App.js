import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home';
import Emulsion from './Pages/ClustersPages/Emulsion';
import Informatica from './Pages/ClustersPages/Informatica';
import Robotics from './Pages/ClustersPages/Robotics';
import AllEvents from './Pages/EventsPages/AllEvents';
import Day1 from './Pages/EventsPages/Day1';
import Day2 from './Pages/EventsPages/Day2';
import Day3 from './Pages/EventsPages/Day3';
import ContactUs from './Pages/ContactUs';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Emulsion' element={<Emulsion />} />
        <Route path='/Informatica' element={<Informatica />} />
        <Route path='/Robotics' element={<Robotics />} />
        <Route path='/AllEvents' element={<AllEvents />} />
        <Route path='/Day1' element={<Day1 />} />
        <Route path='/Day2' element={<Day2 />} />
        <Route path='/Day3' element={<Day3 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

