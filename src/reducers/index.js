import { combineReducers } from 'redux';
import paths from './paths';
import centers from './centers';
import appointment from './appointment';

const allReducers = combineReducers({
	paths: paths,
	centers: centers,
	appointment: appointment
});

export default allReducers;
