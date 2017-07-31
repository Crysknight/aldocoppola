import { CHOOSE_SERVICE } from './types';

export default (id, single) => {
	return {
		type: CHOOSE_SERVICE,
		payload: { id, single }
	};
};