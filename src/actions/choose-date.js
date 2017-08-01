import { CHOOSE_DATE } from './types';

export default (month, date) => {
	return {
		type: CHOOSE_DATE,
		payload: {
			month,
			date
		}
	};
};