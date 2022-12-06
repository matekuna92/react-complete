import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const expenses = props.expenseItems;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log('state:', filteredYear);
    }

    return (
            <div className="expenses">
                <ExpensesFilter onFilterYear={filterYearHandler} selected={filteredYear} />
                {expenses.map(expense => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    ))}
		</div>
	)
}

export default Expenses;