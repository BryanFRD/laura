import axios from 'axios';
import { useEffect, useState } from 'react';
import Config from '../configs/Config';

const LauraAPI = axios.create({
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
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  
  useEffect(() => {
    LauraAPI.graphQL(query, variables).then(response => {
      setLoading(false);
      setData(response?.data?.data);
    }, async error => {
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest.retry){
        
        await LauraAPI.graphQL(`query renewToken {
          renewToken
        }`).then(() => {}, () => {
          //TODO handleLogout
        });
        
        return LauraAPI(originalRequest);
      }
      setLoading(false);
      setError(error);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {data, loading, error};
}

export default useGraphQL;