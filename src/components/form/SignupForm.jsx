import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../contexts/UserContext';
import toast from 'react-hot-toast';
import Validator from '../../validators/Validator';

const SignupForm = ({handleClose}) => {
  const {handleSignup} = useContext(UserContext);
  const [hasError, setHasError] = useState();
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptCGU: false
  });
  
  const [validations, setValidations] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const jsonData = Object.fromEntries(new FormData(event.currentTarget));
    const signedIn = await handleSignup(jsonData);
    
    if(signedIn){
      handleClose();
      setHasError(undefined);
      toast.success('Un email vous a été envoyé !');
    } else {
      setHasError('Une erreur est survenue lors de votre inscription!');
    }
  }
  
  const handleInputChange = ({target}) => {
    setValues(prevValue => {      
      if(target.type === 'checkbox')
        prevValue[target.name] = target.checked;
      else
        prevValue[target.name] = target.value;
      
      return {...prevValue}
    });
  }
  
  useEffect(() => {
    setValidations(prevValues => {
      const email = values.email === '' ? null : Validator.email(values.email);
      const firstname = values.firstname === '' ? null : Validator.firstname(values.firstname);
      const lastname = values.lastname === '' ? null : Validator.lastname(values.lastname);
      const password = values.password === '' ? null : Validator.password(values.password) && values.password === values.confirmPassword;
      const confirmPassword = values.confirmPassword === '' ? null : Validator.password(values.confirmPassword) && values.password === values.confirmPassword;
      const allValidated = (
        email &&
        firstname &&
        lastname &&
        password &&
        confirmPassword &&
        values.acceptCGU
      );
      
      return {email, firstname, lastname, password, confirmPassword, allValidated};
    });
  }, [values]);
  return (
    <Form className='d-flex flex-column align-items-center fw-semibold' onSubmit={handleSubmit}>
    {hasError ? <h5 className={`text-danger text-center`}>Erreur lors de l'inscription</h5> : <></>}
      <Row>
        <Col xs={6}>
          <Form.Group className='w-100 pb-4'>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              placeholder='Nom'
              name='lastname'
              onChange={handleInputChange}
              value={values.lastname}
              className={`bg-light fw-semibold ${validations.lastname === null ? '' : validations.lastname ? 'border-success' : 'border-danger'}`}
              maxLength={12}
              required>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className='w-100 pb-4'>
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              placeholder='Prénom'
              name='firstname'
              onChange={handleInputChange}
              value={values.firstname}
              className={`bg-light fw-semibold ${validations.firstname === null ? '' : validations.firstname ? ' border-success' : 'border-danger'}`}
              maxLength={12}
              required>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='w-100 pb-4'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder='nom@exemple.com'
          name='email'
          onChange={handleInputChange}
          value={values.email}
          className={`bg-light fw-semibold ${validations.email === null ? '' : validations.email ? 'border-success' : 'border-danger'}`}
          maxLength={50}
          required>
          </Form.Control>
      </Form.Group>
      <Form.Group className='w-100 pb-4'>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type='password'
          placeholder='Mot de passe'
          name='password'
          onChange={handleInputChange}
          value={values.password}
          className={`bg-light fw-semibold ${validations.password === null ? '' : validations.password ? 'border-success' : 'border-danger'}`}
          maxLength={255}
          required>
        </Form.Control>
      </Form.Group>
      <Form.Group className='w-100 pb-4'>
        <Form.Label>Confirmez votre mot de passe</Form.Label>
        <Form.Control
          type='password'
          placeholder='Confirmer mot de passe'
          name='confirmPassword'
          onChange={handleInputChange}
          value={values.confirmPassword}
          className={`bg-light fw-semibold ${validations.confirmPassword === null ? '' : validations.confirmPassword ? 'border-success' : 'border-danger'}`}
          maxLength={255}
          required>
        </Form.Control>
      </Form.Group>
      <Form.Group className='w-100'>
        <Form.Check label='Accepter les CGU' name='acceptCGU' onChange={handleInputChange} checked={values.acceptCGU}></Form.Check>
      </Form.Group>
      <Button variant='success' type='submit' className='px-4 py-2 mt-2 text-light fw-semibold' disabled={!validations.allValidated}>S'inscrire</Button>
    </Form>
  );
};

export default SignupForm;