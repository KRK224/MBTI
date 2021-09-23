import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decideType } from '../modules/result';
import Result from '../components/Result';


const ResultContainer = ()=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
  const dispatch = useDispatch();
  
  useEffect((answer)=>{
    if(answer.loading){
      console.log('loading중입니다...');
    } else{
      console.log('결과가 나왔습니다.');
    }
    
  },
    [answer, result, dispatch]
  );

  if(answer.loading){
    return(
      <div>
        로딩 중...
      </div>
    )
  }else {
    useCallback(dispatch(decideType(answer)),
    [dispatch, answer]);

    const resultType = result.typeList.find((list)=>{
      return list.type === result.Type;
    })
    console.log(resultType);
    return (
      <Result resultType={resultType} />
    )
  }
};

export default ResultContainer;