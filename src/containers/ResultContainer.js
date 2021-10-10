import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import ResultTemplate from '../components/ResultTemplate';
import { decideType } from '../modules/result';
import { startLoading, finishLoading } from '../modules/loading';
// import { useScript } from '../hooks/hooks';
import Loading from '../components/common/Loading';

const ResultContainer = ({match})=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
  const loading = useSelector(state=>state.loading);
  const dispatch = useDispatch();

  // const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
  useEffect(()=>{
    
    if(loading.answer){
      console.log('loading...');
    } else if(loading.result){
      console.log('결과가 나왔습니다.');
      const EvsI = answer.EvsI > 1 ? 'E' : 'I';
      const NvsS = answer.NvsS > 1 ? 'N' : 'S';
      const TvsF = answer.TvsF > 1 ? 'T' : 'F';
      const JvsP = answer.JvsP > 1 ? 'J' : 'P';
      const resultType = EvsI+NvsS+TvsF+JvsP;
      dispatch(decideType(resultType));
      dispatch(finishLoading('result'));
      dispatch(startLoading('img'));
    }

  //   if(status === 'ready' &&window.Kakao) {
  //     if(!window.Kakao.isInitialized()){
  //       window.Kakao.init(process.env.REACT_APP_KAppKey);
  //   }
  // }
  },
    [dispatch, answer, result, loading]
  );
  if(loading.result){
    return <Loading />
    } else {
      return (
        <ResultTemplate resultType={result.resultType} match={match}/>
      )
    }
};

export default ResultContainer;