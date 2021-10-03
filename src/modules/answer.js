import { createAction, handleActions } from "redux-actions";

// action type 정의

const EINCREASE = 'answer/EINCREASE';
const NINCREASE = 'answer/NINCREASE';
const TINCREASE = 'answer/TINCREASE';
const JINCREASE = 'answer/JINCREASE';
const INITIALIZE = 'answer/INITIALIZE';
const TOGGLELOADING = 'answer/TOGGLELOADING';


export const eincrease = createAction(EINCREASE);
export const nincrease = createAction(NINCREASE);
export const tincrease = createAction(TINCREASE);
export const jincrease = createAction(JINCREASE);
export const initialize_answer = createAction(INITIALIZE);
export const toggleLoading = createAction(TOGGLELOADING);

const initState = {
  EvsI: 0,
  NvsS: 0,
  TvsF: 0,
  JvsP: 0,
};

const answer = handleActions({
  [EINCREASE]: (state) =>({...state, EvsI: state.EvsI + 1}),
  [NINCREASE]: (state) => ({...state, NvsS: state.NvsS + 1}),
  [TINCREASE]: (state) => ({...state, TvsF: state.TvsF + 1}),
  [JINCREASE]: (state) =>({...state, JvsP: state.JvsP + 1}),
  [INITIALIZE]: () => ({...initState}),
},
  initState
);

export default answer;
