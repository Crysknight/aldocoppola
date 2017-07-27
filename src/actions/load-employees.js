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
					photo: 'http://1wayit.com/wp-content/uploads/2016/11/avatar1.png'
				},
				{
					id: 1,
					name: 'Агафья',
					specialization: 'Ассистент',
					description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
					photo: 'http://1wayit.com/wp-content/uploads/2016/11/avatar1.png'
				}
			]
		});
	}, 100);
};