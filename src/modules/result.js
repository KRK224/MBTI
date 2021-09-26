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
      text: 'ISTJ 소금형입니다.'
    },
    {
      type:'ISFJ',
      picPath: '',
      text: 'ISFJ 결과지입니다.'
    },
    {
      type:'INFJ',
      picPath: '',
      text: 'INFJ결과지입니다.'
    },
    {
      type:'INTJ',
      picPath: '',
      text: 'INTJ결과지입니다.'
    },
    {
      type:'ISTP',
      picPath: '',
      text: 'ISTP결과지입니다.'
    },
    {
      type:'ISFP',
      picPath: '',
      text: 'ISFP결과지입니다.'
    },
    {
      type:'INFP',
      picPath: '',
      text: 'INFP결과지입니다.'
    },
    {
      type:'INTP',
      picPath: '',
      text: 'INTP결과지입니다.'
    },
    {
      type:'ESTP',
      picPath: '',
      text: 'ESTP결과지입니다.'
    },
    {
      type:'ESFP',
      picPath: '',
      text: 'ESFP결과지입니다.'
    },
    {
      type:'ENFP',
      picPath: '',
      text: 'ENFP결과지입니다.'
    },
    {
      type:'ENTP',
      picPath: '',
      text: 'ENTP결과지입니다.'
    },
    {
      type:'ESTJ',
      picPath: '',
      text: 'ESTJ결과지입니다.'
    },
    {
      type:'ESFJ',
      picPath: '',
      text: 'ESFJ결과지입니다.'
    },
    {
      type:'ENFJ',
      picPath: '',
      text: 'ENFJ결과지입니다.'
    },
    {
      type:'ENTJ',
      picPath: '',
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