import React from "react";
import {Route, Link} from 'react-router-dom';

import QuestionContainer from "../containers/QuestionContainer";

const Questions = () => {

  return (
    <div className="QuestionBlock">
      <Route path="/ques/:num" component={QuestionContainer}/>
    </div>
    
  );
};
export default Questions;