import React, { useCallback } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import QuestionTemplate from '../components/QuestionTemplate';
import { fstClicked, sndClicked } from '../modules/questions';
import { eincrease, nincrease, tincrease, jincrease, toggleLoading } from '../modules/answer';

const QuestionContainer = ({match}) =>{
  const questions = useSelector(state=>state.questions.questions);
  const dispatch = useDispatch();
  const currentIdx = parseInt(match.params.num)
  const currentQues = questions[currentIdx];
  const fstClick = useCallback(()=>dispatch(fstClicked(currentIdx)), [dispatch, match]);
  const sndClick = useCallback(()=>dispatch(sndClicked(currentIdx)), [dispatch, match]);
  
  const calcResult = useCallback((questions) => {
    
    dispatch(toggleLoading());
    console.log('결과지 계산 시작합니다.');

    questions.forEach(((q, idx)=>{
      console.log(`${idx}번째 질문 답 계산 중...`);
      switch(q.type) {
        case 'EvsI':
          if(q.fstAnswer.isClicked){
            dispatch(eincrease())
          }
          break;
        case 'NvsS':
          if(q.fstAnswer.isClicked){
            dispatch(nincrease())
          }
          break;
        case 'TvsF':
          if(q.fstAnswer.isClicked){
            dispatch(tincrease())
          }
          break;
        case 'JvsP':
          if(q.fstAnswer.isClicked){
            dispatch(jincrease())
          }
          break;
        default:
          console.log(`${idx}번째의 문제의 타입이 일치하지 않습니다.`);
      }
    }));
    dispatch(toggleLoading());
    console.log('결과지 계산이 종료되었습니다.');   
  },
    [dispatch, questions]
  );
  
  return(
    <QuestionTemplate 
      question={currentQues}
      questions={questions}
      fstClicked={fstClick}
      sndClicked={sndClick}
      calcResult={calcResult}
    />
  )

}

export default QuestionContainer;