import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/pages/Missions';
import { RocketsContainer } from './components/pages/Rockets/RocketsContainer';
import MyProfile from './components/pages/MyProfile';

const app = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/rockets" element={<RocketsContainer />} />
      <Route path="/mission" element={<Missions />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default app;
