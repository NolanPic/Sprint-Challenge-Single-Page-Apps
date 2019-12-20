import React, { useState } from "react";
import styled from 'styled-components';
import { colors } from '../styles';


const StyledSearch = styled.section`
  input {
    width: 100%;
    height: 4rem;
    font-size: 2.5rem;
    padding-left: 25px;
    background-color: ${colors.offWhite}
    border: 0;
    margin: 2.5rem 0;
  }
`;

export default function SearchForm(props) {

  const { onSearch } = props;

  const [search, setSearch] = useState('');

  const updateSearchTerm = e => {
    setSearch(e.target.value);
  };

  const doSearch = e => {
    e.preventDefault();
    onSearch(search);
  };
 
  return (
    <StyledSearch>
     <form onSubmit={doSearch}>
      <input
        type="text"
        placeholder="'Enter' to filter"
        value={search}
        onChange={updateSearchTerm}
      />
     </form>
    </StyledSearch>
  );
}
