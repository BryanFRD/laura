import React from 'react';
import { Tab } from 'react-bootstrap';

const LeftNavbarTabPane = ({eventKey, children}) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      {children}
    </Tab.Pane>
  );
};

export default LeftNavbarTabPane;