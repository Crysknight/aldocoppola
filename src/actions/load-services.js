import { GOT_SERVICES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_SERVICES, payload: 
			[
				{
					id: 0,
					title: 'Стрижка женская',
					price: 'от 5 890 руб. до 10 868 руб.',
					time: 0.5,
					mainServiceId: 0
				},
				{
					id: 1,
					title: 'Стрижка детская до 10 лет',
					price: 'от 3 534 руб. до 4 674 руб.',
					time: 0.4,
					mainServiceId: 0
				},
				{
					id: 2,
					title: 'Укладка',
					price: 'от 2 014 руб. до 6 156 руб.',
					time: 0.5,
					mainServiceId: 0
				},
				{
					id: 3,
					title: 'Наращивание волос ленточное / капсульное / ультразвуковое',
					price: 'от 22 306 руб. до 79 952 руб.',
					time: 2.2,
					mainServiceId: 0
				},
				{
					id: 4,
					title: 'Макияж',
					price: 'от 7 524 руб. до 15 504 руб.',
					time: 0.7,
					mainServiceId: 1
				},
				{
					id: 5,
					title: 'Коррекция формы бровей',
					price: 'от 2 812 руб. до 3 040 руб.',
					time: 0.5,
					mainServiceId: 1
				},
				{
					id: 6,
					title: 'Микроблейдинг бровей',
					price: '29 982 руб.',
					time: 0.7,
					mainServiceId: 1
				},
				{
					id: 7,
					title: 'Комплекс для лица Fresh Look Daily / Evening',
					price: 'от 10 754 руб. до 12 084 руб.',
					time: 1.5,
					mainServiceId: 1
				},
				{
					id: 27,
					title: 'МАНИКЮР',
					price: 'от 4 104 руб. до 5890 руб.',
					time: 0.5,
					mainServiceId: 2
				},
				{
					id: 8,
					title: 'ПЕДИКЮР',
					price: 'от 6 536 руб.   до 8 132 руб.',
					time: 0.5,
					mainServiceId: 2
				},
				{
					id: 9,
					title: 'ПОКРЫТИЯ',
					price: 'от 1 102 руб.   до 2 964 руб.',
					time: 0.5,
					mainServiceId: 2
				},
				{
					id: 10,
					title: 'Наращивание ногтей (руки/ноги) / наращивание френч',
					price: 'от 10 336 руб. до 14 706 руб.',
					time: 1,
					mainServiceId: 2
				},
				{
					id: 11,
					title: 'Уход Aldo Coppola',
					price: '15 048 руб.',
					time: 1,
					mainServiceId: 3
				},
				{
					id: 12,
					title: 'Уход восстанавливающий Y-Theorem',
					price: '15 048 руб.',
					time: 1,
					mainServiceId: 3
				},
				{
					id: 13,
					title: 'Уход anti age Black Diamond',
					price: '19 988 руб.',
					time: 1.1,
					mainServiceId: 3
				},
				{
					id: 14,
					title: 'Швейцарская клеточная омоложивающая программа',
					price: 'от 10 754 руб.   до 12 084 руб.',
					time: 1.1,
					mainServiceId: 3
				},
				{
					id: 15,
					title: 'Массаж тела Aldo Coppola + моделирующий уход',
					price: '15 048 руб.',
					time: 0.5,
					mainServiceId: 4
				},
				{
					id: 16,
					title: 'Массаж воротниковой и плечевой зоны',
					price: '2 014 руб.',
					time: 0.25,
					mainServiceId: 4
				},
				{
					id: 17,
					title: 'Тайский массаж',
					price: 'от 8 132 руб. до 12 046 руб.',
					time: 1,
					mainServiceId: 4
				},
				{
					id: 18,
					title: 'Аюрверда',
					price: 'от 7 144 руб.  до 10 792 руб.',
					time: 0.5,
					mainServiceId: 4
				},
				{
					id: 19,
					title: 'Стрижка мужская',
					price: 'от 5 358 руб.  до 6 460 руб.',
					time: 0.5,
					mainServiceId: 5
				},
				{
					id: 20,
					title: 'Стрижка бороды и усов',
					price: 'от 2 052 руб.   до 2 508 руб.',
					time: 0.5,
					mainServiceId: 5
				},
				{
					id: 21,
					title: 'Королевское бритье',
					price: 'от 4 370 руб.   до 5 358 руб.',
					time: 0.6,
					mainServiceId: 5
				},
				{
					id: 22,
					title: 'Тонирование волос',
					price: 'от 3 344 руб.  до 4 218 руб.',
					time: 0.8,
					mainServiceId: 5
				},
				{
					id: 23,
					title: 'Lady Principessa',
					price: '67 000 руб.',
					time: 2,
					mainServiceId: 6
				},
				{
					id: 24,
					title: 'Signorina',
					price: '95 576 руб.',
					time: 2.2,
					mainServiceId: 6
				},
				{
					id: 25,
					title: 'Donna',
					price: '117 920 руб.',
					time: 2.5,
					mainServiceId: 6
				},
				{
					id: 26,
					title: 'Gentleman Uomo',
					price: '43 624 руб.',
					time: 1.5,
					mainServiceId: 6
				}
			]
		});
	}, 100);
};