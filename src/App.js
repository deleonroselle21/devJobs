
import React, { useState, useEffect } from 'react';
import { MainContent } from './components/MainContainer/MainContent';
import Navbar from './components/Navbar/Navbar';
import { Searchbar } from './components/Searchbar/Searchbar';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import JobInfo from './pages/JobInfo';
function App() {
  const [theme, setTheme] = useState('light');
  const [checkboxValue,setCheckBox]=useState(false);

  
  
  const handleCheckBox=(event)=>{
    //setCheckBox(checkboxValue);
    setCheckBox(preValue=>event.target.checked)
   
    console.log(checkboxValue);
  }
  

  const toggleTheme = (event) => {

    setCheckBox(preValue=>event.target.checked)
    console.log(checkboxValue);

    if (checkboxValue) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    /*
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    */
    console.log(theme)
  };

  useEffect(() => {
    document.body.className = theme;

  }, [theme]);


  return (
    <HashRouter>
      <div>
    <Navbar theme={theme} handleTheme={toggleTheme} onChange={handleCheckBox} checked={checkboxValue} />
      <Routes>



        <Route path='/' element={<Home theme={theme} />}></Route>
        <Route path='/jobinfo/:id' element={< JobInfo theme={theme}/>}></Route>


        {/*
      <Route path="home" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="jobinfo" element={<JobInfo/>} />
        <Route path="*" element={<NoPage/>} />
       
      </Route>
  */}
      </Routes>
      </div>
    </HashRouter>


  );
}

export default App;
