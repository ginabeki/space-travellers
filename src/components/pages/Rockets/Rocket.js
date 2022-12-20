import React from 'react';
import PropTypes from 'prop-types';

export default function Rocket(props) {
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImage, reserved,
  } = rocket;
  console.log('Reserved', reserved);

  return (
    <div>
      <img src={flickrImage} alt={flickrImage} />
      <br />
      <h2>{id}</h2>
      <br />
      <h2>{rocketName}</h2>
      <br />
      <h2>{description}</h2>
      <br />
      <h2>{reserved}</h2>
      <br />
      <hr />
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    reserved: PropTypes.string.isRequired,
  }).isRequired,
};
