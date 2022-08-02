import React, { Component } from "react";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevstate =>
      event.target.className === 'good'
        ? { good: prevstate.good + 1 }
        : event.target.className === 'neutral' ? { neutral: prevstate.neutral + 1 } : { bad: prevstate.bad + 1 }
      );
  };

  countTotalFeedback = () => {
    
    const total = this.state.good + this.state.neutral + this.state.bad;

  };
  // countPositiveFeedbackPercentage();

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
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>
            Total: {this.state.good + this.state.neutral + this.state.bad}
          </li>
          <li>
            Positive feedback: {(this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)) *
              100}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default App;