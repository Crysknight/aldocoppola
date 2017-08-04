import { GOT_EMPLOYEES } from './types';
import DBMock from '../DBMock';

export default (centerId, serviceId, employeeChosen) => dispatch => {
	let payload;
	console.log(employeeChosen);
	if ((!employeeChosen && employeeChosen !== 0) || employeeChosen === -1) {
		payload = DBMock.getEmployees(centerId, serviceId);
	} else {
		payload = DBMock.getEmployees(centerId, null);
	}
	setTimeout(() => {
		dispatch({ type: GOT_EMPLOYEES, payload });
	}, 100);
};