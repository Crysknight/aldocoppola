import { ADD_APPOINTMENT, CANCEL_NEW_APPOINTMENT, CHOOSE_CENTER } from '../actions/types';

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
		default: {
			return state;
		}
	}
}