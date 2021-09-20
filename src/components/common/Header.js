import React from 'react';
import styled from 'styled-components';
import {IoMdHome} from "react-icons/io";
import {NavLink} from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  top:0;
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
  return (
    <HeaderBlock>
      <div className="home-logo">
        <NavLink activeStyle={activeStyle} to='/'> 
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