import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    // dynamically calculate bar height based on recieved date and apply the CSS background according to the calculated height
    // check maxValue. It can be zero, if the selected year doesnt have any expenses
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={ {height: barFillHeight} }></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;