import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './Rocket';

export const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul className="each-rocket-table">
      {rockets
        && rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketList.propTypes = {
  rockets: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default RocketList;
