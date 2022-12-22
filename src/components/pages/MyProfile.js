import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  let reservedRockets;
  if (rockets) {
    reservedRockets = rockets.filter((rocket) => rocket.reserved);
  }

  const missions = useSelector((state) => state.missions.missions);
  let reservedMissions;
  if (missions) {
    reservedMissions = missions.filter((mission) => mission.reserved);
  }
  return (
    <div className="d-flex w-75 mx-auto mt-4">
      <div className="my-missions w-50 me-2">
        <h4>Rockets</h4>
        {reservedRockets && (
          <ul className="list-group">
            {reservedRockets.map((reservedRocket) => (
              <li key={reservedRocket.id} className="list-group-item">{reservedRocket.rocketName}</li>
            ))}
          </ul>
        )}

        {(!reservedRockets || !reservedRockets[0]) && (
          <h3 className="text-danger">No rockets reserved yet</h3>
        )}
      </div>

      <div className="my-missions w-50 me-2">
        <h4>My Missions</h4>
        {reservedMissions && (
          <ul className="list-group">
            {reservedMissions.map((reservedMission) => (
              <li key={reservedMission.id} className="list-group-item">{reservedMission.missionName}</li>
            ))}
          </ul>
        )}

        {(!reservedMissions || !reservedMissions[0]) && (
          <h3 className="text-danger">You have not joined any mission yet</h3>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
