'use client';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/lib/AuthContext';
import { API_URL } from '@/constants/api';

const useAuth = () => {
  const { logOut } = useContext(AuthContext);
  
  // get new access token functionality
  useEffect(() => {
    const refresh = localStorage.getItem('refresh_token');

    try {
      const response = axios.post(`${API_URL}/api/v1/refresh/`, { refresh })
      localStorage.setItem('access_token', response?.data?.access)
      // set the access token expiry date
      localStorage.setItem('access_exp', 'data')
    }catch(err) {
      console.log(err)
    }
  },[]);

  // auto logout functionality
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const accessExp = localStorage.getItem('access_exp');

    const currentDate = new Date().getTime();
    const expiryDate = new Date(accessExp).getTime();
    const isExpired = currentDate < expiryDate;

    if (token) {
      if (isExpired !== true) {
        console.log('expired token');
        logOut()
      }
    }
  },[]);

  return;
};

export default useAuth;
