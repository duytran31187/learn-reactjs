import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        console.log('filter', selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter filteredYear={filteredYear} onFilterChanged={filterChangeHandler}></ExpensesFilter>
            {props.items.map((item, idx) => (
                <ExpenseItem 
                key={item.id} // for Reactjs : we should always add Key when managing list
                date={item.date} 
                title={item.title}
                amount={item.amount} 
                />
            )
            )}
        </Card>
    );
}
export default Expenses