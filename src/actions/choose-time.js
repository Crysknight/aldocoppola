import { CHOOSE_TIME } from './types';

export default (date, time) => {
	return {
		type: CHOOSE_TIME,
		payload: {
			date,
			time
		}
	};
};