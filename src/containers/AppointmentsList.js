import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGArrowRight from '../components/svg-arrow-right';
import SVGCheckboxChecked from '../components/svg-checkbox-checked';
import SVGCheckboxPlus from '../components/svg-checkbox-plus';

import { pathsMethods } from '../reducers/paths';

class AppointmentsList extends Component {

	editAppointment(appointmentToEdit) {
		let paths = this.props.paths;
		this.props.editAppointment(appointmentToEdit);
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths.EditAppointment));
	}

	getAppointments() {
		return this.props.appointments.map((appointment, index) => {
			return (
				<div 
					key={index}
					className="main-link chosen"
					onClick={() => this.editAppointment(appointment)}
				>
					<span className="title">Запись {appointment.number + 1}</span>
					<span className="info-text">{appointment.dateTimeChosen.dateString}</span>
					<SVGArrowRight />
				</div>
			);
		});
	}

	render() {
		let props = this.props;
		let paths = props.paths;
		let appointments = props.appointments;
		return (
			<div id="appointments_list">
				<Header title="Онлайн запись">
					{props.appointments.length > 0 && (
						<div
							onClick={() => this.cancelNewAppointment()}
							className="back-link"
						><SVGArrowLeft /></div>
					)}
				</Header>
				<Content className="bg-white">
					<div className="bg-white">
						<Link 
							to={pathsMethods.getPath(paths, props.match.path, paths.ChooseCenter)}
							className="main-link chosen"
						>
							<span className="title">Изменить центр красоты</span>
							<span className="info-text">{appointments[0].centerChosen.name}</span>
							<span className="info-text">В случае изменения салона все записи удалятся</span>
							<SVGArrowRight />
						</Link>
					</div>
					{this.getAppointments()}
				</Content>
				<Footer className="coal">
					<Link
						to={pathsMethods.getPath(paths, props.match.path, paths.ConfirmAppointments)}
						className="footer-link double cherry"
					><SVGCheckboxChecked />Оформить визит</Link>
					<Link
						to={pathsMethods.getPath(paths, props.match.path, paths.AddAppointment)}
						className="footer-link double"
					><SVGCheckboxPlus />Добавить еще запись</Link>
				</Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		appointments: state.appointments,
		paths: state.paths
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		editAppointment: actions.editAppointment		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AppointmentsList);