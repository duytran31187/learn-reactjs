import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) { // jsx just use only one params: props. not as js function(data,title, amount)
    // rule: only one root element
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;