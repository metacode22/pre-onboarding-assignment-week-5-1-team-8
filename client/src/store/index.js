import { combineReducers } from 'redux';
import recommends from './recommends';
import enteredText from './enteredText';

const rootReducer = combineReducers({ recommends, enteredText });

export default rootReducer;
