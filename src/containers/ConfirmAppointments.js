import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGCheckboxChecked from '../components/svg-checkbox-checked';

import { pathsMethods } from '../reducers/paths';

class ConfirmAppointments extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			number: null
		};
	}

	getAppointments() {
		let paths = this.props.paths;
		this.props.appointments.map((appointment, index) => {
			return (
				<Link 
					key={index} 
					to={pathsMethods.getPath(paths, this.props.match.path, paths.ViewAppointment)}
					search={`?appointment=${appointment.number}`}
					className="appointment"
				>
					<span className="title">Детали записи {appointment.number + 1}</span>
					<span className="info">{appointment.dateTimeChosen.dateString}</span>
				</Link>
			);
		});
	}

	handleForm(e) {
		e.preventDefault();
	}

	handleChange(e) {
		if (e.target.id.slice(6) === 'name') {
			this.setState({
				name: e.target.value
			})
		} else {
			this.setState({
				number: e.target.value
			})
		}
	}

	apply() {
		let paths = this.props.paths;
		this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths.ThankYou));
	}

	render() {
		return (
			<div id="confirm_appointments">
				<Header>
					<div
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>
					<div className="appointments-details">
						{this.getAppointments()}
					</div>
					<div className="appliance-form">
						<form onSubmit={(e) => this.handleForm(e)}>
							<input type="text" id="input_name" placeholder="Ваше имя" onChange={(e) => this.handleChange(e)} />
							<label className="input-number">Номер телефона</label>
							<input type="number" id="input_number" placeholder="84996669966" onChange={(e) => this.handleChange(e)} />
						</form>
					</div>
				</Content>
				{this.state.name && this.state.number && (
					<Footer className="cherry">
						<div 
							onClick={() => this.apply()}
							className="footer-link"
						><SVGCheckboxChecked />Записаться</div>
					</Footer>
				)}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ConfirmAppointments);