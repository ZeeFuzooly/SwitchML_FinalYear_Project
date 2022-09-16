import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Chart from "react-apexcharts";
import id from "../Assets/id.png";
import cricket from "../Assets/cricket.png";
import flash from "../Assets/flash.png";
import away from "../Assets/away.png";
import home from "../Assets/home.png";
import recent from "../Assets/recent.png";
import avg from "../Assets/avg.png";
import flag from "../Assets/flag.png";

import Container from 'react-bootstrap/Container';
import {
    Table,
    Row,
    Col
  } from "react-bootstrap";

class Stats extends Component {
  
  render() {
    
    return (
      <div>
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
        </Container>
        
      </div>
    );
  }
}

export default Stats;
