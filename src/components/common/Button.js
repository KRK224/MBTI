import React from 'react';
import styled, {css} from 'styled-components';


const AnswerBtn = styled.button`
  display:block;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: #f1f3f8;
  word-break: keep-all;
  
  &:hover {
    font-weight: bold;
    color: white;
    background-color: black;
  }
  ${props =>
    props.isClicked &&
    css`
      font-weight: bold;
      color: white;
      background-color: black;
    `
    }
`;

const Button = (props)=>{
  return (
    <AnswerBtn {...props} />
  )
}

export default Button;