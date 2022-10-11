// axios import code
import axios from 'axios';

const domain = process.env.API_URL || "https://portfolio-braianp.herokuapp.com";

// export axios object with baseURL 
export const backend = axios.create({
    baseURL:  domain + '/api/'
  });