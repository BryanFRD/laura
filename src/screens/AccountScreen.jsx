import React from 'react';
import { useLoadingContext } from 'react-router-loading';

const AccountScreen = () => {
  const loadingContext = useLoadingContext();
  loadingContext.done();
  //TODO
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
};

export default AccountScreen;