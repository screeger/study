import React from "react";
import QuestionGrid from "../../components/questionGrid";
import Question from "../../components/question";
import questions from '../../helpers/questions';

export default props => {
  return (
    <React.Fragment>
      <h1>Answer these witty questions:</h1>
      <QuestionGrid>
        <Question>{questions.s1q1}</Question>
        <Question>{questions.s1q2}</Question>
        <Question>{questions.s1q3}</Question>
      </QuestionGrid>
    </React.Fragment>
  );
};
