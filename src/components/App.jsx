import React, { Component } from "react";
import Section from "./Section/Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(
      prevstate =>
        event.target.id === 'good'
          ? { good: prevstate.good + 1 }
          : event.target.id === 'neutral'
          ? { neutral: prevstate.neutral + 1 }
          : { bad: prevstate.bad + 1 },
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