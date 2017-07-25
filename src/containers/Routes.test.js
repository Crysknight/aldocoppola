import React from 'react';
import Routes from './Routes';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';
import { paths } from '../reducers/paths';
import ChooseServices from './ChooseServices';

paths._testPath = {
	pathString: paths.__app.pathString + '_test/',
	component: ChooseServices
};

const locationRoot = {
	pathname: paths.__app.pathString
};

const locationNested = {
	pathname: '/test/bauble.html' + paths.__app.pathString
};

const locationChild = {
	pathname: paths._testPath.pathString
};

const locationUnrelated = {
	pathname: '/test/bauble.html'
};

const locationChooseCenter = {
	pathname: '/test/bauble.html' + paths.ChooseCenter.pathString
};

describe('Routes', () => {

	it('matches the snapshot on the rootpath', () => {
		const store = createStore(allReducers);
		store.dispatch({ type: 'CHOOSE_CENTER', payload: { name: 'Generic Name', id: 8 } });
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ paths.__app.pathString ]}>
					<Routes location={locationRoot} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('matches the snapshot on the nested path', () => {
		const store = createStore(allReducers);
		store.dispatch({ type: 'CHOOSE_CENTER', payload: { name: 'Generic Name', id: 8 } });
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' + paths.__app.pathString ]}>
					<Routes location={locationNested} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('child path of the app matches the snapshot on the rootpath', () => {
		const store = createStore(allReducers);
		store.dispatch({ type: 'CHOOSE_CENTER', payload: { name: 'Generic Name', id: 8 } });
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ paths._testPath.pathString ]}>
					<Routes location={locationChild} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('doesn\'t render the app everywhere', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' ]}>
					<Routes location={locationUnrelated} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('redirects to ChooseCenter if no center is chosen', () => {
		const store = createStore(allReducers, applyMiddleware(thunk));
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' + paths.__app.pathString ]}>
					<Routes location={locationNested} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders ChooseCenter properly when no center is chosen', () => {
		const store = createStore(allReducers, applyMiddleware(thunk));
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' + paths.ChooseCenter.pathString ]}>
					<Routes location={locationChooseCenter} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

});