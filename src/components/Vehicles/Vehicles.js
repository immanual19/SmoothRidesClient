import React from 'react';
import { Card } from 'react-bootstrap';
import './Vehicles.css';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
const Vehicles = () => {
    return (
        <div className="main-body">
        <div className="vehicle-card">
        <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
        <br/>
          <Card.Title>BIKE</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={car} />
        <Card.Body>
        <br/>
          <Card.Title>CAR</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={bus} />
        <Card.Body>
        <br/>
          <Card.Title>BUS</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={train} />
        <Card.Body>
        <br/>
          <Card.Title>TRAIN</Card.Title>
        </Card.Body>
      </Card>
        </div>
        </div>
    );
};

export default Vehicles;