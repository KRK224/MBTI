import React from 'react';
import styled from 'styled-components';

const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  text-align: center;
  width: 100%;

  .header {
    margin-top: 3rem;
    .headerIntro {
      font-size: 1rem;
    }
    .resultHeader {
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .imgContainer {
    margin: 2rem auto;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      width: 256px;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
    img {
      border-radius: 2rem;
      width: 100%;
    }
  }

  .content {
    white-space: pre-wrap;
    word-break: keep-all;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    .typeDef {
      margin: 1rem;
      div + div {
        margin: 5rem 0 0;
        text-align: center;
      }
    }
    .text {
      padding: 1rem;
      width: 70%;
      text-align: left;
      li+li {
        margin-top: 1.5rem;
      }
    }
  }
`;


const Result = ({ resultType }) => {
  console.log('현재 resultType 상태는:')
  console.log(resultType);
  const textList = resultType.text.map((text,index)=>{
    return (<li key={index}>{text}</li>)
  })
  console.log(textList);
  return (
    <ResultBlock>
      <div className="header">
        <div className='headerIntro'>당신과 잘 맞는 연예인은...</div>
        <div className="resultHeader">{resultType.header}</div>
      </div>     
      <div className="imgContainer">
          <img src={resultType.picPath} alt="인물사진" />
      </div>      
      <div className="content">
        <div className="typeDef">
          <div><b>{`${resultType.type}인 `}</b>당신은 <b>{`${resultType.celebrity}`}</b> 잘 맞아요 </div>
          <div><b>그의 특성은...</b></div>
        </div>
        <div className="text">
          <ul>
            {textList}
          </ul>
        </div>
      </div>
      <div className="sharing">

      </div>
      <div className="returnHome">

      </div>
    </ResultBlock>
  );
};

export default Result;