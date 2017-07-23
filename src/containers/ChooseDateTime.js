import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import Header from '../components/header';

class ChooseDateTime extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		let paths = this.props.paths;
		return (
			<div className="new">
				<Header title="Выбрать дату">
					<Link 
						to={`${paths.getPath(this.props.match.path, paths.app)}`}
						className="back-link"
					>&larr;</Link>
				</Header>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseDateTime);