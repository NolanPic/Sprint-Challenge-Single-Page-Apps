import React from "react";
import styled from 'styled-components';
import styles, { colors } from '../styles';

const StyledCharacterCard = styled.div`
  padding: 4rem;
  border: ${styles.faintGreenBorder};
  width: 30%
  margin-bottom: 4rem;
`;

export default function CharacterCard({ character }) {
  const { name } = character;
  return (
    <StyledCharacterCard>{name}</StyledCharacterCard>
  );
}
