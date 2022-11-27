import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    // expenseDate is a date object, cant be output as text: toISOString()
    return (
        // cant use custom components as a Wrapper! Need to define props.children in Card.js to make it work
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description"> 
            <h2> {props.title} </h2>
            <div className="expense-item__price"> ${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;