import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';
import Rockets from './components/pages/Rockets';

const app = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default app;
