import React from 'react';
import './jobInfoComponent.css'
import { useParams,useState } from 'react-router';
import data from '../../data.json'
import JobDescription from '../JobDescription/JobDescription';

const JobInfoComponent = (props) => {
    let {id} =useParams();
   // const [position,setPosition]=React.useState("");
   /*
   let position="";
   let companyName="";
   let website="";
   let logo="";
   let logoBackground="";
   */
  let position,companyName,website,logo,logoBackground;
   let newdata={
        position:"",
        companyName:"",
        website:"",
        logo:"",
        logoBackground:""

   };
   // console.log(id);

   const retrievedData= data.filter(item=>{if(item.id==id){
         newdata={
            position:item.position,
            companyName:item.company,
            website:item.website,
            logo:"../../"+item.logo,
            logoBackground:item.logoBackground


        }
   //return position=item.position;
   return newdata;
   //return setPosition(item.position);
   } });
   console.log(retrievedData);
   console.log(position);

    
  return (

    <div className='JobInfoComponent__container'>
        <div className='company-name' style={{backgroundColor:newdata.logoBackground}}><img src={newdata.logo} alt="logo" /></div>
        <div className='jobinfo-details'>
            <p className='company-title'>{newdata.companyName}</p>
            <p className='company-site'>{newdata.website}</p>
        </div>
        <div className='company-link'><button>Company Site</button></div>

    </div>
  )
}

export default JobInfoComponent