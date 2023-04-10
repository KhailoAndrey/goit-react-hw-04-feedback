import { Wrapper } from './Section/Section.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import React from 'react';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnNameFeedback = ['Good', 'Neutral', 'Bad'];

  function onLeaveFeedback(value) {
    switch (value) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  }

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={btnNameFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Wrapper>
  );
}
