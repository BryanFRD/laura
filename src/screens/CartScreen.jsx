import React from 'react';
import { useLoadingContext } from 'react-router-loading';

const CartScreen = () => {
  const loadingContext = useLoadingContext();
  loadingContext.done();
  //TODO
  return (
    <div>
      <h1>CART</h1>
    </div>
  );
};

export default CartScreen;