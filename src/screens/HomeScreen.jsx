import React from 'react';
import { useLoadingContext } from 'react-router-loading';

const HomeScreen = () => {
  const loadingContext = useLoadingContext();
  loadingContext.done();
  //TODO
  return (
    <div>
      <h1>Accueil</h1>
    </div>
  );
};

export default HomeScreen;