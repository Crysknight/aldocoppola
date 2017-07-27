import { CHOOSE_EMPLOYEE } from './types';

export default (id, name) => {
	return {
		type: CHOOSE_EMPLOYEE,
		payload: {
			id,
			name
		}
	};
};