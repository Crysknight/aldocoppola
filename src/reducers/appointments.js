import { 
	ADD_APPOINTMENT, 
	CANCEL_NEW_APPOINTMENT, 
	CHOOSE_CENTER,
	DELETE_APPOINTMENT,
	CONFIRM_APPOINTMENT_EDIT
} from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_APPOINTMENT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			newState.push(action.payload);
			return newState;
		}
		case CANCEL_NEW_APPOINTMENT: {
			if (action.payload.isTheLastOneTheOnlyOne) {
				return [];
			} else {
				return state;
			}
		}
		case CHOOSE_CENTER: {
			return [];
		}
		case DELETE_APPOINTMENT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let i = 0; i < newState.length; i++) {
				if (newState[i].number === action.payload.appointment.number) {
					newState.splice(i, 1);
				}
			}
			for (let i = 0; i < newState.length; i++) {
				newState[i].number = i;
			}
			return newState;
		}
		case CONFIRM_APPOINTMENT_EDIT: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let i = 0; i < newState.length; i++) {
				if (newState[i].number === action.payload.appointment.number) {
					delete action.payload.appointment.edited;
					newState[i] = action.payload.appointment;
				}
			}
			return newState;
		}
		default: {
			return state;
		}
	}
}