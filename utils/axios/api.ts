/* 
  AXIOS APIS 
  
  there is an interceprors thats working both on client and server components
  auth credentials are stored in cookies
  dividing cookies on client and server side is done in ./authCredentials.ts
*/

import axios from 'axios';
// import { getCookie } from 'cookies-next'; // cookies for client components
// import { cookies as serverCookies } from 'next/headers'; // for server components
import { getClientAuthCredentials, getServerAuthCredentials } from './authCredentials';


// create axios instance
const apiAD = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "http://server.adsync.com:12040"
})


// Add a request interceptor to implement authentication
apiAD.interceptors.request.use((config) => {
  let authCredentials;
  if (typeof window === 'undefined') {
    // get authCredentials(cookie) from CLIENT side
    authCredentials = getServerAuthCredentials();
  } else {
    // get authCredentials(cookie) from SERVER side
    authCredentials = getClientAuthCredentials();
  }

  if (authCredentials) {
    config.headers['Authorization'] = `Basic ${authCredentials}`
  }
  return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);


export default apiAD;