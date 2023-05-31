import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => { // jsx just use only one params: props. not as js function(data,title, amount)
    // rule: only one root element
    // do not confuse: $ is dollar
    const [title, setTitle] = React.useState(props.title); // Returns a stateful value, and a function to update it
    
    const clickHandler = () => {
        setTitle('Updated !!!'); // change the title to new string, state just change inside the component only
        console.log(title);// but it still returned the old string
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <Card className='expense-item__price'>${props.amount}</Card>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;