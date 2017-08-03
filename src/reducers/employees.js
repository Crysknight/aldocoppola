import { GOT_EMPLOYEES, CHOOSE_CENTER } from '../actions/types';

const employeesMethods = {};

employeesMethods.findEmployeeById = (employees, id) => {
	for (let employee of employees) {
		if (employee.id === id) {
			return employee;
		}
	}
};

export { employeesMethods };

export default (state = [], action) => {
	switch (action.type) {
		case GOT_EMPLOYEES: {
			return action.payload;
		}
		case CHOOSE_CENTER: {
			return [];
		}
		default: {
			return state;
		}
	}
};