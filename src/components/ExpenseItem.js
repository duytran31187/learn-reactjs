import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

function ExpenseItem(props) { // jsx just use only one params: props. not as js function(data,title, amount)
    // rule: only one root element
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Card className='expense-item__price'>{props.amount}</Card>
            </div>
        </Card>
    )
}

export default ExpenseItem;