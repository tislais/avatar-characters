import React, { useEffect, useState } from 'react';
import { fetchCharacterById } from '../services/avatarApi';
import { useParams } from 'react-router-dom';


const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCharacterById(id)
      .then(res => setCharacter(res));
    console.log(character);
  }, []);

  return (
    <>
      <h1 className="text-4xl">{character.name}</h1>
      <img src={character.photoUrl} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Hair Color: {character.hair}</p>
      <p>Position: {character.position}</p>
      <p>Affiliation: {character.affiliation}</p>
      <p>Allies: {character.allies}</p>
      <p>Enemies: {character.enemies}</p>
    </>
  )
};

export default CharacterDetail;
