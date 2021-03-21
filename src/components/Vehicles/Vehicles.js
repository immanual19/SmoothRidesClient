import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Vehicles.css';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
const Vehicles = () => {
  const history=useHistory();
  const bikeInfo=fakeData.find(vehicle=>vehicle.bktype==='bike');
  const carInfo=fakeData.find(vehicle=>vehicle.crtype==='car');
  const busInfo=fakeData.find(vehicle=>vehicle.bstype==='bus');
  const trainInfo=fakeData.find(vehicle=>vehicle.trtype==='train');
  const {bkname,bktype,bkimage}=bikeInfo;
  const {crname,crtype,crimage}=carInfo;
  const {bsname,bstype,bsimage}=busInfo;
  const {trname,trtype,trimage}=trainInfo;
  const choosedVehicle=(vType)=>{
    const url=`/searchvehicle/${vType}`;
    history.push(url);
  }
    return (
        <div className="main-body">
        <div className="vehicle-card-container">
        <Link to={`/searchvehicle/${bktype}`} style={{textAlign:'center',color:'black',textDecoration:'none'}} onClick={()=>choosedVehicle(bktype)}>
        <Card style={{ width: '18rem', height: '18rem'}} className="card">
        <Card.Img variant="top" src={bkimage} />
        <Card.Body>
        <br/>
          <Card.Title >{bkname}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      <Link to={`/searchvehicle/${crtype}`} style={{textAlign:'center',color:'black',textDecoration:'none'}} onClick={()=>choosedVehicle(crtype)}>
      <Card style={{ width: '18rem', height: '18rem' }} className="card">
        <Card.Img variant="top" src={crimage} />
        <Card.Body>
        <br/>
          <Card.Title style={{marginTop:'8px'}}>{crname}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      <Link to={`/searchvehicle/${bstype}`} style={{textAlign:'center',color:'black',textDecoration:'none'}}><Card style={{ width: '18rem',height: '18rem' }} className="card" onClick={()=>choosedVehicle(bstype)}>
        <Card.Img variant="top" src={bsimage} />
        <Card.Body>
        <br/>
          <Card.Title style={{marginTop:'8px'}}>{bsname}</Card.Title>
          
        </Card.Body>
      </Card></Link>
      <Link to={`/searchvehicle/${trtype}`} style={{textAlign:'center',color:'black',textDecoration:'none'}}><Card style={{ width: '18rem',height: '18rem'}} className="card" onClick={()=>choosedVehicle(trtype)}>
        <Card.Img variant="top" src={trimage} />
        <Card.Body>
        <br/>
          <Card.Title>{trname}</Card.Title>
          
        </Card.Body>
      </Card></Link>
        </div>
        </div>
    );
};

export default Vehicles;