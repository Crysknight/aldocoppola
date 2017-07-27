import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

// import actions from '../actions';

// Import the containers related to paths
import OnlineAppointment from './OnlineAppointment';
import ChooseCenter from './ChooseCenter';
import ChooseEmployee from './ChooseEmployee';
import ChooseServices from './ChooseServices';
import ChooseDateTime from './ChooseDateTime';
import EmployeeInfo from './EmployeeInfo';

import { pathsMethods } from '../reducers/paths';

class Routes extends Component {

  // componentWillReceiveProps(nextProps) {
  //   let chooseEmployeeChildren = nextProps.paths.ChooseEmployee.childPaths;
  //   if (chooseEmployeeChildren) {
  //     this.assignComponents();
  //     for (let path in chooseEmployeeChildren) {
  //       chooseEmployeeChildren[path].component = ChooseDateTime;
  //     }
  //   }
  // }

  createArrayFromPathsObject(paths, pathArray) {
    for (let path in paths) {
      pathArray.push(paths[path]);
      if (paths[path].childPaths) {
        this.createArrayFromPathsObject(paths[path].childPaths, pathArray);
      }
    }
  }

  render() {
    // Here we assign components to the paths and create an array of paths in order to map through it
    let paths = this.props.paths;
    paths.__app.component = OnlineAppointment;
    paths.ChooseCenter.component = ChooseCenter;
    paths.ChooseEmployee.component = ChooseEmployee;
    paths.ChooseServices.component = ChooseServices;
    paths.ChooseDateTime.component = ChooseDateTime;
    if (paths.ChooseEmployee.childPaths) {
      for (let path in paths.ChooseEmployee.childPaths) {
        paths.ChooseEmployee.childPaths[path].component = EmployeeInfo;
      }
    }
    let pathArray = [];
    this.createArrayFromPathsObject(paths, pathArray);
    let location = this.props.location.pathname;
    // Here we render ann app
    // Why is here such a gigantic bunch of code?
    // Because we also stick a redirection in it, which works, when user
    // has no chosen center in the appointment reducer. The app redirects
    // him to ChooseCenter path. For that purpose in the paths reducer every
    // path should have a property 'privacy', if set to true, it will redirect
    // the user to ChooseCenter
    return (
      <div id="ac_layout">
        <Link 
          className="app-switch"
          to={pathsMethods.getAppSwitch(paths, this.props.location.pathname)} 
        >+</Link>
        <Switch>
          {pathArray.map((path, index) => {
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
    appointment: state.appointment
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Routes);