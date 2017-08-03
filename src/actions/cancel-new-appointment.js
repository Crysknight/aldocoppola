import { CANCEL_NEW_APPOINTMENT } from './types';

export default (isTheLastOneTheOnlyOne, theLastOne) => {
	return {
		type: CANCEL_NEW_APPOINTMENT,
		payload: {
			isTheLastOneTheOnlyOne,
			theLastOne
		}
	};
};