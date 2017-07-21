import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
// import { Link } from 'react-router';

import * as actions from '../actions';

import New from './New';
import NewToo from './NewToo';

class App extends Component {

  // constructor(props) {
    // super(props);

  // }

  getNest() {
    let decapitateThePath = this.props.location.pathname.match(new RegExp(this.props.paths.app));
    if (decapitateThePath === null) {
      return '';
    } else {
      return this.props.location.pathname.slice(0, decapitateThePath.index);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.getNest()}${this.props.paths.app}`} component={New} />
          <Route path={`${this.getNest()}${this.props.paths.newToo}`} component={NewToo} />
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

export default connect(mapStateToProps, matchDispatchToProps)(App);