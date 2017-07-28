import { GOT_SERVICES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_SERVICES, payload: 
			[
				{
					id: 0,
					title: 'Процедура для защиты волос при окрашивании Protection & Therapy',
					price: '104 044 / 104 044 / 104 044 RUB',
					time: 1.2,
					mainServiceId: 0
				},
				{
					id: 1,
					title: 'Консультация стилиста / Диагностика волос (платная)',
					price: '532 / 532 / 532 RUB',
					time: 0.2,
					mainServiceId: 0
				},
				{
					id: 2,
					title: 'Стрижка женская с укладкой',
					price: '532 / 532 / 532 RUB',
					time: 2.5,
					mainServiceId: 1
				},
				{
					id: 3,
					title: 'Окрашивание тон в тон',
					price: '6 420 RUB',
					time: 1,
					mainServiceId: 1
				},
				{
					id: 4,
					title: 'Макияж',
					price: '7 520 RUB',
					time: 3.2,
					mainServiceId: 1
				},
				{
					id: 5,
					title: 'Коррекция формы бровей',
					price: 'От 7 524 RUB до 15 502 RUB',
					time: 0.7,
					mainServiceId: 2
				},
				{
					id: 6,
					title: 'Наращивание ресниц',
					price: 'От 6 840 RUB до 13 034 RUB',
					time: 1.1,
					mainServiceId: 2
				}
			]
		});
	}, 100);
};