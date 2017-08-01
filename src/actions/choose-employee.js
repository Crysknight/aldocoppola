import { CHOOSE_EMPLOYEE } from './types';

export default (id, name) => dispatch => {
	setTimeout(() => {
		dispatch({
			type: CHOOSE_EMPLOYEE,
			payload: {
				id,
				name,
				workHoursFree: [
					'2017-08-25 17:00',
					'2017-08-25 18:00',
					'2017-08-29 13:00',
					'2017-08-29 14:00',
					'2017-08-29 15:30',
					'2017-08-29 16:30'
				]
			}
		})
	}, 100);
};