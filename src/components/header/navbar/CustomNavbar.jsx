import React from 'react';
import './CustomNavbar.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { Link, NavLink } from 'react-router-dom';
import useGraphQL, { gql } from '../../../hooks/useFetch';
import { RiShoppingBasketLine } from 'react-icons/ri';
import ConnectionModal from '../../modal/ConnectionModal';
import { useState } from 'react';
import CustomNavbarAccountDropDown from './CustomNavbarAccountDropDown';

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useGraphQL(gql`query getCategories {
    getCategories {
      id
      title
    }
  }`);
  
  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  return (
    <>
      <Navbar variant='black' className='flex-column shadow-sm' expand='lg'>
        <Row className='w-100 my-3'>
          <Col xs={{span:6, offset: 3}} lg={{span: 6, offset: 3}}>
            <Link className='text-dark text-decoration-none' to='/'>
              <h1 className='d-block text-center display-1 fw-semibold'>L'aura</h1>
            </Link>
          </Col>
          <Col xs={3} lg={3} className='align-self-center'>
            <Navbar.Toggle aria-controls='custom-navbar'/>
            <div className='d-none d-lg-flex justify-content-end pe-5 align-items-end h-100 gap-4'>
              <Link to='cart' className='text-dark navbar-link display-6 position-relative'>
                <RiShoppingBasketLine />
                <Badge pill bg='danger' text='light' className='navbar-basket-badge fw-semibold'>99+</Badge>
              </Link>
              <CustomNavbarAccountDropDown setShowModal={setShowModal} />
            </div>
          </Col>
        </Row>
        <Navbar.Collapse id='custom-navbar' className='w-100 fw-semibold fs-2'>
          <Nav fill justify className='w-100 px-4 px-lg-0'>
            {data?.getCategories?.map(category => 
              <Nav.Item
                key={category.id}
                as={NavLink}
                className='text-dark text-decoration-none underline-hover'
                to={`category/${category.title?.toLowerCase()}`}>
                  <span>{category.title}</span>
              </Nav.Item>
            )}
            <Nav.Item className='d-lg-none w-100'>
              <Nav.Link as={NavLink} to='cart' className='text-dark my-1 d-flex justify-content-center gap-3 underline-hover'>
                Panier
              </Nav.Link>
              <Badge bg='danger' text='light' className='fw-semibold'>99+</Badge>
            </Nav.Item>
            <Nav.Item className='d-lg-none w-100'>
              <Nav.Link as={NavLink} to='account' className='text-dark my-1 underline-hover'>
                Compte
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ConnectionModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default CustomNavbar;