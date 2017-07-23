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
					name: 'Септа Бейлора',
					city: 'Королевская Гавань',
					address: 'Вестерос, Королевская гавань, площадь Септы Бейлора',
					nearestSession: 'Центр закрыт',
					specialistsQuantity: 'Было много'
				}
			]
		});
	}, 1000);
};