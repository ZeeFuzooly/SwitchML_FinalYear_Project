import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
// import sanga from '../Assets/sanga.png';
// import dds from "../Assets/dds.jpeg";
import Container from 'react-bootstrap/Container';

import Chart from "react-apexcharts";
import ChartistGraph from "react-chartist";
import id from "../Assets/id.png";
import cricket from "../Assets/cricket.png";
import flash from "../Assets/flash.png";
import away from "../Assets/away.png";
import home from "../Assets/home.png";
import recent from "../Assets/recent.png";
import flag from "../Assets/flag.png";
import avg from "../Assets/avg.png";
import {
    Table,
    Row,
    Col
  } from "react-bootstrap";
//   import { FontAwesomeIcon } from "@fontwesome/react-fontawesome";
//   import { faSearch } from "@fortawesome/free-solid-svg-icons";


function ReplacedPlayer() {
return (
    <Container className="Player Replacement">
    <br/>
    <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-small text-center icon-warning">
                    {/* <i class="fa fa-id-card" aria-hidden="true"></i> */}
                    <Card.Img variant="top" src={id} />
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Player ID</p>
                      <Card.Title as="h4">{localStorage.getItem('player_id')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-id-badge mr-2" aria-hidden="true"></i>
                  Replaced Player ID
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={cricket} />
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Player Name</p>
                      <Card.Title as="h4">{localStorage.getItem('player_name')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i class="fa fa-user mr-2" aria-hidden="true"></i>
                  Replaced Player Name
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={flag} />
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Nationality </p>
                      <Card.Title as="h4">{localStorage.getItem('team')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-flag mr-2" aria-hidden="true"></i>
                   National Team of the Player
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <br/>
          <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={flash} />
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Points - Overall</p>
                      <Card.Title as="h4">{localStorage.getItem('calculated_value')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-percent mr-2" aria-hidden="true"></i>
                   Player Overall Points
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={away} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Points - Away</p>
                      <Card.Title as="h4">{localStorage.getItem('calculated_away_points')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-percent mr-2" aria-hidden="true"></i>
                   Player Away Points
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={home} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Points - Home</p>
                      <Card.Title as="h4">{localStorage.getItem('calculated_home_points')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-percent mr-2" aria-hidden="true"></i>
                   Player Home Points
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <Card.Img variant="top" src={recent} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Points - Recent</p>
                      <Card.Title as="h4">{localStorage.getItem('calculated_form_points')}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i class="fa fa-percent mr-2" aria-hidden="true"></i>
                   Player Recent Form Points
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
        </Row>
        <br/>
        <Row>
        <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Player Statistics</Card.Title>
                <p className="card-category">With All Calculated Points Value</p>
              </Card.Header>
              <Card.Body>
              <div align="center">
                <Chart
                  type="pie"
                  width={500}
                  height={500}
                  series={[
                    localStorage.getItem('home_runs'),
                    // localStorage.getItem('away_runs')

                  ]}
                  options={{
                    labels: [
                      "Home Points",
                      "Away Points",
                      "Form Points",
                      "Overall Points",
                    ],
                  }}
                ></Chart>
                </div>
                <div className="stats">
                  <i className="far fa-clock mr-2 "></i>
                  Updated Now
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">{localStorage.getItem('player_name')}</Card.Title>
                <p className="card-category">
                 Replaced Player's Statistics
                </p>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Home Runs</th>
                      <th className="border-0">Home Average</th>
                      
                      <th className="border-0">Home 100s</th>
                      <th className="border-0">Home 50s</th>
                      <th className="border-0">Home 30s</th>
                      
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr>
                      <td>{localStorage.getItem('home_runs')}</td>
                      <td>{localStorage.getItem('home_average')}</td>
                      
                      
                      <td>{localStorage.getItem('home_100s')}</td>
                      <td>{localStorage.getItem('home_50s')}</td>
                      <td>{localStorage.getItem('home_30s')}</td>
                    </tr>

                    <tr>
                      <th className="border-0">Away Runs</th>
                      <th className="border-0">Away Average</th>
                      
                      <th className="border-0">Away 100s</th>
                      <th className="border-0">Away 50s</th>
                      <th className="border-0">Away 30s</th>
                      
                    </tr>
                    <tr>
                      <td>{localStorage.getItem('away_runs')}</td>
                      <td>{localStorage.getItem('away_average')}</td>
                      
                      
                      <td>{localStorage.getItem('away_100s')}</td>
                      <td>{localStorage.getItem('away_50s')}</td>
                      <td>{localStorage.getItem('away_30s')}</td>
                    </tr>
                    <tr>
                      <th className="border-0">Recent Runs</th>
                      <th className="border-0">Recent Average</th>
                      
                      <th className="border-0">Recent 100s</th>
                      <th className="border-0">Recent 50s</th>
                      <th className="border-0">Recent 30s</th>
                     
                    </tr>
                    <tr>
                      <td>{localStorage.getItem('home_runs')}</td>
                      <td>{localStorage.getItem('home_average')}</td>
                      
                      
                      <td>{localStorage.getItem('home_100s')}</td>
                      <td>{localStorage.getItem('home_50s')}</td>
                      <td>{localStorage.getItem('home_30s')}</td>
                    </tr>
                    <tr>
                      <th className="border-0">Overall Runs</th>
                      <th className="border-0">Overall Average</th>
                      
                      <th className="border-0">Overall 100s</th>
                      <th className="border-0">Overall 50s</th>
                      <th className="border-0">Overall 30s</th>
                      
                    </tr>
                    <tr>
                      <td>{localStorage.getItem('home_runs')}</td>
                      <td>{localStorage.getItem('home_average')}</td>
                      
                     
                      <td>{localStorage.getItem('home_100s')}</td>
                      <td>{localStorage.getItem('home_50s')}</td>
                      <td>{localStorage.getItem('home_30s')}</td>
                    </tr>
                  </tbody>
                  
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       


       
   </Container>
  );
}

export default ReplacedPlayer;



