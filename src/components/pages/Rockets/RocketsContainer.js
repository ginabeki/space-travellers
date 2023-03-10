import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RocketList } from './RocketList';
import { LoadRockets } from '../../../redux/rockets/rockets';

export const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(LoadRockets());
    }
  }, [dispatch]);

  return (
    <div className="rocket-items">
      <RocketList rockets={rockets} />
    </div>
  );
};

export default { RocketsContainer };
