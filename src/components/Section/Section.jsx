import React from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from "components/Notification/Notification";

import Container from "components/Section/Section.styled";

const Section = ({ title, state, onLeaveFeedback }) => (
  <Container>
    <h2>{title}</h2>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        {!state.total
                ? (<Notification message="There is no feedback" />)
                : (
                <Statistics
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
                total={state.total}
                positivePercentage={state.percentage}
        />)}
  </Container>
);

export default Section;