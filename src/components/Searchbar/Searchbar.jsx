import React, { useState, useEffect } from 'react';
import './searchbar.css'
import IconSearch from "../../assets/desktop/icon-search.svg"
import IconLocation from '../../assets/desktop/icon-location.svg'
import FilterIcon from '../../assets/mobile/icon-filter.svg';
import data from '../../data.json';
import { CardComponent } from '../CardComponent/CardComponent';
import { MainContent } from '../MainContainer/MainContent';
const postsPerPage = 12;
let arrayForHoldingPosts = [];


export const Searchbar = () => {
    const [searchText, setSearchText] = useState({
        company: "",
        location: "",
        isFulltime: false,
        contract: ""
    });

    const [jobs, setJobs] = useState(data);
    let [filteredData, setFilteredData] = useState(data);
    const [next, setNext] = useState(12);
    const [modal, setModal] = useState("none");
 
    const loopWithSlice = (start, end) => {
     const slicedPosts = data.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setFilteredData(arrayForHoldingPosts);
        console.log(end)
      };
    useEffect(() => {
        // console.log(searchText.isFulltime)

        loopWithSlice(0, postsPerPage);
        console.log(filteredData)

    },[])

    /*
        useEffect(() => {
    
            setSearchText(searchText);
    
            filteredData = data.filter(item => {
                if (item.company.toLowerCase() === searchText.toLowerCase()) {
                    setFilteredData(item);
                    console.log(item)
    
    
    
    
                }
    
    
    
                //console.log("data found");
            })
    
            /*
            filteredData=data.filter(item=>{return item.company.toLowerCase()===searchText.toLowerCase() })
     
         setFilteredData(filteredData);*/

    //   }, [filteredData]);


    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
      };

    const handleSearchChange = (event) => {
        const { name } = event.target;
        setSearchText(prevValue => ({
            ...prevValue,
            [name]: event.target.value
        }));

    }
    const handleModal = () => {
        setModal(prevValue => {
            if (prevValue === "block") return "none";
            if (prevValue === "none")
                return "block"
        });
    }
    const closeModal = () => {
        setModal("none");
    }


    const handleSubmit = () => {
        setModal("none");
        let updatedList = data;
        if (searchText.company) {
            updatedList = updatedList.filter(
              (item) => item.company.toLowerCase() === searchText.company.toLowerCase())
            ;
          }
      
          // Category Filter
          if (searchText.location) {
            updatedList = updatedList.filter(
              (item) => item.location === searchText.location
            );
          }

          if (searchText.isFulltime==true) {
            updatedList = updatedList.filter(
                (item) => item.contract === "Full Time"
              );

          
          }
          /*
          if (searchText.isFulltime==false) {
            updatedList = updatedList.filter(
                (item) => item.contract !== "Full Time"
              );

          
          }
          */

          //setJobs(updatedList);
          setFilteredData(updatedList)

        /*
        if (searchText.company == "" && searchText.location == "" && searchText.isFulltime == false) {
            setJobs(data);
            return;
        }
        

        console.log(searchText)
        */
        /*
        let contract = "";
        if (searchText.isFulltime == false)
            contract = "Part Time"
        if (searchText.isFulltime == true)
            contract = "Full Time"
*/

/*
        filteredData = data.filter(item => {
            if (searchText.company !== "" && searchText.location == "" && searchText.isFulltime == false) {
                if (item.company.toLowerCase() == searchText.company.toLowerCase()) {
                    return item

                }
            }
            if (searchText.location !== "" && searchText.company !== "") {
                return item.location.toLowerCase() == searchText.location.toLowerCase() && item.company == searchText.company.toLowerCase();
            }


            if (item.location.toLowerCase() == searchText.location.toLowerCase()) {
                return item;
                if (item.contract == searchText.contract) {
                    console.log(item + "eto")
                    return item.location.toLowerCase() == searchText.location.toLowerCase() && item.contract == searchText.contract;
                }
            }

            if (item.location.toLowerCase() == searchText.location.toLowerCase() && item.contract == searchText.contract) {
                return item.location.toLowerCase() == searchText.location.toLowerCase && item.contract == searchText.contract;

            }


            if (item.contract == searchText.contract) {
                return item;
            }
            //   return  item.company.toLowerCase() == searchText.company.toLowerCase();
            // return  item.location.toLowerCase() == searchText.location.toLowerCase();

            //  return item.company.toLowerCase() == searchText.company.toLowerCase() && item.location == searchText.location.toLowerCase()&&item.contract==searchText.contract
            // item.contract == searchText.contract;



            //console.log("data found");
        });
        //  console.log(searchText.location)
        //  setFilteredData(filteredData);
        setJobs(filteredData);
        console.log(jobs)
*/



    }

    const handleLocationChange = (event) => {
        const { name } = event.target;
        setSearchText(prevValue => ({
            ...prevValue,
            [name]: event.target.value
        }))
        //console.log(searchText.location)
    }
    const handleCheckChange = (event) => {
        const { name, checked } = event.target;
        setSearchText(prevValue => ({ ...prevValue, isFulltime: checked }))
     
        if (checked == true) {
            
            setSearchText(prevValue => ({ ...prevValue, contract: "Full Time" }));

        }
        if (checked == false) {
            setSearchText(prevValue => ({ ...prevValue, isFulltime: checked,contract:prevValue.contract }))
            //setSearchText(prevValue => ({ ...prevValue, contract: "Part Time" }));
        }

        console.log(searchText.contract);
    }

    return (
        <div>
            <div className='container searchbar__container'>
                <div className='search__field'><img src={IconSearch}></img> <input type="text" name="company" id="" onChange={handleSearchChange} placeholder='Filter by title,companies,expertise etc...' /></div>
                <div className='search__field location-field'><img src={IconLocation}></img>

                    <select name="location" onChange={handleLocationChange} id="" >
                        <option value="">Filter by location...</option>

                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Russia">Russia</option>
                        <option value="Japan">Japan</option>
                        <option value="Germany">Germany</option>
                        <option value="Singapore">Singapore</option>
                        <option value="New Zealand">New Zealand</option>

                    </select></div>
                <div className='search__fieldButton'>
                    <div className="fulltime-field">
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={searchText.isFulltime}
                            name='isFulltime'
                            onChange={handleCheckChange}
                        />
                        <label htmlFor="checkbox" className='checkbox-desktop'><span className='long-text'>Full Time Only</span> <span className="short-text">Full Time</span></label>
                        <div className='FilterIcon' onClick={handleModal}><img src={FilterIcon}></img></div>
                    </div>

                    <div className='searchButton__container'>
                        <button className='search-button' onClick={handleSubmit}>Search</button>
                        <button className='search-Icon' onClick={handleSubmit}><img className="icon-search-img"src={IconSearch} onClick={handleSubmit}></img></button>
                        {/*} The Modal */}
                        <div id="myModal" className="modal" style={{ display: modal }}>

                            {/* Modal content */}
                            <div className="modal-content">
                                <span className="close" onClick={closeModal} >&times;</span>

                                <div className='search__field location-modal'><img src={IconLocation}></img>

                                    <select name="location" onChange={handleLocationChange} id="" >
                                        <option value="">Filter by location...</option>

                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="New Zealand">New Zealand</option>

                                    </select></div>

                                <div className='fulltime-modal' >
                                    <input
                                        type="checkbox"
                                        id="checkboxModal"
                                        checked={searchText.isFulltime}
                                        name='isFulltime'
                                        onChange={handleCheckChange}
                                    />
                                    <label htmlFor="checkbox" className='labelModal'>Fulltime Only</label>

                                </div>
                                <div className='button-modal'> <button   className='search-button-modal' onClick={handleSubmit}>Search</button></div>

                                {console.log(modal)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <MainContent key={data.id} dataItem={filteredData} searchText={searchText.company} jobs={filteredData} />
           <div className='loadmore__container'>
       {arrayForHoldingPosts.length<data.length&&  <button onClick={handleShowMorePosts}>Load more</button>}
    
            </div>
          
        </div>
    )
}
