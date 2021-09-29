import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const FSTCLICKED = 'questions/FSTCLICKED';
const SNDCLICKED = 'questions/SNDCLICKED';
const INITIALIZE = 'questions/INITIALIZE';

export const fstClicked = createAction(FSTCLICKED, idx=>idx);
export const sndClicked = createAction(SNDCLICKED, idx=>idx);
export const initialize_ques = createAction(INITIALIZE);

const initState = {
  questions: [
    {
      idx: 0,
      type: 'EvsI',
      query: '드라마에서 최애의 덕질 본능을 자극하는 장면이 나왔다면',
      fstAnswer: {
        text:'행복은 나눌수록 커지는 법! 바로 친구에게 공유한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '일단 개인 소장이 먼저! 친구들이 필요로 하면 공유한다.',
        isClicked: false,
      },
    },
    {
      idx: 1,
      type: 'EvsI',
      query: '지나가다가 좋아하는 연예인을 발견했다면',
      fstAnswer: {
        text:'세상 반갑게 다가가서 팬임을 어필한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '조용히 카메라를 꺼내 촬영하며 감탄한다.',
        isClicked: false,
      },
    },
    {
      idx:2,
      type: 'EvsI',
      query: '오랜만에 SNS에 최애 활동 소식이 올라왔다면',
      fstAnswer: {
        text:'내 활동도 이제 시작이지. 열심히 댓글을 남기고 공유한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '조용히 좋아요를 누른다.',
        isClicked: false,
      },
    },
    {
      idx: 3,
      type: 'NvsS',
      query: '이제 좀 흥미로워지는 드라마에서 주인공이 느닷없이 죽어버렸다면',
      fstAnswer: {
        text:'주인공 역을 맡은 배우의 건강 상태부터 작가의 정신 상태까지 원인을 고민해본다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '더 흥미진진한데? 다음 화를 기다린다.',
        isClicked: false,
      },
    },
    {
      idx: 4,
      type: 'NvsS',
      query: '연예인의 인스타에 감성 넘치는 글이 올라왔다면',
      fstAnswer: {
        text:'최근 그 연예인과 관련된 사건들을 떠올리며 상황을 유추해본다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '올린 시간이 새벽 1시이므로 신경 끄고 잠이나 잔다.',
        isClicked: false,
      },
    },
    {
      idx: 5,
      type: 'NvsS',
      query: '화제의 넷플릭스 드라마 첫 화를 보다가 신경 쓰이는 장면이 지나갔다면',
      fstAnswer: {
        text:'다시 그 장면으로 돌아가 왜 신경 쓰였는지 확인한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '메인 스토리에 크게 영향을 미칠 것 같지 않다. 일단 계속 본다.',
        isClicked: false,
      },
    },
    {
      idx: 6,
      type: 'TvsF',
      query: '최애의 콘서트 1차 티켓팅 날, 나는 성공하고 함께 가기로 한 친구는 실패했다면',
      fstAnswer: {
        text:'2차는 성공하자! 친구의 실패 원인을 분석한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '괜찮아, 다음에는 내가 도와줄게! 친구를 안심시킨다.',
        isClicked: false,
      },
    },
    {
      idx: 7,
      type: 'TvsF',
      query: '2차 티켓팅 날, 결국 내 도움으로 성공한 친구에게 듣고 싶은 말은',
      fstAnswer: {
        text:'정말 고마워! 덕분에 콘서트 갈 수 있게 됐어!', 
        isClicked: false,
      },
      sndAnswer: {
        text: '너랑 같이 콘서트 보러 갈 수 있어서 정말 다행이야!',
        isClicked: false,
      },
    },
    {
      idx: 8,
      type: 'TvsF',
      query: '역대급 콘서트 때문에 막차 시간이 얼마 안 남았다면',
      fstAnswer: {
        text:'최단 거리에 있는 버스 정류장을 찾아 이동 시간을 계산한다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '친구가 길을 잘 찾은 거 같다. 오늘 콘서트에서 좋았던 점을 이야기한다.',
        isClicked: false,
      },
    },
    {
      idx: 9,
      type: 'JvsP',
      query: '유튜브를 보다 처음 보는 배우가 나왔는데 관심이 생겼다면',
      fstAnswer: {
        text:'이런 배우가 있었어? 출연작부터 검색해본다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '일단 유튜브나 마저 보자. 차차 알아가면 된다.',
        isClicked: false,
      },
    },
    {
      idx: 10,
      type: 'JvsP',
      query: '친구가 추천해준 드라마를 보려는데, 제법 스토리가 진행되어있다면',
      fstAnswer: {
        text:'앞부분에 중요한 장면이 있었던거 같다... 찾아본다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '그래도 초반부라 괜찮을 것 같다. 지금 화부터 본다.',
        isClicked: false,
      },
    },
    {
      idx: 11,
      type: 'JvsP',
      query: '오늘은 대체 공휴일로 생긴 긴 연휴! 당신이 할 일은?',
      fstAnswer: {
        text:'이미 긴 연휴 동안 볼 넷플릭스와 덕질 계획을 세워뒀다.', 
        isClicked: false,
      },
      sndAnswer: {
        text: '일단 유튜브부터 볼까... 아직 시간은 많다!',
        isClicked: false,
      },
    },
  ]
};

const questions = handleActions({
  [FSTCLICKED]: (state, action) => ({
    ...state,
    questions: state.questions.map(question => {
      return(
      question.idx === action.payload? {
        ...question, 
        fstAnswer: {...question.fstAnswer, isClicked: true},
        sndAnswer: {...question.sndAnswer, isClicked: false},
      }: question
      )
    })
  }),
  [SNDCLICKED]: (state, action) =>({
    ...state,
    questions: state.questions.map(question => {
      return(
      question.idx === action.payload ?{
        ...question,
        fstAnswer: {...question.fstAnswer, isClicked: false},
        sndAnswer: {...question.sndAnswer, isClicked: true},
      }: question
      )
    })
  }),
  [INITIALIZE]: (state) => produce(initState, draft=> draft),
},
  initState,
)

export default questions;