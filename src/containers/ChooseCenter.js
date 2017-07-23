import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Center from '../components/center';

class ChooseCenter extends Component {

	// constructor(props) {
		// super(props);

	// }

	componentWillMount() {
		this.props.loadCenters();
	}

	chooseCenter(id) {
		console.log(id);
	}

	renderCenters() {
		return this.props.centers.map((center, index) => {
			return (
				<Center
					key={index}
					center={center}
					chooseCenter={() => this.chooseCenter(center.id)}
				/>
			);
		});
	}

	render() {
		let paths = this.props.paths;
		return (
			<div id="choose_center">
				<Header title="Выбрать центр красоты" />
				{this.renderCenters()}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		centers: state.centers
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadCenters: actions.loadCenters
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseCenter);