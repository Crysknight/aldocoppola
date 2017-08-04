// Centers
import loadCenters from './load-centers';
import chooseCenter from './choose-center';

// Employees
import loadEmployees from './load-employees';
import chooseEmployee from './choose-employee';

// Services
import loadMainServices from './load-main-services';
import loadServices from './load-services';
import chooseService from './choose-service';
import confirmServices from './confirm-services';

// Date
import chooseDate from './choose-date';
import confirmDateTime from './confirm-date-time';

// Appointment
import addAppointment from './add-appointment';
import cancelNewAppointment from './cancel-new-appointment';
import editAppointment from './edit-appointment';
import deleteAppointment from './delete-appointment';
import confirmAppointmentEdit from './confirm-appointment-edit';

export default {
	loadCenters: loadCenters,
	chooseCenter: chooseCenter,
	loadEmployees: loadEmployees,
	chooseEmployee: chooseEmployee,
	loadMainServices: loadMainServices,
	loadServices: loadServices,
	chooseService: chooseService,
	confirmServices: confirmServices,
	chooseDate: chooseDate,
	confirmDateTime: confirmDateTime,
	addAppointment: addAppointment,
	cancelNewAppointment: cancelNewAppointment,
	editAppointment: editAppointment,
	deleteAppointment: deleteAppointment,
	confirmAppointmentEdit: confirmAppointmentEdit
};