import { DELETE_APPOINTMENT } from './types';

export default (appointment, numberOfTheNewOne) => { 
	return {
		type: DELETE_APPOINTMENT, 
		payload: {
			appointment,
			numberOfTheNewOne
		}
	};
};