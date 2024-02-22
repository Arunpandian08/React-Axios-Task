import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Create from './components/Create';
import User from './components/User';

const App = () => {

  // managing state for storing individual id and sending it as a props to user and edit components
  const[id,setId]=useState(0)

  
  return (
    <div>
      {/* Created React Router with navigation path with respected elements */}
       <BrowserRouter>
       <div>
        {/* Created Navbar */}
        <Navbar />  
       </div>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<User setId={setId}/>}/>
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;