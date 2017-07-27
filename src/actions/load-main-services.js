import { GOT_MAIN_SERVICES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_MAIN_SERVICES, payload: 
			[
				{
					id: 0,
					title: 'Парикмахерские услуги'
				},
				{
					id: 1,
					title: 'Визаж'
				},
				{
					id: 2,
					title: 'Маникюрные услуги'
				},
				{
					id: 3,
					title: 'Процедуры для лица'
				},
				{
					id: 4,
					title: 'Процедуры для тела'
				}
			]
		});
	}, 100);
};