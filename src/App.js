import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/common/Header';
import Responsive from './components/common/Responsive';
import Home from './components/Home';
import Questions from './components/Questions';
import ResultContainer from './containers/ResultContainer';
import SharingContainer from './containers/SharingContainer';
import styled from 'styled-components';

const AppBlock = styled.div`
  
`;

const App = () =>{
  return(
    <AppBlock>
      <Route path='/ques' component={Header} />
      <Responsive>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/ques" component={Questions} />
        <Route path="/result" component={ResultContainer} exact={true}/ >
        <Route path="/result/:type" component ={SharingContainer}/>
      </Responsive>
    </AppBlock>

  )
  
}

export default App;
