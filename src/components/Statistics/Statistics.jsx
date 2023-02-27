import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h3>Feedback</h3>
      <ul className={s.options}>
        <li>Positive: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Negative: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive percentage {good === 0 ? '0' : positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
