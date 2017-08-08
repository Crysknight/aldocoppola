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

import { pathsMethods } from '../reducers/paths';

class ChooseMainServices extends Component {

	componentWillMount() {
		let center = this.props.appointment.centerChosen.id;
		let employee = this.props.appointment.employeeChosen ? this.props.appointment.employeeChosen.id : null;
		employee = employee === -1 ? null : employee;
		this.props.loadMainServices(center, employee);
	}

	renderServices() {
		let paths = this.props.paths;
		return this.props.mainServices.map((service, index) => {
			return (
				<Link
					key={index}
					to={pathsMethods.getPath(
						paths,
						this.props.match.path,
						paths.ChooseServices.childPaths['service' + service.id]
					)}
					className="service-link"
				>
					<p>{service.title}</p>
					<SVGArrowRight />
				</Link>
			);
		});
	}

	render() {
		let paths = this.props.paths;
		let servicesChecked = this.props.services.filter(service => service.checked).length;
		return (
			<div id="choose_main_services" className={servicesChecked ? 'has-services' : ''}>
				<Header title="Выбрать услуги">
					<div
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>{this.renderServices()}</Content>
					{
						this.props.services.filter(service => service.checked).length > 0 ? (
							<Footer className="coal">
								<Link
									to={pathsMethods.getPath(paths, this.props.match.path, paths.ChooseServices.childPaths.ConfirmServices)}
									className="footer-link"
								><SVGCheckboxChecked />
									{this.props.appointment.employeeChosen && this.props.appointment.employeeChosen.id !== -1 ? 
										(
											<span>Просмотреть выбранные услуги ({servicesChecked}) и подтвердить</span>
										) : (
											<span>Просмотреть выбранную услугу и подтвердить</span>
										)
									}
								</Link>
							</Footer>
						) : (
							null
						)
					}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		mainServices: state.mainServices,
		services: state.services,
		appointment: state.appointment,
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadMainServices: actions.loadMainServices
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseMainServices);