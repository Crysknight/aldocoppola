import { CONFIRM_SERVICES } from './types';

export default (services) => {
	return {
		type: CONFIRM_SERVICES,
		payload: services
	}
};