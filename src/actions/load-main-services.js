import { GOT_MAIN_SERVICES } from './types';

export default () => dispatch => {
	setTimeout(() => {
		dispatch({ type: GOT_MAIN_SERVICES, payload: 
			[
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
			]
		});
	}, 100);
};