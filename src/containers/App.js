import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router';

import * as actions from '../actions';

import New from './New';
import NewToo from './NewToo';

class App extends Component {

  // constructor(props) {
    // super(props);

  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={New} />
        <Route path="/new-too" component={NewToo} />
      </Switch>
    );
  }

}

function mapStateToProps(state) {
  return {
    
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);