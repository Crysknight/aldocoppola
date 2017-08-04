import { GOT_CENTERS } from './types';
import DBMock from '../DBMock';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_CENTERS, payload: DBMock.getCenters() });
	}, 100);
};