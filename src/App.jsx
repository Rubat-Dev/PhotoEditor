import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PhotoEditot from './Components/PhotoEditot';

const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>        
        <Route path='/' element={<PhotoEditot/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
