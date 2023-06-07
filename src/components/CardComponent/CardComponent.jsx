import React from 'react'
import { Link } from 'react-router-dom'
import './cardComponent.css'
import '../../index.css'
import image from '../../assets/logos/officelite.svg'

import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const CardComponent = (props) => {
    const navigate = useNavigate();
   // console.log("logoto"+props.logo)
   const {logo}=props;
   console.log(logo)
    
    /*
    const StyledLink = styled(Link)`
  
    text-decoration: none;
  
  `;
*/
  const handleClick =()=>{
  navigate(`/jobinfo/${props.id}`);
  console.log("logo"+props.id);
  }
/*
  const IMG = (imgName) => {
    return require (`../ assets / images / $ {imgName}`)
  }
  */
  
  let imageurl="/assets/logos/"+logo;
  console.log(imageurl)
  return (
 
    <div className={`card__container ${props.theme}`} onClick={handleClick}>
        <div className='logo__container' style={{backgroundColor:props.logoBackground}}>
    
        <img src={require('../../assets/logos/'+logo)}></img>
         {/*  <img src='../../assets/logos/officelite.svg'></img>*/}
        </div>
        <div className='job__information'>
            <div className='jobtype-info'>
                <p>{props.postedAt}</p>
                <span>&#8729;</span>
                <p>{props.contract}</p>
            </div>
            <h1 className='job-title'>{props.position}</h1>
            <p className='job-company'>{props.company}</p>
           
        </div>
        <p className='job-country'>{props.location}</p>
       

    </div>

  )
}
