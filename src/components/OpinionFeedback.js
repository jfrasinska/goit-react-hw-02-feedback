import React from 'react';

const OpinionFeedback = ({ opinion, onFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedback(opinion)}>{opinion}</button>
    </div>
  );
};

export default OpinionFeedback;
