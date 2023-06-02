import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'> No Expenses found !</h2>
    }
    
    return (
        <div className='expenses-list'>
            {
                props.items.map((item, idx) => (
                    <ExpenseItem 
                    key={item.id} // for Reactjs : we should always add Key when managing list
                    date={item.date} 
                    title={item.title}
                    amount={item.amount} 
                    />
                ))
            }
        </div>
    )
};

export default ExpensesList;