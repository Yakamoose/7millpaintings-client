import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import {millionReducer} from './reducers';

const defaultState = {};

export default createStore(
  combineReducers({
    millionReducer,
    form:formReducer
  }, applyMiddleware(thunk)));
