import React, { Component } from 'react';

export default class Content extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="ac-content">
				{this.props.children}
			</div>
		);
	}

}