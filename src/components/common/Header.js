import React, { useCallback } from 'react';
import styled from 'styled-components';
import {IoMdHome} from "react-icons/io";
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initialize_answer } from '../../modules/answer';
import { initialize_ques } from '../../modules/questions';
import { initialize_result } from '../../modules/result';

const HeaderBlock = styled.div`
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#eeeeee;

  .home-logo {
    font-size: 1.3rem;
    margin-left: 0.5rem; 
  }

  .headerText {
    font-family: 'SBAggroB';
  }
`;

const activeStyle ={
  color:'black',
};

const Header =() =>{
  const dispatch = useDispatch();
  
  const initialize = useCallback(()=>{
    dispatch(initialize_answer());
    dispatch(initialize_ques());
    dispatch(initialize_result());
  }, [dispatch])

  return (
    <HeaderBlock>
      <div className="home-logo">
        <NavLink activeStyle={activeStyle} to='/' onClick={initialize}> 
          <IoMdHome />
        </NavLink>
      </div>
      <div className="headerText">
        나와 잘 맞는 연예인은? (남자편)
      </div>
      <div>

      </div>
    </HeaderBlock>
  )
}

export default Header;