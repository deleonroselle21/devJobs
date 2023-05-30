import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { MainContent } from '../components/MainContainer/MainContent'

const Home = (props) => {
 /*
  useEffect(() => {
    document.body.className = props.theme;

  }, [props.theme]);
  */
  return (
    <div>
   {/* <Navbar theme={theme} handleTheme={toggleTheme} onChange={handleCheckBox} checked={checkboxValue}/>*/}
     <Searchbar theme={props.theme}/>
    {/* <MainContent />*/}
    </div>
  )
}

export default Home