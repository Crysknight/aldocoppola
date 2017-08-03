import { CHOOSE_EMPLOYEE } from './types';

export default (id, name) => dispatch => {
	setTimeout(() => {
		dispatch({
			type: CHOOSE_EMPLOYEE,
			payload: {
				id,
				name,
				workHoursFree: [
					'2017-08-23 09:00',
					'2017-08-23 10:30',
					'2017-08-23 11:30',
					'2017-08-23 14:00',
					'2017-08-23 17:00',
					'2017-08-23 18:00',
					'2017-08-23 19:00',
					'2017-08-25 09:00',
					'2017-08-25 10:30',
					'2017-08-25 11:30',
					'2017-08-25 14:00',
					'2017-08-25 17:00',
					'2017-08-25 18:00',
					'2017-08-25 19:00',
					'2017-08-26 10:30',
					'2017-08-26 11:30',
					'2017-08-26 14:00',
					'2017-08-26 17:00',
					'2017-08-26 18:00',
					'2017-08-27 17:00',
					'2017-08-27 18:00',
					'2017-08-27 19:00',
					'2017-08-29 13:00',
					'2017-08-29 14:00',
					'2017-08-29 15:30',
					'2017-08-29 16:30',
					'2017-08-30 10:30',
					'2017-08-30 11:30',
					'2017-08-30 14:00',
					'2017-08-30 17:00',
					'2017-08-30 18:00',
					'2017-09-02 12:00',
					'2017-09-02 13:00',
					'2017-09-03 13:00',
					'2017-09-03 18:01'
				]
			}
		})
	}, 100);
};