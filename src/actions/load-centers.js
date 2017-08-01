import { GOT_CENTERS } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_CENTERS, payload: 
			[
				{
					id: 0,
					name: 'Времена года',
					city: 'Москва',
					address: 'Москва, Кутузовский проспект, д. 48, Галереи "Времена года", 3 этаж',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				},
				{
					id: 1,
					name: 'Новинский пассаж',
					city: 'Москва',
					address: 'Новинский бульвар, д. 31, ТЦ «Новинский пассаж», 2 этаж',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				},
				{
					id: 2,
					name: 'Весна',
					city: 'Москва',
					address: 'Новый Арбат, д. 19, стр. 1, ТД «Весна», -1 этаж',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				},
				{
					id: 3,
					name: 'Lotte Hotel',
					city: 'Москва',
					address: 'Новинский б-р, 8/2',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				},
				{
					id: 4,
					name: 'Жуковка',
					city: 'МО',
					address: 'Рублево-Успенское шоссе, д. 204, Жуковка',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				},
				{
					id: 5,
					name: 'Барвиха Luxury Village',
					city: 'МО',
					address: 'Рублево-Успенское шоссе, д. 114, «Барвиха Luxury Village»',
					nearestSession: '12 июля, 10:00',
					specialistsQuantity: '6 человек'
				}
			]
		});
	}, 100);
};