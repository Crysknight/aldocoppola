import { GOT_EMPLOYEES } from '../actions/types';

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
		default: {
			return state;
		}
	}
};