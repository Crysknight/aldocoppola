import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Center from '../components/center';
import Footer from '../components/footer';

import { pathsMethods } from '../reducers/paths';

class ChooseCenter extends Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentWillMount() {
		this.props.loadCenters();
	}

	chooseCenter(id, name) {
		let paths = this.props.paths;
		this.props.chooseCenter(id, name);
		this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
	}

	renderCenters() {
		return this.props.centers.map((center, index) => {
			return (
				<Center
					key={index}
					center={center}
					chooseCenter={() => this.chooseCenter(center.id, center.name)}
				/>
			);
		});
	}

	render() {
		let paths = this.props.paths;
		return (
			<div id="choose_center">
				<Header title="Выбрать центр красоты" />
				{this.renderCenters()}
				<Footer className="coal">
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.MyAccount)}
						className="footer-link my-account-link"
					>Личный кабинет</Link>
				</Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		centers: state.centers
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadCenters: actions.loadCenters,
		chooseCenter: actions.chooseCenter
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseCenter);