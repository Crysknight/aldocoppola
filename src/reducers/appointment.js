import { CHOOSE_CENTER } from '../actions/types';
import { CHOOSE_EMPLOYEE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CHOOSE_CENTER: {
			let newState = Object.assign({}, state);
			newState.centerChosen = action.payload;
			return newState;
		}
		case CHOOSE_EMPLOYEE: {
			let newState = Object.assign({}, state);
			newState.employeeChosen = action.payload;
			return newState;
		}
		default: {
			return state;
		}
	}
};