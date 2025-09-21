import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import PhotoEditor from './components/PhotoEditor';

const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>        
        <Route path='/' element={<PhotoEditor/>}/>
        <Route path='/PhotoEditor/' element={<PhotoEditor/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
