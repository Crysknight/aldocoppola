import { GOT_MAIN_SERVICES } from '../actions/types';

const mainServicesMethods = {};

mainServicesMethods.findMainServiceById = (mainServices, id) => {
	for (let mainService of mainServices) {
		if (mainService.id === id) {
			return mainService;
		}
	}
};

export { mainServicesMethods };

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