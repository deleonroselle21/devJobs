import React, { useState, useEffect } from 'react';
import './searchbar.css'
import IconSearch from "../../assets/desktop/icon-search.svg"
import IconLocation from '../../assets/desktop/icon-location.svg'
import data from '../../data.json';
import { CardComponent } from '../CardComponent/CardComponent';
import { MainContent } from '../MainContainer/MainContent';


export const Searchbar = () => {
    const [searchText,setSearchText]=useState("");
    let [filteredData,setFilteredData]=useState([{}]);
    useEffect(() => {
        // Update the document title using the browser API
        setSearchText(searchText);
        
        filteredData= data.filter(item=>{if(item.company.toLowerCase()===searchText.toLowerCase()){
             setFilteredData(item);
             console.log(item)
             
            
             
            
        }
           
            //console.log("data found");
        })
    
        
      },[searchText]);
      console.log(filteredData);

    const handleSearchChange=(event)=>{
        setSearchText(event.target.value);
   
     

       
    }
  return (
    <div>
    <div className='container searchbar__container'>
        <div className='search__field'><img src={IconSearch}></img> <input type="text" name="" id="" placeholder='Filter by title,companies,expertise etc...' onChange={handleSearchChange}/></div>
        <div className='search__field'><img src={IconLocation}></img> <input type="text" name="" id="" placeholder='Filter by location...' /></div>
        <div className='search__fieldButton'>
    
        <input
          type="checkbox"
          id="checkbox"
        />
       <label htmlFor="checkbox">Fulltime Only</label> 
    <div className='searchButton__container'>
           <button className='search-button'>Search</button>
           </div>
        </div>
    </div>
    

<MainContent dataItem={filteredData} searchText={searchText}/>
</div>
  )
}
