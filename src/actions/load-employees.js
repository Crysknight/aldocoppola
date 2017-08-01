import { GOT_EMPLOYEES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_EMPLOYEES, payload: 
			[
				{
					id: 0,
					name: 'Анастасия',
					specialization: 'Топ-стилист',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'https://a.svbtleusercontent.com/8jbnG5tOpWbQtORZrleXxtka3eck_large.jpg'
				},
				{
					id: 1,
					name: 'Мария',
					specialization: 'Визажист',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'https://www.southtampadentaloffice.com/images/services/tooth-colored-fillings.jpg'
				},
				{
					id: 2,
					name: 'Ксения',
					specialization: 'Мастер маникюра',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'http://www.comprehensivedentistry.com.au/wp-content/uploads/2015/04/preventive-dentistries1.jpg?x71121'
				},
				{
					id: 3,
					name: 'Елена',
					specialization: 'Косметолог',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'http://odomaine.fr/wp-content/uploads/2016/08/avatar-9.jpg'
				},
				{
					id: 4,
					name: 'Кристина',
					specialization: 'Ассистент',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'https://pbs.twimg.com/profile_images/581205794189889536/i3SBfJ5l_400x400.jpg'
				},
				{
					id: 5,
					name: 'Виталий',
					specialization: 'Массажист',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'http://www.bolde.com/wp-content/uploads/2015/11/iStock_000045158786_Small-400x400.jpg'
				},
				{
					id: 6,
					name: 'Мария',
					specialization: 'Стилист',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'http://www.bambinistudio.com.ua/images/product2/5_portrets.jpg'
				},
				{
					id: 7,
					name: 'Дарья',
					specialization: 'Парикмахер',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'https://pbs.twimg.com/profile_images/531070688191188992/YrbGE75-_400x400.jpeg'
				}
			]
		});
	}, 100);
};