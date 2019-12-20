import React from "react";
import { Card, CardImg, CardBody } from '../styles';
import { Link } from 'react-router-dom';


export default function CharacterCard({ character }) {
  const { id, name, image, species, status, location } = character;
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
        <Link to={`/characters/${id}`}>View &gt;</Link>
      </CardBody>
    </Card>
  );
}
