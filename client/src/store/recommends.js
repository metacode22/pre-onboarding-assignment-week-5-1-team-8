const SET_RECOMMENDS = 'SET_RECOMMENDS';

export const setRecommends = payload => ({ type: SET_RECOMMENDS, payload });

const initialState = [];

export default function recommends(state = initialState, action) {
  switch (action.type) {
    case SET_RECOMMENDS:
      return [...action.payload];
    default:
      return state;
  }
}
