import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        console.log('filter', selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items;
    return (
        <Card className="expenses">
            <ExpensesFilter filteredYear={filteredYear} onFilterChanged={filterChangeHandler}></ExpensesFilter>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}
export default Expenses