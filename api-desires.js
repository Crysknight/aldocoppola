
/* =================================================================================================== */
/* < Получение центров красоты > */
/* =================================================================================================== */

// Метод запроса: GET
// Получаемые данные:

const Centers = [
	{

		// Уникальный ID центра. Тип данных не важен
		id: 0,

		name: 'Времена года',

		city: 'Москва',

		address: 'Москва, Кутузовский проспект, д. 48, Галереи "Времена года", 3 этаж',

		// Ближайшая сессия
		nearestSession: '12 июля, 10:00',

		// Количество активных специалистов
		specialistsQuantity: '6 человек',

		// Координаты для отображения на карте
		coordinates: {
			lat: 55.722868, 
			long: 37.626549
		}

	},
	{
		id: 1,
		name: 'Септа Бейлора',
		city: 'Королевская Гавань',
		address: 'Вестерос, Королевская гавань, площадь Септы Бейлора',
		nearestSession: 'Центр закрыт',
		specialistsQuantity: 'Было много',
		coordinates: {
			lat: 55.722867, 
			long: 37.626548
		}
	}
];

/* =================================================================================================== */
/* < Получение списка сотрудников > */
/* =================================================================================================== */

// Метод запроса: POST
// Отправляемые данные:

const EmployeesRequest = {

	// Уникальный ID центра. Тип данных не важен
	centerId: 1

};

// Получаемые данные:

const Employees = [
	{

		// Уникальный ID сотрудника
		id: 0,

		name: 'Анастасия',

		// Специализация, должность
		specialization: 'Топ-стилист',

		// Описание для подробного экрана
		description: `
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
			It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		`,

		// Ссылка на фото (желательно с абсолютным путем)
		photo: 'http://1wayit.com/wp-content/uploads/2016/11/avatar1.png'

	},
	{
		id: 1,
		name: 'Агафья',
		specialization: 'Ассистент',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		photo: ''
	}
];