import React, { Component } from 'react';

import SVGArrowRight from './svg-arrow-right';

export default class Employee extends Component {

	// constructor(props) {
		// super(props);

	// }

	stopBubbling(e) {
		e.stopPropagation();
	}

	render() {
		return (
			<div className="ac-employee" onClick={this.props.chooseEmployee}>
				<div className="image-filler" />
				<div className="employee-more-about" onClick={(e) => this.stopBubbling(e)}>
					{this.props.children}
				</div>
				<div className="employee-info">
					<span className="employee-specialization">{this.props.employee.specialization}</span>
					<span className="employee-name">{this.props.employee.name}</span>
				</div>
				<div>
					<SVGArrowRight />
				</div>
			</div>
		);
	}

}

				// <img 
				// 	src={this.props.employee.photo} 
				// 	alt={`${this.props.employee.name} - ${this.props.employee.specialization}`} 
				// />