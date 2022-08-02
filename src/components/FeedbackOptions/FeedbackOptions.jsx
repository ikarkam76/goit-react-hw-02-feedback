import React from "react";

import Controls from "components/FeedbackOptions/FeedbackOptions.styled";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <Controls>
    <button type="button" id="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" id="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" id="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </Controls>
);


export default FeedbackOptions;