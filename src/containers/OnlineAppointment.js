import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import Header from '../components/header';

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
					className="main-link"
				>Изменить центр красоты</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseEmployee)}`}
					className="main-link"
				>Выбрать сотрудника</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseServices)}`}
					className="main-link"
				>Выбрать услуги</Link>
				<Link 
					to={`${paths.getPath(this.props.match.path, paths.ChooseDateTime)}`}
					className="main-link"
				>Выбрать дату и время</Link>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OnlineAppointment);