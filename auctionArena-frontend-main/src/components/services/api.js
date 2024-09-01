import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the URL as necessary

export const signup = async (teamName, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    teamName,
    password,
    accountType: 'team',
  });
  return response.data;
};

export const login = async (teamName, password, accountType) => {
  const response = await axios.post(`${API_URL}/login`, {
    teamName,
    password,
    accountType,
  });
  return response.data;
};

export const getAuctionData = async () => {
  const response = await axios.get(`${API_URL}/auction-data`);
  return response.data;
};

export const placeBid = async (teamId, companyId, bidAmount) => {
  const response = await axios.post(`${API_URL}/place-bid`, { teamId, companyId, bidAmount });
  return response.data;
};

// Other API calls...
