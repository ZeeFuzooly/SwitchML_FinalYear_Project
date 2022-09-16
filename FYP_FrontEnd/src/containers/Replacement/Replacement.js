import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import img1 from "../Assets/Switch-ML.png";
import tamim from "../Assets/tamim.jpeg";
import finch from "../Assets/finch.jpeg";
import kane from "../Assets/kane.jpeg";
import hafeez from "../Assets/hafeez.jpeg";
import abd from "../Assets/abd.jpeg";
import ben from "../Assets/stokes.jpeg";
import msd from "../Assets/msd.jpeg";
import duminy from "../Assets/duminy.jpeg";
import shakib from "../Assets/shakib.jpeg";
import woakes from "../Assets/woakes.jpeg";
import steyn from "../Assets/steyn.jpeg";
import boult from "../Assets/boult.jpeg";
import bumrah from "../Assets/Bumrah.jpeg";
import starc from "../Assets/starc.jpeg";
import kohli from "../Assets/vk.jpeg";
import ashwin from "../Assets/ashwin.jpeg";
import gayle from "../Assets/gayle.jpeg";
import russel from "../Assets/russel.jpeg";
import pollard from "../Assets/pollard.jpeg";
import josh from "../Assets/josh.jpeg";
import nabi from "../Assets/nabi.jpeg";
import qdk from "../Assets/qdk.jpeg";

import Col from "react-bootstrap/Col";

function ReplacementPage() {
  const [selectedReplacementId, setSelectedReplacementId] = useState(null);

  const [selectedIds, setSelectedIds] = useState([]);
  

  const handleSelectId = (id) => {
    setSelectedReplacementId(id);
    setSelectedIds([...selectedIds, id]);
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/getReplaceID', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        'player_ids': selectedIds,
        'player_id': localStorage.getItem('selected-player-id') 
      })

    })
    const res = await response.json()
    const player = await fetch('http://localhost:5000/replace-player', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        'player_id' : res['Replaced Player']
      })
    })

    const player_res = await player.json()
    
    console.log(player_res['Replaced Player']['player_id'])
    console.log(player_res['Replaced Player']['player_name'])
    console.log(player_res['Replaced Player']['calculated_value'])
    console.log(player_res['Replaced Player']['calculated_home_points'])
    console.log(player_res['Replaced Player']['calculated_away_points'])
    console.log(player_res['Replaced Player']['calculated_form_points'])
    
    console.log(player_res['Replaced Player']['home_runs'])
    console.log(player_res['Replaced Player']['home_average'])
    console.log(player_res['Replaced Player']['home_100s'])
    console.log(player_res['Replaced Player']['home_50s'])
    console.log(player_res['Replaced Player']['home_30s'])

    console.log(player_res['Replaced Player']['away_runs'])
    console.log(player_res['Replaced Player']['away_average'])
    console.log(player_res['Replaced Player']['away_100s'])
    console.log(player_res['Replaced Player']['away_50s'])
    console.log(player_res['Replaced Player']['away_30s'])

    console.log(player_res['Replaced Player']['team'])

    // console.log(player_res['Replaced Player']['form_runs'])
    // console.log(player_res['Replaced Player']['form_average'])
    // console.log(player_res['Replaced Player']['recent_100s'])
    // console.log(player_res['Replaced Player']['recent_50s'])
    // console.log(player_res['Replaced Player']['recent_30s'])

    // console.log(player_res['Replaced Player']['overall_runs'])
    // console.log(player_res['Replaced Player']['overall_average'])
    // console.log(player_res['Replaced Player']['centuries'])
    // console.log(player_res['Replaced Player']['fifties'])
    // console.log(player_res['Replaced Player']['thirties'])

    localStorage.setItem('player_id',player_res['Replaced Player']['player_id'])
    localStorage.setItem('player_name',player_res['Replaced Player']['player_name'])
    localStorage.setItem('calculated_value',player_res['Replaced Player']['calculated_value'])
    localStorage.setItem('calculated_home_points',player_res['Replaced Player']['calculated_home_points'])
    localStorage.setItem('calculated_away_points',player_res['Replaced Player']['calculated_away_points'])
    localStorage.setItem('calculated_form_points',player_res['Replaced Player']['calculated_form_points'])
    localStorage.setItem('home_runs',player_res['Replaced Player']['home_runs'])
    localStorage.setItem('home_average',player_res['Replaced Player']['home_average'])
    localStorage.setItem('home_100s',player_res['Replaced Player']['home_100s'])
    localStorage.setItem('home_50s',player_res['Replaced Player']['home_50s'])
    localStorage.setItem('home_30s',player_res['Replaced Player']['home_30s'])

    localStorage.setItem('away_runs',player_res['Replaced Player']['away_runs'])
    localStorage.setItem('away_average',player_res['Replaced Player']['away_average'])
    localStorage.setItem('away_100s',player_res['Replaced Player']['away_100s'])
    localStorage.setItem('away_50s',player_res['Replaced Player']['away_50s'])
    localStorage.setItem('away_30s',player_res['Replaced Player']['away_30s'])

    localStorage.setItem('team',player_res['Replaced Player']['team'])

    // localStorage.setItem('form_runs',player_res['Replaced Player']['form_runs'])
    // localStorage.setItem('form_average',player_res['Replaced Player']['form_average'])
    // localStorage.setItem('recent_100s',player_res['Replaced Player']['recent_100s'])
    // localStorage.setItem('recent_50s',player_res['Replaced Player']['recent_50s'])
    // localStorage.setItem('recent_30s',player_res['Replaced Player']['recent_30s'])

    // localStorage.setItem('overall_runs',player_res['Replaced Player']['overall_runs'])
    // localStorage.setItem('overall_average',player_res['Replaced Player']['overall_average'])
    // localStorage.setItem('centuries',player_res['Replaced Player']['centuries'])
    // localStorage.setItem('fifties',player_res['Replaced Player']['fifties'])
    // localStorage.setItem('thirties',player_res['Replaced Player']['thirties'])
    
    

    window.location.href = "/ReplacedPlayer"
    
  };

  return (
    <div align="center">
      <br />
      <CardGroup  style={{ width: "85rem"}} >
        <Card border="secondary">
          <Card.Body>
            <Card.Title>Pool of Players For Replacement</Card.Title>
            <Card.Title align="center" class="p-3 mb-2 text-white bg-dark">
              Batsman Top Order Players
            </Card.Title>
            <div align ="center">
            <CardGroup style={{ width: "40rem", height: "34rem" }}>
            <Card>
                <Card.Img variant="top" style={{ height: '20rem' }}src={abd} />
                <Card.Body>
                <Card.Title>Ab De Villers</Card.Title>
                  <Card.Text>Player ID :- 88</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("88")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              
              
              <Card>
                <Card.Img variant="top" style={{ height: '20rem' }} src={kohli} />
                <Card.Body>
                <Card.Title>Virat Kohli</Card.Title>
                  <Card.Text>Player ID :- 439</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("439")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" style={{ height: '20rem' }} src={kane} />
                <Card.Body>
                <Card.Title>Kane Williamson</Card.Title>
                  <Card.Text>Player ID :- 491</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("491")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            </div>
            <div align ="center">
            <CardGroup style={{ width: "40rem", height: "34rem" }}>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={finch} />
                <Card.Body>
                <Card.Title>Aaron Finch</Card.Title>
                  <Card.Text>Player ID :- 431</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("431")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={gayle} />
                <Card.Body>
                <Card.Title>Christ Gayle</Card.Title>
                  <Card.Text>Player ID :- 11</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("63")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" style={{ height: '20rem' }} src={tamim} />
                <Card.Body>
                  <Card.Title>Tamim Iqbal</Card.Title>
                  <Card.Text>Player ID :- 123</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("123")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            </div>
            <br/>
            <Card.Title align="center" class="p-3 mb-2 text-white bg-dark">
              Wicket Keeper Batsmen
            </Card.Title>
            <br/>
            
            <div align ="center">
            <CardGroup style={{ width: "40rem", height: "34rem" }}>
              <Card>
                <Card.Img variant="top" style={{ height: '20rem' }}src={msd} />
                <Card.Body>
                <Card.Title>MS Dhoni</Card.Title>
                  <Card.Text>Player ID :- 95</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("95")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={qdk} />
                <Card.Body>
                <Card.Title>QD Kock</Card.Title>
                  <Card.Text>Player ID :- 563</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("563")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={josh} />
                <Card.Body>
                <Card.Title>Josh Buttler</Card.Title>
                  <Card.Text>Player ID :- 453</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("453")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            </div>
            <br/>
            <Card.Title align="center" class="p-3 mb-2 text-white bg-dark">
              Batsmen Middle Order Players
            </Card.Title>
            <br/>
            <div align ="center">
            <CardGroup style={{ width: "40rem", height: "34rem" }}>
              <Card>
                <Card.Img variant="top" style={{ height: '20rem' }}src={shakib} />
                <Card.Body>
                <Card.Title>Shakib Al Hassan</Card.Title>
                  <Card.Text>Player ID :- 144</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("144")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={nabi} />
                <Card.Body>
                <Card.Title> Mohammed Nabi</Card.Title>
                  <Card.Text>Player ID :- 353</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("353")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={duminy} />
                <Card.Body>
                <Card.Title>JP Duminy</Card.Title>
                  <Card.Text>Player ID :- 147</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("147")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            </div>
           
           
            <Card.Title align="center" class=" p-3 mb-2 text-white bg-dark">
              Batsman Lower Order Players
            </Card.Title>
            <br/>
            <div align ="center">
            <CardGroup style={{ width: "40rem", height: "34rem" }}>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={woakes} />
                <Card.Body>
                <Card.Title>Christ Woakes</Card.Title>
                  <Card.Text>Player ID :- 432</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("432")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={boult} />
                <Card.Body>
                <Card.Title>Trent Boult</Card.Title>
                  <Card.Text>Player ID :- 565</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("565")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={steyn} />
                <Card.Body>
                <Card.Title>Dale Steyn</Card.Title>
                  <Card.Text>Player ID :- 229</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("229")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={ashwin} />
                <Card.Body>
                <Card.Title>Ravi Ashwin</Card.Title>
                  <Card.Text>Player ID :- 462</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("462")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={bumrah} />
                <Card.Body>
                <Card.Title>Jaspirit Bumrah</Card.Title>
                  <Card.Text>Player ID :- 832</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("832")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top"style={{ height: '20rem' }} src={starc} />
                <Card.Body>
                <Card.Title>Mitch Starc</Card.Title>
                  <Card.Text>Player ID :- 552</Card.Text>
                  <Card.Text>Right Handed Batsman</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => handleSelectId("552")}
                  >
                    Pick Player
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Developed By Ziran Fuzooly</small>
          </Card.Footer>
        </Card>
        <Card border="secondary">
          <Card.Body>
            <Card.Title>Selected Players For Replacement</Card.Title>
           <CardGroup>
              {selectedIds.map((val) => (
                <Card>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Replacement</Card.Title>
                    <Card.Title>Player ID :- {val}</Card.Title>
                    {/* <Card.Text>Right Handed Batsman</Card.Text> */}
                  </Card.Body>
                </Card>
              ))}
           </CardGroup>
            <br />
            {selectedIds.length > 0 && (
              <Button variant="primary" onClick={() => handleSubmit()}>
              Replace The Player
              </Button>
            )}
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">
              All Rights Reserved © Ziran Fuzooly | 2022
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ReplacementPage;
