import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { UserContext } from '../../contexts/UserContext';

const LoginForm = ({handleClose}) => {
  const {handleLogin} = useContext(UserContext);
  const [hasError, setHasError] = useState();
  const [showForgotPasswordTab, setShowForgotPasswordTab] = useState(false);
  const [loginOrEmailValue, setLoginOrEmailValue] = useState(localStorage.getItem('rememberedUser') ?? '');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const jsonData = Object.fromEntries(new FormData(event.currentTarget));
    const loggedIn = await handleLogin(jsonData);
    
    if(loggedIn){
      setHasError(undefined);
      handleClose()
    } else {
      setHasError('Vérifiez vos informations de connexion')
    }
  }
  
  const handleLoginOrEmailInput = (event) => {
    setLoginOrEmailValue(event.target.value);
  }
  
  const handleForgotPassword = (event) => {
    event.preventDefault();
    
    console.log('event:', event);
    toggleForgotPassword(false);
  }
  
  const toggleForgotPassword = (value) => {
    setShowForgotPasswordTab(value);
  }
  
  return (
    <>
    {showForgotPasswordTab ?
      <>
        <span
          className={`d-flex gap-2 cursor-pointer pe-auto`} 
          onClick={() => toggleForgotPassword(false)}>
            <RiArrowLeftSLine className='fs-2'/>
            <span className='fs-5 fw-semibold'>Retour</span>
        </span>
        <div className={`text-center fs-5 pt-4 fw-semibold px-2`}>Un mail vous sera envoyez afin de changer votre mot de passe</div>
        <Form className='d-flex flex-column gap-3 p-3 align-items-center' onSubmit={handleForgotPassword}>
          <Form.Group className='w-100 pb-2 fw-semibold'>
            <Form.Label>Adresse mail</Form.Label>
            <Form.Control placeholder='nom@exemple.com' name='email' className='bg-light fw-semibold' required></Form.Control>
          </Form.Group>
          <Button variant='success' type='submit' className='px-4 text-light fw-semibold'>Accepter</Button>
        </Form>
      </>
      :
      <Form className='d-flex flex-column gap-3 align-items-center fw-semibold' onSubmit={handleSubmit}>
        {hasError && <h5 className={`text-danger text-center`}>{hasError}</h5>}
        <Form.Group className='w-100 pb-4 '>
          <Form.Label>Adresse mail</Form.Label>
          <Form.Control
            placeholder='nom@exemple.com'
            name='email'
            className='bg-light fw-semibold'
            onChange={handleLoginOrEmailInput}
            value={loginOrEmailValue}
            maxLength={50}
            required>
          </Form.Control>
        </Form.Group>
        <Form.Group className='w-100'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='password'
            name='password'
            className='bg-light fw-semibold'
            maxLength={255}
            required>
          </Form.Control>
        </Form.Group>
        <Form.Group className=' w-100 d-flex flex-column flex-lg-row gap-5 py-3 justify-content-lg-between pb-3'>
          <Form.Check label='Se souvenir de moi' name='remember'></Form.Check>
          <span className='text-decoration-underline cursor-pointer pe-auto' onClick={() => toggleForgotPassword(true)}>Mot de passe oublié</span>
        </Form.Group>
        <Button variant='success' type='submit' className='px-4 py-2 text-light fw-semibold'>Se connecter</Button>
      </Form>
      }
    </>
  );
};

export default LoginForm;