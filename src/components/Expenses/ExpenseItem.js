import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);  // returns an array: [variable, setVariable]

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);     // still shows the original title values in console!
        // calling the "set" updating function doesnt change the value itself, instead it schedules the state update
        // so the new variable isnt available after the setTitle function. The whole component is called again
        // (setState solves the problem of "components rendering only once, when the page load" problem), and the whole code
        // will be evaluated in this component, so we see the new value in the browser
    }

    // expenseDate is a date object, cant be output as text: toISOString()
    return (
        // cant use custom components as a Wrapper! Need to define props.children in Card.js to make it work
        // expense-item styles wont apply as default, because component only support, what I tell it to support.
        // I used className='card' in Card, * I have to expand that code to apply styles as well, which was defined here in the props (expense-item)
        <div className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description"> 
            <h2> {title} </h2>
            <div className="expense-item__price"> ${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>

        // pointing to the clickHandler, not executing it!! ( clickHandler() ) -> with parenthesis it would be executed, when
        // the button line of code is being parsed (when the return happens, too early! - not when the button is clicked!) 

    );
}

export default ExpenseItem;