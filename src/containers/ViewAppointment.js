import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';

import Header from '../components/header';
import Content from '../components/content';
import Service from '../components/service';

import SVGArrowLeft from '../components/svg-arrow-left';

class ViewAppointment extends Component {

	render() {
		let appointment;
		for (let appointmentFromTheList of this.props.appointments) {
			if (appointmentFromTheList.number === +this.props.location.search.replace(/\?appointment=/, '')) {
				appointment = appointmentFromTheList;
			}
		}
		return (
			<div id="view_appointment">
				<Header title={`Детали записи ${this.props.location.search.replace(/\?appointment=/, '')}`}>
					<div
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>
					<h3>Услуги:</h3>
					{appointment.servicesChosen.map((service, index) => {
						return (
							<Service 
								key={index} 
								service={service}
								inform={true}
							/>
						);
					})}
					<h3>Центр красоты:</h3>
					<div className="ac-service single">
						<div className="service-info">
							<p className="service-title">{appointment.centerChosen.name}</p>
							<p className="service-time">{appointment.centerChosen.address}</p>
						</div>
					</div>
					<h3>Сотрудник:</h3>
					<div className="ac-service single">
						<div className="service-info">
							<p className="service-title">{appointment.employeeChosen.name}</p>
							<p className="service-time">{appointment.employeeChosen.specialization}</p>
						</div>
					</div>
					<h3>Дата и время:</h3>
					<div className="ac-service single">
						<div className="service-info">
							<p className="service-title">{appointment.dateTimeChosen.dateString}</p>
							<p className="service-time">
								{moment(appointment.dateTimeChosen.date, 'YYYY-MM-DD HH:mm').format('dddd')}
							</p>
						</div>
					</div>
				</Content>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ViewAppointment);