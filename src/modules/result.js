import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const DECIDETYPE = 'result/DECIDETYPE';
const INITIALIZE = 'result/INITIALIZE';

export const decideType = createAction(DECIDETYPE, resultType =>resultType
);

export const initialize_result = createAction(INITIALIZE);

const initState ={
  resultType: {},
  typeList:[
    {
      type:'ISTJ',
      picPath: '',
      header: 'ISTJ header',
      text: 'ISTJ 소금형입니다.'
    },
    {
      type:'ISFJ',
      picPath: '',
      header: 'ISFJ header',
      text: 'ISFJ 결과지입니다.'
    },
    {
      type:'INFJ',
      picPath: '',
      header: 'INFJ header',
      text: 'INFJ결과지입니다.'
    },
    {
      type:'INTJ',
      picPath: '',
      header: 'INTJ header',
      text: 'INTJ결과지입니다.'
    },
    {
      type:'ISTP',
      picPath: '',
      header: 'ISTP header',
      text: 'ISTP결과지입니다.'
    },
    {
      type:'ISFP',
      picPath: '/img/혁이형.jpg',
      header: 'ISFP header',
      text: 'ISFP결과지입니다.'
    },
    {
      type:'INFP',
      picPath: '',
      header: 'IFNP header',
      text: 'INFP결과지입니다.'
    },
    {
      type:'INTP',
      picPath: '',
      header: 'INTP header',
      text: 'INTP결과지입니다.'
    },
    {
      type:'ESTP',
      picPath: '',
      header: 'ESTP header',
      text: 'ESTP결과지입니다.'
    },
    {
      type:'ESFP',
      picPath: '',
      header: 'ESFP header',
      text: 'ESFP결과지입니다.'
    },
    {
      type:'ENFP',
      picPath: '',
      header: 'ENFP header',
      text: 'ENFP결과지입니다.'
    },
    {
      type:'ENTP',
      picPath: '',
      header: 'ENTP header',
      text: 'ENTP결과지입니다.'
    },
    {
      type:'ESTJ',
      picPath: '',
      header: 'ESTJ header',
      text: 'ESTJ결과지입니다.'
    },
    {
      type:'ESFJ',
      picPath: '',
      header: 'ESFJ header',
      text: 'ESFJ결과지입니다.'
    },
    {
      type:'ENFJ',
      picPath: '',
      header: 'ENFJ header',
      text: 'ENFJ결과지입니다.'
    },
    {
      type:'ENTJ',
      picPath: '',
      header: 'ENTJ header',
      text: 'ENTJ결과지입니다.'
    },
  ],
};

const result = handleActions({
  [DECIDETYPE]: (state, action)=>{
    const resultObj = state.typeList.find((list)=>{
      return list.type === action.payload;
    })
    return {...state, resultType:resultObj}
  },
  [INITIALIZE]: () => produce(initState, draft=>draft),
},
  initState,  
);

export default result;