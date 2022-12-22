/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import './rocket.css';
import { reserveRocket, cancelReserveRocket } from '../../../redux/rockets/rockets';

export default function Rocket(props) {
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImage, reserved,
  } = rocket;
  const dispatch = useDispatch();

  return (
    <li className="rocket-li">
      <div className="rocket-left-side">
        <img className="rocket-image" src={flickrImage} alt={flickrImage} />
      </div>
      <div className="rocket-right-side">
        <h2 className="rocket-name">{rocketName}</h2>
        <p className="rocket-description">
          {reserved
            ? <span className="reserved-span">Reserved</span>
            : <span />}
          {description}
        </p>
        {!reserved
          ? <button type="button" className="reserve-rocket" onClick={() => dispatch(reserveRocket(id))}>Reserve Rocket</button>
          : <button type="button" className="cancel-rocket-reservation" onClick={() => dispatch(cancelReserveRocket(id))}>Cancel Reservation</button>}
      </div>
    </li>
  );
}
