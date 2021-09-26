import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import Result from '../components/Result';
import { decideType } from '../modules/result';


const ResultContainer = ()=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
  const dispatch = useDispatch();
    
  useEffect(()=>{
    if(answer.loading){
      console.log('loading중입니다...');
    } else{
      console.log('결과가 나왔습니다.');
      const EvsI = answer.EvsI > 1 ? 'E' : 'I';
      const NvsS = answer.NvsS > 1 ? 'N' : 'S';
      const TvsF = answer.TvsF > 1 ? 'T' : 'F';
      const JvsP = answer.JvsP > 1 ? 'J' : 'P';
      const resultType = EvsI+NvsS+TvsF+JvsP;
      dispatch(decideType(resultType));
    }
  },
    [answer]
  );
  if(answer.loading){
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