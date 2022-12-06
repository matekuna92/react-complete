import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // expenseDate is a date object, cant be output as text: toISOString()
    return (
        // cant use custom components as a Wrapper! Need to define props.children in Card.js to make it work
        // expense-item styles wont apply as default, because component only support, what I tell it to support.
        // I used className='card' in Card, * I have to expand that code to apply styles as well, which was defined here in the props (expense-item)
        <div className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description"> 
            <h2> {props.title} </h2>
            <div className="expense-item__price"> ${props.amount}</div>
            </div>
        </div>

        // pointing to the clickHandler, not executing it!! ( clickHandler() ) -> with parenthesis it would be executed, when
        // the button line of code is being parsed (when the return happens, too early! - not when the button is clicked!) 

    );
}

export default ExpenseItem;