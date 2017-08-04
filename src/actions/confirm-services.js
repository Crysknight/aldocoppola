import { CONFIRM_SERVICES } from './types';
import DBMock from '../DBMock';

export default (services, centerId, employeeChosen) => {
	let payload;
	if (!employeeChosen || employeeChosen === -1) {
		payload = {
			services, 
			workHoursFree: DBMock.getWorkHours(centerId, services[0].id, null)
		};
	} else {
		payload = {
			services
		};
	}
	return {
		type: CONFIRM_SERVICES,
		payload
	};
};