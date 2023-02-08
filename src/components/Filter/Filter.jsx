// import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/usersSelector';
import { filterContact } from 'redux/filterSlice';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  console.log('This is filter:', filter);
  const handleFilterInput = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <LabelFilter htmlFor="">
      Finde Contact by Name
      <InputFilter
        type="text"
        name="filter"
        onChange={handleFilterInput}
        value={filter}
      />
    </LabelFilter>
  );
}

// Filter.propTypes = {
//   handleInputValue: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
