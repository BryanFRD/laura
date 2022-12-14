import React from 'react';
import { Nav } from 'react-bootstrap';
import LeftNavbarNavItem from './LeftNavbarNavItem';

const LeftNavbarNav = () => {
  return (
    <Nav className='d-flex flex-column align-items-center y-scroll shadow-sm h-100'>
      <LeftNavbarNavItem eventKey='category'>
        <span>Catégories</span>
      </LeftNavbarNavItem>
      <LeftNavbarNavItem eventKey='product'>
        <span>Produits</span>
      </LeftNavbarNavItem>
    </Nav>
  );
};

export default LeftNavbarNav;