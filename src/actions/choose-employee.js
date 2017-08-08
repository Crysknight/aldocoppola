import { CHOOSE_EMPLOYEE } from './types';
import DBMock from '../DBMock';

export default (employee, centerId) => dispatch => {
	setTimeout(() => {
		let payload;
		if (employee.id !== -1) {
			payload = {
				id: employee.id,
				name: employee.name,
				specialization: employee.specialization,
				workHoursFree: DBMock.getWorkHours(centerId, null, employee.id)
			};
		} else {
			payload = {
				id: employee.id,
				name: employee.name,
				specialization: employee.specialization
			};
		}
		dispatch({
			type: CHOOSE_EMPLOYEE,
			payload
		})
	}, 100);
};