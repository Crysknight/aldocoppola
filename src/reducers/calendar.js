import moment from 'moment';
import 'moment/locale/ru';

import { CHOOSE_EMPLOYEE, CHOOSE_DATE, CHOOSE_TIME } from '../actions/types';

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
			let dayOfWeekName = moment([year, number, j]).format('dddd');
			dayOfWeekName = dayOfWeekName.charAt(0).toUpperCase() + dayOfWeekName.slice(1);
			let day = moment([year, number, j]);
			let today = moment([moment().year(), moment().month(), moment().date()]);
			days.push({
				date: j,
				dayOfWeek: dayOfWeek === -1 ? 6 : dayOfWeek,
				dayOfWeekName,
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
	switch (action.type) {
		case CHOOSE_EMPLOYEE: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let workHour of action.payload.workHoursFree) {
				workHour = moment(workHour, 'YYYY-MM-DD hh:mm');
				let month = workHour.month();
				let date = workHour.date();
				for (let calendarMonth of newState) {
					if (calendarMonth.number === month) {
						for (let calendarDate of calendarMonth.days) {
							if (calendarDate.date === date) {
								calendarDate.workHours = calendarDate.workHours ? calendarDate.workHours : {};
								let morningBorder = workHour.clone().hour(12).minute(0);
								let dayBorder = workHour.clone().hour(18).minute(0);
								if (workHour.isSameOrBefore(morningBorder)) {
									calendarDate.workHours["Утро"] = calendarDate.workHours["Утро"] ? calendarDate.workHours["Утро"] : [];
									calendarDate.workHours["Утро"].push(workHour.format('HH:mm'));
								} else if (workHour.isSameOrBefore(dayBorder)) {
									calendarDate.workHours["День"] = calendarDate.workHours["День"] ? calendarDate.workHours["День"] : [];
									calendarDate.workHours["День"].push(workHour.format('HH:mm'));
								} else {
									calendarDate.workHours["Вечер"] = calendarDate.workHours["Вечер"] ? calendarDate.workHours["Вечер"] : [];
									calendarDate.workHours["Вечер"].push(workHour.format('HH:mm'));
								}
								// calendarDate.workHours.push(workHour.format('HH:mm'));
							}
						}
					}
				}
			}
			return newState;
		}
		case CHOOSE_DATE: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			let month = action.payload.month;
			let date = action.payload.date;
			for (let calendarMonth of newState) {
				calendarMonth.chosen = calendarMonth.chosen ? false : calendarMonth.chosen;
				for (let calendarDate of calendarMonth.days) {
					calendarDate.chosen = calendarDate.chosen ? false : calendarDate.chosen;
					calendarDate.timeChosen = calendarDate.timeChosen ? null : calendarDate.timeChosen;
				}
				if (calendarMonth.number === month) {
					calendarMonth.chosen = true;
					for (let calendarDate of calendarMonth.days) {
						if (calendarDate.date === date) {
							calendarDate.chosen = true;
						}
					}
				}
			}
			return newState;
		}
		case CHOOSE_TIME: {
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			let month = action.payload.date.monthNumber;
			let date = action.payload.date.date;
			for (let calendarMonth of newState) {
				calendarMonth.chosen = calendarMonth.chosen ? false : calendarMonth.chosen;
				for (let calendarDate of calendarMonth.days) {
					calendarDate.chosen = calendarDate.chosen ? false : calendarDate.chosen;
					calendarDate.timeChosen = calendarDate.timeChosen ? null : calendarDate.timeChosen;
				}
				if (calendarMonth.number === month) {
					calendarMonth.chosen = true;
					for (let calendarDate of calendarMonth.days) {
						if (calendarDate.date === date) {
							calendarDate.chosen = true;
							calendarDate.timeChosen = action.payload.time;
						}
					}
				}
			}
			return newState;
		}
		default: {
			return state;
		}
	}
};