import React from 'react';
import ChooseCenter from './ChooseCenter';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';
import { paths } from '../reducers/paths';



describe('ChooseCenter', () => {


	it('renders component properly', () => {

		const store = createStore(allReducers, applyMiddleware(thunk));
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' + paths.ChooseCenter.pathString ]}>
					<Route path={'/test/bauble.html' + paths.ChooseCenter.pathString} component={ChooseCenter} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
		
	});


});