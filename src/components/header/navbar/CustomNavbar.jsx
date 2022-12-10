import React, { useEffect } from 'react';
import './CustomNavbar.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import useGraphQL, { gql } from '../../../hooks/useFetch';
import { RiShoppingBasketLine, RiAccountCircleLine } from 'react-icons/ri'
import { Badge } from 'react-bootstrap';

const CustomNavbar = () => {
  const { data } = useGraphQL(gql`query getCategories {
    getCategories {
      id
      title
    }
  }`);
  
  return (
    <Navbar className='flex-column'>
      <Row className='w-100 my-3'>
        <Col xs={12} lg={{span: 6, offset: 3}}>
          <Link className='text-dark text-decoration-none'>
            <h1 className='d-block text-center display-1 fw-semibold'>L'aura</h1>
          </Link>
        </Col>
        <Col xs={12} lg={3}>
          <div className='d-none d-lg-flex justify-content-end pe-5 align-items-center h-100 gap-3'>
            <Link to='cart' className='text-dark navbar-link display-6 position-relative'>
              <RiShoppingBasketLine />
              <Badge pill bg='danger' text='light' className='navbar-basket-badge'>4</Badge>
            </Link>
            <Link to='account' className='text-dark navbar-link display-6'>
              <RiAccountCircleLine />
            </Link>
          </div>
        </Col>
      </Row>
      <Navbar.Toggle aria-controls='custom-navbar'/>
      <Navbar.Collapse id='custom-navbar' className='w-100'>
        <Nav fill justify className='w-100'>
          {data?.getCategories?.map(category => 
            <Nav.Item key={category.id} as={NavLink} to={category.title?.toLowerCase()}>
              {category.title}
            </Nav.Item>)}
            <Nav.Item className='d-block d-lg-none'>
              <Nav.Link as={NavLink} to='cart'>
                Panier
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-block d-lg-none'>
              <Nav.Link as={NavLink} to='account'>
                Compte
              </Nav.Link>
            </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link as={NavLink} to='shop'>
              a
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;