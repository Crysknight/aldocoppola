import { GOT_MAIN_SERVICES } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case GOT_MAIN_SERVICES: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};