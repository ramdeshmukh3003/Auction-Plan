import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('team'); // Default to team
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        teamName,
        password,
        accountType,
      });
      // Handle success (e.g., redirect to dashboard)
    } catch (error) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Account Type</label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="team">Team</option>
            <option value="auctioneer">Auctioneer</option>
          </select>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
