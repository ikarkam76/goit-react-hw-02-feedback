import React from "react";
import PropTypes from 'prop-types';

import Notification from 'components/Notification';


const Statistics = ({good, neutral, bad, total, percent}) => {
  return (
    <>
      <h3>Statistics</h3>
      <div>
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {percent}%</p>
          </>
        )}
      </div>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
}