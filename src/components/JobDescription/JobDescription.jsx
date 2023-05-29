import React from 'react'
import './jobDescription.css';
import data from '../../data.json'
import { useParams, useState } from 'react-router';


const JobDescription = (props) => {

    let { id } = useParams();
    // const [position,setPosition]=React.useState("");
    /*
    let position="";
    let companyName="";
    let website="";
    let logo="";
    let logoBackground="";
    */
    let postedAt, contract, position, location, description, requirements, role;
    let requirementItems, roleItems = [];
    let newdata = {
        postedAt: "",
        contract: "",
        position: "",
        location: "",
        description: "",
        requirements: "",
        requirementItems,
        role: "",
        roleItems



    };

    // console.log(id);

    const retrievedData = data.filter(item => {
        if (item.id == id) {
            newdata = {
                postedAt: item.postedAt,
                contract: item.contract,
                position: item.position,
                location: item.location,
                description: item.description,
                requirements: item.requirements.content,
                requirementItems: item.requirements.items,
                role: item.role.content,
                roleItems: item.role.items


            }
            //return position=item.position;
            return newdata;
            //return setPosition(item.position);
        }
    });


    return (
        <div className={`jobDesctiption__container container ${props.theme}`}>
            <div className='jobDescription__header'>
                <div className='jobtype-info'>
                    <p>{newdata.postedAt}</p>
                    <span>&#8729;</span>
                    <p>{newdata.contract}</p>
                </div>
                <div className='main-jobDescription'>
                    <div className='position-location'>
                        <p className='job-title-description'>{newdata.position}</p>
                        <p className='job-location-description'>{newdata.location}</p>
                    </div>
                    <div className='company_applyButton btn__container'><button>Apply Now</button></div>

                </div>

            </div>
            <div className='job-details'>

                <p> {newdata.description}</p>
                <h1>Requirements</h1>
               
                <p>{newdata.requirements}</p>
                <div className='requirements-info'>
                <ul>
                    {newdata.requirementItems.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                </div>

                <h1>What Will You Do</h1>
              
                <p> {newdata.role}</p>
                <div className='requirements-info'>
                <ol>
                    {newdata.roleItems.map((item) => (
                        <li>{item}</li>
                    ))}
                </ol>
                </div>





            </div>


        </div>
    )
}

export default JobDescription