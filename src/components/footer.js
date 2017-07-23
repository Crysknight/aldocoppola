import React, { Component } from 'react';

export default class Footer extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className={`ac-footer${this.props.className ? ' ' + this.props.className : ''}`}>
				{this.props.children}
			</div>
		);
	}

}