import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import ResultTemplate from '../components/ResultTemplate';
import { decideType } from '../modules/result';
// import { startLoading, finishLoading } from '../modules/loading';
import { useScript } from '../hooks/hooks';
import Loading from '../components/common/Loading';



const SharingContainer = ({match})=>{
  
  const persist = useSelector(state=>state._persist);
  const result = useSelector(state=>state.result);
  const dispatch = useDispatch();
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  
  useEffect(()=>{
    const {type} = match.params;
    if(persist.rehydrated) {
      console.log('hydration is ended');
      dispatch(decideType(type));
    }
    

    if(status === 'ready' &&window.Kakao) {
      if(!window.Kakao.isInitialized()){
        window.Kakao.init(process.env.REACT_APP_KAppKey);
    }
  }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    ogDescription.setAttribute("content", result.resultType.header);
    ogImage.setAttribute("content", `https://eager-ride-0f8027.netlify.app${result.resultType.picPath}`);
    ogUrl.setAttribute("content", `https://eager-ride-0f8027.netlify.app/result/${result.resultType.type}`);
  },
    [dispatch, status, match, persist]
  );
  

  return (
    <div>
      {persist.rehydrated? (<ResultTemplate resultType={result.resultType} match={match}/>): <Loading />}
    </div>
  )

};

export default SharingContainer;