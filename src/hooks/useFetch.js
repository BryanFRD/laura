import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Config from '../configs/Config';
import { UserContext } from '../contexts/UserContext';

export const LauraAPI = axios.create({
  baseURL: Config.API?.URL,
  withCredentials: true
});

LauraAPI.graphQL = async (query, variables) => {
  return await LauraAPI.post('/', {query, variables});
}

export const gql = strings => {
  return strings?.join('');
}

const useGraphQL = (query, variables) => {
  const {refreshUser} = useContext(UserContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  const fetch = async (query, variables) => {
    setLoading(true);
    return await LauraAPI.graphQL(query, variables)
      .then(response => {
        setLoading(false);
        setData(response?.data?.data);
        return response;
      }, async error => {
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
          await refreshUser();
          
          return LauraAPI(originalRequest);
        }
        setLoading(false);
        setError(error);
        
        return Promise.reject(error);
      });
  }
  
  useEffect(() => {
    if(query)
      fetch(query, variables);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {fetch, data, loading, error};
}

export default useGraphQL;