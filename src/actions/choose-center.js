import { CHOOSE_CENTER } from './types';

export default (id, name) => {
	return {
		type: CHOOSE_CENTER,
		payload: {
			id,
			name
		}
	};
};