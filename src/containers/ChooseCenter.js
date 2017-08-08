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
import SVGArrowLeft from '../components/svg-arrow-left';

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

	chooseCenter(center) {
		let paths = this.props.paths;
		this.props.chooseCenter(center);
		this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
	}

	renderCenters() {
		if (this.state.appearance === 'list') {
			return this.props.centers.map((center, index) => {
				return (
					<Center
						key={index}
						center={center}
						chooseCenter={() => this.chooseCenter(center)}
					/>
				);
			});
		} else if (this.state.appearance === 'map') {
			return (
				<div className="ac-map" style={{ "width": "100%", "height": "100%" }}>
					<Map
						center={[55.754734, 37.583314]} 
						zoom={9}
						width={"100%"}
						height={"100%"}
						style={{
							"position": "relative",
							"marginTop": `${!this.state.showCenter ? '-32px' : '-132px'}`
						}}
					>
						{this.props.centers.map((center, index) => {
							return (
								<Marker
									key={index}
									lat={center.coordinates.lat}
									lon={center.coordinates.lon}
									onClick={() => this.setState({ showCenter: center })}
								>
									<MarkerLayout>
										<div className="map-marker-layout">
											<div className="map-marker-text">
												{center.name}
											</div>
										</div>
									</MarkerLayout>
								</Marker>
							);
						})}
					</Map>
					{this.state.showCenter && (
						<Center 
							center={this.state.showCenter}
							chooseCenter={() => this.chooseCenter(this.state.showCenter.id, this.state.showCenter.name)}
						/>
					)}
				</div>
			);
		}
	}

	render() {
		let paths = this.props.paths;
		return (
			<div id="choose_center" className={`${this.state.appearance === 'map' ? 'map' : ''}`}>
				<Header title="Выбрать центр красоты">
					{this.state.showCenter && (
						<div 
							className="back-link"
							onClick={() => this.setState({ showCenter: null })}
						>
							<SVGArrowLeft />
						</div>
					)}
				</Header>
				<Content>
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
					{this.renderCenters()}
				</Content>
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