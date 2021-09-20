import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import QuestionTemplate from '../components/QuestionTemplate';
import { fstClicked, sndClicked } from '../modules/questions';

const QuestionContainer = ({match, history}) =>{
  const questions = useSelector(state=>state.questions.questions);
  const dispatch = useDispatch();
  const currentIdx = parseInt(match.params.num)
  const currentQues = questions[currentIdx];
  
  return(
    <QuestionTemplate 
      question={currentQues}
      history={history}
    />
  )

}

export default QuestionContainer;