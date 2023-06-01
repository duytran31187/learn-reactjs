import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   'enteredTitle': '',
  //   'enteredAmount': '',
  //   'enteredDate': '',
  // });

  const titleChangeHandler = (event) => {
    console.log('Title changed !!!', event.target.value);
    // with this approach, enteredTitle might be merged with outdated data
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // with this approach, React ensure merge with latest data
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log('amount changed !!!', event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value};
    // });
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log('date changed !!!', event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value};
    // });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // need it to prevent submit, unless the page will be reloaded
    const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expensedata);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount}   onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate}  onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;