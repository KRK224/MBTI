import React from "react";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {ProgressBar} from 'react-bootstrap';
import styled, {css} from "styled-components";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";


const QuestionTemplateBlock = styled.div`
  margin: 2rem;
  
  .progressBar {
    margin: 1rem 0 ;
  }

  .queryBody {
    display: flex;
    flex-direction: column;
    align-items: center;

    .queryText {
      width: 80%;
      padding: 24px;
      text-align: center;
      word-break: break-all;
    }
    
  }

  .progressBtn {
    display: flex;
    justify-content: space-between;
  }

  .btnAndResult {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProgressBtn = styled.button`
  background-color: #f1f3f8;
  border: none;
  border-radius: 5px;

  &:hover{
    background-color: black;
    color: white;
  }
`;

const PrevBtn = styled(ProgressBtn)`
  ${props=>
    props.idx === 0 &&
    css`
      display: none;
    `
  }
`;

const NextBtn = styled(ProgressBtn)`
  ${(props) =>
    props.idx === 11 &&
    css`
      display: none;
    `}
  &:disabled:hover {
    background-color: #f1f3f8;
    color: #d6d8dd;
    cursor: not-allowed;
  }
`;

const AnswerBtn = styled.button`
  display:block;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: #f1f3f8;
  word-break: break-all;
  
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

// const GetResultBtn = styled.button`
//   display:none;
//   width: 50%;
//   height: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 2rem;
//   background-color: #00e5ff;
//   color: black;

//   &:hover {
//     background-color: #6effff;
//   }
//   ${props=>
//     props.isClicked &&
//     css`
//       display:block;
//     `
//   }
// `;


const QuestionTemplate = ({ question, questions, fstClicked, sndClicked, calcResult }) => {
  return (
    <QuestionTemplateBlock>
      <div className='progressBtn'>
        <Link to={`/ques/${question.idx-1}`}> 
          <PrevBtn idx={question.idx}><VscChevronLeft /></PrevBtn>
        </Link>

        {/* {question.idx === 0 ? 
          <button disabled={true}><VscChevronLeft /></button>:
          <Link to={`/ques/${question.idx-1}`}> 
          <button><VscChevronLeft /></button>
          </Link>
        } */}
        
        

        {(question.fstAnswer.isClicked || question.sndAnswer.isClicked)?
          <Link to={`/ques/${question.idx+1}`}> 
            <NextBtn disabled={false} idx={question.idx}><VscChevronRight /></NextBtn>
          </Link>
          :
          <NextBtn disabled={true} idx={question.idx}><VscChevronRight /></NextBtn>
        }
        
        
      </div>
      <div className="progressBar">
        <ProgressBar animated now={question.idx * 9.5} />
      </div>
      <div className="queryBody">
        <div className="queryText">{question.query}</div>
        {question.idx ===11?
          <div className="btnAndResult">
            <Link to='/result' style={{textDecoration:'none'}}>
              <AnswerBtn className="fstAnswer" isClicked={question.fstAnswer.isClicked} idx={question.idx} onClick={()=>{fstClicked(); calcResult(questions);}}>{question.fstAnswer.text}</AnswerBtn>
              <AnswerBtn className="sndAnser" isClicked={question.sndAnswer.isClicked} idx={question.idx} onClick={()=>{sndClicked(); calcResult(questions);}}>{question.sndAnswer.text}</AnswerBtn>
            </Link>
            {/* <GetResultBtn isClicked={question.fstAnswer.isClicked || question.sndAnswer.isClicked}>결과 보기</GetResultBtn> */}
          </div>
          :
          <div className="btnAndResult">
            <Link to={`/ques/${question.idx+1}`} style={{textDecoration:'none'}}>
              <AnswerBtn className="fstAnswer" isClicked={question.fstAnswer.isClicked} idx={question.idx} onClick={fstClicked}>{question.fstAnswer.text}</AnswerBtn>
              <AnswerBtn className="sndAnser" isClicked={question.sndAnswer.isClicked} idx={question.idx} onClick={sndClicked}>{question.sndAnswer.text}</AnswerBtn>
            </Link>
          </div>
        }
      </div>
      
    </QuestionTemplateBlock>
  );
};

export default QuestionTemplate;