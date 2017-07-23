import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

// Import the containers related to paths
import OnlineAppointment from './OnlineAppointment';
import ChooseCenter from './ChooseCenter';
import ChooseEmployee from './ChooseEmployee';
import ChooseServices from './ChooseServices';
import ChooseDateTime from './ChooseDateTime';

class Routes extends Component {

  // Here we assign, which container will render at which path
  // We do it here to make it possible to map the paths' reducer to an array of Route components
  componentWillMount() {
    let paths = this.props.paths;
    paths.app.component = OnlineAppointment;
    paths.ChooseCenter.component = ChooseCenter;
    paths.ChooseEmployee.component = ChooseEmployee;
    paths.ChooseServices.component = ChooseServices;
    paths.ChooseDateTime.component = ChooseDateTime;
  }

  render() {
    // Here we create an array of paths in order to map through it
    let paths = this.props.paths;
    let pathArray = [];
    for (let path in paths) {
      pathArray.push(paths[path]);
    }
    return (
      <div id="ac_layout">
        <Link 
          className="app-switch" 
          to={`${paths.getAppSwitch(this.props.location.pathname)}`} 
        >+</Link>
        <Switch>
          {pathArray.map((path, index) => {
            return (
              <Route 
                key={index}
                exact
                path={`${paths.getPath(this.props.location.pathname, path)}`} 
                component={path.component} 
              />
            );
          })}
        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    paths: state.paths
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Routes);