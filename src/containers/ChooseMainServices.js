import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGArrowRight from '../components/svg-arrow-right';

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
				{this.renderServices()}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		mainServices: state.mainServices
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadMainServices: actions.loadMainServices
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseMainServices);