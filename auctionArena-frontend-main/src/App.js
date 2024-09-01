import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuctioneerPage from './pages/AuctioneerPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/auctioneer" component={AuctioneerPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </Routes>
  );
}

export default App;
