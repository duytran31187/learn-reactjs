import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map(item => (
                <ExpenseItem date={item.date} title={item.title} amount={item.amount}></ExpenseItem>
                )
            )}
        </Card>
    );
}
export default Expenses