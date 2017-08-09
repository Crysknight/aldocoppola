import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import ImageFiller from '../components/image-filler';

import SVGArrowLeft from '../components/svg-arrow-left';
import SVGPerson from '../components/svg-person';

import { pathsMethods } from '../reducers/paths';
import { employeesMethods } from '../reducers/employees';

class EmployeeInfo extends Component {

	getEmployee() {
		let paths = this.props.paths;
		let employees = this.props.employees;
		let regExp = new RegExp(
			pathsMethods.getPath(paths, this.props.match.path, paths.ChooseEmployee) + 
			'employee([\\w|\\d]*)\\/'
		);
		let id = +this.props.match.path.replace(regExp, '$1');
		return employeesMethods.findEmployeeById(employees, id);
	}

	chooseEmployee(employee) {
		let paths = this.props.paths;
		this.props.chooseEmployee(employee, this.props.appointment.centerChosen.id);
		if (this.props.appointments.length === 0) {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
		} else {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.AddAppointment));
		}
	}

	render() {
		// let paths = this.props.paths;
		let employee = this.getEmployee();
		return (
			<div id="employee_info">
				<Header title="Информация о сотруднике">
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>
					<div className="employee-photo">
						{
							employee.photo ? (
								<img
									src={employee.photo}
									alt={`${employee.name} - ${employee.specialization}`}
								/>
							) : (
								<ImageFiller />
							)
						}
					</div>
					<p className="employee-specialization">
						{employee.specialization}
					</p>
					<h3 className="employee-name">
						{employee.name}
					</h3>
					<p className="employee-description">
						{employee.description}
					</p>
				</Content>
				<Footer className="coal">
					<div
						className="footer-link"
						onClick={() => this.chooseEmployee(employee)}
					><SVGPerson />Выбрать этого сотрудника</div>
				</Footer>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		paths: state.paths,
		employees: state.employees,
		appointment: state.appointment,
		appointments: state.appointments
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		chooseEmployee: actions.chooseEmployee
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmployeeInfo);