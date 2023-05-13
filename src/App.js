
import React from 'react';
import { MainContent } from './components/MainContainer/MainContent';
import Navbar from './components/Navbar/Navbar';
import { Searchbar } from './components/Searchbar/Searchbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import  NoPage  from './pages/NoPage';
import JobInfo from './pages/JobInfo';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>



    <Route path='/' element={<Home />}></Route>
    <Route  path='/jobinfo/:id' element={< JobInfo />}></Route>
    

      {/*
      <Route path="home" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="jobinfo" element={<JobInfo/>} />
        <Route path="*" element={<NoPage/>} />
       
      </Route>
  */}
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
