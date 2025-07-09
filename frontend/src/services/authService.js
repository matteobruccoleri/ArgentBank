import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });

  return response.data.body.token; // le token JWT
};