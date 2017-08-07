import { EDIT_APPOINTMENT } from './types';
import DBMock from '../DBMock';

export default appointmentToEdit => {
	let workHoursFree;
	if (appointmentToEdit.employeeChosen.id !== -1) {
		workHoursFree = DBMock.getWorkHours(appointmentToEdit.centerChosen.id, null, appointmentToEdit.employeeChosen.id);
	} else {
		workHoursFree = DBMock.getWorkHours(appointmentToEdit.centerChosen.id, appointmentToEdit.servicesChosen[0].id, null);
	}
	return { 
		type: EDIT_APPOINTMENT, 
		payload: {
			appointmentToEdit,
			workHoursFree
		}
	};
};