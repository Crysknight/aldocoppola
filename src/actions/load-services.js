import { GOT_SERVICES } from './types';
import DBMock from '../DBMock';

export default (centerId, employeeId) => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_SERVICES, payload: DBMock.getServices(centerId, employeeId) });
	}, 100);
};