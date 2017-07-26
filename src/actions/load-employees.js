import { GOT_EMPLOYEES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_EMPLOYEES, payload: 
			[
				{
					id: 0,
					name: 'Анастасия',
					specialization: 'Топ-стилист',
					address: 'Москва, Кутузовский проспект, д. 48, Галереи "Времена года", 3 этаж',
					photo: 'http://1wayit.com/wp-content/uploads/2016/11/avatar1.png'
				},
				{
					id: 1,
					name: 'Агафья',
					specialization: 'Ассистент',
					address: 'Вестерос, Королевская гавань, площадь Септы Бейлора',
					photo: 'http://1wayit.com/wp-content/uploads/2016/11/avatar1.png'
				}
			]
		});
	}, 1000);
};