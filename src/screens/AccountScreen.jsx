import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import { UserContext } from '../contexts/UserContext';

const AccountScreen = () => {
  const loadingContext = useLoadingContext();
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  
  loadingContext.done();
  
  useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, [navigate, user]);
  //TODO
  return (
    <Container>
      
    </Container>
  );
};

export default AccountScreen;