import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

//here be components

class NewToo extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="new-too">
				<p>Hello, it's NewToo</p>
				<Link to={`${this.props.paths.getPath(this.props.match.path, this.props.paths.app)}`}>Go to new</Link>
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

export default connect(mapStateToProps, matchDispatchToProps)(NewToo);