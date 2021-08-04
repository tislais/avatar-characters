import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Character detail component', () => {
  it('renders Character', () => {
    const { asFragment } = render(
      <Router>
        <CharacterDetail />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});