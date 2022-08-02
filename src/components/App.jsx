import React, { Component } from "react";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(
      prevstate =>
        event.target.className === 'good'
          ? { good: prevstate.good + 1 }
          : event.target.className === 'neutral'
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
      percentage:
        Math.round((
          this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)
        ) * 100),
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" className="good" onClick={this.onLeaveFeedback}>
          Good
        </button>
        <button
          type="button"
          className="neutral"
          onClick={this.onLeaveFeedback}
        >
          Neutral
        </button>
        <button type="button" className="bad" onClick={this.onLeaveFeedback}>
          Bad
        </button>
        <h3>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.percentage}%</p>
      </div>
    );
  }
}

export default App;