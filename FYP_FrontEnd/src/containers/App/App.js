import React from 'react';
import './App.css';
import Home from '../Home/Home';
import img8 from '../Assets/1.png'
import Login from '../Login/Login';
import Squad from '../Squad/Squad';
import Stats from '../Player Stats/Stats';
import Replacement from '../Replacement/Replacement';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img2 from '../Assets/logo_round.png'
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route }  from 'react-router-dom';
import {Helmet} from "react-helmet";
import OldPlayer from '../OldPlayer/OldPlayer';
import ReplacedPlayer  from '../ReplacedPlayer/ReplacedPlayer';


function App() {
  return (
    <div className="App">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Switch_ML</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Cricket Player Replacement Application" />
            </Helmet>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home"> <img
          alt=""
          src={img8}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}Switch_ML</Navbar.Brand>
          <Nav className="ml-auto">
          <LinkContainer to="/login">
              <Button className="nav-btn" variant="outline-primary">Login</Button>
            </LinkContainer>
            <LinkContainer to="/home">
              <Button className="nav-btn" variant="outline-primary">Home</Button>
            </LinkContainer>
            <LinkContainer to="/oldPlayer">
              <Button className="nav-btn" variant="outline-primary">Player Replacement</Button>
            </LinkContainer>
            <LinkContainer to="/Squad">
              <Button className="nav-btn" variant="outline-primary">Squads</Button>
            </LinkContainer>
          </Nav>
        </Navbar>
        {/* Body */}
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/replacement" exact component={Replacement} />
        <Route path="/squad" exact component={Squad} />
        <Route path="/stats" exact component={Stats} />
        <Route path="/oldPlayer" exact component={OldPlayer} />
        <Route path="/replacedPlayer" exact component={ReplacedPlayer} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
