import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import grey from '../Assets/grey.jpeg';
import img1 from '../Assets/Switch-ML1.png'
import img2 from '../Assets/player.png'
import img3 from '../Assets/player2.png'
import img4 from '../Assets/player3.png'
import img5 from '../Assets/wt20.jpeg'
import img6 from '../Assets/w50.jpeg'
import img7 from '../Assets/t20.jpeg'
import img8 from '../Assets/1.png'
import cricket from '../Assets/123.jpeg'


class Home extends Component {
  render() {
    return (
      <div>
        <Card className="bg-dark text-white">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img6}
      alt="First slide"
    />
    <div align="center">
    <Carousel.Caption>
     
     <>
  {[
    
    'Secondary',
   
  ].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '65rem' }}
      className="mb-2"
    >
    
      <Card.Body>
        <Card.Title>{} <h3>Switch_ML</h3> </Card.Title>
        <Card.Text>
        The Cricket Player Replacement System.
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Second slide"
    />
 
      <div align="center">
    <Carousel.Caption>
     
     <>
  {[
    
    'Secondary',
   
  ].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '65rem' }}
      className="mb-2"
    >
    
      <Card.Body>
        <Card.Title>{} <h4> System Features </h4></Card.Title>
        <Card.Text>
        1. Player Replacement Using Player Recent Form Score of the Player<br/>
      2.Players Statistic Viewing and Management<br/>
      3.Squad Management with Player Statistic Details
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      src={img7}
      alt="Third slide"
    />


        <div align="center">
    <Carousel.Caption>
     
     <>
  {[
    
    'Secondary',
   
  ].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '65rem' }}
      className="mb-2"
    >
    
      <Card.Body>
        <Card.Title>{} <h4>User Guide </h4> </Card.Title>
        <Card.Text>
        User Needs to give the replacement player's ID the system will calculate the points of the replacement player with the help of 
        Statistical datas of player. Then User needs to select the players for the replacement from the system who are available
        for the replacement, then system will do the calculations and it will show the higher rated player for the replacement. 
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
<Card.Footer>
  <div align="center">
      <small className="text-light">Developed By Ziran Fuzooly | All Rights Reserved © Ziran Fuzooly | 2022</small>
      </div>
    </Card.Footer>
</Card>
      </div>
    );
  }
}

export default Home;


