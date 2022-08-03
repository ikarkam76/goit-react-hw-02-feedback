import React from "react";

import Controls from "components/FeedbackOptions/FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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


export default FeedbackOptions;