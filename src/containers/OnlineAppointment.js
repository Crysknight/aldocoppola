import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import Header from '../components/header';
import Footer from '../components/footer';

class OnlineAppointment extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		let paths = this.props.paths;
		return (
			<div id="online_appointment">
				<Header title="Онлайн запись" />
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseCenter)}`}
					className="main-link chosen"
				>
					<span className="title">Изменить центр красоты</span>
					<span className="info-text">{this.props.appointment.centerChosen.name}</span>
				</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseEmployee)}`}
					className="main-link"
				>
					<span className="title">Выбрать сотрудника</span>
				</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseServices)}`}
					className="main-link"
				>
					<span className="title">Выбрать услуги</span>
				</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseDateTime)}`}
					className="main-link"
				>
					<span className="title">Выбрать дату и время</span>
				</Link>
				<Footer className="coal">
					<Link 
						to={`${paths.getPath(this.props.match.path, paths.MyAccount)}`}
						className="footer-link my-account-link"
					>Личный кабинет</Link>
				</Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		appointment: state.appointment
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OnlineAppointment);