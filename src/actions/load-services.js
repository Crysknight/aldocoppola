import { GOT_SERVICES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_SERVICES, payload: 
			[
				{
					id: 0,
					title: 'Процедура для защиты волос при окрашивании Protection & Therapy',
					price: '104 044 / 104 044 / 104 044 RUB',
					time: '1 час'
				},
				{
					id: 1,
					title: 'Консультация стилиста / Диагностика волос (платная)',
					price: '532 / 532 / 532 RUB',
					time: '30 минут'
				},
				{
					id: 2,
					title: 'Стрижка женская с укладкой',
					price: '532 / 532 / 532 RUB',
					time: '30 минут'
				}
			]
		});
	}, 100);
};