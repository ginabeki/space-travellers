import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const LOAD = 'space-travellers/missions/LOAD';

const initialState = {
  missions: [],
};

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

export function missionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return {
        missions: [action.payload],
      };
    default:
      return state;
  }
}

export const LoadMissions = createAsyncThunk(LOAD, async () => {
  const response = await axios.get(missionsAPI);
  const missions = Object.keys(response.data).map((key) => ({
    id: response.data[key].mission_id,
    missionName: response.data[key].mission_name,
    description: response.data[key].description,
  }));
  return missions;
});

export default { missionsReducer, LoadMissions };
