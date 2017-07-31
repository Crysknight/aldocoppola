import { GOT_SERVICES, CHOOSE_SERVICE, CHOOSE_EMPLOYEE } from '../actions/types';

const servicesMethods = {};

servicesMethods.getTimeString = (time) => {
	const declension = (item, qnt) => {
		const forms = {
			'час': ['часов', 'час', 'часа'],
			'минута': ['минут', 'минута', 'минуты']
		};
		if (Math.floor(qnt / 10) === 1) return forms[item][0];
		if (qnt % 10 === 1) return forms[item][1];
		if (qnt % 10 > 1 && qnt % 10 < 5) return forms[item][2];
		return forms[item][0];
	}
	let hourCount = Math.floor(time / 1);
	let minuteCount = Math.round(time % 1 * 60);
	return `
		${hourCount === 0 ? '' : hourCount + ' ' + declension('час', hourCount)} 
		${minuteCount === 0 ? '' : minuteCount + ' ' + declension('минута', minuteCount)}
	`;
};

export { servicesMethods };

export default (state = [], action) => {
	switch (action.type) {
		case GOT_SERVICES: {
			return action.payload;
		}
		case CHOOSE_SERVICE: {
			let newState = [ ...state ];
			for (let service of newState) {
				if (action.payload.single) {
					service.checked = service.checked ? false : service.checked;
				}
				if (service.id === action.payload.id) {
					service.checked = service.checked ? false : true;
				}
			}
			return newState;
		}
		case CHOOSE_EMPLOYEE: {
			let newState = [ ...state ];
			for (let service of newState) {
				service.checked = service.checked ? false : service.checked;
			}
			return newState;
		}
		default: {
			return state;
		}
	}
};