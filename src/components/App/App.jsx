import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import './App.css';

class App extends Component {
  state = {
    feedbackStats: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  handleFeedback = opinion => {
    this.setState(prevState => ({
      feedbackStats: {
        ...prevState.feedbackStats,
        [opinion]: prevState.feedbackStats[opinion] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedbackStats;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.feedbackStats;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { feedbackStats } = this.state;

    return (
      <div className="wrapper">
        <h1>Feedback App</h1>

        <Section title="Give Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Feedback Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={feedbackStats.good}
              neutral={feedbackStats.neutral}
              bad={feedbackStats.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
