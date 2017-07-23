import { GOT_CENTERS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case GOT_CENTERS: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};