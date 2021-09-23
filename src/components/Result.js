import React from 'react';
import styled from 'styled-components';


const ResultBlock = styled.div`

`;


const Result = ({resultType})=>{
  return(
    <ResultBlock>
      <div>
        `내 타입은 ${resultType.type}`
      </div>
      <div>
        `내용은 ${resultType.text}`
      </div>
    </ResultBlock>
  )
}

export default Result;