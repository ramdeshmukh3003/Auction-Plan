import React from 'react';
import TeamDashboard from '../components/team/TeamDashboard';
import TeamAuction from '../components/team/TeamAuction';

function TeamPage() {
  return (
    <div>
      <h1>Team Dashboard</h1>
      <TeamDashboard />
      <TeamAuction />
    </div>
  );
}

export default TeamPage;
