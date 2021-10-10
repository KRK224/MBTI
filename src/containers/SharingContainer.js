import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import ResultTemplate from '../components/ResultTemplate';
import { decideType } from '../modules/result';
// import { startLoading, finishLoading } from '../modules/loading';
import { useScript } from '../hooks/hooks';



const SharingContainer = ({match})=>{
  
  const result = useSelector(state=>state.result);
  const dispatch = useDispatch();
  const {type} = match.params;
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
  useEffect(()=>{
    
    dispatch(decideType(type));

    if(status === 'ready' &&window.Kakao) {
      if(!window.Kakao.isInitialized()){
        window.Kakao.init(process.env.REACT_APP_KAppKey);
    }
  }
  },
    [dispatch, status]
  );

  return (
    <ResultTemplate resultType={result.resultType} match={match}/>
  )

};

export default SharingContainer;