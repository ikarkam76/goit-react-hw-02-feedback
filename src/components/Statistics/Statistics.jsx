import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return !total ? (<h3>No feedback given</h3>)
        : (<div>
         <h3>Statistics</h3>
         <p>Good: {good}</p>
         <p>Neutral: {neutral}</p>
         <p>Bad: {bad}</p>
         <p>Total: {total}</p>
         <p>Positive feedback: {positivePercentage}%</p>
       </div>
     );
};
    
    export default Statistics;

Statistics.ptopTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
    
