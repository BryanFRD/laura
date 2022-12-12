import React from 'react';
import { Toaster } from 'react-hot-toast';

const CustomToast = () => {
  return (
    <Toaster position='bottom-right' containerClassName={` hot-toast`} toastOptions={{className: `bg-white text-light fw-semibold`}}/>
  );
};

export default CustomToast;