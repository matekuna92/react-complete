import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    // form should be visible or not
    const [isEditing, setIsEditing] = useState(false);
    let expenseFormContent = '';

    // child to parent Communication: Getting expenseData from child ExpenseForm
    // enteredExpenseData parameter will be the returned "expenseData" data from ExpenseForm, when the user submitted the form
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startExpenseEditHandler = () => {
        setIsEditing(true);
    }

    const stopExpenseEditHandler = () => {
        setIsEditing(false);
    }

    if(isEditing) {
        expenseFormContent = <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopExpenseEditHandler}
        />
    }

    return (
        <div className='new-expense'>
            <button onClick={startExpenseEditHandler}> Add New Expense </button>
            {expenseFormContent}
        </div>
    );
};

export default NewExpense;