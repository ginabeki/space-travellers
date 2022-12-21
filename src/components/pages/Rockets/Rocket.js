/* eslint-disable react/prop-types */
import React from 'react';

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
