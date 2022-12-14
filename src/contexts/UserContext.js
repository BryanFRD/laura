import React, { useState, useEffect } from 'react';
import { setCookie } from 'react-use-cookie';
import { gql, LauraAPI } from '../hooks/useFetch';

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    refreshUser();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const refreshUser = async () => {
    LauraAPI.graphQL(gql`query renewToken {
      renewToken {
        id firstname lastname role {
          id title weight isAdmin
        }
      }
    }`).then(response => {
      setUser(response?.data?.data?.renewToken);
    }, () => {
      handleLogout();
    });
  }
  
  const handleSignup = async ({email, password, firstname, lastname}) => {
    return await LauraAPI.graphQL(gql`query register($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
      register(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
        void
      }
    }
    `, {email, password, firstname, lastname}).then(() => {
      return true;
    }, () => {
      return false;
    });
  }
  
  const handleLogin = async ({email, password}) => {
    return await LauraAPI.graphQL(gql`query login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        id firstname lastname role {
          id title weight isAdmin
        }
      }
    }`, {email, password}).then(response => {
      setUser(response?.data?.data?.login);
      return true;
    }, () => {
      setUser(undefined);
      return false;
    });
  }
  
  const handleLogout = async () => {
    setCookie('authToken');
    setCookie('accessToken');
    setUser(undefined);
  }
  
  return (<UserContext.Provider value={
    {
      user,
      refreshUser,
      handleSignup,
      handleLogin,
      handleLogout
    }
  }>{props.children}</UserContext.Provider>);
}

export default UserContextProvider;