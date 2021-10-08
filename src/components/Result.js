import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { initialize_answer } from '../modules/answer';
import { initialize_ques } from '../modules/questions';
import { initialize_result } from '../modules/result';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import loading, { startLoading, finishLoading } from '../modules/loading';
import Loading from './common/Loading';


const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  font-family: 'SBAggroL';

  .header {
    margin-top: 3rem;
    
    .headerIntro {
      font-size: 1rem;
    }
    .resultHeader {
      font-family: 'SBAggroB';
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: bold;
      word-break: keep-all;
      white-space: pre-wrap;
    }
  }

  .imgContainer {
    margin: 2rem auto;
    @media (max-width: 480px) {
      width: 300px;
    }
    @media (min-width: 768px) {
      width: 70%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
    img {
      border-radius: 2rem;
      width: 100%;
    }
  }

  .content {
    white-space: pre-wrap;
    word-break: keep-all;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    .typeDef {
      margin: 1rem;
      div + div {
        margin: 5rem 0 0;
        text-align: center;
      }
    }
    .text {
      padding: 1rem;
      width: 90%;
      text-align: left;
      li+li {
        margin-top: 1.5rem;
      }
    }
  }

  .sharing {
    margin-top: 3rem;
    .sharingText{
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }

  .returnHome {
    margin-bottom: 4rem;
  }

`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,48px);
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 1rem;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 50%50%;
  border: 0px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  background-color:#4d2c91;
  text-align: center;

  &:hover {
    background-color:#b085f5;
  }
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;


const Result = ({ resultType }) => {

  // console.log('현재 resultType 상태는:')
  // console.log(resultType);
  const dispatch = useDispatch();
  const textList = resultType.text.map((text,index)=>{
    return (<li key={index}>{text}</li>)
  })

  // initialization to Home
  const initialize = useCallback(()=>{
    dispatch(initialize_answer());
    dispatch(initialize_ques());
    dispatch(initialize_result());
  }, [dispatch])
  
  const currentUrl = window.location.href;

  const handleKakaoButton =()=>{
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };


  useEffect(()=>{
    
    const image = new Image();
    image.src = resultType.picPath;
    image.onload = () =>{
      dispatch(finishLoading('img'));
    }    
  }, [])

  if (loading.img) {
    return <Loading />
  }

  return (
    <ResultBlock>
      <div className="header">
        <div className='headerIntro'>당신과 잘 맞는 연예인은...</div>
        <div className="resultHeader">{resultType.header}</div>
      </div>     
      <div className="imgContainer">
          <img src={resultType.picPath} alt="인물사진" />
      </div>      
      <div className="content">
        <div className="typeDef">
          <div><b>{`${resultType.type}인 `}</b>당신은 <b>{`${resultType.celebrity}`}</b> 잘 맞아요 </div>
          <div><b>그의 특성은...</b></div>
        </div>
        <div className="text">
          <ul>
            {textList}
          </ul>
        </div>
      </div>
      <div className="sharing">
      <GridContainer>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>

        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src='./img/Kakao.png'></KakaoIcon>
        </KakaoShareButton>
        
      </GridContainer>
      </div>
      <div className="returnHome">
        <Link to='/' style={{textDecoration:'none'}}>
          <Button onClick={initialize}>테스트 다시하기</Button>
        </Link>
      </div>
    </ResultBlock>
  );
};

export default Result;