import React from 'react';
import { Nav } from 'react-bootstrap';

const LeftNavbarNavItem = ({eventKey, children}) => {
  return (
    <Nav.Item className='w-100'>
      <Nav.Link eventKey={eventKey} className='text-dark fw-semibold background-dark-hover text-center py-3 px-4'>
        <span>{children}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

export default LeftNavbarNavItem;