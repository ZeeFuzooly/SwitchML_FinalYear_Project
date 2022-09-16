import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
// import img1 from '../Assets/Switch-ML.png';
// import Stats from '../Player Stats/Stats';
import babar from '../Assets/babar.jpeg';
import hales from '../Assets/hales.jpeg';
import amla from '../Assets/amla.jpeg';
import anji from '../Assets/anji.jpeg';
import maxwell from '../Assets/glen.jpeg';
import malan from '../Assets/malan.jpeg';
import kl from '../Assets/kl.jpeg';
import bhuvi from '../Assets/bhuvi.jpeg';

import southee from '../Assets/southee.jpeg';
import mustafiz from '../Assets/mustafiz.jpeg';
import shamsi from '../Assets/shamsi.jpeg';

import Col from 'react-bootstrap/Col';


class Squad extends Component {
  render() {
    return (
      <div align="center">
        <br />
        <CardGroup style={{ width: "80rem"}}>
          <Card border='dark' >
          
            <Card.Body>
            <Card.Title align="center" class="p-3 mb-2 text-white bg-dark"><h4><b>ICC T20 Squad of XI - 2020</b></h4></Card.Title>
              <div align="center">
              <CardGroup style={{ width: "48rem", height: "48rem" }}>


                <Card style={{ width: '10rem' }}>
                  <Card.Img variant="top" style={{ height: '35rem' }}src={babar} />
                  <Card.Body>
                    <Card.Title>Babar Azam - Captain</Card.Title>
                    <Card.Text>
                      Wicket Keeper Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 836
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary" href='../Stats'>Player Stats
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card style={{ width: '10rem' }}>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={amla} />
                  <Card.Body>
                    <Card.Title>Hashim Amla - V Captain</Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 265
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup >
              </div>
              <div align="center">
              <CardGroup style={{ width: "70rem", height: "48rem" }}>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={hales} />
                  <Card.Body>
                    <Card.Title>Alex Hales</Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 449
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={malan} />
                  <Card.Body>
                    <Card.Title>David Malan</Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 887
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={kl} />
                  <Card.Body>
                    <Card.Title>KL Rahul</Card.Title>
                    <Card.Text>
                      Left Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 832
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup>
              </div>
              
              <div align="center">
              <CardGroup style={{ width: "70rem", height: "48rem" }}>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={anji} />
                  <Card.Body>
                    <Card.Title>Angelo Mathews</Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 324
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={maxwell} />
                  <Card.Body>
                    <Card.Title>Glen Maxwell</Card.Title>
                    <Card.Text>
                      Left Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 541
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={southee} />
                  <Card.Body>
                    <Card.Title>Tim Southee</Card.Title>
                    <Card.Text>
                      Left Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 224
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup>
              </div>
              <div align="center">
              <CardGroup style={{ width: "70rem", height: "48rem" }}>
                <Card>
                  <Card.Img variant="top"style={{ height: '35rem' }}  src={bhuvi} />
                  <Card.Body>
                    <Card.Title>Buvaneshwar Kumar</Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 566
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={mustafiz} />
                  <Card.Body>
                    <Card.Title>Mustafizur Rahman</Card.Title>
                    <Card.Text>
                      Left Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 704
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" style={{ height: '35rem' }} src={shamsi} />
                  <Card.Body>
                    <Card.Title>Tabraiz Shamsi </Card.Title>
                    <Card.Text>
                      Right Handed Batsman
                    </Card.Text>
                    <Card.Text>
                      Player ID :- 1420
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div align="center">
                      <Button variant="primary">Player Stats</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup>
              </div>
            </Card.Body>

            <Card.Footer>
              <small className="text-muted">Developed By Ziran Fuzooly | All Rights Reserved © Ziran Fuzooly | 2022</small>
            </Card.Footer>
          </Card>
          {/* <Card border='secondary'>
          
                
            <Card.Footer>
              <small className="text-muted">All Rights Reserved © Ziran Fuzooly | 2022</small>
            </Card.Footer>
          </Card> */}

        </CardGroup>

      </div>
    );
  }
}

export default Squad;
