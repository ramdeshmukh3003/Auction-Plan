import React from 'react';
import AuctioneerDashboard from '../components/auctioneer/AuctioneerDashboard';
import AuctioneerAuction from '../components/auctioneer/AuctioneerAuction';

function AuctioneerPage() {
  return (
    <div>
      <h1>Auctioneer Dashboard</h1>
      <AuctioneerDashboard />
      <AuctioneerAuction />
    </div>
  );
}

export default AuctioneerPage;
