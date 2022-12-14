import React, { useEffect } from 'react';
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useLoadingContext } from 'react-router-loading';
import LeftNavbarNav from '../components/account/admin/navbar/LeftNavbarNav';
import LeftNavbarTabContent from '../components/account/admin/navbar/LeftNavbarTabContent';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const AdminScreen = () => {
  const loadingContext = useLoadingContext();
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    loadingContext.done();
    
    if(!user?.role.isAdmin){
      navigate('/');
    }
  }, [user, navigate, loadingContext]);
  
  return (
    <>
      {user?.role.isAdmin &&
        <Tab.Container defaultActiveKey='categor'>
          <Row className='g-0 h-100'>
            <Col xs='auto' className='bg-white'>
              <LeftNavbarNav />
            </Col>
            <Col>
              <LeftNavbarTabContent />
            </Col>
          </Row>
        </Tab.Container>
      }
    </>
  );
};

export default AdminScreen;