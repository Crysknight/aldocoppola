import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Service from '../components/service';

import SVGArrowLeft from '../components/svg-arrow-left';

import { pathsMethods } from '../reducers/paths';
import { mainServicesMethods} from '../reducers/mainServices';

class ChooseServices extends Component {

	// constructor(props) {
		// super(props);

	// }

	componentWillMount() {
		this.props.loadServices();
	}

	getMainService() {
		let paths = this.props.paths;
		let mainServices = this.props.mainServices;
		let regExp = new RegExp(paths.ChooseServices.pathString + 'service([\\w|\\d]*)\\/');
		let id = +this.props.match.path.replace(regExp, '$1');
		return mainServicesMethods.findMainServiceById(mainServices, id);
	}

	chooseService(id) {
		this.props.chooseService(id);
	}

	renderServices() {
		return this.props.services.map((service, index) => {
			return (
				<Service
					key={index}
					service={service}
					chooseService={() => this.chooseService(service.id)}
				/>
			);
		});
	}

	render() {
		let paths = this.props.paths;
		let mainService = this.getMainService();
		return (
			<div id="choose_services">
				<Header title={mainService.title}>
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.ChooseServices)}
						className="back-link"
					><SVGArrowLeft /></Link>
				</Header>
				{this.renderServices()}
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