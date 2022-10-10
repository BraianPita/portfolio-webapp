// axios import code
import axios from 'axios';

const port = process.env.PORT || 3000;

// export axios object with baseURL 
export const backend = axios.create({
    baseURL: 'http://localhost:' + port + '/api/'
  });