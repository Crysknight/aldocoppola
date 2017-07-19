import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class New extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="new">Hello, it's new</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(New);