import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MissionList } from './MissionList';
import { LoadMissions } from '../../../redux/missions/missions';

export const MissionsContainer = () => {
  const missions = useSelector((state) => state.missions.missions[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadMissions());
  }, [dispatch]);

  return (
    <div className="mission-items">
      <MissionList missions={missions} />
    </div>
  );
};

export default { MissionsContainer };
