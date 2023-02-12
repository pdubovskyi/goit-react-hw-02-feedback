import { Component } from 'react';

import Statistics from './Statistics/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercent =
      this.countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = this.state;
    console.log(Object.keys(this.state));

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
