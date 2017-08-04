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
import SVGCheckboxDelete from '../components/svg-checkbox-delete';
import SVGCheckboxChecked from '../components/svg-checkbox-checked';

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
			this.props.cancelNewAppointment(false, lastAppointment);
		}
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths._app));
	}

	deleteAppointment() {
		let paths = this.props.paths;
		let numberOfTheNewOne = 0;
		for (let i = 0; i < this.props.appointments.length; i++) {
			numberOfTheNewOne = i;
		}
		this.props.deleteAppointment(this.props.appointment, numberOfTheNewOne);
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths._app));
	}

	confirmAppointmentEdit() {
		let paths = this.props.paths;
		let numberOfTheNewOne = 0;
		for (let i = 0; i < this.props.appointments.length; i++) {
			numberOfTheNewOne = i + 1;
		}
		this.props.confirmAppointmentEdit(this.props.appointment, numberOfTheNewOne);
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths._app));	
	}

	render() {
		let props = this.props;
		let paths = props.paths;
		let appointment = props.appointment;
		let appointments = props.appointments;
		let FooterContent = null;
		let HeaderContent = null;

		if (appointment.edited === false || (appointment.edited === true && (!appointment.servicesChosen || !appointment.dateTimeChosen))) {
			FooterContent = (
				<Footer className="coal">
					<div
						onClick={() => this.deleteAppointment()}
						className="footer-link"
					><SVGCheckboxDelete />Удалить запись {appointment.number + 1}</div>
				</Footer>
			);
		} else if (appointment.edited === true && appointment.servicesChosen && appointment.dateTimeChosen) {
			FooterContent = (
				<Footer className="cherry">
					<div
						onClick={() => this.confirmAppointmentEdit()}
						className="footer-link"
					><SVGCheckboxChecked />Изменить запись {appointment.number + 1}</div>
				</Footer>
			);
		} else if (appointment.servicesChosen && appointment.dateTimeChosen && appointments.length > 0) {
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

		if (appointment.edited === false || appointment.edited === true) {
			HeaderContent = (
				<div
					onClick={() => this.props.history.goBack()}
					className="back-link"
				><SVGArrowLeft /></div>
			);
		} else if (appointments.length > 0) {
			HeaderContent = (
				<div
					onClick={() => this.cancelNewAppointment()}
					className="back-link"
				><SVGArrowLeft /></div>
			);
		}

		return (
			<div id="online_appointment">
				<Header title="Онлайн запись">
					{HeaderContent}
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
		cancelNewAppointment: actions.cancelNewAppointment,
		deleteAppointment: actions.deleteAppointment,
		confirmAppointmentEdit: actions.confirmAppointmentEdit
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OnlineAppointment);