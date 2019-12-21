import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import styles, { colors } from '../styles';

export default function Header() {

  const StyledHeader = styled.header`
    nav {
      display: flex;
      background-color: ${colors.lightRed};
      padding: 1rem 0;
      border: ${styles.mainBorder};
      
      a {
        font-size: 2.5rem;
        padding-left: 2rem;
        text-decoration: none;
        color: ${colors.offWhite};
      }
    }
  `;

  return (
    <StyledHeader>
      <h1>Rick &amp; Morty Fan Page</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </StyledHeader>
  );
}
