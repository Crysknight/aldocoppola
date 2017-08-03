import React, { Component } from 'react';

import SVGCheckbox from './svg-checkbox';
import SVGCheckboxChecked from './svg-checkbox-checked';
import SVGArrowRight from './svg-arrow-right';

import { servicesMethods } from '../reducers/services';

export default class Service extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div 
				className={`ac-service${this.props.single ? ' single' : ''}`}
				onClick={() => {
					if (this.props.single) {
						return this.props.chooseService();
					}
				}}
			>
				{!this.props.single && (
					<div className="service-checkbox" onClick={this.props.chooseService}>
						{
							this.props.service.checked ? (
								<SVGCheckboxChecked />
							) : (
								<SVGCheckbox />
							)
						}
					</div>
				)}
				<div className="service-info">
					<p className="service-title">
						{this.props.service.title}
					</p>
					<p className="service-price-and-time">
						<span className="service-price">{this.props.service.price}</span>
						<span className="service-time">{servicesMethods.getTimeString(this.props.service.time)}</span>
					</p>
				</div>
				{this.props.single && (
					<SVGArrowRight />
				)}
			</div>
		);
	}

}