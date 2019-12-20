import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledCharacterDetails = styled.section`
    img {
        float: right;
    }
`;

export default function CharacterDetails() {

    const { id } = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                console.log('character', res);
                setCharacter(res.data);
            })
            .catch(err => console.warn(err));
    }, []);

    return (
        <StyledCharacterDetails>
            {character && <>
                <h2>{character.name}</h2>
                <img src={character.image} alt={`Portrait of ${character.name}`} />
                <ul>
                    <li>Species: {character.species}</li>
                    <li>Gender: {character.gender}</li>
                    {character.type.length > 0 && 
                    <li>Type: {character.type}</li>}
                    <li>Status: {character.status}</li>
                    <li>Origin: {character.origin.name}</li>
                    <li>Location: {character.location.name}</li>
                    <li>Appears in {character.episode.length} { character.episode.length > 1 ? 'episodes' : 'episode'}</li>
                </ul>
            </>}
        </StyledCharacterDetails>
    );
}