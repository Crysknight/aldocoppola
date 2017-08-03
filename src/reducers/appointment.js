import { 
	CHOOSE_CENTER, 
	CHOOSE_EMPLOYEE, 
	CONFIRM_SERVICES, 
	CONFIRM_DATE_TIME,
	ADD_APPOINTMENT,
	CANCEL_NEW_APPOINTMENT
} from '../actions/types';

export default (state = { number: 0 }, action) => {
	switch (action.type) {
		case CHOOSE_CENTER: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.centerChosen = action.payload;
			delete newState.employeeChosen;
			delete newState.servicesChosen;
			delete newState.dateTimeChosen;
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
		case ADD_APPOINTMENT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			delete newState.employeeChosen;
			delete newState.servicesChosen;
			delete newState.dateTimeChosen;
			newState.number++;
			return newState;
		}
		case CANCEL_NEW_APPOINTMENT: {
			if (action.payload.isTheLastOneTheOnlyOne) {
				return action.payload.theLastOne;
			} else {
				return { 
					number: action.payload.theLastOne.number++,
					centerChosen: action.payload.theLastOne.centerChosen 
				};
			}
		}
		default: {
			return state;
		}
	}
};