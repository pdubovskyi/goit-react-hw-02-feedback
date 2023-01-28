const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback('good')} type="button">
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} type="button">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} type="button">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
