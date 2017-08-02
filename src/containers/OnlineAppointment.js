import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
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
				<Content>
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
						className={`main-link services${props.appointment.servicesChosen ? ' chosen' : ''}`}
					>
						<span className="title">{props.appointment.servicesChosen ? 'Изменить' : 'Выбрать'} услуги</span>
						{props.appointment.servicesChosen && props.appointment.servicesChosen.map((service, index) => {
							return (
								<span key={index} className="info-text">{service.title}</span>
							);
						})}
						<SVGArrowRight />
					</Link>
					<Link 
						to={pathsMethods.getPath(paths, props.match.path, paths.ChooseDateTime)}
						className={`main-link ${props.appointment.dateTimeChosen ? ' chosen' : ''}`}
					>
						<span className="title">{props.appointment.dateTimeChosen ? 'Изменить' : 'Выбрать'} дату и время</span>
						{props.appointment.dateTimeChosen && (
							<span className="info-text">{`${props.appointment.dateTimeChosen.dateString}`}</span>
						)}
						<SVGArrowRight />
					</Link>
				</Content>
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