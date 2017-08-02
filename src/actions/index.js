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
import chooseTime from './choose-time';
import confirmDateTime from './confirm-date-time';

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
	chooseTime: chooseTime,
	confirmDateTime: confirmDateTime
};