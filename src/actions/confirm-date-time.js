import { CONFIRM_DATE_TIME } from './types';

export default date => {
	return {
		type: CONFIRM_DATE_TIME,
		payload: date
	};
};