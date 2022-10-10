// axios import code
import axios from 'axios';

const domain = process.env.DOMAIN_URL;

// export axios object with baseURL 
export const backend = axios.create({
    baseURL:  domain + '/api/'
  });