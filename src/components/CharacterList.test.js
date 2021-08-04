import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';

const characters = [...Array(5)].map((_, i) => ({
    name: "46th Earth King",
    allies: ["Royal Earthbender Guards"],
    enemies: ["Chin"],
    photo: "url"
  })
)

describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(<CharacterList characters={characters} />);
    expect(asFragment()).toMatchSnapshot();
  });
});