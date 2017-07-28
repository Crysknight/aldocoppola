import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import Service from '../components/service';

import SVGArrowLeft from '../components/svg-arrow-left';

import { pathsMethods } from '../reducers/paths';
import { servicesMethods } from '../reducers/services';

class SubmitServices extends Component {

	componentWillReceiveProps(nextProps) {
		let paths = nextProps.paths;
		if (nextProps.services.filter(service => service.checked).length === 0) {
			nextProps.history.push(pathsMethods.getPath(paths, nextProps.location.pathname, paths.ChooseServices));
			return null;
		}
	}

	chooseService(id) {
		this.props.chooseService(id);
	}

	renderServices() {
		return this.props.services.filter(service => service.checked).map((service, index) => {
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
		let summaryPrice = '104 044 RUB';
		let summaryTime = this.props.services.reduce((sum, current) => sum + current.time, 0);
		console.log(summaryTime);
		return (
			<div id="submit_services">
				<Header title="Выбранные услуги">
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>{this.renderServices()}</Content>
				<div id="services_summary">
					<div className="summary-price">
						<span className="label">Суммарная стоимость</span>
						<span>{summaryPrice}</span>
					</div>
					<div className="summary-time">
						<span className="label">Суммарное время</span>
						<span>{servicesMethods.getTimeString(summaryTime)}</span>
					</div>
				</div>
				<Footer className="coal"></Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		services: state.services
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		chooseService: actions.chooseService
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SubmitServices);