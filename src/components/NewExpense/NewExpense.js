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
        expenseEditHandler();
    };

    /*const startExpenseEditHandler = () => {
        setIsEditing(true);
    }

    const stopExpenseEditHandler = () => {
        setIsEditing(false);
    }*/

    const expenseEditHandler = () => {
        setIsEditing(!isEditing);
    }

    if(isEditing) {
        expenseFormContent = <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={expenseEditHandler}
        />
    }

    return (
        <div className='new-expense'>
            <button onClick={expenseEditHandler}> Add New Expense </button>
            {expenseFormContent}
        </div>
    );
};

export default NewExpense;