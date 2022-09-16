import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import img8 from '../Assets/1.png'
import { FormControl } from "react-bootstrap";

import { BASE_URL } from "../../constants";

function OldPlayer() {
  const [playerId, setPlayerID] = useState("");

  const handleReplacePlayer = async () => {
    if (!playerId) return;

    // await axios
    //   .post(`${BASE_URL}/replace-player`, {
    //     playerId,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    localStorage.setItem("selected-player-id", playerId);
    window.location.href = "/replacement";
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div align="center">
        <Card border="secondary" style={{ width: "55rem", height: "25rem" }} >
          <Card.Img variant="top" src="" />
          <Card.Body>
            
            <br />
            <br />
            <br />
            <Card.Title>Player Replacement</Card.Title>
            <Card.Text>Enter Player's ID for the Replacement</Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Player ID
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                onChange={(e) => setPlayerID(e.target.value)}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <Button
              variant="primary"
              // href="../replacement"
              onClick={handleReplacePlayer}
            >
              Replace the Player
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            Developed By Ziran Fuzooly | All Rights Reserved © Ziran Fuzooly | 2022
            </small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default OldPlayer;
