
import React from 'react';
import Navbarr from '../src/components/Navbarr';
import Carasol from './components/Carasol';
import Carde from './components/Carde';

import Footar from './components/Footar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
const App = () => {
  return (
   
   <BrowserRouter>
    <Navbarr/>
   <Routes>
      <Route path="/Home" element={<Home/>} />
       <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
   </Routes>
   <Carasol/>
       <Carde/>
       <Footar/>
   </BrowserRouter>
  
  )
}


export default App;
