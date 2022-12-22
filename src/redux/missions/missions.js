import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

const initialState = {
  missions: [],
};

const missionsAPI = 'https://api.spacexdata.com/v3/missions';
export const LoadMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await axios.get(missionsAPI);
  const missions = Object.keys(response.data).map((key) => ({
    id: response.data[key].mission_id,
    missionName: response.data[key].mission_name,
    description: response.data[key].description,
    reserved: false,
  }));
  return missions;
});

export function missionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return {
        ...state,
        missions: action.payload,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.id) {
            return { ...mission };
          }
          return { ...mission, reserved: true };
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.id) {
            return { ...mission };
          }
          return { ...mission, reserved: false };
        }),
      };
    default:
      return state;
  }
}

export const joinMission = (payload) => ({ type: JOIN_MISSION, id: payload });

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  id: payload,
});

export default { missionsReducer, LoadMissions };
