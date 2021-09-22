import React, { useCallback } from 'react';
import styled from 'styled-components';
import {IoMdHome} from "react-icons/io";
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initialize_answer } from '../../modules/answer';
import { initialize_ques } from '../../modules/questions';

const HeaderBlock = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .home-logo {
    font-size: 1.3rem;
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
  }, [dispatch])
  return (
    <HeaderBlock>
      <div className="home-logo">
        <NavLink activeStyle={activeStyle} to='/' onClick={initialize}> 
          <IoMdHome />
        </NavLink>
      </div>
      <div>
        나와 어울리는 연예인 찾기
      </div>
      <div>

      </div>
    </HeaderBlock>
  )
}

export default Header;