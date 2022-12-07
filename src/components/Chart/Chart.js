import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    // need to calculate the maximum value from the datapoint months,
    // it will be the maximum value which should be represented in the chart
    // dataPoint has array of objects, but Math max requires number:
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // now we have the number values from every dataPoint object as an array
    const maximumBarHeightValue = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximumBarHeightValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;

return (
        <ul className='expenses-list'>
            {filteredItems.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    ))}
        </ul>
        );