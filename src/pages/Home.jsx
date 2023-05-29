import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { MainContent } from '../components/MainContainer/MainContent'

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [checkboxValue,setCheckBox]=useState();
  
  const handleCheckBox=(event)=>{
    
    setCheckBox(preValue=>!preValue)
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
    <div>
    <Navbar theme={theme} handleTheme={toggleTheme} onChange={handleCheckBox} checked={checkboxValue}/>
     <Searchbar theme={theme}/>
    {/* <MainContent />*/}
    </div>
  )
}

export default Home