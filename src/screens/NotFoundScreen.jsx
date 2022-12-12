import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';

const NotFoundScreen = () => {
  const loadingContext = useLoadingContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  loadingContext.done();
  return (
    <></>
  );
};

export default NotFoundScreen;