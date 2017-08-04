import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import Service from '../components/service';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGCheckboxChecked from '../components/svg-checkbox-checked';

import { pathsMethods } from '../reducers/paths';
import { mainServicesMethods} from '../reducers/mainServices';

class ChooseServices extends Component {

	componentWillMount() {
		let employeeId = this.props.appointment.employeeChosen ? this.props.appointment.employeeChosen.id : null;
		employeeId = employeeId === -1 ? null : employeeId;
		this.props.loadServices(this.props.appointment.centerChosen.id, employeeId);
	}

	getMainService() {
		let paths = this.props.paths;
		let mainServices = this.props.mainServices;
		let regExp = new RegExp(
			pathsMethods.getPath(paths, this.props.match.path, paths.ChooseServices) + 
			'service([\\w|\\d]*)\\/'
		);
		let id = +this.props.match.path.replace(regExp, '$1');
		return mainServicesMethods.findMainServiceById(mainServices, id);
	}

	chooseService(id, single) {
		let paths = this.props.paths;
		this.props.chooseService(id, single);
		if (single) {
			this.props.history.push(pathsMethods.getPath(paths, this.props.match.path, paths.ChooseServices.childPaths.ConfirmServices));
		}
	}

	renderServices(mainServiceId) {
		let single = !(this.props.appointment.employeeChosen && this.props.appointment.employeeChosen.id !== -1);
		return this.props.services
			.filter(service => service.mainServiceId === mainServiceId)
			.map((service, index) => 
				{
					return (
						<Service
							key={index}
							single={single}
							service={service}
							chooseService={() => this.chooseService(service.id, single)}
						/>
					);
				}
			);
	}

	render() {
		let paths = this.props.paths;
		let mainService = this.getMainService();
		let servicesChecked = this.props.services.filter(service => service.checked).length;
		return (
			<div id="choose_services" className={servicesChecked ? 'has-services' : ''}>
				<Header title={mainService.title}>
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>{this.renderServices(mainService.id)}</Content>
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
		services: state.services,
		mainServices: state.mainServices,
		appointment: state.appointment
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadServices: actions.loadServices,
		chooseService: actions.chooseService
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseServices);