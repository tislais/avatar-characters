import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, allies, enemies, photo, id }) => (

  <Link to={`/character/${id}`}>
    <figure className="h-full">
      <img src={photo} alt={name}
        className="
          h-2/3 sm:h-[200px] 
          w-full 
          object-cover
        " />
      <figcaption>
        <p className="uppercase text-lg font-bold tracking-wider mt-4 truncate">
          {name}
        </p>

        <p className="text-xs">Allies: {allies.map((ally) => (
          <span key={id + ally}>{ally}</span>
        ))}
        </p>

        <p className="text-xs">Enemies: {enemies.map((enemy) => (
          <span key={id + enemy}>{enemy}</span>
        ))}
        </p>
        
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  photo: PropTypes.string
};

export default Character;