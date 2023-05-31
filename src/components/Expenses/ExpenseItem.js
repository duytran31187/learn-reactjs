import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => { // jsx just use only one params: props. not as js function(data,title, amount)
    // rule: only one root element
    // do not confuse: $ is dollar
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Card className='expense-item__price'>${props.amount}</Card>
                <button onClick={() => {
                    console.log('clicked');
                }}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;