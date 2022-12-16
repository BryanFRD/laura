import React from 'react';
import { Col, Tab } from 'react-bootstrap';
import CategoryTabPane from './content/CategoryTabPane';
import LeftNavbarTabPane from './LeftNavbarTabPane';


const LeftNavbarTabContent = () => {
  return (
    <Col>
      <Tab.Content>
        <LeftNavbarTabPane eventKey={'category'}>
          <CategoryTabPane />
        </LeftNavbarTabPane>
      </Tab.Content>
    </Col>
  );
};

export default LeftNavbarTabContent;