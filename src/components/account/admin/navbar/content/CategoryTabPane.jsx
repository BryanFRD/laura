import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useGraphQL, { gql } from '../../../../../hooks/useFetch';
import AdminCategory from '../admin/AdminCategory';

const CategoryTabPane = () => {
  const [createCategory, setCreateCategory] = useState({show: false});
  
  const {data} = useGraphQL(gql`query {
    getCategories {
      id title showOrder tags {
        id title
      }
    }
    getTags {
      id title
    }
  }`);
  
  const handleCreateCategory = () => {
    setCreateCategory({show: true, category: {title: 'Nouvelle catégorie', showOrder: 1, tags: []}});
  }
  
  const handleCloseCreateCategory = () => {
    setCreateCategory({show: false, category: {}});
  }
  
  return (
    <Container fluid className='d-flex flex-column'>
      <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
        <h2 className='m-0'>Catégories</h2>
        <div>
          <Button variant='success' className='text-light' onClick={handleCreateCategory}>Créer</Button>
        </div>
      </div>
      <hr />
      {createCategory?.show &&
        <AdminCategory category={createCategory.category} tags={data.getTags} handleClose={handleCloseCreateCategory} create/>
      }
      <div>
        {data?.getCategories?.map((category, index) => 
          <AdminCategory key={category.id} category={category} tags={data.getTags} className={index %2 ? 'bg-white' : ''}/>
        )}
      </div>
    </Container>
  );
};

export default CategoryTabPane;