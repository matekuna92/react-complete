import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const expenses = props.expenseItems;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log('state:', filteredYear);
    };

    // already getting data in component, only need to change the way it has to be rendered, then no need for state managing, only
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // * && js trick: right part of the && is returned, when the left part is true
    // ternary alternative: {filteredExpenses.length === 0 ? (<p> No expenses found in selected year </p>) : ....
    return (
        <div>
            <div className="expenses">
                <ExpensesFilter onFilterYear={filterYearHandler} selected={filteredYear} />
                <ExpensesList items={filteredExpenses} />
    		</div>
        </div>
	);
};

export default Expenses;