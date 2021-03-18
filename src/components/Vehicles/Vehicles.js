import React, { useContext } from 'react';
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
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
const Vehicles = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const choosedVehicle=(vName,loggedInUser)=>{
    const userChosenVehicle={...loggedInUser};
    userChosenVehicle.vehicle=vName;
    setLoggedInUser(userChosenVehicle);
  }
    return (
        <div className="main-body">
        <div className="vehicle-card">
        <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
        <br/>
          <Card.Title>BIKE</Card.Title>
          <Link to="/searchvehicle"><Button onClick={()=>choosedVehicle('Bike',loggedInUser)} variant="contained" color="secondary" fullWidth>Select Bike</Button></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={car} />
        <Card.Body>
        <br/>
          <Card.Title>CAR</Card.Title>
          <Link to="/searchvehicle"><Button onClick={()=>choosedVehicle('Car',loggedInUser)} variant="contained" color="secondary" fullWidth>Select Car</Button></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={bus} />
        <Card.Body>
        <br/>
          <Card.Title>BUS</Card.Title>
          <Link to="/searchvehicle"><Button onClick={()=>choosedVehicle('Bus',loggedInUser)} variant="contained" color="secondary" fullWidth>Select Bus</Button></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={train} />
        <Card.Body>
        <br/>
          <Card.Title>TRAIN</Card.Title>
          <Link to="/searchvehicle"><Button onClick={()=>choosedVehicle('Train',loggedInUser)} variant="contained" color="secondary" fullWidth>Select Train</Button></Link>
        </Card.Body>
      </Card>
        </div>
        </div>
    );
};

export default Vehicles;