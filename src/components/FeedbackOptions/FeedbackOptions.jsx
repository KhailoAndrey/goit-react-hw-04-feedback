import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Buttons>
      {options.map(name => (
        <Button type="button" key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </Button>
      ))}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// для преобразования первой буквы в заглавную
// .replace(/^\w/, c => c.toUpperCase())
