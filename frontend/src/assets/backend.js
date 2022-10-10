// axios import code
import axios from 'axios';

const domain = process.env.DOMAIN || 'http://localhost:3000';

// export axios object with baseURL 
export const backend = axios.create({
    baseURL:  domain + '/api/'
  });