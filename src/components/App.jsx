import React, { Component } from "react";
import FeedBackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Statistics from "components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ev => {
    this.setState({
      [ev]: this.state[ev] + 1
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedBackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={this.countTotalFeedback()} percent={this.countPositiveFeedbackPercentage()} />
      </Section>
    );
  }
}

export default App;