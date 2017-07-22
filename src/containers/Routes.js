import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

// Import the containers related to paths
import New from './New';
import NewToo from './NewToo';

class Routes extends Component {

  // Here we assign, which container will render at which path
  // We do it here to make it possible to map the paths' reducer to an array of Route components
  componentWillMount() {
    let paths = this.props.paths;
    paths.app.component = New;
    paths.newToo.component = NewToo;
  }

  render() {
    // Here we create an array of paths in order to map through it
    let paths = this.props.paths;
    let pathArray = [];
    for (let path in paths) {
      pathArray.push(paths[path]);
    }
    console.log(paths.getAppSwitch(this.props.location.pathname));
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