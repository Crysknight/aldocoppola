import { combineReducers } from 'redux';
import paths from './paths';
import centers from './centers';

const allReducers = combineReducers({
	paths: paths,
	centers: centers
});

export default allReducers;
