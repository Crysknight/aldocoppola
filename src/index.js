import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cookie from 'react-cookie';

import App from './containers/App';

import allReducers from './reducers';


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
const basename = window.location;
console.log(basename);

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter basename="/appliance">
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
