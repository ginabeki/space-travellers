import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const LOAD = 'space-travellers/rockets/LOAD';
const RESERVE_ROCKET = 'space-travellers/rockets/RESERVE_ROCKET';
const CANCEL_RESERVE_ROCKET = 'space-travellers/rockets/CANCEL_RESERVE_ROCKET';

const initialState = {
  rockets: [],
};

const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

export const LoadRockets = createAsyncThunk(LOAD, async () => {
  const response = await axios.get(rocketsAPI);
  const rockets = Object.keys(response.data).map((key) => ({
    id: response.data[key].id,
    rocketName: response.data[key].rocket_name,
    description: response.data[key].description,
    flickrImage: response.data[key].flickr_images[0],
    reserved: false,
  }));
  return rockets;
});

export function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return {
        ...state,
        rockets: action.payload,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) {
            return { ...rocket };
          }
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) {
            return { ...rocket };
          }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
}

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  id: payload,
});

export const cancelReserveRocket = (payload) => ({
  type: CANCEL_RESERVE_ROCKET,
  id: payload,
});

export default {
  rocketsReducer,
  LoadRockets,
  reserveRocket,
  cancelReserveRocket,
};
