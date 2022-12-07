import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // using 1 state instead of multiply states: have to update all properties when called
   /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
/*      setUserInput({
        ...userInput,           // have to copy the other properties we didnt set, so they wont be lost
        enteredTitle: event.target.value, // if we only set the Title, other properties would be lost, have to set all the 3
        // using multiply useStates is better, properties can be updated seperately with the different setters */

        /// !!!
        /* // above solution can workd, but it's weird to use the previous values, while updating one to the new value
        // when state depends on the previous state, prevState can be used: it will guarantee to always operate on the latest state !!
        setUserInput( (prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);

        /* setUserInput({
        ...userInput,
        enteredAmount: event.target.value, 
     }) */
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      console.log(enteredDate);

     /* setUserInput({
        ...userInput,           
        enteredDate: event.target.value,
     }) */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)    // parse enteredDate String from state as Date
        };

       // console.log(expenseData);
        props.onSaveExpenseData(expenseData);  // executing the function here, in NewExpense we only use a pointer to the function:
                                               // onSaveExpenseData={saveExpenseDataHandler}  - not saveExpenseDataHandler() !!
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                
                <div className='new-expense__control'>
                    <label> Title </label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}> Cancel </button>
                <button type='submit'> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;