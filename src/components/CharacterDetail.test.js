import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('Character detail component', () => {
  it('renders Character', () => {
    const { asFragment } = render(<CharacterDetail
      name="46th Earth King"
      allies={["Royal Earthbender Guards"]}
      enemies={["Chin"]}
      photo="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" />);
    expect(asFragment()).toMatchSnapshot();
  });
});