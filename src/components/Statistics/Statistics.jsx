import PropTypes from 'prop-types';
import { InfoBlock, Info } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <InfoBlock>
        <Info>Good: {good}</Info>
        <Info>Neutral: {neutral}</Info>
        <Info>Bad: {bad}</Info>
        <Info>Total: {total}</Info>
        <Info>Positive feedback: {positivePercentage}</Info>
      </InfoBlock>
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
