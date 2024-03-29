import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character, i) => (

    <li key={character + i} 
      className="p-5 bg-white rounded shadow-md scale-110 transition duration-300 ease-in-out cursor-pointer">

      <Character
        id={character.id}
        name={character.name}
        allies={character.allies}
        enemies={character.enemies}
        photo={character.photo}
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
    affiliation: PropTypes.string,
    allies: PropTypes.array,
    enemies: PropTypes.array,
    photo: PropTypes.string
  })).isRequired
};

export default CharacterList;