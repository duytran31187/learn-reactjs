import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      key: Math.random().toString()
    };
    console.log('newExpenseData', newExpenseData);
    props.onAddExpense(newExpenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;