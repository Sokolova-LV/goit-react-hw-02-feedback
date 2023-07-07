import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

countTotalFeedback = () => {
  return Object.values(this.state).reduce((total, item) => (total += item));
};

countPositiveFeedbackPercentage = totalFeedback => {
  const { good } = this.state;

  if (totalFeedback > 0) 
  return Math.round((good / totalFeedback) * 100);
  return 0;
};

onLeaveFeedback = ({ target: { name } }) => {
  this.setState(prevState => ({
    [name]: prevState[name] + 1,
  }));
};

render() {
  const { good, neutral, bad } = this.state;

  const total = this.countTotalFeedback();
  const percentage = this.countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} 
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage} 
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
}