import React, { Component } from "react";
import Section from "./Section/Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ev => {
    this.setState({
      [ev]: this.state[ev] + 1
    },
      this.countTotalFeedback,
      );
  };

  countTotalFeedback = () => {
    this.setState(
      {
        total: this.state.good + this.state.neutral + this.state.bad,
      },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    this.setState({
      percentage: Math.round(this.state.good / this.state.total * 100),
    });
  };

  render() {
    return (
        <Section
          title="Please leave feedback"
          state={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
    );
  }
}

export default App;