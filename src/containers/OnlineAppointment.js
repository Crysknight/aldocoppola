import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import SVGLock from '../components/svg-lock';
import SVGArrowRight from '../components/svg-arrow-right';
import SVGArrowLeft from '../components/svg-arrow-left';

import { pathsMethods } from '../reducers/paths';

class OnlineAppointment extends Component {

	addAppointment() {
		let paths = this.props.paths;
		this.props.addAppointment(this.props.appointment);
		if (this.props.appointments.length === 0) {
			this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths.AddAppointment));
		} else {
			this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths._app));
		}
	}

	cancelNewAppointment() {
		let paths = this.props.paths;
		let appointments = JSON.stringify(this.props.appointments);
		appointments = JSON.parse(appointments);
		let lastAppointment = appointments.pop();
		if (appointments.length === 0) {
			this.props.cancelNewAppointment(true, lastAppointment);
		} else {
			this.props.cancelNewAppointment(false);
		}
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths._app));
	}

	render() {
		let props = this.props;
		let paths = props.paths;
		let appointment = props.appointment;
		let appointments = props.appointments;
		let FooterContent = null;
		if (appointment.servicesChosen && appointment.dateTimeChosen && appointments.length > 0) {
			FooterContent = (
				<Footer className="cherry">
					<div
						onClick={() => this.addAppointment()}
						className="footer-link"
					>Добавить запись {appointment.number + 1}</div>
				</Footer>
			);
		} else if (appointments.length > 0) {
			FooterContent = (
				<Footer className="coal">
					<div
						onClick={() => this.cancelNewAppointment()}
						className="footer-link"
					>Отменить добавление новой записи</div>
				</Footer>
			);
		}	else if (appointment.centerChosen && appointment.servicesChosen && appointment.dateTimeChosen) {
			FooterContent = (
				<Footer className="coal">
					<div
						onClick={() => this.addAppointment()}
						className="footer-link"
					>Добавить еще запись</div>
				</Footer>
			);
		} else {
			FooterContent = (
				<Footer className="coal">
					<Link 
						to={pathsMethods.getPath(paths, props.match.path, paths.MyAccount)}
						className="footer-link"
					><SVGLock />Личный кабинет</Link>
				</Footer>
			);
		}
		return (
			<div id="online_appointment">
				<Header title="Онлайн запись">
					{props.appointments.length > 0 && (
						<div
							onClick={() => this.cancelNewAppointment()}
							className="back-link"
						><SVGArrowLeft /></div>
					)}
				</Header>
				<Content>
					{props.appointments.length > 0 && (
						<h3>Запись {appointment.number + 1}</h3>
					)}
					{props.appointments.length === 0 && (
						<Link 
							to={pathsMethods.getPath(paths, props.match.path, paths.ChooseCenter)}
							className="main-link chosen"
						>
							<span className="title">Изменить центр красоты</span>
							<span className="info-text">{appointment.centerChosen.name}</span>
							<SVGArrowRight />
						</Link>
					)}
					<Link 
						to={pathsMethods.getPath(paths, props.match.path, paths.ChooseEmployee)}
						className={`main-link${appointment.employeeChosen ? ' chosen' : ''}`}
					>
						<span className="title">{appointment.employeeChosen ? 'Изменить' : 'Выбрать'} сотрудника</span>
						{appointment.employeeChosen && (
							<span className="info-text">{appointment.employeeChosen.name}</span>
						)}
						<SVGArrowRight />
					</Link>
					<Link 
						to={pathsMethods.getPath(paths, props.match.path, paths.ChooseServices)}
						className={`main-link services${appointment.servicesChosen ? ' chosen' : ''}`}
					>
						<span className="title">{appointment.servicesChosen ? 'Изменить' : 'Выбрать'} услуги</span>
						{appointment.servicesChosen && appointment.servicesChosen.map((service, index) => {
							return (
								<span key={index} className="info-text">{service.title}</span>
							);
						})}
						<SVGArrowRight />
					</Link>
					{appointment.servicesChosen ? (
						<Link
							to={pathsMethods.getPath(paths, props.match.path, paths.ChooseDateTime)}
							className={`main-link${appointment.dateTimeChosen ? ' chosen' : ''}`}
						>
							<span className="title">{appointment.dateTimeChosen ? 'Изменить' : 'Выбрать'} дату и время</span>
							{appointment.dateTimeChosen && (
								<span className="info-text">{`${appointment.dateTimeChosen.dateString}`}</span>
							)}
							<SVGArrowRight />
						</Link>
					) : (
						<div className="main-link disabled">
							<span className="title">Выбрать дату и время</span>
						</div>
					)}
				</Content>
				{FooterContent}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		appointment: state.appointment,
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		addAppointment: actions.addAppointment,
		cancelNewAppointment: actions.cancelNewAppointment
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OnlineAppointment);