import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// import actions from '../actions';

import Header from '../components/header';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGArrowRight from '../components/svg-arrow-left';

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

	getBottomSlider() {
		return this.props.calendar.map((month, index) => {
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
								<td>СБ</td>
								<td>ВС</td>
							</tr>
							{slicedMonth.map((week, index) => {
								return (
									<tr key={index}>
										{week.map((day, index) => {
											return (
												<td className={`day${day.dayOfWeek}`} key={index}>
													{day.date ? day.date : ''}
												</td>
											);
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
		let paths = this.props.paths;
		const settingsTopSlider = {
			className: 'top-slider',
			speed: 300,
			infinite: false,
			focusOnSelect: true,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			swipeToSlide: false,
			draggable: false
		};
		const settingsBottomSlider = {
			className: 'bottom-slider',
			speed: 300,
			infinite: false,
			slidesToShow: 1,
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
				<SVGArrowLeft />
				<SVGArrowRight />
				<Slider ref={slider => this.topSlider = slider} { ...settingsTopSlider }>
					{this.getTopSlider()}
				</Slider>
				<Slider ref={slider => this.bottomSlider = slider} { ...settingsBottomSlider }>
					{this.getBottomSlider()}
				</Slider>
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
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseDateTime);