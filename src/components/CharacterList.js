import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const StyledCharacterList = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('res', res);
        setCharacters(res.data.results);
        setFilteredCharacters(res.data.results);
      })
      .catch(err => console.warn(err));

  }, []);

  const filterCharacters = search => {
    setFilteredCharacters(characters.filter(c => {
      return c.name.toLowerCase().includes(search.toLowerCase());
    }));
  };

  return (
    <>
      <SearchForm onSearch={filterCharacters} />
      <StyledCharacterList>
        {filteredCharacters.length && filteredCharacters.map(c => <CharacterCard key={c.id} character={c} />)}
      </StyledCharacterList>
    </>
  );
}
