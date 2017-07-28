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

	// constructor(props) {
		// super(props);

	// }

	componentWillMount() {
		this.props.loadMainServices();
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
		return (
			<div id="choose_main_services">
				<Header title="Выбрать услуги">
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.__app)}
						className="back-link"
					><SVGArrowLeft /></Link>
				</Header>
				<Content>{this.renderServices()}</Content>
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
		mainServices: state.mainServices,
		services: state.services
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadMainServices: actions.loadMainServices
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseMainServices);