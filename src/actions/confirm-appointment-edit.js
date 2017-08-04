import { CONFIRM_APPOINTMENT_EDIT } from './types';

export default (appointment, numberOfTheNewOne) => {
	return {
		type: CONFIRM_APPOINTMENT_EDIT,
		payload: {
			appointment,
			numberOfTheNewOne
		}
	};
};