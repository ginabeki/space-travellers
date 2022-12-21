/* eslint-disable react/prop-types */
import React from 'react';

export default function Mission(props) {
  const { mission } = props;
  const { id, missionName, description } = mission;

  return (
    <div>
      <h2>{id}</h2>
      <br />
      <h2>{missionName}</h2>
      <br />
      <h2>{description}</h2>
      <br />
      <hr />
    </div>
  );
}
