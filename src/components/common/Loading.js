import React from 'react';
import styled from 'styled-components';

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

const Loading = ()=>{
  return(
    <LoadingBlock>
      <div className="imgContainer">
        <img src="img/loading2.gif" alt="로딩중..." />
      </div>
      나와 잘 맞는 연예인 검색 중...
    </LoadingBlock>
  )
}

export default Loading