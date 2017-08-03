import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import moment from 'moment';
import 'moment/locale/ru';

import actions from '../actions';

import Header from '../components/header';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGArrowLeftSlider from '../components/svg-arrow-left-slider';
import SVGArrowRightSlider from '../components/svg-arrow-right-slider';

import { pathsMethods } from '../reducers/paths';

class CertainDate extends Component {

	getTopSlider(availableDates) {
		return availableDates.map((date, index) => {
			return (
				<div key={index} className="date">
					<span className="date-month-name">{date.month}</span>
					<span className="date-date">{date.date}</span>
					<span className="date-name">{date.dayOfWeekName}</span>
				</div>
			);
		});
	}

	slidersNext(initSlide) {
		if (!this.sliderFreeze) {
			if (!this.sliderScrollMax) {
				this.sliderScrollMax = this.topSlider.props.children.length - 1;
				this.sliderScroll = initSlide;
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

	slidersPrev(initSlide) {
		if (!this.sliderFreeze) {
			if (!this.sliderScrollMax) {
				this.sliderScrollMax = this.topSlider.props.children.length - 1;
				this.sliderScroll = initSlide;
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

	confirmDateTime(date, time) {
		let paths = this.props.paths;
		date = moment([date.year, date.monthNumber, date.date, +time.slice(0, 2), +time.slice(3)]);
		this.props.confirmDateTime({
			date: date.format('YYYY-MM-DD HH:mm'),
			dateString: date.format('D MMMM YYYY в HH:mm')
		});
		if (this.props.appointments.length === 0) {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
		} else {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.AddAppointment));
		}
	}

	getBottomSlider(availableDates) {
		return availableDates.map((date, index) => {
			let segments = [];
			let i = 0;
			for (let segment in date.workHours) {
				segments.push((
					<div key={i} className="date-segment">
						<h3>{segment}</h3>
						<div className="times">
							{date.workHours[segment].map((time, index) => {
								return (
									<div 
										key={index} 
										className="time"
										onClick={() => this.confirmDateTime(date, time)}
									>{time}</div>
								);
							})}
						</div>
					</div>
				));
				i++;
			}
			return (
				<div key={index} className="date">
					{segments}
				</div>
			);
		});
	}

	render() {
		let availableDates = [];
		let chosenDateNumber;
		for (let month of this.props.calendar) {
			for (let date of month.days) {
				if (date.workHours) {
					availableDates.push({
						month: month.name,
						monthNumber: month.number,
						year: month.year,
						...date
					});
				}
			}
		}
		for (let i = 0; i < availableDates.length; i++) {
			if (availableDates[i].chosen) {
				chosenDateNumber = i;
			}
		}
		const settingsTopSlider = {
			className: 'top-slider',
			speed: 250,
			infinite: false,
			centerMode: true,
			centerPadding: '35px',
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: chosenDateNumber,
			arrows: false,
			swipeToSlide: false,
			draggable: false
		};
		const settingsBottomSlider = {
			className: 'bottom-slider',
			speed: 250,
			infinite: false,
			slidesToShow: 1,
			initialSlide: chosenDateNumber,
			arrows: false,
			swipeToSlide: false,
			draggable: false
		};
		return (
			<div id="certain_date">
				<Header title="Выбрать время">
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<div className="slider-arrows">
					<div onClick={() => this.slidersPrev(chosenDateNumber)}><SVGArrowLeftSlider /></div>
					<div onClick={() => this.slidersNext(chosenDateNumber)}><SVGArrowRightSlider /></div>
				</div>
				<Slider ref={slider => this.topSlider = slider} { ...settingsTopSlider }>
					{this.getTopSlider(availableDates)}
				</Slider>
				<Slider ref={slider => this.bottomSlider = slider} { ...settingsBottomSlider }>
					{this.getBottomSlider(availableDates)}
				</Slider>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		calendar: state.calendar,
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		chooseTime: actions.chooseTime,
		confirmDateTime: actions.confirmDateTime
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CertainDate);