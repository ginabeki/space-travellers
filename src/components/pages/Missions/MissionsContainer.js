import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { LoadMissions } from '../../../redux/missions/missions';

export const MissionsContainer = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadMissions());
  }, [dispatch]);

  return (
    <div className="mission-items">
      <Mission missions={missions} />
    </div>
  );
};

export default MissionsContainer;
