import React, {useEffect, Suspense} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decideType } from '../modules/result';
import Result from '../components/Result';
import { decideType } from '../modules/result';
import { finishLoading } from '../modules/loading';
import styled from 'styled-components';
import { useScript } from '../hooks/hooks';


const LoadingBlock = styled.div`
  margin: 3rem auto;
  text-align: center;
  font-size: 1rem;
  font-family: 'SBAggroL';

  .imgContainer {
    margin: 2rem auto;
    @media (max-width: 480px) {
      width: 300px;
    }
    @media (min-width: 768px) {
      width: 70%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
    img {
      width: 100%;
    }
  }
`;

const ResultContainer = ()=>{
  const answer = useSelector(state=>state.answer);
  const result = useSelector(state=>state.result);
  const loading = useSelector(state=>state.loading);
  const dispatch = useDispatch();

  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    
  useEffect(()=>{
    
    if(loading.answer){
      console.log('loading중입니다...');
    } else if(loading.result){
      console.log('결과가 나왔습니다.');
      const EvsI = answer.EvsI > 1 ? 'E' : 'I';
      const NvsS = answer.NvsS > 1 ? 'N' : 'S';
      const TvsF = answer.TvsF > 1 ? 'T' : 'F';
      const JvsP = answer.JvsP > 1 ? 'J' : 'P';
      const resultType = EvsI+NvsS+TvsF+JvsP;
      dispatch(decideType(resultType));
      // dispatch(finishLoading('result'));
    }

    if(status === 'ready' &&window.Kakao) {
      if(!window.Kakao.isInitialized()){
        window.Kakao.init(process.env.REACT_APP_KAppKey);
    }
  }
  },
    [dispatch, answer, status, result]
  );
  if(loading.result){
    return(
      <LoadingBlock>
        <div className="imgContainer">
          <img src="img/Loading.gif" alt="로딩중..." />
        </div>
        나와 잘 맞는 연예인 검색 중...
      </LoadingBlock>
    )
    } else {
      return (
          <Result resultType={result.resultType} />
      )
    }
};

export default ResultContainer;