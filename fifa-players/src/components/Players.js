import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Player.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <strong>Team:</strong> {team}<br />
        <strong>Nationality:</strong> {nationality}<br />
        <strong>Jersey Number:</strong> {jerseyNumber}<br />
        <strong>Age:</strong> {age}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Player;