import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('Character detail component', () => {
  it('renders Character', () => {
    const { asFragment } = render(<CharacterDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});