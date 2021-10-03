import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from './common/Button';


const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  text-align: center;
  width: 100%;


  .header {
    margin-top: 3rem;
    .subHeader {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
    }
    .majorHeader {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  .imgContainer {
    margin-top: 3rem;
    
    img {
      border-radius: 2rem;
      
      @media (max-width: 768px){
        width: 100%;
      }

      @media (max-width: 1024px){
        width: 256px;
      }
      @media (min-width: 1024px){
        width: 50%;
      }
        
    }
  }

  .startBtn {
    margin-top: 2rem;
  }
`;


const Home =() =>{
  return(
    <HomeBlock>
      <div className="header">
        <div className="subHeader">
          MBTI로 알아보는
        </div>
        <div className="majorHeader">
          나와 잘 맞는 연예인은?
        </div>
      </div>
      <div className="imgContainer">
        <img src="/img/Home/v.png" alt="홈화면" />
      </div>
      <div className="startBtn">
        <Link to='/ques/0' style={{textDecoration:'none'}}>
          <Button>테스트 시작하기</Button>
        </Link>
      </div>
    </HomeBlock>
  )
}

export default Home;