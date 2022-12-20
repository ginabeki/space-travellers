import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RocketList } from './RocketList';
import { LoadRockets } from '../../../redux/rockets/rockets';

export const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rockets.rockets[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadRockets());
  }, [dispatch]);

  return (
    <div className="rocket-items">
      <RocketList rockets={rockets} />
    </div>
  );
};

export default { RocketsContainer };
