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
    font-size: 2rem;
    font-weight: bold;
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


const Result = ({resultType})=>{
  return(
    <ResultBlock>
      <div>당신에게 잘 맞는 연예인은...</div>
      <div className='header'>
        {resultType.header}
      <div className="imgContainer">
        <img src={resultType.picPath} alt="혁이형" />
      </div>
      </div>
      <div className='content'>
        {resultType.text}
      </div>
    </ResultBlock>
  )
}

export default Result;