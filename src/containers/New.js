import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router';

import * as actions from '../actions';

import Header from '../components/header';

class New extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		let paths = this.props.paths;
		return (
			<div className="new">
				<Header title="Выбрать центр красоты" />
				<p>Hello, it's new</p>
				<Link to={`${paths.getPath(this.props.match.path, paths.newToo)}`}>Go to new-too</Link>
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

export default connect(mapStateToProps, matchDispatchToProps)(New);