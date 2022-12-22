/* eslint-disable react/prop-types */
import React from 'react';
import Rocket from './Rocket';
import './rocket.css';

export const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul className="each-rocket-table">
      {rockets
        && rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

export default RocketList;
