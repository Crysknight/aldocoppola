import { GOT_SERVICES, CHOOSE_SERVICE } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case GOT_SERVICES: {
			return action.payload;
		}
		case CHOOSE_SERVICE: {
			let newState = [ ...state ];
			for (let service of newState) {
				if (service.id === action.payload) {
					service.checked = service.checked ? false : true;
				}
			}
			return newState;
		}
		default: {
			return state;
		}
	}
};