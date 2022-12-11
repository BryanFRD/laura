import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <Spinner />
    </div>
  );
};

export default LoadingScreen;