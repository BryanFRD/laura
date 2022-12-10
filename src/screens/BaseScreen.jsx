import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import CustomNavbar from '../components/header/navbar/CustomNavbar';


const BaseScreen = () => {
  return (
    <div className='vh-100 d-flex flex-column'>
      <header>
        <CustomNavbar />
      </header>
      <main className='flex-grow-1'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BaseScreen;