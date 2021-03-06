import React from 'react';
import OnlineAppointment from './OnlineAppointment';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';
import { paths } from '../reducers/paths';



describe('OnlineAppointment', () => {


	it('renders component properly', () => {
		const store = createStore(allReducers, applyMiddleware(thunk));
		store.dispatch({ type: 'CHOOSE_CENTER', payload: { name: 'TEST_NAME', id: 8 } });
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' + paths.__app.pathString ]}>
					<Route path={'/test/bauble.html' + paths.__app.pathString} component={OnlineAppointment} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
		
	});


});