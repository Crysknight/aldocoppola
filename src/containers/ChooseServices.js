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

	// constructor(props) {
		// super(props);

	// }

	componentWillMount() {
		if (this.props.services.length === 0) {
			this.props.loadServices();
		}
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

	chooseService(id) {
		this.props.chooseService(id);
	}

	renderServices(mainServiceId) {
		return this.props.services
			.filter(service => service.mainServiceId === mainServiceId)
			.map((service, index) => 
				{
					return (
						<Service
							key={index}
							service={service}
							chooseService={() => this.chooseService(service.id)}
						/>
					);
				}
			);
	}

	render() {
		let paths = this.props.paths;
		let mainService = this.getMainService();
		return (
			<div id="choose_services">
				<Header title={mainService.title}>
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>{this.renderServices(mainService.id)}</Content>
				<Footer className="coal">
					{
						this.props.services.filter(service => service.checked).length > 0 ? (
								<Link
									to={pathsMethods.getPath(paths, this.props.match.path, paths.ChooseServices.childPaths.SubmitServices)}
									className="footer-link"
								><SVGCheckboxChecked />
									Просмотреть выбранные услуги ({this.props.services.filter(service => service.checked).length}) и подтвердить
								</Link>
						) : (
							null
						)
					}
				</Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		services: state.services,
		mainServices: state.mainServices
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadServices: actions.loadServices,
		chooseService: actions.chooseService
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseServices);