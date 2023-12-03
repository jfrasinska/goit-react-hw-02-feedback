import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = opinion => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [opinion]: prevStats[opinion] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((feedbackStats.good / totalFeedback) * 100);
  };

  return (
    <div>
      <h1>Feedback App</h1>

      <Section title="Give Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Feedback Statistics">
        <Statistics
          good={feedbackStats.good}
          neutral={feedbackStats.neutral}
          bad={feedbackStats.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
