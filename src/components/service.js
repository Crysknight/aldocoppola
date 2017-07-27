import React, { Component } from 'react';

import SVGCheckbox from './svg-checkbox';
import SVGCheckboxChecked from './svg-checkbox-checked';

export default class Service extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="ac-service">
				<div className="service-checkbox" onClick={this.props.chooseService}>
					{
						this.props.service.checked ? (
							<SVGCheckboxChecked />
						) : (
							<SVGCheckbox />
						)
					}
				</div>
				<div className="service-info">
					<p className="service-title">
						{this.props.service.title}
					</p>
					<p className="service-price-and-time">
						<span className="service-price">{this.props.service.price}</span>
						<span className="service-time">{this.props.service.time}</span>
					</p>
				</div>
			</div>
		);
	}

}