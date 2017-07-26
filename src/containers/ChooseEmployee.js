import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
// import Footer from '../components/footer';
import Employee from '../components/employee';

import SVGInfo from '../components/svg-info';

import { pathsMethods } from '../reducers/paths';

class ChooseEmployee extends Component {

	// constructor(props) {
		// super(props);

	// }

	componentWillMount() {
		this.props.loadEmployees();
	}

	chooseEmployee() {

	}

	renderEmployees() {
		let paths = this.props.paths;
		return this.props.employees.map((employee, index) => {
			return (
				<Employee
					key={index}
					employee={employee}
				>
					<Link 
						to={pathsMethods.getPath(
							paths,
							this.props.match.path,
							paths.ChooseEmployee.childPaths['employee' + employee.id]
						)} 
						className="more-about-link" 
					><SVGInfo /></Link>
				</Employee>
			);
		});
	}

	render() {
		let paths = this.props.paths;
		return (
			<div id="choose_employee">
				<Header title="Выбрать сотрудника">
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.__app)}
						className="back-link"
					>&larr;</Link>
				</Header>
				{this.renderEmployees()}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		employees: state.employees
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		loadEmployees: actions.loadEmployees
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseEmployee);