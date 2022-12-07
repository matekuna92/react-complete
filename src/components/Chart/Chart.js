import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            })}
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