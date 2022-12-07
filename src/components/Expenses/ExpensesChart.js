import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: 'January', value: 0},
        {label: 'February', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'July', value: 0},
        {label: 'August', value: 0},
        {label: 'September', value: 0},
        {label: 'October', value: 0},
        {label: 'November', value: 0},
        {label: 'December', value: 0},
    ];

    // for Objects: for in loop, for Arrays: for of loop!
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();   // starting from zero: January: 0
        chartDataPoints[expenseMonth].value += expense.amount;  // array also starts from 0, so expenseMonth can be used as index
    }

    return
        <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;