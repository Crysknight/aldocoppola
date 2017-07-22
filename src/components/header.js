import React, { Component } from 'react';

export default class Header extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="ac-header">
				<h3>{this.props.title}</h3>
				{this.props.children}
			</div>
		);
	}

}