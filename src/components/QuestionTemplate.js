import React from "react";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {ProgressBar} from 'react-bootstrap';
import styled, {css} from "styled-components";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import Button from './common/Button';


const QuestionTemplateBlock = styled.div`
  margin-top: 1rem;
  /* margin: 5rem auto;
  width: 60%; */
  font-family: 'SBAggroL';
  font-weight: bold;

  /* @media(max-width: 1024px) {
    margin: 3rem auto;
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  } */

  .progressBtn {
    display: flex;
    justify-content: space-between;
  }

  .progressBar {
    margin: 1rem 0;
  }

  .progress-bar {
    background-color: black;
  }

  .queryBody {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .queryText {
      margin: 2rem auto;
      word-break: keep-all;
      white-space: pre-wrap;
      width: 100%;
      padding: 12px;
      text-align: center;
    }
    
  }

  .btnForAnswer {
    white-space: pre-wrap;
    width: 100%;
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


const QuestionTemplate = ({ question, questions, fstClicked, sndClicked, calcAnswer }) => {
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
        <ProgressBar now={question.idx * 9.5} />
      </div>

      <div className="queryBody">
        <div className="queryText">{question.query.split('\n').map((line, idx)=>{return(<span key={idx}>{line}<br /></span>)})}</div>
        {question.idx ===11?
          <div className="btnForAnswer">
            <Link to='/result' style={{textDecoration:'none'}}>
              <Button className="fstAnswer" isClicked={question.fstAnswer.isClicked} idx={question.idx} onClick={()=>{fstClicked(); calcAnswer(questions);}}>
                {question.fstAnswer.text}
              </Button>
              <Button className="sndAnser" isClicked={question.sndAnswer.isClicked} idx={question.idx} onClick={()=>{sndClicked(); calcAnswer(questions);}}>
                {question.sndAnswer.text}
              </Button>
            </Link>
            {/* <GetResultBtn isClicked={question.fstAnswer.isClicked || question.sndAnswer.isClicked}>결과 보기</GetResultBtn> */}
          </div>
          :
          <div className="btnAndResult">
            <Link to={`/ques/${question.idx+1}`} style={{textDecoration:'none'}}>
              <Button className="fstAnswer" isClicked={question.fstAnswer.isClicked} idx={question.idx} onClick={fstClicked}>{question.fstAnswer.text}</Button>
              <Button className="sndAnser" isClicked={question.sndAnswer.isClicked} idx={question.idx} onClick={sndClicked}>{question.sndAnswer.text}</Button>
            </Link>
          </div>
        }
      </div>
      
    </QuestionTemplateBlock>
  );
};

export default QuestionTemplate;