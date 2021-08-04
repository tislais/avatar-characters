import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Characters from './Characters';
import { MemoryRouter } from 'react-router-dom';


const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(20)].map((_, i) => ({
            id: 'name-affiliation',
            allies: ['one', 'two'],
            enemies: ['one', 'two'], 
            photoUrl: 'img', 
            name: 'aang', 
            affiliation: 'fire tribe'
          }))
        )
      );
    }
  )
);

describe('Avatar characters container', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of avatar characters', async () => {
    render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    );
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(20);


  });
});
