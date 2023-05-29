import React from 'react'
import { useParams } from 'react-router-dom';
import './footer.css'
import data from '../../data.json'

const Footer = (props) => {
    let { id } = useParams();

    let position, companyName;
    let newdata = {
        position: "",
        companyName: "",


    };


    const retrievedData = data.filter(item => {
        if (item.id == id) {
            newdata = {
                position: item.position,
                companyName: item.company,



            }
            //return position=item.position;
            return newdata;
            //return setPosition(item.position);
        }
    });
    return (
        <section className={`footer__container ${props.theme}`}>
            <div className='footer-details'>
                <div className='company-details'>
                    <p className='footer-position'>{newdata.position}</p>
                    <p className='footer-company'>{newdata.companyName}</p>
                </div>
                <div className='btn__container'>
                    <button>Apply Now</button>
                </div>
            </div>

        </section>

    )
}

export default Footer