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
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 1,
      type: 'NvsS',
      query: 'NvsS 질문입니다.',
      fstAnswer: {
        text:'N', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'S',
        isClicked: false,
      },
    },
    {
      idx:2,
      type: 'TvsF',
      query: 'TvsF 질문입니다.',
      fstAnswer: {
        text:'T', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'F',
        isClicked: false,
      },
    },
    {
      idx: 3,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 4,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 5,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 6,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 7,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 8,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 9,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 10,
      type: 'EvsI',
      query: 'EvsI 질문입니다.',
      fstAnswer: {
        text:'E', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
        isClicked: false,
      },
    },
    {
      idx: 11,
      type: 'JvsP',
      query: 'JvsP 질문입니다.',
      fstAnswer: {
        text:'Edkjfiejkadljfiejakldjfiejfakldjfiejfakdljfi', 
        isClicked: false,
      },
      sndAnswer: {
        text: 'I',
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