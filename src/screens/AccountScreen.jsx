import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Tab, Tabs } from 'react-bootstrap';
import { useLoadingContext } from 'react-router-loading';
import LoginForm from '../components/form/LoginForm';
import { UserContext } from '../contexts/UserContext';

const AccountScreen = () => {
  const loadingContext = useLoadingContext();
  const {user} = useContext(UserContext);
  
  loadingContext.done();
  //TODO
  return (
    <Container>
      {user ?
        <div>
          
        </div>
        :
        <Tab.Container justify defaultActiveKey='login'>
          <Nav className='d-flex gap-5 fw-semibold fs-4'>
            <Nav.Item>
              <Nav.Link eventKey='login' className='text-dark underline-hover'>
                <span>Connexion</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='signup' className='text-dark underline-hover'>
                <span>Inscription</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='login'>
              <LoginForm />
            </Tab.Pane>
            <Tab.Pane eventKey='signup'>
              A
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      }
    </Container>
  );
};

export default AccountScreen;