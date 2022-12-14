import React, { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import useGraphQL, { gql } from '../hooks/useFetch';

const ConfirmationScreen = () => {
  const loadingContext = useLoadingContext();
  const navigate = useNavigate();
  const {fetch} = useGraphQL();
  const {token} = useParams();
  const request = useRef();
  
  useEffect(() => {
    if(request.current)
      return;
    
    navigate('/');
    
    request.current = fetch(gql`mutation register($token: String!){
      register(token: $token) {
        void
      }
    }`, {token});
    
    toast.promise(request.current, {
      loading: 'Création de votre compte...',
      success: 'Compte créé !',
      error: 'Erreur lors de la création de votre compte !'
    });
    
    loadingContext.done();
  }, [fetch, navigate, token, loadingContext]);
  
  return (
    <></>
  );
};

export default ConfirmationScreen;