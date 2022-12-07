import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // child to parent Communication: Getting expenseData from child ExpenseForm
    // enteredExpenseData parameter will be the returned "expenseData" data from ExpenseForm, when the user submitted the form
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

       // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
        </div>
    );
};

export default NewExpense;