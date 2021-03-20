import React from 'react';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import peopleicon from '../../images/peopleicon.png';
import './ResultTemplate.css';
const ResultTemplate = (props) => {
    console.log(props);
    const {capacity,cost,typeimage,peopleicon,type}=props.trip;


    return (
        <div className="result-template">
            <img className="icon" src={typeimage} alt=""/>
            <h5 style={{marginLeft:'5%',marginRight:'5%',marginTop:'3%'}}>{type}</h5>
            <img className="people-icon" src={peopleicon} alt=""/>
            <h5 style={{marginRight:'5%',marginTop:'3%'}}>{capacity}</h5>
            <h5 style={{marginLeft:'5%',marginRight:'5%',marginTop:'3%'}}>${cost}</h5>
        </div>
    );
};

export default ResultTemplate;