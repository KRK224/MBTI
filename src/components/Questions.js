import React from "react";
import {Route} from 'react-router-dom';
import QuestionContainer from "../containers/QuestionContainer";
import styled from "styled-components";

const QuestionsBlock = styled.div`
  
`;

const Questions = () => {

  return (
    <QuestionsBlock>
      <Route path="/ques/:num" component={QuestionContainer}/>
    </QuestionsBlock>
      
    
    
  );
};
export default Questions;