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
		let linkHome = this.props.match.path.replace(new RegExp(this.props.paths.app + '(.*)'), this.props.paths.app);
		return (
			<div className="new-too">
				<p>Hello, it's NewToo</p>
				<Link to={`${linkHome}`}>Go to new</Link>
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