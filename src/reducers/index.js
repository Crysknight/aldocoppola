import { combineReducers } from 'redux';
import paths from './paths';

const allReducers = combineReducers({
	paths: paths
});

export default allReducers;
