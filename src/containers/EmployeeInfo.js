import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import actions from '../actions';

import Header from '../components/header';

import SVGArrowLeft from '../components/svg-arrow-left';

import { pathsMethods } from '../reducers/paths';
import { employeesMethods } from '../reducers/employees';

class EmployeeInfo extends Component {

	// constructor(props) {
		// super(props);

	// }

	getEmployee() {
		let paths = this.props.paths;
		let employees = this.props.employees;
		let regExp = new RegExp(paths.ChooseEmployee.pathString + 'employee([\\w|\\d]*)\\/');
		let id = this.props.match.path.replace(regExp, '$1');
		return employeesMethods.findEmployeeById(employees, id);
	}

	render() {
		let paths = this.props.paths;
		let employee = this.getEmployee();
		console.log(employee);
		return (
			<div id="employee_info">
				<Header title="Выбрать сотрудника">
					<Link 
						to={pathsMethods.getPath(paths, this.props.match.path, paths.ChooseEmployee)}
						className="back-link"
					><SVGArrowLeft /></Link>
				</Header>
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
		
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmployeeInfo);