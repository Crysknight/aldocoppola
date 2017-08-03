import { ADD_APPOINTMENT } from './types';

export default appointment => {
	return {
		type: ADD_APPOINTMENT,
		payload: appointment
	};
};