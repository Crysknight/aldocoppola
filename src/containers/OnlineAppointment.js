import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import actions from '../actions';

import Header from '../components/header';
import Footer from '../components/footer';

import SVGLock from '../components/svg-lock';
import SVGArrowRight from '../components/svg-arrow-right';

import { pathsMethods } from '../reducers/paths';

class OnlineAppointment extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		let props = this.props;
		let paths = props.paths;
		return (
			<div id="online_appointment">
				<Header title="Онлайн запись" />
				<Link 
					to={pathsMethods.getPath(paths, props.match.path, paths.ChooseCenter)}
					className="main-link chosen"
				>
					<span className="title">Изменить центр красоты</span>
					<span className="info-text">{props.appointment.centerChosen.name}</span>
					<SVGArrowRight />
				</Link>
				<Link 
					to={pathsMethods.getPath(paths, props.match.path, paths.ChooseEmployee)}
					className={`main-link${props.appointment.employeeChosen ? ' chosen' : ''}`}
				>
					<span className="title">{props.appointment.employeeChosen ? 'Изменить' : 'Выбрать'} сотрудника</span>
					{props.appointment.employeeChosen && (
						<span className="info-text">{props.appointment.employeeChosen.name}</span>
					)}
					<SVGArrowRight />
				</Link>
				<Link 
					to={pathsMethods.getPath(paths, props.match.path, paths.ChooseServices)}
					className="main-link"
				>
					<span className="title">Выбрать услуги</span>
					<SVGArrowRight />
				</Link>
				<Link 
					to={pathsMethods.getPath(paths, props.match.path, paths.ChooseDateTime)}
					className="main-link"
				>
					<span className="title">Выбрать дату и время</span>
					<SVGArrowRight />
				</Link>
				<Footer className="coal">
					<Link 
						to={pathsMethods.getPath(paths, props.match.path, paths.MyAccount)}
						className="footer-link my-account-link"
					><SVGLock />Личный кабинет</Link>
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