import React from 'react'
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Carde from './components/Carde';
import Footar from './components/Footar';
import Products from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';


const App = () => {
  return (
    <BrowserRouter>
    
        <div ><Navbarr/></div>
        <div style={{width:'100%'}}>
            <div style={{width:'20%', float:'left'}}><Sidebar/></div>
            <div style={{width:'80%', float:'right'}}>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>}/>
                 <Route path="/Products" element={<Products/>}/>
                 <Route path="/Categories" element={<Categories/>} />
            </Routes>
            <Carde/>
            <Footar/>
            </div>
        </div>
    
    </BrowserRouter >
  )
}

export default App
