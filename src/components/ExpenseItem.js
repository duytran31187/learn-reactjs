import './ExpenseItem.css';

function ExpenseItem() {
    // rule: only one root element
    return (
        <div className='expense-item'>
            <div>2023-03-15</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>259.29 vnd</div>
            </div>
        </div>
    )
}

export default ExpenseItem;