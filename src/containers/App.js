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
    let decapitateThePath = this.props.location.pathname.match(/\/_appliance/);
    if (decapitateThePath === null) {
      return '';
    } else {
      return this.props.location.pathname.slice(0, decapitateThePath.index);
    }
  }

  render() {
    console.log(this.getNest());
    return (
      <Switch>
        <Route exact path={`${this.getNest()}/_appliance/`} component={New} />
        <Route path={`${this.getNest()}/_appliance/new-too`} component={NewToo} />
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