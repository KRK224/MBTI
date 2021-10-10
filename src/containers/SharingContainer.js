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
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    
    ogDescription.setAttribute("content", result.resultType.header);
    ogImage.setAttribute("content", result.resultType.picPath);

  },
    [dispatch, status, type]
  );
  

  return (
    <div>
      <ResultTemplate resultType={result.resultType} match={match}/>
    </div>
  )

};

export default SharingContainer;