import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGArrowLeftSlider from '../components/svg-arrow-left-slider';
import SVGArrowRightSlider from '../components/svg-arrow-right-slider';

import { pathsMethods } from '../reducers/paths';

class ChooseDateTime extends Component {

	getTopSlider() {
		return this.props.calendar.map((month, index) => {
			return (
				<div key={index} className="month">
					<span className="month-name">{month.name}</span>
					<span className="month-year">{month.year}</span>
				</div>
			);
		});
	}

	// Terrible workaround. Needed because react-slick doesn't have asNavFor implemented.
	// So, what's here happening is that first time the user scrolls the slider (which is possible
	// only through clicking on arrows. No additional methods possible) the ChooseDateTime object
	// receives two properties - the current slider scroll point, and the maximum point, calculated
	// from the total amount of slides. Then, on every click theese methods scroll both sliders and
	// manipulate the current slider scroll point property. They also don't work at the beginning and
	// the end of the sliders accordingly, and they freeze themselves for 300 ms, so that the slider
	// could catch up with the properties (without this feature the slider will get lost if the user
	// will click on arrow with high frequency. In order for this feature to work, the speed option
	// of the sliders should be lesser than 300 or whatever you are freezing them for)
	slidersNext() {
		if (!this.sliderFreeze) {
			if (!this.sliderScrollMax) {
				this.sliderScrollMax = this.topSlider.props.children.length - 1;
				this.sliderScroll = 0;
			}
			if (this.sliderScroll < this.sliderScrollMax) {
				this.topSlider.slickNext();
				this.bottomSlider.slickNext();
				this.sliderScroll++;
				this.sliderFreeze = true;
				setTimeout(() => this.sliderFreeze = false, 300);
			}
		}
	}

	slidersPrev() {
		if (!this.sliderFreeze) {
			if (!this.sliderScrollMax) {
				this.sliderScrollMax = this.topSlider.props.children.length - 1;
				this.sliderScroll = 0;
			}
			if (this.sliderScroll > 0) {
				this.topSlider.slickPrev();
				this.bottomSlider.slickPrev();
				this.sliderScroll--;
				this.sliderFreeze = true;
				setTimeout(() => this.sliderFreeze = false, 300);
			}
		}
	}

	chooseDate(month, date) {
		let paths = this.props.paths;
		this.props.chooseDate(month, date);
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths.ChooseDateTime.childPaths.CertainDate));
	}

	getBottomSlider() {
		let calendar = JSON.stringify(this.props.calendar);
		calendar = JSON.parse(calendar);
		return calendar.map((month, index) => {
			let firstDay = month.days[0].dayOfWeek;
			let slicedMonth = [];
			let week = 0;
			for (let i = firstDay; i > 0; i--) {
				month.days.unshift({ dayOfWeek: i - 1 });
			}
			for (let day of month.days) {
				slicedMonth[week] = slicedMonth[week] ? slicedMonth[week] : [];
				slicedMonth[week].push(day);
				if (day.dayOfWeek === 6) week++;
			}
			if (slicedMonth[week] && slicedMonth[week].length < 7) {
				let length = slicedMonth[week].length;
				for (let i = 0; i < (7 - length); i++) {
					slicedMonth[week].push({ dayOfWeek: (7 - length + i) });
				}
			}
			return (
				<div key={index} className="month">
					<table>
						<tbody>
							<tr>
								<td>ПН</td>
								<td>ВТ</td>
								<td>СР</td>
								<td>ЧТ</td>
								<td>ПТ</td>
								<td className="day5">СБ</td>
								<td className="day6">ВС</td>
							</tr>
							{slicedMonth.map((week, index) => {
								return (
									<tr key={index}>
										{week.map((day, index) => {
											let dayDisplay;
											if (!day.date) {
												dayDisplay = <td key={index}>{null}</td>;
											} else if (day.past) {
												dayDisplay = <td key={index} className="day past"><span>{day.date}</span></td>;
											} else if (!day.workHours) {
												dayDisplay = <td key={index} className={`day ${day.dayOfWeek}`}><span>{day.date}</span></td>;
											} else {
												dayDisplay = (
													<td
														onClick={() => this.chooseDate(month.number, day.date)}
														className={`day available ${day.dayOfWeek}`}
														key={index}
													>
														<span>{day.date}</span>
													</td>
												);
											}
											return dayDisplay;
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		});
	}

	render() {
		const settingsTopSlider = {
			className: 'top-slider',
			speed: 250,
			infinite: false,
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			swipeToSlide: false,
			draggable: false
		};
		const settingsBottomSlider = {
			className: 'bottom-slider',
			speed: 250,
			infinite: false,
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: false,
			swipeToSlide: false,
			draggable: false
		};
		return (
			<div id="choose_date_time">
				<Header title="Выбрать дату">
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<div className="slider-arrows">
					<div onClick={() => this.slidersPrev()}><SVGArrowLeftSlider /></div>
					<div onClick={() => this.slidersNext()}><SVGArrowRightSlider /></div>
				</div>
				<Slider ref={slider => this.topSlider = slider} { ...settingsTopSlider }>
					{this.getTopSlider()}
				</Slider>
				<Slider ref={slider => this.bottomSlider = slider} { ...settingsBottomSlider }>
					{this.getBottomSlider()}
				</Slider>
				<Content>
					<div>
						<span className="appointment-available">Запись доступна</span>
						<span className="appointment-unavailable">Запись недоступна</span>
					</div>
				</Content>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		calendar: state.calendar
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		chooseDate: actions.chooseDate
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseDateTime);