import React from 'react';
import JobCard from './Component/JobCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobCard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
