import moment from 'moment';
import 'moment/locale/ru';

const getCalendar = (numberOfMonths) => {

	const calendar = [];

	for (let i = moment().month(); i < (moment().month() + numberOfMonths); i++) {

		let number = i % 12;
		let year = i < 12 ? moment().year() : moment().year() + 1;
		let name = moment([year, number]).format('MMMM');
		name = name.charAt(0).toUpperCase() + name.slice(1);
		let days = [];
		let numberOfDays = moment([year, number]).daysInMonth();
		for (let j = 1; j <= numberOfDays; j++) {
			let dayOfWeek = +moment([year, number, j]).format('d') - 1;
			let day = moment([year, number, j]);
			let today = moment([moment().year(), moment().month(), moment().date()]);
			days.push({
				date: j,
				dayOfWeek: dayOfWeek === -1 ? 6 : dayOfWeek,
				past: moment(today).isAfter(day)
			});
		}
		calendar.push({
			number,
			name,
			year,
			days
		});

	}

	return calendar;

}

window.moment = moment;

export default (state = getCalendar(8), action) => {
	return state;
};