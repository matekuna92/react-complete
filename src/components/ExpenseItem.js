import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    

    // expenseDate is a date object, cant be output as text: toISOString()
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description"> 
            <h2> {props.title} </h2>
            <div className="expense-item__price"> ${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;