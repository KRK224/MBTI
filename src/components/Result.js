import React from 'react';
import styled from 'styled-components';

const ResultBlock = styled.div`
  width: 80%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  
  border-radius: 5px;
  overflow: hidden;
  text-align: center;

  .header {
    margin-top: 2rem;
    .headerIntro {
      
    }

  }

  .imgContainer {
    margin-top: 2rem;
    img {
      border-radius: 2rem;
      @media (max-width: 768px){
        width: 100%;
      }

      @media (max-width: 1024px){
        width: 256px;
      }
      @media (min-width: 1024px){
        width: 50%;
      }

      
    }
  }

  .content {
    margin: 0 2rem;
    margin-top: 2rem;
    white-space: pre-wrap;
    word-break: keep-all;
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
          {`${resultType.type}인 당신은 ${resultType.celebrity}와 잘 맞아요`} <br/>
          {`${resultType.celebrity}의 특성은...`}
        </div>
        <div className="text">
          <ul>
            {textList}
          </ul>
        </div>
      </div>
    </ResultBlock>
  );
};

export default Result;