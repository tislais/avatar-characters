export const fetchCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  return json.map(({ allies, enemies, photoUrl, name, affiliation }) => ({
    id: `${name}-${affiliation}`,
    allies,
    enemies, 
    photo: photoUrl, 
    name, 
    affiliation
  }));
}

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
  const json = await res.json();
  return json;
}