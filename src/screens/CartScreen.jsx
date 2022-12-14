import React from 'react';
import { useEffect } from 'react';
import { useLoadingContext } from 'react-router-loading';

const CartScreen = () => {
  const loadingContext = useLoadingContext();
  
  useEffect(() => {
    loadingContext.done();
  }, [loadingContext])
  //TODO
  return (
    <div>
      <h1>CART</h1>
    </div>
  );
};

export default CartScreen;