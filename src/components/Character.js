import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, allies, enemies, photoUrl, id }) => (

  <figure className="">
      <img src={photoUrl} alt={name}
        className="
          h-[300px] sm:h-[200px] 
          w-full 
          object-cover
        " />
      <figcaption>
        <p className="uppercase text-lg font-bold tracking-wider">
          {name}
        </p>

        <p>Allies: {allies.map((ally) => (
          <span key={id}>{ally}</span>
        ))}
        </p>

        <p>Enemies: {enemies.map((enemy) => (
          <span>{enemy}</span>
        ))}
        </p>
      </figcaption>
    </figure>

);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  photoUrl: PropTypes.string.isRequired
};

export default Character;