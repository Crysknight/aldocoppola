const DBMock = {
	centers: [
		{
			id: 0,
			name: 'Времена года',
			city: 'Москва',
			address: 'Москва, Кутузовский проспект, д. 48, Галереи "Времена года", 3 этаж',
			nearestSession: '12 июля, 10:00',
			specialistsQuantity: '6 человек',
			coordinates: {
				lat: 55.731713, 
				lon: 37.487084
			}
		},
		{
			id: 1,
			name: 'Новинский пассаж',
			city: 'Москва',
			address: 'Новинский бульвар, д. 31, ТЦ «Новинский пассаж», 2 этаж',
			nearestSession: '12 июля, 10:00',
			specialistsQuantity: '6 человек',
			coordinates: {
				lat: 55.758072, 
				lon: 37.581945
			}
		},
		{
			id: 2,
			name: 'Жуковка',
			city: 'МО',
			address: 'Рублево-Успенское шоссе, д. 204, Жуковка',
			nearestSession: '12 июля, 10:00',
			specialistsQuantity: '6 человек',
			coordinates: {
				lat: 55.738399, 
				lon: 37.242607
			}
		}
	],
	employees: [
		{
			id: 0,
			name: 'Анастасия',
			specialization: 'Топ-стилист',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'https://a.svbtleusercontent.com/8jbnG5tOpWbQtORZrleXxtka3eck_large.jpg',
			centerId: 0,
			services: [21, 22, 23, 24, 26, 25, 11, 4, 5, 6],
			workHours: [
				'2017-08-19 09:00',
				'2017-08-19 10:30',
				'2017-08-19 11:30',
				'2017-08-19 14:00',
				'2017-08-19 17:00',
				'2017-08-19 18:00',
				'2017-08-19 19:00',
				'2017-08-20 09:00',
				'2017-08-20 10:30',
				'2017-08-20 11:30',
				'2017-08-20 14:00',
				'2017-08-20 17:00',
				'2017-08-20 18:00',
				'2017-08-20 19:00',
				'2017-08-21 10:30',
				'2017-08-21 11:30',
				'2017-08-21 14:00',
				'2017-08-21 17:00',
				'2017-08-21 18:00',
				'2017-08-21 17:00',
				'2017-08-21 18:00',
				'2017-08-21 19:00',
				'2017-09-05 13:00',
				'2017-09-05 14:00',
				'2017-09-05 15:30',
				'2017-09-05 16:30',
				'2017-09-06 10:30',
				'2017-09-06 11:30',
				'2017-09-06 14:00',
				'2017-09-06 17:00',
				'2017-09-06 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:01'
			]
		},
		{
			id: 1,
			name: 'Мария',
			specialization: 'Визажист',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'https://www.southtampadentaloffice.com/images/services/tooth-colored-fillings.jpg',
			centerId: 0,
			services: [4, 5, 6, 7, 19, 24, 20],
			workHours: [
				'2017-08-17 09:00',
				'2017-08-17 10:30',
				'2017-08-17 11:30',
				'2017-08-17 14:00',
				'2017-08-17 17:00',
				'2017-08-17 18:00',
				'2017-08-17 19:00',
				'2017-08-20 09:00',
				'2017-08-20 10:30',
				'2017-08-20 11:30',
				'2017-08-20 14:00',
				'2017-08-20 17:00',
				'2017-08-20 18:00',
				'2017-08-20 19:00',
				'2017-08-21 10:30',
				'2017-08-21 11:30',
				'2017-08-21 14:00',
				'2017-08-21 17:00',
				'2017-08-21 18:00',
				'2017-08-21 17:00',
				'2017-08-21 18:00',
				'2017-08-21 19:00',
				'2017-09-05 13:00',
				'2017-09-05 14:00',
				'2017-09-05 15:30',
				'2017-09-05 16:30',
				'2017-09-06 10:30',
				'2017-09-06 11:30',
				'2017-09-06 14:00',
				'2017-09-06 17:00',
				'2017-09-06 18:00',
				'2017-09-07 12:00',
				'2017-09-07 13:00',
				'2017-09-10 13:00',
				'2017-09-10 18:01'
			]
		},
		{
			id: 2,
			name: 'Ксения',
			specialization: 'Мастер маникюра',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'http://www.comprehensivedentistry.com.au/wp-content/uploads/2015/04/preventive-dentistries1.jpg?x71121',
			centerId: 1,
			services: [27, 8, 9, 10],
			workHours: [
				'2017-08-15 09:00',
				'2017-08-15 10:30',
				'2017-08-15 11:30',
				'2017-08-15 14:00',
				'2017-08-15 17:00',
				'2017-08-15 18:00',
				'2017-08-15 19:00',
				'2017-08-16 09:00',
				'2017-08-16 10:30',
				'2017-08-16 11:30',
				'2017-08-16 14:00',
				'2017-08-16 17:00',
				'2017-08-16 18:00',
				'2017-08-16 19:00',
				'2017-08-17 10:30',
				'2017-08-17 11:30',
				'2017-08-17 14:00',
				'2017-08-17 17:00',
				'2017-08-17 18:00',
				'2017-08-19 17:00',
				'2017-08-19 18:00',
				'2017-08-19 19:00',
				'2017-08-29 13:00',
				'2017-08-29 14:00',
				'2017-08-29 15:30',
				'2017-08-29 16:30',
				'2017-08-30 10:30',
				'2017-08-30 11:30',
				'2017-08-30 14:00',
				'2017-08-30 17:00',
				'2017-08-30 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:01'
			]
		},
		{
			id: 3,
			name: 'Елена',
			specialization: 'Косметолог',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'http://odomaine.fr/wp-content/uploads/2016/08/avatar-9.jpg',
			centerId: 1,
			services: [7, 11, 12, 13, 14],
			workHours: [
				'2017-08-22 09:00',
				'2017-08-23 10:30',
				'2017-08-26 11:30',
				'2017-08-28 14:00',
				'2017-08-28 17:00',
				'2017-08-30 18:00',
				'2017-08-30 19:00',
				'2017-09-15 09:00',
				'2017-09-15 10:30',
				'2017-09-15 11:30',
				'2017-09-15 14:00',
				'2017-09-15 17:00',
				'2017-09-15 18:00',
				'2017-09-15 19:00'
			]
		},
		{
			id: 4,
			name: 'Кристина',
			specialization: 'Ассистент',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'https://pbs.twimg.com/profile_images/581205794189889536/i3SBfJ5l_400x400.jpg',
			centerId: 1,
			services: [5, 8, 9, 10],
			workHours: [
				'2017-08-23 09:00',
				'2017-08-23 10:30',
				'2017-08-23 11:30',
				'2017-08-23 14:00',
				'2017-08-23 17:00',
				'2017-08-23 18:00',
				'2017-08-23 19:00',
				'2017-08-25 09:00',
				'2017-08-25 10:30',
				'2017-08-25 11:30',
				'2017-08-25 14:00',
				'2017-08-25 17:00',
				'2017-08-25 18:00',
				'2017-08-25 19:00',
				'2017-08-26 10:30',
				'2017-08-26 11:30',
				'2017-08-26 14:00',
				'2017-08-26 17:00',
				'2017-08-26 18:00',
				'2017-08-27 17:00',
				'2017-08-27 18:00',
				'2017-08-27 19:00',
				'2017-08-29 13:00',
				'2017-08-29 14:00',
				'2017-08-29 15:30',
				'2017-08-29 16:30',
				'2017-08-30 10:30',
				'2017-08-30 11:30',
				'2017-08-30 14:00',
				'2017-08-30 17:00',
				'2017-08-30 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:00'
			]
		},
		{
			id: 5,
			name: 'Виталий',
			specialization: 'Массажист',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'http://www.bolde.com/wp-content/uploads/2015/11/iStock_000045158786_Small-400x400.jpg',
			centerId: 0,
			services: [15, 16, 17, 18],
			workHours: [
				'2017-08-23 09:00',
				'2017-08-23 10:30',
				'2017-08-23 11:30',
				'2017-08-23 14:00',
				'2017-08-23 17:00',
				'2017-08-23 18:00',
				'2017-08-23 19:00',
				'2017-08-25 09:00',
				'2017-08-25 10:30',
				'2017-08-25 11:30',
				'2017-08-25 14:00',
				'2017-08-25 17:00',
				'2017-08-25 18:00',
				'2017-08-25 19:00',
				'2017-08-26 10:30',
				'2017-08-26 11:30',
				'2017-08-26 14:00',
				'2017-08-26 17:00',
				'2017-08-26 18:00',
				'2017-08-27 17:00',
				'2017-08-27 18:00',
				'2017-08-27 19:00',
				'2017-08-29 13:00',
				'2017-08-29 14:00',
				'2017-08-29 15:30',
				'2017-08-29 16:30',
				'2017-08-30 10:30',
				'2017-08-30 11:30',
				'2017-08-30 14:00',
				'2017-08-30 17:00',
				'2017-08-30 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:00'
			]
		},
		{
			id: 6,
			name: 'Мария',
			specialization: 'Стилист',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'http://www.bambinistudio.com.ua/images/product2/5_portrets.jpg',
			centerId: 2,
			services: [0, 2, 4, 5, 21, 9],
			workHours: [
				'2017-08-23 09:00',
				'2017-08-23 10:30',
				'2017-08-23 11:30',
				'2017-08-23 14:00',
				'2017-08-23 17:00',
				'2017-08-23 18:00',
				'2017-08-23 19:00',
				'2017-08-25 09:00',
				'2017-08-25 10:30',
				'2017-08-25 11:30',
				'2017-08-25 14:00',
				'2017-08-25 17:00',
				'2017-08-25 18:00',
				'2017-08-25 19:00',
				'2017-08-26 10:30',
				'2017-08-26 11:30',
				'2017-08-26 14:00',
				'2017-08-26 17:00',
				'2017-08-26 18:00',
				'2017-08-27 17:00',
				'2017-08-27 18:00',
				'2017-08-27 19:00',
				'2017-08-29 13:00',
				'2017-08-29 14:00',
				'2017-08-29 15:30',
				'2017-08-29 16:30',
				'2017-08-30 10:30',
				'2017-08-30 11:30',
				'2017-08-30 14:00',
				'2017-08-30 17:00',
				'2017-08-30 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:00'
			]
		},
		{
			id: 7,
			name: 'Дарья',
			specialization: 'Парикмахер',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			photo: 'https://pbs.twimg.com/profile_images/531070688191188992/YrbGE75-_400x400.jpeg',
			centerId: 2,
			services: [19, 20, 21, 22, 0, 1, 2, 3],
			workHours: [
				'2017-08-23 09:00',
				'2017-08-23 10:30',
				'2017-08-23 11:30',
				'2017-08-23 14:00',
				'2017-08-23 17:00',
				'2017-08-23 18:00',
				'2017-08-23 19:00',
				'2017-08-25 09:00',
				'2017-08-25 10:30',
				'2017-08-25 11:30',
				'2017-08-25 14:00',
				'2017-08-25 17:00',
				'2017-08-25 18:00',
				'2017-08-25 19:00',
				'2017-08-26 10:30',
				'2017-08-26 11:30',
				'2017-08-26 14:00',
				'2017-08-26 17:00',
				'2017-08-26 18:00',
				'2017-08-27 17:00',
				'2017-08-27 18:00',
				'2017-08-27 19:00',
				'2017-08-29 13:00',
				'2017-08-29 14:00',
				'2017-08-29 15:30',
				'2017-08-29 16:30',
				'2017-08-30 10:30',
				'2017-08-30 11:30',
				'2017-08-30 14:00',
				'2017-08-30 17:00',
				'2017-08-30 18:00',
				'2017-09-02 12:00',
				'2017-09-02 13:00',
				'2017-09-03 13:00',
				'2017-09-03 18:00'
			]
		}
	],
	mainServices: [
		{
			id: 0,
			title: 'HAIR'
		},
		{
			id: 1,
			title: 'MAKE UP'
		},
		{
			id: 2,
			title: 'NAILS'
		},
		{
			id: 3,
			title: 'FACE'
		},
		{
			id: 4,
			title: 'BODY'
		},
		{
			id: 5,
			title: 'BARBER'
		},
		{
			id: 6,
			title: 'WEDDING'
		}
	],
	services: [
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
			time: 0.20,
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
};

DBMock.getCenters = function() {
	return this.centers;
};

DBMock.getEmployees = function(centerId, serviceId) {
	if (serviceId || serviceId === 0) {
		return this.employees.filter(employee => {
			for (let service of employee.services) {
				if (service === serviceId && employee.centerId === centerId) return true;
			}
			return false;
		});
	} else {
		return this.employees.filter(employee => employee.centerId === centerId);
	}
};

DBMock.getMainServices = function(centerId, employeeId) {
	if (employeeId || employeeId === 0) {
		let employeeServices = this.employees.filter(employee => employee.id === employeeId)[0].services;
		employeeServices = this.services.filter(serviceToCompare => {
			for (let service of employeeServices) {
				if (service === serviceToCompare.id) return true;
			}
			return false;
		});
		return this.mainServices.filter(mainService => {
			for (let service of employeeServices) {
				if (service.mainServiceId === mainService.id) return true;
			}
			return false;
		});
	} else {
		let employeeServices = [];
		for (let employee of this.employees) {
			if (employee.centerId === centerId) {
				employeeServices = employeeServices.concat(employee.services);
			}
		}
		employeeServices = this.services.filter(serviceToCompare => {
			for (let service of employeeServices) {
				if (service === serviceToCompare.id) return true;
			}
			return false;
		});
		return this.mainServices.filter(mainService => {
			for (let service of employeeServices) {
				if (service.mainServiceId === mainService.id) return true;
			}
			return false;
		});
	}
};

DBMock.getServices = function(centerId, employeeId) {
	if (employeeId || employeeId === 0) {
		let employeeServices = this.employees.filter(employee => employee.id === employeeId)[0].services;
		return this.services.filter(serviceToCompare => {
			for (let service of employeeServices) {
				if (service === serviceToCompare.id) return true;
			}
			return false;
		});
	} else {
		let employeeServices = [];
		for (let employee of this.employees) {
			if (employee.centerId === centerId) {
				employeeServices = employeeServices.concat(employee.services);
			}
		}
		return this.services.filter(serviceToCompare => {
			for (let service of employeeServices) {
				if (service === serviceToCompare.id) return true;
			}
			return false;
		});
	}
};

DBMock.getWorkHours = function(centerId, serviceId, employeeId) {
	if (employeeId || employeeId === 0) {
		return this.employees.filter(employee => employee.id === employeeId)[0].workHours;
	} else {
		let employees = this.employees.filter(employee => {
			for (let service of employee.services) {
				if (service === serviceId && employee.centerId === centerId) return true;
			}
			return false;
		});
		let commonWorkHours = [];
		for (let employee of employees) {
			for (let workHour of employee.workHours) {
				let duplicateWorkHours = false;
				for (let existentWorkHour of commonWorkHours) {
					if (existentWorkHour === workHour) duplicateWorkHours = true;
				}
				if (!duplicateWorkHours) {
					commonWorkHours.push(workHour);
				};
			}
		}
		return commonWorkHours;
	}
};

export default DBMock;
window.DBMock = DBMock;