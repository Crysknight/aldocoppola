import { combineReducers } from 'redux';
import paths from './paths';
import centers from './centers';
import appointment from './appointment';
import employees from './employees';

const allReducers = combineReducers({
	paths: paths,
	centers: centers,
	appointment: appointment,
	employees: employees
});

export default allReducers;
