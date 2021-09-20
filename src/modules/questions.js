import { createAction, handleActions } from "redux-actions";

const FSTCLICKED = 'questions/FSTCLICKED';
const SNDCLICKED = 'questions/SNDCLICKED';

export const fstClicked = createAction(FSTCLICKED, idx=>idx);
export const sndClicked = createAction(SNDCLICKED, idx=>idx);

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
    qeustions: state.questions.map(question => {
      return(
      question.idx ===action.payload?{
        ...question,
        fstAnswer: {...question.fstAnswer, isClicked: false},
        sndAnswer: {...question.sndAnswer, isClicked: true},
      }: question
      )
    })
  }),
},
  initState,
)

export default questions;