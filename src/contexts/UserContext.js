import React, { useState, useEffect } from 'react';
import useGraphQL, { gql } from '../hooks/useFetch';

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const { data } = useGraphQL(gql`query renewToken {renewToken}`);
  
  useEffect(() => {
    setUser(data?.renewToken);
  }, [data])
  
  return (<UserContext.Provider value={user}>{props.children}</UserContext.Provider>);
}

export default UserContextProvider;