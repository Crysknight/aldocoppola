import { GOT_EMPLOYEES } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case GOT_EMPLOYEES: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};