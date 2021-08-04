import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default Characters;