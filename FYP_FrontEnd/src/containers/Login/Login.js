import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card, { CardText } from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img8 from '../Assets/1.png'

import img1 from '../Assets/Switch-ML.png'

import './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordValid: false,
      passwordEntered: false
    }
  }

  passwordChangeHandler = (event) => {
    const password = event.target.value;

    this.setState({
      passwordEntered: true
    });

    if (password.length < 5 || password.length > 10) {
      this.setState({
        isPasswordValid: false
      });
    } else {
      this.setState({
        isPasswordValid: true
      });
    }
  }

  render() {
    let passwordBoxStyle = null;
    if (this.state.passwordEntered && !this.state.isPasswordValid) {
      passwordBoxStyle = {
        boxShadow: '0 0 2px 1px rgba(255, 0, 0, 1)',
      };
    }

    return (
      <Container className="Login">
       <br/>
          <CardGroup>
  <Card border='secondary'>
    
    <Card.Body>
      <Card.Title align="center"><b>Switch_ML </b> </Card.Title>
      <Card>
    <Card.Img variant="top" src={img8}  />
    <Card.Text align="center"><b>
    Cricket Player Replacement System</b>
    </Card.Text>
   
  </Card>
   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developed By Ziran Fuzooly</small>
    </Card.Footer>
  </Card>
  <Card border='secondary'>
    <Card.Body>
      <Card.Title>Login to Your Account</Card.Title>
      <br/><br/><br/><br/>
      <Card className="login-form-container">
<Form>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Email
    </Form.Label>
    <Col sm="8">
      <Form.Control type="email" placeholder="Enter email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
      Password
    </Form.Label>
    <Col sm="8">
      <Form.Control type="password" placeholder="Password" className="password-box" style={passwordBoxStyle} onChange={this.passwordChangeHandler} />
    </Col>
  </Form.Group>
</Form>
</Card>
<Card.Footer>
  <div align="center">
    <Button  variant="primary" >Sign In</Button></div>
    </Card.Footer>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">All Rights Reserved © Ziran Fuzooly | 2022</small>
    </Card.Footer>
  </Card>
  
</CardGroup>
          
      </Container>
    );
  }
}

export default Login;
