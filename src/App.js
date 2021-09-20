import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/common/Header';
import Responsive from './components/common/Responsive';
import Home from './components/Home';
import Questions from './components/Questions';


const App = () =>{
  return(
    <>
      <Header />
      <Responsive>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/ques" component={Questions} />
      </Responsive>
    </>

  )
  
}

export default App;
