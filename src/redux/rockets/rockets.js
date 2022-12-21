import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const LOAD = 'space-travellers/rockets/LOAD';

const initialState = {
  rockets: [],
};

const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

export function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return {
        rockets: [action.payload],
      };
    default:
      return state;
  }
}

export const LoadRockets = createAsyncThunk(LOAD, async () => {
  const response = await axios.get(rocketsAPI);
  const rockets = Object.keys(response.data).map((key) => ({
    id: response.data[key].id,
    rocketName: response.data[key].rocket_name,
    description: response.data[key].description,
    flickrImage: response.data[key].flickr_images[1],
    reserved: 'false',
  }));
  return rockets;
});

export default { rocketsReducer, LoadRockets };
