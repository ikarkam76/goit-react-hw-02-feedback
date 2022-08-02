import React from "react";
import PropTypes from 'prop-types';
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import Container from "components/Section/Section.styled";

const Section = ({ title, state, onLeaveFeedback }) => (
  <Container>
    <h2>{title}</h2>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={state.total}
          positivePercentage={state.percentage}
        />
  </Container>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}