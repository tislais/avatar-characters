import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';

describe('Avatar characters container', () => {
  it('displays a list of avatar characters', () => {
    render(<Characters />);
  });
});
