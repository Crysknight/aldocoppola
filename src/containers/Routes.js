import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
// import { Link } from 'react-router';

import * as actions from '../actions';

import New from './New';
import NewToo from './NewToo';

class Routes extends Component {

  // constructor(props) {
    // super(props);

  // }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.paths.getNest(this.props.location.pathname)}`} component={New} />
          <Route path={`${this.props.paths.getPath(this.props.location.pathname, this.props.paths.newToo.pathString)}`} component={NewToo} />
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