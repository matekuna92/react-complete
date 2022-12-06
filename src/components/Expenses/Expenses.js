import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const expenses = props.expenseItems;
    const [filteredYear, setFilteredYear] = useState('2020');
    const [currentExpenses, setCurrentExpenses] = useState(expenses);

    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log('state:', filteredYear);

        setCurrentExpenses(prevExpenses => {
            return expenses.filter(expense => expense.date.getYear() === filteredYear);
        })
    }

    return (
            <div className="expenses">
                <ExpensesFilter onFilterYear={filterYearHandler} selected={filteredYear} />
                {expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    ))}
		</div>
	)
}

export default Expenses;