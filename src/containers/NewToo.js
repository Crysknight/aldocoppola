import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as actions from '../actions';

//here be components

class NewToo extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		console.log(this.props.match.path);
		return (
			<div className="new-too">Hello, it's NewToo</div>
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

export default connect(mapStateToProps, matchDispatchToProps)(NewToo);