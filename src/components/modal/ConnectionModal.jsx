import React from 'react';
import { Modal, Nav, Tab } from 'react-bootstrap';
import LoginForm from '../form/LoginForm';
import SignupForm from '../form/SignupForm';

const ConnectionModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} contentClassName='bg-white border-0' fullscreen='lg-down'>
      <Modal.Header closeButton className='border-0'/>
      <Modal.Body>
        <Tab.Container defaultActiveKey='login'>
          <Nav variant='pills' className='fs-4 fw-semibold justify-content-around mb-5'>
            <Nav.Item>
              <Nav.Link eventKey='login' className='text-dark underline-hover bg-white'>
                <span>Connexion</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='signup' className='text-dark underline-hover bg-white'>
                <span>Inscription</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className='d-flex justify-content-center w-100 px-3'>
            <Tab.Pane eventKey='login' className='w-100'>
              <LoginForm handleClose={handleClose}/>
            </Tab.Pane>
            <Tab.Pane eventKey='signup' className='w-100'>
              <SignupForm handleClose={handleClose}/>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );
};

export default ConnectionModal;