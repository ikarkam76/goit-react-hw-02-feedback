import React from "react";
import PropTypes from 'prop-types';

import Controls from "components/FeedbackOptions/FeedbackOptions.styled";

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map(option => (
        <button
          key={option}
          type="button"
          label={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </Controls>
  );
};


export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}