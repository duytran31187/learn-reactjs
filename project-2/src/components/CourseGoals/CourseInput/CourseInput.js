import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import anyNameStyles from  './CourseInput.module.css';
import styled from 'styled-components';


const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'}
  }

  &  input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background-color: ${props => props.invalid ? '#ffd7d7' : '#fff'};;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  &  input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim() === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim() !== '') {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${anyNameStyles['form-control']} ${!isValid && anyNameStyles.invalid}`}>
        <label style={{color: isValid ? 'black' : 'orange'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
