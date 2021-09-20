import React from "react";
import { withRouter } from "react-router";
import {ProgressBar} from 'react-bootstrap';



const QuestionTemplate = ({question, history})=>{
  return(
    <>
    <ProgressBar animated now={question.idx * 9} />
    <div className='Question'>
      {question.query}
    </div>
    <div className='fstAnswer'>
      {question.fstAnswer.text}
    </div>
    <div className='sndAnser'>
      {question.sndAnswer.text}
    </div>
    <button>이전</button>
    <button>다음</button>
    </>
  )
}

export default withRouter(QuestionTemplate);