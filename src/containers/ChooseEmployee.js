import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import Employee from '../components/employee';

import SVGInfo from '../components/svg-info';
import SVGPerson from '../components/svg-person';
import SVGArrowLeft from '../components/svg-arrow-left';

import { pathsMethods } from '../reducers/paths';

class ChooseEmployee extends Component {

	componentWillMount() {
		let serviceChosenId = null;
		let employeeChosen = this.props.appointment.employeeChosen ? this.props.appointment.employeeChosen.id : null;
		if (employeeChosen !== null) {
			serviceChosenId = this.props.appointment.servicesChosen ? this.props.appointment.servicesChosen[0].id : null;
		}
		this.props.loadEmployees(this.props.appointment.centerChosen.id, serviceChosenId, employeeChosen);
	}

	chooseEmployee(id, name) {
		let paths = this.props.paths;
		this.props.chooseEmployee(id, name, this.props.appointment.centerChosen.id);
		if (this.props.appointments.length === 0) {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.__app));
		} else {
			this.props.history.push(pathsMethods.getPath(paths, this.props.location.pathname, paths.AddAppointment));
		}
	}

	renderEmployees() {
		let paths = this.props.paths;
		return this.props.employees.map((employee, index) => {
			return (
				<Employee
					key={index}
					employee={employee}
					chooseEmployee={() => this.chooseEmployee(employee.id, employee.name)}
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
		return (
			<div id="choose_employee">
				<Header title="Выбрать сотрудника">
					<div 
						onClick={() => this.props.history.goBack()}
						className="back-link"
					><SVGArrowLeft /></div>
				</Header>
				<Content>{this.renderEmployees()}</Content>
				<Footer className="coal">
					<div
						className="footer-link"
						onClick={() => this.chooseEmployee(-1, 'Любой сотрудник')}
					><SVGPerson />Пропустить выбор сотрудника</div>
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
		loadEmployees: actions.loadEmployees,
		chooseEmployee: actions.chooseEmployee
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseEmployee);