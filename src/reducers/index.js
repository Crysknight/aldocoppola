import { combineReducers } from 'redux';
import defaultReducer from './default';

const allReducers = combineReducers({
	defaultReducer: defaultReducer
});

export default allReducers;
