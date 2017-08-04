import { 
	CHOOSE_CENTER, 
	CHOOSE_EMPLOYEE, 
	CONFIRM_SERVICES, 
	CONFIRM_DATE_TIME,
	ADD_APPOINTMENT,
	CANCEL_NEW_APPOINTMENT,
	EDIT_APPOINTMENT,
	DELETE_APPOINTMENT,
	CONFIRM_APPOINTMENT_EDIT
} from '../actions/types';

export default (state = { number: 0 }, action) => {
	switch (action.type) {
		case CHOOSE_CENTER: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.centerChosen = action.payload;
			newState.number = 0;
			delete newState.employeeChosen;
			delete newState.servicesChosen;
			delete newState.dateTimeChosen;
			return newState;
		}
		case CHOOSE_EMPLOYEE: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			if (newState.hasOwnProperty('employeeChosen')) {
				delete newState.servicesChosen;
			}
			newState.employeeChosen = action.payload;
			if (newState.hasOwnProperty('edited')) {
				newState.edited = true;
			}
			delete newState.dateTimeChosen;
			return newState;
		}
		case CONFIRM_SERVICES: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.servicesChosen = action.payload.services;
			if (newState.hasOwnProperty('edited')) {
				newState.edited = true;
			}
			delete newState.dateTimeChosen;
			return newState;
		}
		case CONFIRM_DATE_TIME: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.dateTimeChosen = action.payload;
			if (newState.hasOwnProperty('edited')) {
				newState.edited = true;
			}
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
		case EDIT_APPOINTMENT: {
			return {
				edited: false,
				...action.payload
			};
		}
		case DELETE_APPOINTMENT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			return {
				number: action.payload.numberOfTheNewOne,
				centerChosen: newState.centerChosen
			};
		}
		case CONFIRM_APPOINTMENT_EDIT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			return {
				number: action.payload.numberOfTheNewOne,
				centerChosen: newState.centerChosen
			};
		}
		default: {
			return state;
		}
	}
};