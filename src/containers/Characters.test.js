import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';

describe('Avatar characters container', () => {
  it('displays a list of avatar characters', async () => {
    render(<Characters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
  });
});
