import React from "react";
import styled from 'styled-components';
import styles, { colors } from '../styles';

const Card = styled.div`
  border: ${styles.faintGreenBorder};
  width: 30%;
  margin-bottom: 4rem;
`;

const CardImg = styled.img`
  max-width: 100%;
`;

const CardBody = styled.div`
  padding: 4rem;

  h3 {
    color: ${colors.lightGreen}
  }

  ul {
    padding: 0;
  }
`;


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
