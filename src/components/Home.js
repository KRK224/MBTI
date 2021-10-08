import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from './common/Button';
import { initialize_answer } from '../modules/answer';
import { initialize_ques } from '../modules/questions';
import { initialize_result } from '../modules/result';


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
      font-family: 'SBAggroL';
      font-size: 1rem;
    }
    .majorHeader {
      font-family: 'SBAggroB';
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .imgContainer {
    margin-top: 3rem;

      @media (max-width: 1024px){
        width: 256px;
      }
      @media (min-width: 1024px){
        width: 50%;
      }

    img {
      border-radius: 2rem;
      width: 100%;        
    }
  }

  .startBtn {
    margin: 2rem auto;
  }
`;


const Home =() =>{

  const dispatch = useDispatch();

  const initialize = useCallback(()=>{
    dispatch(initialize_answer());
    dispatch(initialize_ques());
    dispatch(initialize_result());
  }, [dispatch])

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
        <img src="/img/Home/bts_JK-min.png" alt="홈화면" />
      </div>
      <div className="startBtn">
        <Link to='/ques/0' style={{textDecoration:'none'}}>
          <Button onClick={initialize}>테스트 시작하기</Button>
        </Link>
      </div>
    </HomeBlock>
  )
}

export default Home;