import React, { Component } from 'react';

export default class Center extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="ac-center">
				<div className="center-header" onClick={() => this.props.chooseCenter()}>
					<span className="center-city">{this.props.center.city}</span>
					<h2 className="center-name">{this.props.center.name}</h2>
				</div>
				<div className="center-address">
					<p>{this.props.center.address}</p>
				</div>
				<div className="center-footer">
					<div className="center-nearest-session">
						<p>{this.props.center.nearestSession}</p>
						<p className="label">Ближайший доступный сеанс для записи</p>
					</div>
					<div className="delimeter" />
					<div className="center-specialists-quantity">
						<p>{this.props.center.specialistsQuantity}</p>
						<p className="label">Количество активных специалистов в центре</p>
					</div>
				</div>
			</div>
		);
	}

}