// axios import code
import axios from 'axios';

// export axios object with baseURL 
export const backend = axios.create({
    baseURL: 'http://localhost:3001/api/'
  });