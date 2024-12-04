'use client'

// Retrieves the client's authentication credentials from client cookies.
import { getCookie } from "cookies-next";
export const getClientAuthCredentials = () => {
  return getCookie('authCredentials') || '';
};


// Retrieves the server's authentication credentials from  next/headers cookies.
export const getServerAuthCredentials = () => {
  const { cookies } = require('next/headers');
  const cookieStore = cookies();
  return cookieStore.get('authCredentials')?.value || '';
};