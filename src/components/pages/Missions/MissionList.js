/* eslint-disable react/prop-types */
import React from 'react';
import Mission from './Mission';

export const MissionList = (props) => {
  const { missions } = props;

  return (
    <ul className="each-mission-table">
      {missions
        && missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
    </ul>
  );
};

export default MissionList;
