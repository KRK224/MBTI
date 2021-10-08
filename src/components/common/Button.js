import React from 'react';
import styled, {css} from 'styled-components';
import '../../App.css';


const AnswerBtn = styled.button`
  display:block;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: #f1f3f8;
  word-break: keep-all;
  font-family: 'SBAggroL';
  
  @media (hover: hover) and (pointer: fine){
    &:hover {
    font-weight: bold;
    color: white;
    background-color: black;
    }
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