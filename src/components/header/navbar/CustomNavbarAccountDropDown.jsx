import React from 'react';
import { useContext } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const CustomNavbarAccountDropDown = ({setShowModal}) => {
  const {user, handleLogout} = useContext(UserContext);
  
  const handleClickAccount = (event) => {
    if(!user){
      setShowModal(true);
    }
  }
  
  return (
    <Dropdown className='custom-navbar-account-dropdown' drop='start'>
      {!user ?
        <Button variant='' onClick={handleClickAccount} className='p-0 text-dark navbar-link border-0'>
          <RiAccountCircleLine className='display-6'/>
        </Button>
        :
        <Dropdown.Toggle variant='' className='custom-navbar-account-dropdown-toggle p-0 text-dark navbar-link border-0'>
            <RiAccountCircleLine className='display-6'/>
        </Dropdown.Toggle>
      }
      {user &&
        <Dropdown.Menu variant='white' className='mt-5 me-n5 p-0'>
          <Dropdown.Item as={Link} to='account' className='fw-semibold py-2 rounded-top'>
            Compte
          </Dropdown.Item>
          {user.role?.isAdmin &&
            <>
              <Dropdown.Divider className='m-0'/>
              <Dropdown.Item as={Link} to='admin' className='fw-semibold py-2'>
                Admin
              </Dropdown.Item>
            </>
          }
          <Dropdown.Divider className='m-0'/>
          <Dropdown.Item as={Link} to='account' onClick={handleLogout} className='fw-semibold py-2 rounded-bottom'>
            Déconnexion
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    </Dropdown>
  );
};

export default CustomNavbarAccountDropDown;