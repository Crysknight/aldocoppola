import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Center from '../components/center';
import Footer from '../components/footer';

import SVGLock from '../components/svg-lock';
import SVGList from '../components/svg-list';
import SVGMap from '../components/svg-map';

import { pathsMethods } from '../reducers/paths';

class ChooseCenter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			appearance: 'list'
		};
	}

	componentWillMount() {
		this.props.loadCenters();
	}

	chooseCenter(id, name) {
		let paths = this.props.paths;
		this.props.chooseCenter(id, name);
		this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
	}

	renderCenters() {
		if (this.state.appearance === 'list') {
			return this.props.centers.map((center, index) => {
				return (
					<Center
						key={index}
						center={center}
						chooseCenter={() => this.chooseCenter(center.id, center.name)}
					/>
				);
			});
		} else if (this.state.appearance === 'map') {
			return (
				<Map 
					onAPIAvailable={function () { console.log('API loaded'); }} 
					center={[55.754734, 37.583314]} 
					zoom={10}
				/>
			);
		}
	}

	render() {
		let paths = this.props.paths;
		return (
			<div id="choose_center">
				<Header title="Выбрать центр красоты" />
				<div className="ac-subheader">
					<div 
						className={`ac-subheader-option${this.state.appearance === 'list' ? ' active' : ''}`}
						onClick={() => {
							if (this.state.appearance === 'map') {
								this.setState({
									appearance: 'list'
								});
							}
						}}
					>
						<SVGList />Списком
					</div>
					<div className="ac-subheader-delimiter" />
					<div 
						className={`ac-subheader-option${this.state.appearance === 'map' ? ' active' : ''}`}
						onClick={() => {
							if (this.state.appearance === 'list') {
								this.setState({
									appearance: 'map'
								});
							}
						}}
					>
						<SVGMap />На карте
					</div>
				</div>
				<Content>{this.renderCenters()}</Content>
				<Footer className="coal">
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.MyAccount)}
						className="footer-link my-account-link"
					><SVGLock />Личный кабинет</Link>
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