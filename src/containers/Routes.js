import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
// import { Link } from 'react-router-dom';

// import actions from '../actions';

// Import the containers related to paths
import OnlineAppointment from './OnlineAppointment';
import ChooseCenter from './ChooseCenter';
import ChooseEmployee from './ChooseEmployee';
import ChooseMainServices from './ChooseMainServices';
import ChooseServices from './ChooseServices';
import ChooseDateTime from './ChooseDateTime';
import EmployeeInfo from './EmployeeInfo';
import ConfirmServices from './ConfirmServices';
import CertainDate from './CertainDate';
import AppointmentsList from './AppointmentsList';
import ConfirmAppointments from './ConfirmAppointments';
import ViewAppointment from './ViewAppointment';
import ThankYou from './ThankYou';

import { pathsMethods } from '../reducers/paths';

class Routes extends Component {

  // A function to create an array of paths. It recursively loops through the paths object
  // handling every path on the first level and in 'childPaths' and pushing it into the pathsArray
  createArrayFromPathsObject(paths, pathsArray) {
    for (let path in paths) {
      pathsArray.push(paths[path]);
      if (paths[path].childPaths) {
        this.createArrayFromPathsObject(paths[path].childPaths, pathsArray);
      }
    }
  }

  render() {

    // Here we assign components to the paths and create an array of paths in order to map through it
    let paths = JSON.stringify(this.props.paths);
    paths = JSON.parse(paths);
    if (this.props.appointments.length === 0) {
      paths.__app.component = OnlineAppointment;
    } else {
      paths.__app.component = AppointmentsList;
    }
    paths.ChooseCenter.component = ChooseCenter;
    paths.ChooseEmployee.component = ChooseEmployee;
    paths.ChooseServices.component = ChooseMainServices;
    paths.ChooseDateTime.component = ChooseDateTime;
    paths.ChooseServices.childPaths.ConfirmServices.component = ConfirmServices;
    if (paths.ChooseEmployee.childPaths) {
      for (let path in paths.ChooseEmployee.childPaths) {
        paths.ChooseEmployee.childPaths[path].component = EmployeeInfo;
      }
    }
    if (paths.ChooseServices.childPaths) {
      for (let path in paths.ChooseServices.childPaths) {
        paths.ChooseServices.childPaths[path].component = ChooseServices;
      }
    }
    paths.ChooseServices.childPaths.ConfirmServices.component = ConfirmServices;
    paths.ChooseDateTime.childPaths.CertainDate.component = CertainDate;
    paths.AddAppointment.component = OnlineAppointment;
    paths.ConfirmAppointments.component = ConfirmAppointments;
    paths.EditAppointment.component = OnlineAppointment;
    paths.ViewAppointment.component = ViewAppointment;
    paths.ThankYou.component = ThankYou;

    let pathsArray = [];
    this.createArrayFromPathsObject(paths, pathsArray);
    let location = this.props.location.pathname;

    // Expose the function getAppSwitch to the window, to use it everywhere on the page
    // window._getAppSwitch = () => pathsMethods.getAppSwitch(paths, this.props.location.pathname);
    if (document.getElementById('_ac_switch_app')) {
      document.getElementById('_ac_switch_app').onclick = () => {
        this.props.history.push(pathsMethods.getAppSwitch(paths, this.props.location.pathname));
      };
    }

    // Here we render ann app
    // Why is here such a gigantic bunch of code?
    // Because we also stick a redirection in it, which works when user
    // has no chosen center in the appointment reducer. The app redirects
    // him to ChooseCenter path. For that purpose in the paths reducer every
    // path should have a property 'privacy', if set to true, it will redirect
    // the user to ChooseCenter
    return (
      <div id="ac_layout">
        <Switch>
          {pathsArray.map((path, index) => {
            // Here we filter the paths, which are privacy.
            // Though, we render all of them if the user has chosen a center in ChooseCenter
            if (!path.privacy || (this.props.appointment && this.props.appointment.centerChosen)) {
              return (
                <Route 
                  key={index}
                  exact
                  path={pathsMethods.getPath(paths, location, path)} 
                  component={path.component} 
                />
              );  
            } else {
              return (
                <Route
                  key={index}
                  exact
                  path={pathsMethods.getPath(paths, location, path)}
                  render={() => 
                    (
                      <Redirect
                        from={pathsMethods.getPath(paths, location, path)}
                        to={pathsMethods.getPath(paths, location, paths.ChooseCenter)}
                      />
                    )
                  }/>
              );
            }
          })}
        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    paths: state.paths,
    appointment: state.appointment,
    appointments: state.appointments
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Routes);


        // <Link 
        //   className="app-switch"
        //   to={pathsMethods.getAppSwitch(paths, this.props.location.pathname)} 
        // >+</Link>