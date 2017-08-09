import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';

import SVGCheckboxChecked from '../components/svg-checkbox-checked';

class ThankYou extends Component {

	render() {
		return (
			<div id="thank_you">
				<Header title="Спасибо за обращение" />
				<Content>
					<SVGCheckboxChecked />
					<h3>Вы успешно записаны</h3>
					<p>На Ваш телефон отправлено подтверждение записи и продублированны данные записи</p>
				</Content>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ThankYou);