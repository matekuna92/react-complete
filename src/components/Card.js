import React from 'react';
import './Card.css';

// if we use props.children, we can use this component as Wrapper component now in ExpenseItem.
function Card(props) {
	return (
		<div className='card'>{props.childen}</div>
	)
}

export default Card;