import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchCharacters } from '../services/avatarApi';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res))
      .then(() => setLoading(false));
  }, []);

  console.log(characters);
  if (loading) return <h1>Loading...</h1>;
  // return <CharacterList characters={characters} />;
  return <h1>Loaded.</h1>;
};

export default Characters;