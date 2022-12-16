import React from 'react';
import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const GenericMultiSelect = ({className, options}) => {
  const [selected, setSelected] = useState([]);
  
  return (
    <MultiSelect 
      className={`${className} bg-light rounded`} 
      options={options} 
      value={selected} 
      onChange={setSelected} 
      labelledBy='Tags...'/>
  );
};

export default GenericMultiSelect;