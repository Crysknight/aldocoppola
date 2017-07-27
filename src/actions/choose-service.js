import { CHOOSE_SERVICE } from './types';

export default (id) => {
	return {
		type: CHOOSE_SERVICE,
		payload: id
	};
};