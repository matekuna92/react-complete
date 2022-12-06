import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

        // *when updating state depending on previous state, we use the "function form" of setState (setExpenses) instead of just setExpenses([expense, ...expenses])
      const addExpenseHandler = expense => {
          // *set expenses array to a new array every time when adding a new expense
          setExpenses(prevExpenses => {
              return [expense, ...expenses];
          });
      };

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenseItems={expenses} />
    </div>
  );
}

export default App;
