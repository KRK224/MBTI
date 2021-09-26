import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import Result from '../components/Result';


const ResultContainer = ()=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
    
  useEffect(()=>{
    if(answer.loading){
      console.log('loading중입니다...');
    } else{
      console.log('결과가 나왔습니다.');
    }
  },
    [answer, result]
  );

  if(answer.loading){
    return(
      <div>
        로딩 중...
      </div>
    )
    } else {
      const resultType = result.typeList.find((list)=>{
        return list.type === result.resultType;
      })
      console.log(resultType);
      return (
        <Result resultType={resultType} />
      )
    }
};

export default ResultContainer;