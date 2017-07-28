import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch, Route } from 'react-router';
import thunk from 'redux-thunk';
// import cookie from 'react-cookie';

import Routes from './containers/Routes';

import allReducers from './reducers';


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
        <Route component={Routes} />
			</Switch>
		</BrowserRouter>
	</Provider>
), document.getElementById('_ac_root'));
registerServiceWorker();
