import { createAction, handleActions } from "redux-actions";

// action type 정의

const EINCREASE = 'answer/EINCREASE';
const NINCREASE = 'answer/NINCREASE';
const TINCREASE = 'answer/TINCREASE';
const JINCREASE = 'answer/JINCREASE';

export const eincrease = createAction(EINCREASE);
export const nincrease = createAction(NINCREASE);
export const tincrease = createAction(TINCREASE);
export const jincrease = createAction(JINCREASE);

const initState = {
  EvsI: 0,
  NvsS: 0,
  TvsF: 0,
  JvsP: 0,
};

const answer = handleActions({
  [EINCREASE]: (state) =>({EvsI: state.EvsI + 1}),
  [NINCREASE]: (state) => ({NvsS: state.NvsS + 1}),
  [TINCREASE]: (state) => ({TvsF: state.TvsF + 1}),
  [JINCREASE]: (state) =>({JvsP: state.JvsP + 1}),
},
  initState
);

export default answer;
