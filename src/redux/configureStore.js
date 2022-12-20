import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { missionsReducer } from './missions/missions';
import { rocketsReducer } from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default { store };
