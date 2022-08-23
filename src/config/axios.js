import axios from 'axios';

const instance = axios.create({
  baseURL: '...', // The API (Cloud function) URL
});

export default instance;