import React, { useEffect, useState } from 'react';
import { fetchCharacterById } from '../services/avatarApi';
import { useParams } from 'react-router-dom';


const CharacterDetail = ({ props }) => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  console.log(props);

  useEffect(() => {
    fetchCharacterById(id)
      .then(res => setCharacter(res));
  }, [id]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-white p-12 mt-12 rounded-xl shadow-md w-1/3 gap-y-4">
        <img src={character.photoUrl} alt={character.name} />
        <h1 className="text-3xl my-6">{character.name}</h1>
        <p><span className="font-bold">Gender: </span>{character.gender}</p>
        <p><span className="font-bold">Hair Color: </span>{character.hair}</p>
        <p><span className="font-bold">Position: </span>{character.position}</p>
        <p><span className="font-bold">Affiliation: </span>{character.affiliation}</p>
        <p><span className="font-bold">Allies: </span>{character.allies}</p>
        <p><span className="font-bold">Enemies: </span>{character.enemies}</p>
      </div>
    </div>
  )
};

export default CharacterDetail;
