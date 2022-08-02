import React from "react";
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {!total ? (<Notification message="There is no feedback" />) : (
      <><p>Good: {good}</p><p>Neutral: {neutral}</p><p>Bad: {bad}</p><p>Total: {total}</p><p>Positive feedback: {positivePercentage}%</p></>)}
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
    
