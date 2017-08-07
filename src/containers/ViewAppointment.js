import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import actions from '../actions';

//here be components

class ViewAppointment extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div id="view_appointment"></div>
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

export default connect(mapStateToProps, matchDispatchToProps)(ViewAppointment);