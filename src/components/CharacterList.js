import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  
  const characterElements = characters.map((character) => (

    <li key={character._id} 
      className="p-5 bg-white rounded shadow-md 
      hover:scale-105 transition duration-300 ease-in-out
      cursor-pointer">

      <Character
        name={character.name}
        allies={character.allies}
        enemies={character.enemies}
        photoUrl={character.photoUrl}
        id={character._id}
      />

    </li>
  ))
  return (
    <ul 
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-4 gap-4">
      {characterElements}
    </ul>
  )
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    allies: PropTypes.array,
    enemies: PropTypes.array,
    photoUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;