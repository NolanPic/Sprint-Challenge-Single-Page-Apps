import React from "react";
import { Card, CardImg, CardBody } from '../styles';


export default function CharacterCard({ character }) {
  const { name, image, species, status, location } = character;
  return (
    <Card>
      <CardImg src={image} />
      <CardBody>
        <h3>{name}</h3>
        <ul>
          <li>Species: {species}</li>
          <li>Status: {status}</li>
          <li>Location: {location.name}</li>
        </ul>
      </CardBody>
    </Card>
  );
}
