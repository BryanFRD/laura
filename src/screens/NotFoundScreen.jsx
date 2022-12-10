import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <></>
  );
};

export default NotFoundScreen;