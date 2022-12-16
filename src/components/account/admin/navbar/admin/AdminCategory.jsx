import React from 'react';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useGraphQL, { gql } from '../../../../../hooks/useFetch';
import GenericMultiSelect from '../../../../generic/GenericMultiSelect';

const AdminCategory = ({className, category, tags, handleClose, create}) => {
  const [shownCategory, setShownCategory] = useState({...category});
  const [update, setUpdate] = useState(false);
  const {fetch, data, error, loading} = useGraphQL();
  
  const handleCloseButton = () => {
    if(create){
      handleClose();
    } else {
      setUpdate(false)
      setShownCategory({...category});
    }
  }
  
  const handleShowUpdate = () => {
    setUpdate(true);
  }
  
  const handleAcceptButton = async () => {
    if(loading)
      return;
    
    if(create){
      await fetch(gql`mutation {
        createCategory(title: $title, showOrder: $showOrder, tags: $tags) {
          id
        }
      }`, {...shownCategory});
      
      console.log('data:', data);
      console.log('error:', error);
    } else {
      setUpdate(false);
    }
  }
  
  return (
    <div className={`${className} bg-white p-3 fw-semibold d-flex justify-content-between gap-5`}>
      <Form className='w-100'>
        {(create || update) ?
        <div className='d-flex gap-3 align-items-center'>
          <FloatingLabel label='Titre' className='w-auto'>
            <Form.Control name='' placeholder='Titre' defaultValue={category.title}/>
          </FloatingLabel>
          <GenericMultiSelect options={[{value: 'dsq', label: 'dsq'}, {value: 'a', label: 'a'}]}/>
        </div>
        :
        <>
          <Form.Label>{category.title}</Form.Label>
        </>
        }
      </Form>
      <div className='d-flex align-items-center gap-3'>
        {(create || update) ?
          <>
            <Button variant='success' className='text-light' onClick={handleAcceptButton}>{create ? 'Créer' : 'Valider'}</Button>
            <Button variant='danger' className='text-light' onClick={handleCloseButton}>Annuler</Button>
          </>
          :
          <>
            <Button variant='secondary' className='text-light' onClick={handleShowUpdate}>Modifier</Button>
          </>
        }
      </div>
    </div>
  );
};

export default AdminCategory;