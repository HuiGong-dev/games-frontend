import axios from 'axios';

export default axios.create({
  baseURL: 'https://games.hellohuigong.com',
  //baseURL: 'http://localhost:8080',
});
