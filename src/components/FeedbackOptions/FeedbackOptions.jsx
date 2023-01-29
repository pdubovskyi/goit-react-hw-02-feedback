import propTypes from 'prop-types';

import styles from './feedback-optins.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback('good')}
        type="button"
      >
        Good
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback('neutral')}
        type="button"
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback('bad')}
        type="button"
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
