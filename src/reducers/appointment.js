import { CHOOSE_CENTER, CHOOSE_EMPLOYEE, CONFIRM_SERVICES, CONFIRM_DATE_TIME } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CHOOSE_CENTER: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.centerChosen = action.payload;
			return newState;
		}
		case CHOOSE_EMPLOYEE: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.employeeChosen = action.payload;
			return newState;
		}
		case CONFIRM_SERVICES: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.servicesChosen = action.payload;
			return newState;
		}
		case CONFIRM_DATE_TIME: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.dateTimeChosen = action.payload;
			return newState;
		}
		default: {
			return state;
		}
	}
};