import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class New extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		console.log(this.props.paths.getNest(this.props.match.path));
		return (
			<div className="new">
				<p>Hello, it's new</p>
				<Link to={`${this.props.paths.getPath(this.props.match.path, this.props.paths.newToo)}`}>Go to new-too</Link>
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