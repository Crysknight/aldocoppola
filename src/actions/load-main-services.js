import { GOT_MAIN_SERVICES } from './types';
import DBMock from '../DBMock';

export default (centerId, employeeId) => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_MAIN_SERVICES, payload: DBMock.getMainServices(centerId, employeeId) });
	}, 100);
};