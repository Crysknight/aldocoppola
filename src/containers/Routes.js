import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

// Import the containers related to paths
import OnlineAppointment from './OnlineAppointment';
import ChooseCenter from './ChooseCenter';
import ChooseEmployee from './ChooseEmployee';
import ChooseServices from './ChooseServices';
import ChooseDateTime from './ChooseDateTime';

import { pathsMethods } from '../reducers/paths';

class Routes extends Component {

  // Here we assign, which container will render at which path
  // We do it here to make it possible to map the paths' reducer to an array of Route components
  componentWillMount() {
    let paths = this.props.paths;
    paths.__app.component = OnlineAppointment;
    paths.ChooseCenter.component = ChooseCenter;
    paths.ChooseEmployee.component = ChooseEmployee;
    paths.ChooseServices.component = ChooseServices;
    paths.ChooseDateTime.component = ChooseDateTime;
  }

  createArrayFromPathsObject(paths, pathArray) {
    for (let path in paths) {
      pathArray.push(paths[path]);
      if (paths[path].childPaths) {
        this.createArrayFromPathsObject(paths[path].childPaths, pathArray);
      }
    }
  }

  render() {
    // Here we create an array of paths in order to map through it
    let paths = this.props.paths;
    let pathArray = [];
    this.createArrayFromPathsObject(paths, pathArray);
    let location = this.props.location.pathname;
    // Here we render ann app
    // Why is here such a gigantic bunch of code?
    // Because we also stick a redirection in it, which works, when user
    // has no chosen center in the appointment reducer. The app redirects
    // him to ChooseCenter path. For that purpose in the paths reducer every
    // path should have a property 'private', if set to true, it will redirect
    // the user to ChooseCenter
    return (
      <div id="ac_layout">
        <Link 
          className="app-switch"
          to={pathsMethods.getAppSwitch(paths, this.props.location.pathname)} 
        >+</Link>
        <Switch>
          {pathArray.map((path, index) => {
            // Here we filter the paths, which are private.
            // Though, we render all of them if the user has chosen a center in ChooseCenter
            if (!path.private || (this.props.appointment && this.props.appointment.centerChosen)) {
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