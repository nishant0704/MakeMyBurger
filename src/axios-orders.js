import axios from 'axios';

const instance = axios.create({
  baseURL:'https://react-make-my-burger.firebaseio.com/'
});

export default instance;
