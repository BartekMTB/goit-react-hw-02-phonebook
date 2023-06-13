import React, { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleOnClickGoodGrade = () => {
    this.setState({ good: this.state.good + 1, total: this.state.total + 1 });
  };
  handleOnClickNeutralGrade = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      total: this.state.total + 1,
    });
  };
  handleOnClickBadGrade = () => {
    this.setState({ bad: this.state.bad + 1, total: this.state.total + 1 });
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleOnClickGoodGrade}>Good</button>
          <button onClick={this.handleOnClickNeutralGrade}>Neutral</button>
          <button onClick={this.handleOnClickBadGrade}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>
            Positive feedback:
            {this.state.good > 0 &&
              ((this.state.good / this.state.total) * 100).toFixed(0)}
            %
          </p>
        </div>
      </div>
    );
  }
}
