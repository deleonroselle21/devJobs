import React, { useState, useEffect } from 'react';
import './mainContent.css'
import { CardComponent } from '../CardComponent/CardComponent'
import data from '../../data.json'
export const MainContent = (props) => {

const [displayData,setDisplayData]=useState(data);
useEffect(()=>{

setDisplayData(props.dataItem);
console.log("hello");

},[props.dataItem])
  console.log(props.dataItem);
  return (

    <div className='MainContent__container'>

        {props.searchText===""?data.map(item=> <CardComponent key={item.id} id={item.id} logo={item.logo} company={item.company} logoBackground={item.logoBackground} position={item.position} postedAt={item.postedAt} contract={item.contract} location={item.location} />):[displayData].map(item=> <CardComponent key={item.id} id={item.id} logo={item.logo} company={item.company} logoBackground={item.logoBackground} position={item.position} postedAt={item.postedAt} contract={item.contract} location={item.location} />)}

       
      {/* {[displayData].map(item=> <CardComponent key={item.id} id={item.id} logo={item.logo} company={item.company} logoBackground={item.logoBackground} position={item.position} postedAt={item.postedAt} contract={item.contract} location={item.location} />)}*/}
       
      
    </div>
  )
}
