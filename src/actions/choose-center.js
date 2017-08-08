import { CHOOSE_CENTER } from './types';

export default center => {
	return {
		type: CHOOSE_CENTER,
		payload: center
	};
};