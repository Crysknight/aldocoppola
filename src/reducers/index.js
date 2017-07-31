import { combineReducers } from 'redux';
import paths from './paths';
import centers from './centers';
import appointment from './appointment';
import employees from './employees';
import mainServices from './mainServices';
import services from './services';
import calendar from './calendar';

const allReducers = combineReducers({
	paths: paths,
	centers: centers,
	appointment: appointment,
	employees: employees,
	mainServices: mainServices,
	services: services,
	calendar: calendar
});

export default allReducers;
