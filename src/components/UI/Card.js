import React from 'react';
import './Card.css';

// if we use props.children, we can use this component as Wrapper component now in ExpenseItem.js
const Card = (props) => {
	// * Card component now will use not only the default 'card' class, but also every classNames given outside (in ExpenseItem)
	const classes = 'card ' + props.className;

	return (
		<div className={classes}>{props.childen}</div>
	)
}

export default Card;