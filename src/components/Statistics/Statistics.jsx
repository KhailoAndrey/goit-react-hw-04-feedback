import PropTypes from 'prop-types';
import { InfoBlock, Info } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <>
      <InfoBlock>
        {Object.keys(stats).map(stat => (
          <Info key={stat}>
            {stat}: {stats[stat]}
          </Info>
        ))}
        <Info>Total: {total}</Info>
        <Info>Positive feedback: {positivePercentage}</Info>
      </InfoBlock>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
