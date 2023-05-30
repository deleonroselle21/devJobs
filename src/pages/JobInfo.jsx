import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer/Footer';
import JobInfoComponent from '../components/HeaderJobInfo/JobInfoComponent';
import JobDescription from '../components/JobDescription/JobDescription';
import Navbar from '../components/Navbar/Navbar';


const JobInfo = (props) => {
/*
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
    
    console.log(theme)
  };
  

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  */
  return (
    <div>
     {/*   <Navbar theme={theme} handleTheme={toggleTheme} onChange={handleCheckBox} checked={checkboxValue}/>*/}
        <JobInfoComponent title="anoba" theme={props.theme}/>
        <JobDescription theme={props.theme}/>
        <Footer theme={props.theme}/>

    </div>
  )
}

export default JobInfo;