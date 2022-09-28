const SET_ENTERED_TEXT = 'SET_ENTERED_TEXT';

export const setEnteredText = payload => ({ type: SET_ENTERED_TEXT, payload });

const initialState = '';

export default function enteredText(state = initialState, action) {
  switch (action.type) {
    case SET_ENTERED_TEXT:
      return action.payload;
    default:
      return state;
  }
}
