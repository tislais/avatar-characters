import React, { Component } from 'react';
import { fetchCharacterById } from '../services/avatarApi';

export default class CharacterDetail extends Component {
  state = {
    character: []
  };

  async componentDidMount() {
    const requestedCharacter = this.props;
    
    try {
      const character = await fetchCharacterById(requestedCharacter.match.params.id);
      this.setState({ character: character });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { character } = this.state;

    return (
      <>
        <h1 className="text-4xl">{character.name}</h1>
        <img src={character.photo} alt={character.name} />
        <p>Gender: {character.gender}</p>
        <p>Hair Color: {character.hair}</p>
        <p>Position: {character.position}</p>
        <p>Affiliation: {character.affiliation}</p>
        <p>Allies: {character.allies}</p>
        <p>Enemies: {character.enemies}</p>
      </>
    )
  }
}