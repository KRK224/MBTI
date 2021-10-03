import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import Result from '../components/Result';
import { decideType } from '../modules/result';
import { startLoading, finishLoading } from '../modules/loading';

const ResultContainer = ()=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
  const loading = useSelector(state=>state.loading);


  const dispatch = useDispatch();
    
  useEffect(()=>{
    
    if(loading.answer){
      console.log('loading중입니다...');
    } else{
      console.log('결과가 나왔습니다.');
      const EvsI = answer.EvsI > 1 ? 'E' : 'I';
      const NvsS = answer.NvsS > 1 ? 'N' : 'S';
      const TvsF = answer.TvsF > 1 ? 'T' : 'F';
      const JvsP = answer.JvsP > 1 ? 'J' : 'P';
      const resultType = EvsI+NvsS+TvsF+JvsP;
      dispatch(decideType(resultType));
      dispatch(finishLoading('result'));
    }
  },
    [dispatch, answer, ]
  );
  if(loading.result){
    return(
      <div>
        로딩 중...
      </div>
    )
    } else {
      return (
        <Result resultType={result.resultType} />
      )
    }
};

export default ResultContainer;