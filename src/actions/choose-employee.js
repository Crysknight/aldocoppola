import { CHOOSE_EMPLOYEE } from './types';
import DBMock from '../DBMock';

export default (id, name, centerId) => dispatch => {
	setTimeout(() => {
		let payload;
		if (id !== -1) {
			payload = {
				id,
				name,
				workHoursFree: DBMock.getWorkHours(centerId, null, id)
			};
		} else {
			payload = {
				id,
				name
			};
		}
		dispatch({
			type: CHOOSE_EMPLOYEE,
			payload
		})
	}, 100);
};