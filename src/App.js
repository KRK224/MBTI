import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/common/Header';
import Responsive from './components/common/Responsive';
import Home from './components/Home';
import Questions from './components/Questions';
import ResultContainer from './containers/ResultContainer';
import styled from 'styled-components';
import bg from './img/bg.png';

const AppBlock = styled.div`
  /* background-image: url(${bg});
  background-position: center;
  background-size: 100% 100%;
  height: 100%;
  background-repeat:no-repeat; */
`;

const App = () =>{
  return(
    <AppBlock>
      <Header />
      <Responsive>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/ques" component={Questions} />
        <Route path="/result" component={ResultContainer} / >
      </Responsive>
    </AppBlock>

  )
  
}

export default App;
