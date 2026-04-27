import axios from 'axios';
const BASE = process.env.REACT_APP_API_URL || 'https://workstudy-project-production.up.railway.app';
const API = axios.create({ baseURL: BASE + '/api' });
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = 'Bearer ' + token;
  return req;
});
export default API;
