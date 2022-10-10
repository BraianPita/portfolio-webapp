// axios import code
import axios from 'axios';

const domain = "https://portfolio-braianp.herokuapp.com";

// export axios object with baseURL 
export const backend = axios.create({
    baseURL:  domain + '/api/'
  });