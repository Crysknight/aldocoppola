import React from 'react';
import Routes from './Routes';
import paths from '../reducers/paths';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../reducers';

describe('containers: routes', () => {
	it('matches the snapshot', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
		);
		let tree = component.toJSON();
		console.log(tree);
		expect(tree).toMatchSnapshot();
	});
});