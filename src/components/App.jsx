import React, { useState } from 'react';
import OpinionFeedback from './OpinionFeedback';

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

  return (
    <div>
      <h1>Feedback App</h1>
      <OpinionFeedback opinion="good" onFeedback={handleFeedback} />
      <OpinionFeedback opinion="neutral" onFeedback={handleFeedback} />
      <OpinionFeedback opinion="bad" onFeedback={handleFeedback} />

      <h2>Feedback Statistics</h2>
      <p>Good: {feedbackStats.good}</p>
      <p>Neutral: {feedbackStats.neutral}</p>
      <p>Bad: {feedbackStats.bad}</p>
    </div>
  );
};

export default App;