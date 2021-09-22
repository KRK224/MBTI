import React, { useCallback } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import QuestionTemplate from '../components/QuestionTemplate';
import { fstClicked, sndClicked } from '../modules/questions';
import { eincrease, nincrease, tincrease, jincrease } from '../modules/answer';

const QuestionContainer = ({match}) =>{
  const questions = useSelector(state=>state.questions.questions);
  const dispatch = useDispatch();
  const currentIdx = parseInt(match.params.num)
  const currentQues = questions[currentIdx];
  const fstClick = useCallback(()=>dispatch(fstClicked(currentIdx)), [dispatch, match]);
  const sndClick = useCallback(()=>dispatch(sndClicked(currentIdx)), [dispatch, match]);
  
  // const calcResult = (questions) => {
  //   questions.forEach()
  // }
  
  return(
    <QuestionTemplate 
      question={currentQues}
      fstClicked={fstClick}
      sndClicked={sndClick}
    />
  )

}

export default QuestionContainer;