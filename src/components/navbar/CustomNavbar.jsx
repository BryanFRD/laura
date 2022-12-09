import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import useGraphQL, { gql } from '../../hooks/useFetch';

const CustomNavbar = () => {
  const {data} = useGraphQL(gql`query getCategories {
    getCategories {
      id
      title
    }
  }`);
  
  return (
    <Navbar className='flex-column'>
      <Row className='w-100 my-3'>
        <Col xs={12} lg={{span: 6, offset: 3}}>
          <h1 className='d-block text-center display-1 fw-semibold'>L'aura</h1>
        </Col>
        <Col xs={12} lg={3}>
          <div className='d-flex gap-3'>
            
          </div>
        </Col>
      </Row>
      <Navbar.Collapse className='w-100'>
        <Nav fill justify className='w-100'>
          {data?.getCategories?.map(category => 
            <Nav.Item key={category.id} as={NavLink} to={category.title?.toLowerCase()}>
              {category.title}
            </Nav.Item>)}
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