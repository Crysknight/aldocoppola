import React, { Component } from 'react';

import SVGPerson from './svg-person';

export default class ImageFiller extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<div className="image-filler">
				<SVGPerson />
				<span>Фото</span>
			</div>
		);
	}

}