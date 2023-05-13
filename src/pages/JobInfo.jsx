import React from 'react'
import Footer from '../components/Footer/Footer';
import JobInfoComponent from '../components/HeaderJobInfo/JobInfoComponent';
import JobDescription from '../components/JobDescription/JobDescription';
import Navbar from '../components/Navbar/Navbar';


const JobInfo = () => {
  return (
    <div>
        <Navbar/>
        <JobInfoComponent title="anoba"/>
        <JobDescription/>
        <Footer/>

    </div>
  )
}

export default JobInfo;